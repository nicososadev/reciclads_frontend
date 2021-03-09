import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

export const Perfil = ({ navigation, route }) => {
    
    const { puntos, botellas_recicladas } = route.params

    const volver = () => {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <Text>Perfil</Text>
            <Text>Puntos: {puntos}</Text>
            <Text>Botellas Recicladas: {botellas_recicladas}</Text>
            <Button 
                title='Volver'
                onPress={volver}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})