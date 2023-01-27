import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ClassesProvider } from "../Contexts";

import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";

export default function Router() {
    return (
        <BrowserRouter>
            <ClassesProvider>
                <Routes>
                    <Route path="/" element={<SignIn />}/>
                    <Route path="/signup" element={<SignUp />}/>
                </Routes>
            </ClassesProvider>
        </BrowserRouter>
	)
}