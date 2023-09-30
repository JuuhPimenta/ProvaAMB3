import { KeyboardAvoidingView, Text,  TextInput, View } from "react-native";
import { styles } from "./styles";
import { useState } from 'react'
import { ILivro } from "../Listar";
import { AntDesign, Ionicons } from "@expo/vector-icons";


export function Cadastrar() {
    const [data, setData] = useState<ILivro>()
    function handleChange(item: ILivro) {
        setData({ ...data, ...item })
    }
    return (
        <KeyboardAvoidingView style={styles.container}>
            <Text style={styles.title}>Cadastre o Livro</Text>
            <View style={styles.formRow}>
                <AntDesign name="book" style={styles.icon} />
                <TextInput
                    placeholder="Título"
                    onChangeText={(i) => handleChange({ titulo: i })}
                    style={styles.input}
                />
            </View>
            <View style={styles.formRow}>
                <Ionicons name="person" style={styles.icon} />
                <TextInput
                    placeholder="Autor"
                    onChangeText={(i) => handleChange({ autor: i })}
                    style={styles.input}
                />
            </View>
            <View style={styles.formRow}>
                <AntDesign name="calendar" style={styles.icon} />
                <TextInput
                    placeholder="2023"
                    onChangeText={(i) => handleChange({ ano: Number(i) })}
                    style={styles.input}
                />
            </View>
        </KeyboardAvoidingView>
    )
}