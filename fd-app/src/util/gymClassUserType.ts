import { ClassType } from "./ClassInfoType"
import { userLongType } from "./userInfoType"

export type GymClassUserType = {
  id: number,
  user: userLongType,
  gym_class: ClassType
}
