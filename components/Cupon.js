import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native'

export const Cupon = ({item}) => {
    return (
        <View >
            <View>
                <Text>Cupon ID: {item.id}</Text>
            </View>
            <View>
                <Text>Detalle: {item.contenido}</Text>
            </View>
        </View>
    )
}
