import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Doar() {
  const [alimento, setAlimento] = useState("");
  const [kilos, setKilos] = useState("");
  const [paraQuem, setParaQuem] = useState("");
  const [local, setLocal] = useState("");
  
  const handleLogout = async () => {
    await AsyncStorage.removeItem("user-token");
    router.replace("/login");
  };
  
  const handleDoar = () => {
    if (!alimento || !kilos || !paraQuem || !local) {
      Alert.alert(
        "Atenção",
        "Por favor, preencha todos os campos para realizar a doação."
      );
      return;
    }
  
    // Aqui você pode adicionar a lógica para enviar os dados da doação
    Alert.alert(
      "Doação Registrada!",
      "Sua doação foi registrada com sucesso. Obrigado por ajudar!"
    );
  
    // Limpa os campos após a doação
    setAlimento("");
    setKilos("");
    setParaQuem("");
    setLocal("");
  };
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Registrar Doação de Alimentos</Text>
  
      <TextInput
        style={styles.input}
        placeholder="Nome do Alimento"
        value={alimento}
        onChangeText={setAlimento}
      />
  
      <TextInput
        style={styles.input}
        placeholder="Kilos (Kg)"
        keyboardType="numeric"
        value={kilos}
        onChangeText={setKilos}
      />
  
      <TextInput
        style={styles.input}
        placeholder="Para quem se destina?"
        value={paraQuem}
        onChangeText={setParaQuem}
      />
  
      <TextInput
        style={styles.input}
        placeholder="Onde retirar a doação?"
        value={local}
        onChangeText={setLocal}
      />
  
      <TouchableOpacity style={styles.button} onPress={handleDoar}>
        <Text style={styles.buttonText}>Realizar Doação</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={handleLogout}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
  
const styles = StyleSheet.create({
  container: { flexGrow: 1, justifyContent: "center", alignItems: "center", padding: 20, backgroundColor: "#f5f5f5" },
  title: { fontSize: 24, fontWeight: "bold", color: "#2e7d32", marginBottom: 30, textAlign: "center" },
  input: { width: "100%", borderWidth: 1, borderColor: "#ccc", borderRadius: 10, paddingHorizontal: 15, paddingVertical: 12, marginBottom: 15, fontSize: 16, backgroundColor: "#fff" },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
  logoutButton: { backgroundColor: "#f44336" },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});