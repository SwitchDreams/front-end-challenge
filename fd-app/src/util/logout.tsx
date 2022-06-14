import { Alert } from "react-native"

export function logout(navigation: any) {
  Alert.alert("Saindo...", "Deseja realmente sair?",
    [{ text: 'Sim', onPress: () => navigation.navigate('Login' as never) },
    { text: 'Não', onPress: () => { return } }
    ])
}