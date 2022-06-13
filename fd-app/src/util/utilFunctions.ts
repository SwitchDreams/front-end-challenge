import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { userType } from "./userInfoType";

export function isCustomer(userInfo: userType) {
  return userInfo.role === 'customer'
}

export function feedbackModal(status: boolean, goBack: () => void,
  successText?: string, failText?: string) {

  if (!successText)
    successText = "Solicitação processada com sucesso!";

  if (!failText)
    failText = "Não foi possível processar a solicitação, tente mais tarde!";

  if (status) {
    Alert.alert("Sucesso", successText,
      [
        {
          text: 'Ok',
          onPress: () => goBack(),
        },
      ], { cancelable: true, onDismiss: goBack });
  } else {
    Alert.alert("Erro", failText)
  }

}


export function IsEmail(email: string) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
