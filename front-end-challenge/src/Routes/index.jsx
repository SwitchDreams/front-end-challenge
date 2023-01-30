import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../Contexts/AuthContexts";

import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import HomePage from "../Pages/HomePage";
import { ClassesProvider } from "../Contexts/ClassesContexts";
import ClassInfo from "../Pages/ClassInfo";
import EditClass from "../Pages/EditClass";

export default function Router() {
    return (
        <BrowserRouter>
            <AuthProvider>
            <ClassesProvider>
                <Routes>
                    <Route path="/" element={<SignIn />}/>
                    <Route path="/signup" element={<SignUp />}/>
                    <Route path="/homepage" element={<HomePage />}/>
                    <Route path="/classinfo/:id" element={<ClassInfo />}/>
                    <Route path="/editclass/:id/:category_id" element={<EditClass />}/>
                </Routes>
            </ClassesProvider>
            </AuthProvider>
        </BrowserRouter>
	)
}