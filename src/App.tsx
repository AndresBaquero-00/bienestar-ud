import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { SigninPage } from "./app/auth";
import { mainTheme } from "./themes";

const App = () => {
    return (
        <ThemeProvider theme={mainTheme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/signin" element={<SigninPage />} />

                    {/* Redireccionamiento para rutas no existentes. */}
                    <Route path="/*" element={<Navigate to="/signin"/>} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App;