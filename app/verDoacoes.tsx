import AsyncStorage from '@react-native-async-storage/async-storage';
import { router, useFocusEffect } from 'expo-router';
import React, { useCallback, useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Dados de exemplo. Em uma aplicação real, viriam de um banco de dados.
type DonationStatus = 'Pendente' | 'Entregue';

interface Donation {
  id: string;
  alimento: string;
  kilos: string;
  paraQuem: string;
  local: string;
  status: DonationStatus;
}

const initialDonations: Donation[] = [
  { id: '1', alimento: 'Arroz', kilos: '5', paraQuem: 'Família Silva', local: 'Rua das Flores, 123', status: 'Pendente' },
  { id: '2', alimento: 'Feijão', kilos: '3', paraQuem: 'Centro Comunitário', local: 'Av. Principal, 456', status: 'Pendente' },
  { id: '3', alimento: 'Macarrão', kilos: '10', paraQuem: 'ONG Mão Amiga', local: 'Travessa da Ajuda, 789', status: 'Pendente' },
  { id: '4', alimento: 'Leite em pó', kilos: '2', paraQuem: 'Família Santos', local: 'Rua da Esperança, 321', status: 'Entregue' },
];

export default function VerDoacoes() {
  const [donations, setDonations] = useState<Donation[]>([]);

  const loadDonations = useCallback(async () => {
    try {
      const storedDonations = await AsyncStorage.getItem('donations');
      // Se não houver doações salvas, carrega os dados iniciais e os salva.
      if (storedDonations === null) {
        await AsyncStorage.setItem('donations', JSON.stringify(initialDonations));
        setDonations(initialDonations);
      } else {
        setDonations(JSON.parse(storedDonations));
      }
    } catch (error) {
      console.error("Erro ao carregar doações:", error);
      // Em caso de erro, carrega os dados iniciais como fallback
      setDonations(initialDonations);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadDonations();
    }, [loadDonations])
  );

  const handleConfirmDonation = (id: string) => {
    const donation = donations.find(d => d.id === id);
    if (donation?.status === 'Entregue') {
      Alert.alert("Atenção", "Esta doação já foi confirmada como entregue.");
      return;
    }

    Alert.alert(
      "Confirmar Entrega",
      "Você confirma que esta doação foi entregue?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Confirmar",
          onPress: () => {
            const updatedDonations = donations.map(d =>
                d.id === id ? { ...d, status: 'Entregue' } : d
            );
            setDonations(updatedDonations);
            AsyncStorage.setItem('donations', JSON.stringify(updatedDonations))
              .then(() => {
                Alert.alert("Obrigado!", "Doação confirmada com sucesso.");
              })
              .catch(error => console.error("Erro ao salvar status da doação:", error));
          },
        },
      ]
    );
  };

  const renderItem = ({ item }: { item: Donation }) => (
    <View style={[styles.donationCard, item.status === 'Entregue' && styles.deliveredCard]}>
      <Text style={styles.donationText}><Text style={styles.bold}>Alimento:</Text> {item.alimento} ({item.kilos} Kg)</Text>
      <Text style={styles.donationText}><Text style={styles.bold}>Destino:</Text> {item.paraQuem}</Text>
      <Text style={styles.donationText}><Text style={styles.bold}>Local:</Text> {item.local}</Text>
      <Text style={styles.donationText}><Text style={styles.bold}>Status:</Text> {item.status}</Text>
      <TouchableOpacity 
        style={[styles.confirmButton, item.status === 'Entregue' && styles.disabledButton]} 
        onPress={() => handleConfirmDonation(item.id)}
        disabled={item.status === 'Entregue'}
      >
        <Text style={styles.buttonText}>Confirmar Entrega</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Doações Registradas</Text>
      <View style={styles.listContainer}>
        <FlatList
          data={donations}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  listContainer: {
    flex: 1, // Garante que a lista ocupe o espaço disponível
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2e7d32",
    marginBottom: 20,
    textAlign: "center",
    marginTop: 30,
  },
  donationCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  deliveredCard: { backgroundColor: "#e8f5e9" },
  donationText: { fontSize: 16, color: "#333", marginBottom: 5 },
  bold: { fontWeight: "bold" },
  confirmButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  disabledButton: { backgroundColor: "#aaa" },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  backButton: {
    backgroundColor: "#f44336",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
    width: "100%",
  },
});
