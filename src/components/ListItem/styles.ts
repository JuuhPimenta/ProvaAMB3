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
    },
    textItem: {
        fontSize: 20,
        color: colors.white
    }
})