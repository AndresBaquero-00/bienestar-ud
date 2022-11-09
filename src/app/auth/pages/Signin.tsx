import { useMemo, useState } from "react";
import { Alert, AlertColor, Box, Button, Snackbar, TextField } from "@mui/material";

import { useForm } from "../../../hooks/useForm";
import { EstudianteService } from "../services/EstudianteService";
import { AuthLayout } from "../layouts/AuthLayout";
import { EmployeeRequest } from "../interfaces";

export const Signin = () => {
    const estudianteService = useMemo(() => new EstudianteService(), []);
    const [configToast, setConfigToast] = useState({
        open: false,
        message: '',
        type: 'info'
    });
    const { formState, onInputChange } = useForm<EmployeeRequest>({
        groupId: 0,
        name: '',
        lastName: '',
        email: '',
        number: ''
    });

    const onSubmit = () => {
        estudianteService.registrarEstudiante(formState)
            .then(res => {
                console.log(res);
                setConfigToast({
                    open: true,
                    message: res.state ? 'Registro completado satisfactoriamente.' : 'Error al realizar la acción. Intente de nuevo.',
                    type: res.state ? 'success' : 'error'
                });
            });
    }

    const handleClose = () => {
        setConfigToast({
            open: false,
            message: '',
            type: 'info'
        })
    }

    return (
        <AuthLayout
            title="Regístrate"
            bannerImage="https://cdn-icons-png.flaticon.com/512/6821/6821002.png"
            bannerTitle="¡Manage the job more effectively!"
        >
            <TextField onChange={onInputChange} value={formState.email}
                name="email" label="Correo" type="number" variant="outlined" fullWidth />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '15px'
                }}
            >
                <TextField onChange={onInputChange} value={formState.name}
                    name="name" label="Nombres" type="text" variant="outlined" fullWidth />
                <TextField onChange={onInputChange} value={formState.lastName}
                    name="lastName" label="Apellidos" type="text" variant="outlined" fullWidth />
            </Box>
            <TextField onChange={onInputChange} value={formState.number}
                name="number" label="Teléfono" type="number" variant="outlined" fullWidth />
            <TextField onChange={onInputChange} value={formState.email}
                name="email" label="Email" type="email" variant="outlined" fullWidth />

            <Button
                className="button button--global"
                onClick={onSubmit}
                sx={{
                    marginTop: '25px'
                }}
            >
                Registrar
            </Button>
            <Snackbar open={configToast.open} autoHideDuration={2500} onClose={handleClose}>
                <Alert severity={configToast.type as AlertColor} sx={{ width: '100%' }} onClose={handleClose}>
                    {configToast.message}
                </Alert>
            </Snackbar>
        </AuthLayout>
    )
}
