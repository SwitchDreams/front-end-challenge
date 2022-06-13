import { Alert } from "react-native";
import { api } from "../../libs/api";
import { CategoryType } from "../../util/categoryType";
import { ClassType } from "../../util/ClassInfoType";

export async function getClassInfo(classId: number) {
  let classInfo : ClassType | undefined; 

  try {
    const response = await api.get(`/gym_classes/${classId}`)

    classInfo = response.data
    
  } catch (error) {
    console.log("Nao foi possivel processar a solicitacao em ClassEdit")
    classInfo = undefined
  }
  return classInfo
}


export async function getCategories() {
  let categoriesList : CategoryType[] | undefined = undefined;

  try {

    const response = await api.get('/categories');

    categoriesList = response.data;

  } catch (error) {

    console.log("Erro ao obter os dados de categorias em ClassEdit");
  }

  return categoriesList;
}


export async function sendClassInfo(classInfo : ClassType, classId? : number) {
  // If classId is passed, an patch is made to the class, else, a new class will be created

  const classDataParsed = {
    category_id: classInfo.category_id,
    name: classInfo.name,
    description: classInfo.description,
    teacher_name: classInfo.teacher_name,
    start_time: classInfo.start_time,
    duration: classInfo.duration
  }

  try {

    if(classId) {
      const response = await api.patch(`/gym_classes/${classId}`, classDataParsed)
    } else {
      const response = await api.post(`/gym_classes`, classInfo)      
    }
    return true
  } catch (error) {
    // console.log(JSON.stringify(error))
    return false
  }
}