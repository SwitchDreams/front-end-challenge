import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";

export default function Router() {
    return(
        <BrowserRouter>
            <>
                <Routes>
                    <Route path="/" element={<SignIn />}/>
                    <Route path="/signup" element={<SignUp />}/>
                
                </Routes>
            </>
        </BrowserRouter>
	)
}