import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Signin } from "./app/auth/pages/Signin";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/signin" element={<Signin />} />
                <Route path="/*" element={<Navigate  to="/signin"/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;