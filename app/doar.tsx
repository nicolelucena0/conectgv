import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link, router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Doar() {
  const handleLogout = async () => {
    await AsyncStorage.removeItem("user-token");
    router.replace("/login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página Doar</Text>

      <Link href="/receber" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ir para Receber</Text>
        </TouchableOpacity>
      </Link>

      <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={handleLogout}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    marginBottom: 15,
  },
  logoutButton: { backgroundColor: "#f44336" },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});