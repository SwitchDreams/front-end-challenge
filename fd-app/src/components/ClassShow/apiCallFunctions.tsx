import { api } from "../../libs/api";
import { ClassType } from "../../util/ClassInfoType";
import { userLongType } from "../../util/userInfoType";

type gymClassUserType = {
  id: number,
  user: userLongType,
  gym_class: ClassType
}

export async function isUserRegistered(classId: number, userId: number) {
  let gymClassUserArray: gymClassUserType[] = []
  let isRegistered = false

  try {
    const response = await api.get('/gym_class_users')
    gymClassUserArray = response.data
  } catch(error) {
    console.log("Erro ao fazer requisicao gymClassesUsers")
  }

  gymClassUserArray.forEach(element => {
    if(element.user.id === userId && element.gym_class.id === classId) {
      isRegistered = true
    }
  });

  return isRegistered
}
