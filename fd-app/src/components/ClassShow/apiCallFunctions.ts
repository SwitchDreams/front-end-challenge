import { Alert } from "react-native";
import { api } from "../../libs/api";
import { ClassType } from "../../util/ClassInfoType";
import { GymClassUserType } from "../../util/gymClassUserType";
import { userLongType } from "../../util/userInfoType";

let gymClassUserId: number | null;

export async function getGymClassUsers() {
  try {
    const response = await api.get('/gym_class_users')
    response.data
    return response.data

  } catch (error) {
    console.log("Erro ao fazer requisicao gymClassesUsers")
  }

  return []
}

export async function isUserRegistered(classId: number, userId: number) {
  let gymClassUserArray: GymClassUserType[] = await getGymClassUsers()
  let isRegistered = false

  gymClassUserArray.forEach(element => {
    if (element.user.id === userId && element.gym_class.id === classId) {
      isRegistered = true
      gymClassUserId = element.id
    }
  });

  return isRegistered
}

export async function excludeGymClassUser() {

  if (gymClassUserId) {
    try {
      const response = await api.delete(`/gym_class_users/${gymClassUserId}`)
      gymClassUserId = null
    } catch (error) {
      return false;
    }
  } else {
    console.log("Usuário nao ta inscrito na aula")
    return false
  }

  return true
}

export async function excludeGymClass(classId: number) {


  try {
    const response = await api.delete(`/gym_classes/${classId}`)
    return true
  } catch (error) {
    return false
  }

}