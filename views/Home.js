import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

export const Home = ({ navigation }) => {

    const informacionUsuario = {
        puntos: 20,
        botellas_recicladas: 30
    }

    const PerfilNavigation = () => {
        navigation.navigate('Perfil', informacionUsuario)
    }

    const CuponesNavigation = () => {
        navigation.navigate('Cupones')
    }

    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button 
                title='Perfil'
                onPress={PerfilNavigation}
            />
            <Button 
                title='Cupones'
                onPress={CuponesNavigation}
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