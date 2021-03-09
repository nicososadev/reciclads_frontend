import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Button, Image } from 'react-native'

import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-community/google-signin';
import { googleApiLogin } from '../helpers/socialLogin';
import AsyncStorage from '@react-native-async-storage/async-storage'

GoogleSignin.configure({
    // scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
    webClientId: '765514151665-6fl51opijadh3fv4semlp1ht76doe0vf.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    // hostedDomain: '', // specifies a hosted domain restriction
    // loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
    // forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    // accountName: '', // [Android] specifies an account name on the device that should be used
    // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
});

export const Login = () => {

    const [userData, setUserData] = useState({
        userGoogleInfo: {},
        loaded: false
    })

    const googleLogin = async ( idToken ) => {

        console.log(idToken)

        const loginData = {
            grant_type: 'convert_token',
            client_id: 'E8TNFDeeXBAZV3vZwfqkIe31mKXA0OZWmePIASaL',
            client_secret: 'cYSvY4yI8YHzCWa8r7ipuJX2XGE3T8UT2M2huSG42NXxU3RUcJGl6bCztfeHrL9UsMiiEMqIVfjwBCVQdnPDkpfFcUOa79udvdV9vHmM4IiHVSB7d1KpCN9fpSurUIYD',
            backend: 'google-oauth2',
            token: idToken
        }

        try {
            const response = await googleApiLogin('auth/convert-token', loginData, 'POST')
            const response_json = await response.json()

            console.log(response_json)

        } catch (error) {
            console.log(error)
        }
    }

    const signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            setUserData({
                userGoogleInfo: userInfo,
                loaded: true
            })
            googleLogin(userInfo.idToken)
            console.log(userInfo)
        } catch (error) {
            console.log({error})
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress alreadyk
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
                console.log(error)
            }
        }
    };

    const signOut = async () => {
        try {
          await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
          setUserData({
            userGoogleInfo: null,
            loaded: false
          }); // Remember to remove the user from your app's state as well
        } catch (error) {
          console.error(error);
        }
      };

    return (
        <View>
            <Text>Login</Text>
            <GoogleSigninButton 
                style={{ width: 192, height: 48 }}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={signIn}
                callback={googleLogin}
            />
            <Button title='Login con admin' onPress={googleLogin}/>
            
            {
                userData.loaded

                ? <View>
                    <Text>Nombre Usuario: {userData.userGoogleInfo.user.name} </Text>
                    <Text>Email: {userData.userGoogleInfo.user.email}</Text>
                    <Image
                        style={{width:100, height:100}}
                        source={{uri: userData.userGoogleInfo.user.photo}}
                    />
                </View>
                : <Text>No logeado</Text>
                
            }

            <Button title='Deslogearse' onPress={signOut} />
            
        </View>
    )
}
