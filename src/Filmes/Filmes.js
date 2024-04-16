import React from 'react'
import {View, Text, Image} from 'react-native'

export default function Filmes({data}) {
    return(
        <View style={{flex: 1}}>

            <Image style={{width: 150, height: 150}} source={{uri: `${data.foto}`}}/>
            <Text>{data.nome}</Text>
            
        </View>
    )
}