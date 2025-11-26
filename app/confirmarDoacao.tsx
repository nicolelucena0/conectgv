import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ConfirmarDoacao() {
  const { alimento, kilos, paraQuem, local } = useLocalSearchParams<{
    alimento: string;
    kilos: string;
    paraQuem: string;
    local: string;
  }>();

  const handleConfirm = () => {
    // Aqui você adicionaria a lógica para salvar a doação no banco de dados.
    // Por enquanto, apenas exibimos um alerta de sucesso.
    // Após salvar, navega para a tela de sucesso.
    router.replace("/doacaoConfirmada");
  };

  const handleEdit = () => {
    router.back(); // Volta para a tela anterior (doar.tsx) para edição
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirme sua Doação</Text>

      <View style={styles.detailsContainer}>
        <Text style={styles.detailText}>
          <Text style={styles.bold}>Alimento:</Text> {alimento}
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.bold}>Quantidade:</Text> {kilos} Kg
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.bold}>Destino:</Text> {paraQuem}
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.bold}>Local de Retirada:</Text> {local}
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleConfirm}>
        <Text style={styles.buttonText}>Confirmar Doação</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.editButton]}
        onPress={handleEdit}
      >
        <Text style={styles.buttonText}>Editar Informações</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2e7d32",
    marginBottom: 30,
    textAlign: "center",
  },
  detailsContainer: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  detailText: { fontSize: 18, color: "#333", marginBottom: 10 },
  bold: { fontWeight: "bold" },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginBottom: 15,
  },
  editButton: { backgroundColor: "#f44336" },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});