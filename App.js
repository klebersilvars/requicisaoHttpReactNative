import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import api from './src/services/api';
import Filmes from './src/Filmes/Filmes';

export default function App() {
  const [filmes, setFilmes] = useState([])

  useEffect(() => {
  
    async function buscarDados() {
      const response = await api.get('r-api/?api=filmes')
      setFilmes(response.data)
  }
  
  buscarDados()
 
  }, [])

  return (
    <View style={styles.container}>


    <FlatList
    data={filmes}
    keyExtractor={ item=> item.id.toString() }
    renderItem={({item})=> <Filmes data={item}/> }
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});
