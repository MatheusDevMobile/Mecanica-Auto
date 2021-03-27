import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Platform,
    ImageBackground,
    Alert
} from 'react-native';

import axios from 'axios'

import { ActivityIndicator, Colors } from 'react-native-paper';
import backgoundImage from './src/img/login-bg.jpg';
import AuthInput from './src/components/AuthInput';

import {api, showError, showSuccess} from './src/common'


const Login = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passConfirm, setPassConfirm] = useState('');
    const [loading, setLoading] = useState(false);
    const [signUp, setSignUp] = useState(false);

    const signInOrSignUp = () => {
        if (signUp) {
            goToSignUp()
        } else {
            goToSignIn()
        }
    }

    //função de cadastro
    const goToSignUp = async () => {
        try {
            await api.post('/signup', {
                name: name,
                email: email,
                password: password,
                typeOfAccessId: 1
            })
            showSuccess('Usuário Cadastrado!')
        } catch (e) {
            showError(e)
        }
    }

    //função de login
    const goToSignIn = async () => {
        try {
            const response = await api.post('/signin', {
                email: email,
                password: password
            })

            axios.defaults.headers.common['Authorization'] = `bearer ${response.data.token}`
            //showSuccess('Usuário Logado!')
            goToDrawer();
        } catch (e) {
            showError(e)
        }
    }

    //Ir Para home page depois de autenticado
    const goToDrawer = () => {
        setTimeout(() => {
            props.navigation.navigate('Drawer')
            setTimeout(() => {
                setLoading(false)
            }, 1000);
        }, 2000);
        setLoading(!loading)
    }

    return (
        <ImageBackground source={backgoundImage} style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Stock</Text>
            </View>
            <View style={styles.formContainer}>
                {signUp &&
                    <Text style={styles.formHeader}>Preencha as informações</Text>
                }
                {signUp &&
                    <View style={styles.containerInput}>
                        <AuthInput icon='user'  style={styles.inputText}
                            placeholder="nome completo"
                            value={name}
                            onChangeText={name => setName(name)}
                        />
                    </View>
                }
                <View style={styles.containerInput}>
                    <AuthInput icon='at' style={styles.inputText}
                        keyboardType='email-address'
                        placeholder="e-mail"
                        value={email}
                        onChangeText={email => setEmail(email)}
                    />
                </View>
                <View style={styles.containerInput}>
                    <AuthInput icon='lock' style={styles.inputText}
                        secureTextEntry={true}
                        placeholder="senha"
                        value={password}
                        onChangeText={password => setPassword(password)}
                    />
                </View>
                {signUp &&
                    <View style={styles.containerInput}>
                        <AuthInput icon='asterisk' style={styles.inputText}
                            placeholder="confirme a senha"
                            value={passConfirm}
                            onChangeText={passConfirm => setPassConfirm(passConfirm)}
                        />
                    </View>
                }
                {!signUp &&
                    <View style={styles.containerLabelPass}>
                        <TouchableOpacity>
                            <Text style={styles.labelPassRecovery}>esqueceu a senha?</Text>
                        </TouchableOpacity>
                    </View>
                }
                <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.button} onPress={signInOrSignUp} disabled={loading ? true : false}>
                        {signUp ?
                            (loading ? <ActivityIndicator animating={true} color={Colors.black} />
                            : <Text style={styles.textButtonSignInOrSignUp}>CADASTRAR</Text>)

                            : 
                            
                            (loading ? <ActivityIndicator animating={true} color={Colors.black} />
                            : <Text style={styles.textButtonSignInOrSignUp}>ACESSAR</Text>)
                        }
                    </TouchableOpacity>
                </View>
            </View>
                    <TouchableOpacity style={styles.buttonSignInUp} onPress={ () => setSignUp(!signUp)}>
                        <Text style={styles.labelSignInUp} >{signUp ? 'Já possui conta ?' : 'Ainda não é cadastrado ?'}</Text>
                    </TouchableOpacity>
        </ImageBackground>
    );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },

    containerTitle:{
        padding: 30
    },

    title: {
        ...Platform.select({
            ios: {
                fontFamily: 'Courier New',
            },
            android: {
                fontFamily: 'monospace',
            },
        }),
        fontWeight: 'bold',
        fontSize: 60,
        color: '#fff'
    },

    containerInput: {
        flexDirection: 'row',

    },

    formContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        borderRadius: 10,
        padding: 20,
        width: '90%'
    },

    formHeader: {
        ...Platform.select({
            ios: {
                fontFamily: 'Courier',
            },
            android: {
                fontFamily: 'monospace',
            },
        }),
        padding: 15,
        textAlign: 'center',
        color: '#00FF00'
    },

    inputText: {
        flex: 1,
        height: 50,
        marginTop: 5,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#fff',
        padding: 15,
        color: '#000'
    },

    containerButton: {
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },

    labelPassRecovery: {
        ...Platform.select({
            ios: {
                fontFamily: 'Courier',
            },
            android: {
                fontFamily: 'monospace',
            },
        }),
        fontSize: 12,
        alignItems: 'flex-end',
        color: '#00FF00'
    },

    labelSignInUp: {
        ...Platform.select({
            ios: {
                fontFamily: 'Courier',
            },
            android: {
                fontFamily: 'monospace',
            },
        }),
        fontSize: 15,
        color: '#00FF00',
        fontWeight: 'bold'
    },
    containerLabelPass: {
        alignSelf: 'flex-end',
        paddingTop: 10,
    },

    imgFooter: {
        width: 135,
        height: 40
    },

    imgFooterContainer: {
        flex: 1,
        backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    button: {
        width: '100%',
        backgroundColor: '#00FF00',
        height: 40,
        borderRadius: 5,
        justifyContent: 'center'
    },
    buttonSignInUp :{
        padding: 15
    },

    textButtonSignInOrSignUp:{
        color: '#000', 
        alignSelf: 'center', 
        fontWeight: 'bold', 
        fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace'
    }

});
