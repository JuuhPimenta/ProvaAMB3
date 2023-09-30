import { useEffect, useState } from 'react'
import {View, Text, FlatList} from 'react-native'
import { CompListItem } from '../../components'
import { apiLivro } from '../../services/data'
import { styles } from './styles'
import { ButtonInterface } from '../../components/ButtonInterface'
export interface ILivro {

 /* colunas da tabela  */
    id?: number
    titulo?: string
    autor?: string
    ano?: number
}
export function Listar() {
   const [data, setData] = useState<ILivro[]>()
   useEffect(() => {
     async function  fetchData() {
        const response = await apiLivro.index()
        setData(response.data)
      }
      fetchData
   },[])
    return(
        <View style={styles.container}>
            <ButtonInterface tittle='Adicionar'/>
            <Text style={styles.title}>Livros</Text>
            <FlatList
               data={data}
               renderItem={({ item })=>
               <CompListItem key={item.id} 
               titulo={item.titulo} autor={item.autor} ano={item.ano} id={item.id}/>
            }
            keyExtractor={(i)=> String(i.id)}
            />
        </View>
    )
    
}