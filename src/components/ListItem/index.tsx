import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {styles} from './styles'
import { ILivroProps } from '../../screens/Listar';
import { EvilIcons } from '@expo/vector-icons';
export interface ITextItem {
    textItem: string
}

/* atributos da tabela*/
export function ListItem({titulo, autor, ano, onPress}: ILivroProps) {
    function handleConfirm() {
      Alert.alert ('Remover', 'Deseja Remover o Livro Selecionado?',[
        {
          text: "Não",
        },
        {
          text: "Sim",
          onPress: onPress
        },

      ])
    }
    return(
      <View style={styles.listItem}>
        <View>
        <Text style={styles.textItem}>{titulo}</Text>
        <Text style={styles.textItem}>{autor}</Text>
        <Text style={styles.textItem}>{ano}</Text>
        </View>
          <TouchableOpacity style={styles.trash} onPress={() =>handleConfirm()}>
            <EvilIcons name='trash' size={40} color='white' />
          </TouchableOpacity>

      </View>  
    )
}  