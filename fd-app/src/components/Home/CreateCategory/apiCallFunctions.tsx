import { api } from "../../../libs/api";
import { CategoryType } from "../../../util/categoryType";

export async function getCategoryInfo(category_id: number) {

  let categoryInfo: CategoryType | undefined;

  try {
    const response = await api.get(`/categories/${category_id}`)

    categoryInfo = response.data;

  } catch (error) {

    console.log("Erro ao obter dados de Categoria!");
  }

  return categoryInfo;
}