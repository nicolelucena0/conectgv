import { auth } from "@/firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleLogin() {
    if (!email || !senha) {
      Alert.alert("Atenção", "Preencha todos os campos!");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, senha);
      if (userCredential.user) {
        await AsyncStorage.setItem("user-token", "dummy-token-123");
        router.replace("/doar");
      }
    } catch (error: any) {
      Alert.alert("Erro ao entrar", error.message);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acessar</Text>

      <TextInput
        style={styles.input}
        placeholder="Seu email"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={setEmail}
        value={email}
      />

      <TextInput
        style={styles.input}
        placeholder="Sua senha"
        secureTextEntry
        onChangeText={setSenha}
        value={senha}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
  },
  title: {
    color: "#2e7d32",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  }
});
