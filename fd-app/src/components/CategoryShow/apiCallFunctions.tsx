import { api } from "../../libs/api";

export async function excludeCategory(id: number) {

  try {
    const response = await api.delete(`/categories/${id}`);

  } catch (error) {
    // console.log(JSON.stringify(error))
    return false;
  }

  return true;
}