import React from 'react'
import { Text, StyleSheet, Platform} from 'react-native'

export const Header = () => {
    
    return (
        <Text style={styles.header}>ReciclAds</Text>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingTop: Platform.OS === 'ios' ? 50 : 10,
        backgroundColor: '#2E9AFE',
        paddingBottom: 10,
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        color: '#FFF'
    }
})