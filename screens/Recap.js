import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

const Recap = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Récapitulation Générale</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("CryptoDetail")}
            >
                <Text>Navigate to CryptoDetail</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    }
})

export default Recap;