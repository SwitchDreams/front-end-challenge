import { createContext } from "react";
import { userType } from "./userInfoType";

export const userContext = createContext<userType>({ id: 0, email: '', role: '' })
