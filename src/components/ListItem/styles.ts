import {StyleSheet} from 'react-native'
import { colors } from '../../styles/colors'

export const styles = StyleSheet.create({
    listItem: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.secondary,
        marginBottom: 5,
        borderRadius: 5,
        backgroundColor: colors.primary,
        flexDirection: 'row',
        justifyContent:'space-between',
    },
    textItem: {
        fontSize: 20,
        color: colors.white
    },
    trash: {
        backgroundColor: colors.red,
        width: 50,
        height: 50,
        borderRadius:25,
        alignItems: 'center',
        justifyContent: 'center'
    }
})