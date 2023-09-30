import {TouchableOpacity, TouchableOpacityProps, Text} from 'react-native'
import {styles} from './styles'

export interface IButton extends TouchableOpacityProps {
    tittle : string
} 
export function ButtonInterface({tittle, onPress, ...rest}:IButton) {
    return(
        <TouchableOpacity onPress={onPress} {...rest} style={styles.button}>
            <Text style={styles.text}>{tittle}</Text>
        </TouchableOpacity>
    )
     
}