import {View, Text} from 'react-native';
import {styles} from './styles'
import { ILivro } from '../../screens/Listar';
export interface ITextItem {
    textItem: string
}

/* atributos da tabela*/
export function ListItem({id, titulo, autor, ano}: ILivro) {
    return(
      <View style={styles.listItem}>
        <Text style={styles.textItem}>{titulo}</Text>
        <Text style={styles.textItem}>{autor}</Text>
        <Text style={styles.textItem}>{ano}</Text>
      </View>  
    )
}  