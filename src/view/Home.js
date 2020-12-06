import React, {useState} from 'react';
import { Text, View, SafeAreaView, FlatList, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Divider, Searchbar } from 'react-native-paper';

import styleDefault from '../style/Index';

import produtos from '../components/Products';

export default Home = (props) => {

    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = query => setSearchQuery(query);

    const renderList = ({ item: p }) => {
        const color = {
            colors: {
                primary: '#2E70F2',
                accent: '#f1c40f',
            },
        }
        return (
            <View style={styles.container}>
                <View style={styles.cardList}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'column', width: '50%', justifyContent: 'center', paddingLeft: 5 }}>
                            <Text style={styles.title}>{p.nome} {p.marca}</Text>
                        </View>
                        <View style={{ flexDirection: 'column', width: '50%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.price}>R$ {p.preco},00/un</Text>
                        </View>
                    </View>
                    <Divider style={styles.divider} />
                    <View style={styles.listButton}>
                        <View style={styles.detailsContainer}>
                            <Ionicons name="md-caret-down-circle" size={30} color='#2E70F2' onPress={() => alert('Detalhes')} />
                        </View>
                        <View style={styles.detailsContainerButton}>
                            <Ionicons name="add-circle-sharp" size={25} style={{ marginRight: 20 }} color='green' />
                            <Text style={{ marginRight: 20 }}>{p.quantidade}</Text>
                            <Ionicons name="remove-circle-sharp" size={25} color='red' />
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <SafeAreaView style={styleDefault.container}>
            <StatusBar translucent={false} />
            <Searchbar style={{ margin: 10, elevation: 5 }}
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
            <ScrollView>
                <View>
                    <FlatList
                        data={produtos}
                        keyExtractor={k => `${k.id}`}
                        renderItem={renderList} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 10
    },
    cardList: {
        borderColor: '#d4d4d4',
        backgroundColor: '#fff',
        borderStyle: 'solid',
        borderWidth: 1,
        marginBottom: 10,
        marginRight: 15,
        marginLeft: 15,
        padding: 5,
        borderRadius: 10,
        elevation: 5
    },
    buttonViewMenu: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: '#3498db',
        height: 50,
        marginBottom: 10
    },
    listButton: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'flex-end',
        padding: 10

    },
    divider: {
        marginTop: 5
    },
    price: {
        fontSize: 20,
        color: 'gray'
    },
    title: {
        fontStyle: 'italic',
        fontSize: 15,
        fontWeight: 'bold'
    },
    detailsButton: {
        borderRadius: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    detailsContainer: {
        width: '20%',
        justifyContent: 'flex-start'

    },
    detailsContainerButton: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
})
