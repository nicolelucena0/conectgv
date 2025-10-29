import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Index() {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/415/415733.png' }}
                style={styles.logo}
            />

            <Text style={styles.title}>Doação de Alimentos</Text>
            <Text style={styles.subtitle}>
                Conectando quem pode doar com quem precisa. 
            </Text>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Fazer uma Doação</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonSecondary}>
                <Text style={styles.buttonTextSecondary}>Solicitar Ajuda</Text>
            </TouchableOpacity>

            <Text style={styles.footer}>
                © 2025 Projeto Solidário
            </Text>
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
    logo: {
        width: 120,
        height: 120,
        marginBottom: 20,
    },
    title: {
        color: "#2e7d32",
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 8,
    },
    subtitle: {
        color: "#555",
        fontSize: 16,
        textAlign: "center",
        marginBottom: 30,
        width: "80%",
    },
    button: {
        backgroundColor: "#4CAF50",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
        marginBottom: 15,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
    buttonSecondary: {
        backgroundColor: "#e0e0e0",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
        marginBottom: 40,
    },
    buttonTextSecondary: {
        color: "#2e7d32",
        fontSize: 16,
        fontWeight: "600",
    },
    footer: {
        fontSize: 12,
        color: "#888",
    },
});
