import { useMemo, useState, useEffect } from "react";
import { Alert, AlertColor, Box, Button, FormControl, InputLabel, MenuItem, Select, Snackbar, TextField } from "@mui/material";

import { useForm } from "../../../hooks";
import { EmployeeService } from "../../../services";
import { EmployeeRequest, FunctionalGroup } from "../../../interfaces";

import { AuthLayout } from "../layouts/AuthLayout";

export const Signin = () => {
    const employeeService = useMemo(() => new EmployeeService(), []);
    const [configToast, setConfigToast] = useState({
        open: false,
        message: '',
        type: 'info'
    });
    const handleClose = () => {
        setConfigToast({
            open: false,
            message: '',
            type: 'info'
        })
    }
    const [gruposFuncionales, setGruposFuncionales] = useState([] as FunctionalGroup[]);
    useEffect(() => {
        employeeService.consultarGruposFuncionales()
            .then(res => {
                const { data } = res;
                setGruposFuncionales(data);
            });
    }, [employeeService]);
    const { formState, onInputChange } = useForm<EmployeeRequest>({
        groupId: 0,
        name: '',
        lastName: '',
        email: '',
        number: ''
    });

    const onSubmit = () => {
        employeeService.registrarEmpleado(formState)
            .then(res => {
                setConfigToast({
                    open: true,
                    message: res.state ? 'Registro completado satisfactoriamente.' : 'Error al realizar la acción. Intente de nuevo.',
                    type: res.state ? 'success' : 'error'
                });
            });
    }

    return (
        <AuthLayout
            title="Regístrate"
            bannerImage="https://cdn-icons-png.flaticon.com/512/6821/6821002.png"
            bannerTitle="¡Manage the job more effectively!"
        >
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
                name="email" label="Correo Electrónico" type="email" variant="outlined" fullWidth />

            <FormControl fullWidth>
                <InputLabel>Grupo Funcional</InputLabel>
                <Select label="Grupo Funcional" name="groupId" 
                    onChange={onInputChange} value={formState.groupId === 0 ? '':formState.groupId}>
                    {
                        gruposFuncionales.map(({ groupId, nameGroup }) => (
                            <MenuItem key={groupId} value={groupId}>{nameGroup}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>

            <Button className="button button--global" onClick={onSubmit}
                sx={{ marginTop: '25px' }} fullWidth
            >
                Registrar
            </Button>

            {/* Toast para mostrar respuesta del API. */}
            <Snackbar open={configToast.open} autoHideDuration={2500} onClose={handleClose}>
                <Alert severity={configToast.type as AlertColor} sx={{ width: '100%' }} onClose={handleClose}>
                    {configToast.message}
                </Alert>
            </Snackbar>
        </AuthLayout>
    )
}
