import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform
} from 'react-native';
import { TextInput, Button, ActivityIndicator, Colors } from 'react-native-paper';

import Logo from './src/img/logo.png';

const Login = (props) => {
  const [name, setName] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);

  const GoToDrawer = () => {
    setTimeout(() => {
      props.navigation.navigate('Drawer')
      setTimeout(()=>{
        setLoading(false)
      }, 1000);  
    }, 2000);
    setLoading(!loading)
  }

  const inputT = {
    colors: {
      primary: '#3498db'
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.imageContainer}
          source={Logo} />
      </View>
      <View style={styles.containerInput}>
        <TextInput style={styles.inputText}
          theme={inputT}
          mode="outlined"
          label="usuário"
          value={name}
          onChangeText={name => setName(name)}
        />
      </View>
      <View style={styles.containerInput}>
        <TextInput style={styles.inputText}
          secureTextEntry={true}
          autoCorrect={false}
          theme={inputT}
          mode="outlined"
          label="senha"
          value={senha}
          onChangeText={senha => setSenha(senha)}
        />
      </View>
      <View style={styles.containerLabelPass}>
        <TouchableOpacity>
          <Text style={styles.labelPassRecovery}>
            esqueceu a senha?
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button} onPress={GoToDrawer} disabled={loading ? true : false}>
          {loading ? <ActivityIndicator animating={true} color={Colors.white} />
            : <Text style={{ color: '#fff', alignSelf: 'center' }}>ACESSAR</Text>}
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: '#fff'
  },

  containerInput: {
    flexDirection: 'row',

  },

  inputText: {
    flex: 1,
    color: '#fff',
    height: 45,
    marginTop: 5
  },

  text: {
    color: '#fff'
  },

  containerButton: {
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },

  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 40
  },

  imageContainer: {
    ...Platform.select({
      ios: {
        height: 150,
        width: 250
      },
      android: {
        height: 250,
        width: '100%'
      },
    })
  },

  labelPassRecovery: {
    alignItems: 'flex-end',
    //color: '#6200ee'
    color: '#3498db'
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
    backgroundColor: '#2E70F2',
    height: 40,
    borderRadius: 5,
    justifyContent: 'center'
  }

});
