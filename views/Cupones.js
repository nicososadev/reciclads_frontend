import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Button, ActivityIndicator } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { Cupon } from '../components/Cupon'
import { apiFetch } from '../helpers/fetch'

export const Cupones = ({ navigation, route }) => {

    const [cupones, setCupones] = useState({})
    const [loaded, setLoaded] = useState(false)
    const [loading, setLoading] = useState(false)
    

    useEffect(() => {
        const  getCupones = async () => {
            // const url = 'http://192.168.1.71:8000/api/cupones/'
            try {
                if(!loaded){
                    const response = await apiFetch('cupones', {}, 'GET')
                    const response_json = await response.json()
                    setLoading(true)
                    setTimeout(() => {
                        setCupones(response_json)
                        setLoaded(false)
                        setLoading(false)
                    }, 1000)
                    console.log(cupones)
                }
            } catch (error) {
                console.log(error)
            }
        }
        getCupones()
    }, [])

    const volver = () => {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <Text>Cupones</Text>
            {
                loading
                ? <ActivityIndicator size='large' color='#5E49E2' style={{ marginTop: 40 }}/>
                : <FlatList 
                    data={cupones} 
                    renderItem={ ({item}) => <Cupon item={item} />} 
                    keyExtractor={ cupon => cupon.id.toString() } 
                />
            }
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