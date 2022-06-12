import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { userType } from "./userInfoType";

export function isCustomer(userInfo: userType) {
  return userInfo.role === 'customer'
}

export function feedbackModal(status: boolean, goBack: () => void) {

  if(status) {
    Alert.alert("Sucesso", "Solicitação processada com sucesso!", 
    [
      {
        text: 'Ok',
        onPress: () => goBack(),
      },
    ],{ cancelable: true, onDismiss: goBack })
  } else {
    Alert.alert("Erro", "Não foi possível processar a solicitação, tente mais tarde!")
  }

}
