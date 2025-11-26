import { Link } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function DoacaoConfirmada() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
        }} // Ícone de sucesso
        style={styles.icon}
      />

      <Text style={styles.title}>Doação Registrada!</Text>
      <Text style={styles.subtitle}>
        Sua generosidade fará a diferença na vida de alguém. Muito obrigado!
      </Text>

      <Link href="/doar" replace asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Fazer Nova Doação</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/verDoacoes" asChild>
        <TouchableOpacity style={styles.buttonSecondary}>
          <Text style={styles.buttonTextSecondary}>Ver Minhas Doações</Text>
        </TouchableOpacity>
      </Link>

      <Text style={styles.footer}>© 2025 Projeto Solidário</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  icon: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    color: "#2e7d32",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    color: "#555",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
    width: "85%",
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 15,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  buttonSecondary: {
    backgroundColor: "transparent",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 40,
    borderWidth: 1,
    borderColor: "#2e7d32",
    width: "100%",
    alignItems: "center",
  },
  buttonTextSecondary: {
    color: "#2e7d32",
    fontSize: 16,
    fontWeight: "600",
  },
  footer: {
    fontSize: 12,
    color: "#888",
    position: "absolute",
    bottom: 20,
  },
});