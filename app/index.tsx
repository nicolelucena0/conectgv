import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Hello World!
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 24,
        justifyContent: "center",
        backgroundColor: "white",    
    },
    title: {
        color: "green",
        fontSize: 24,
        fontWeight: "bold"
    },
})
