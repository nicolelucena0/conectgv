import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Receber() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página Receber</Text>
      <Link href="/doar" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ir para Doar</Text>
        </TouchableOpacity>
      </Link>
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
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});