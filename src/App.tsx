import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { SigninPage } from "./app/auth";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/signin" element={<SigninPage />} />

                {/* Redireccionamiento para rutas no existentes. */}
                <Route path="/*" element={<Navigate to="/signin"/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;