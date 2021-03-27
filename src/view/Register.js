import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Divider, TextInput, Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

import styleDefault from '../style/Index'

export default Register => {

    const [name, setName] = useState('');

    //TODO outros estados de mudanca de texto
    const [password, setPass] = useState('');

    const [expandedProduct, setExpandedProduct] = useState(false);
    const [expandedClient, setExpandedClient] = useState(false);
    const [iconAddProduct, setIconProduct] = useState('add');
    const [iconAddClient, setIconClient] = useState('add');
    const [iconAddProductColor, setIconAddProducColor] = useState('green');
    const [iconAddClientColor, setIconAddClientColor] = useState('green');

    const handlePressProduct = () => {
        setExpandedProduct(!expandedProduct);
        setIconProduct(!expandedProduct ? 'remove' : 'add');
        setIconAddProducColor(!expandedProduct ? 'red' : 'green')
    }
    const handlePressClient = () => {
        setExpandedClient(!expandedClient);
        setIconClient(!expandedClient ? 'remove' : 'add');
        setIconAddClientColor(!expandedClient ? 'red' : 'green');
    }
    const inputT = {
        colors: {
            primary: '#3498db'
        }
    }
    return (
        <SafeAreaView style={styleDefault.container}>
            <View style={styleDefault.registerTextContainer}>
                <View style={styleDefault.registerText}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, fontStyle: 'italic' }}>
                        Produto
                    </Text>
                    <TouchableOpacity onPress={handlePressProduct}>
                        <Ionicons style={style.iconAdd}
                            color={iconAddProductColor}
                            size={25}
                            name={iconAddProduct} />
                    </TouchableOpacity>
                </View>
                <Divider/>
                {expandedProduct ? (
                    <View style={{ height: 400, paddingLeft: 10, paddingRight: 10 }}>
                        <TextInput style={style.inputText}
                            theme={inputT}
                            mode="flat"
                            label="Nome"
                            value={name}
                            onChangeText={name => setName(name)}
                        />
                        <TextInput style={style.inputText}
                            theme={inputT}
                            mode="flat"
                            label="Marca"
                            value={name}
                            onChangeText={name => setName(name)}
                        />
                        <TextInput style={style.inputText}
                            theme={inputT}
                            mode="flat"
                            keyboardType="numbers-and-punctuation"
                            label="Preço"
                            value={name}
                            onChangeText={name => setName(name)}
                        />
                        <TextInput style={style.inputText}
                            theme={inputT}
                            mode="flat"
                            keyboardType="numbers-and-punctuation"
                            label="Quantidade"
                            value={name}
                            onChangeText={name => setName(name)}
                        />
                        <TextInput style={style.inputText}
                            theme={inputT}
                            mode="flat"
                            label="Descrição"
                            value={name}
                            onChangeText={name => setName(name)}
                        />
                        <View style={style.containerButton}>
                            <Button style={style.button}
                                color='#2E70F2'
                                icon="content-save-all-outline" mode="contained" onPress={() => alert('Produto salvo com sucesso!')}>
                                salvar
                            </Button>
                        </View>
                    </View>


                ) : null}
                <View style={styleDefault.registerText}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, fontStyle: 'italic' }}>
                        Fornecedor
                    </Text>
                    <TouchableOpacity onPress={handlePressClient}>
                        <Ionicons style={style.iconAdd}
                            color={iconAddClientColor}
                            size={25}
                            name={iconAddClient} />
                    </TouchableOpacity>
                </View>
                <Divider />
                {expandedClient ? (
                    <View style={{ height: 300, paddingLeft: 10, paddingRight: 10 }}>
                        <TextInput style={style.inputText}
                            theme={inputT}
                            mode="flat"
                            label="Nome"
                            value={name}
                            onChangeText={name => setName(name)}
                        />
                        <TextInput style={style.inputText}
                            theme={inputT}
                            mode="flat"
                            label="E-mail"
                            value={name}
                            onChangeText={name => setName(name)}
                        />
                        <TextInput style={style.inputText}
                            theme={inputT}
                            mode="flat"
                            label="Categoria"
                            value={name}
                            onChangeText={name => setName(name)}
                        />
                        <TextInput style={style.inputText}
                            theme={inputT}
                            mode="flat"
                            label="Observação"
                            value={name}
                            onChangeText={name => setName(name)}
                        />
                        <View style={style.containerButton}>
                            <Button style={style.button}
                                color='#2E70F2'
                                icon="content-save-all-outline" mode="contained" onPress={() => alert('Produto salvo com sucesso!')}>
                                salvar
                            </Button>
                        </View>
                    </View>

                ) : null}
            </View>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    iconAdd: {
        justifyContent: 'center'
    },
    inputText: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 5
    },
    containerButton: {
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 20,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button:{
        width: '100%'
      }
})