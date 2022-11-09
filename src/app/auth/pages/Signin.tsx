import { useMemo, useState, useEffect } from "react";
import { Alert, AlertColor, FormControlLabel, Snackbar, Switch } from "@mui/material";

import { useForm } from "../../../hooks";
import { EmployeeService } from "../../../services";
import { EmployeeQuery, EmployeeRequest, FunctionalGroup } from "../../../interfaces";

import { AuthLayout } from "../layouts/AuthLayout";
import { FormComponent } from "../components/FormComponent";
import { ListComponent } from "../components/ListComponent";

export const Signin = () => {
    const employeeService = useMemo(() => new EmployeeService(), []);
    const [configPagina, setConfigPagina] = useState({
        mostrarEmpleados: false,
        titulo: 'Regístrate',
    });
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
    const [empleados, setEmpleados] = useState([] as EmployeeQuery[]);
    useEffect(() => {
        employeeService.consultarGruposFuncionales()
            .then(res => {
                const { data } = res;
                setGruposFuncionales(data);
            });

        employeeService.consultarEmpleados()
            .then(res => {
                const { data } = res;
                setEmpleados(data);
            })
    }, [employeeService]);

    const { formState, onInputChange, onResetForm } = useForm<EmployeeRequest>({
        groupId: 0,
        name: '',
        lastName: '',
        email: '',
        number: ''
    });
    const onSubmit = () => {
        employeeService.registrarEmpleado(formState)
            .then(res => {
                employeeService.consultarEmpleados()
                    .then(res => {
                        const { data } = res;
                        setEmpleados(data);
                    })
                onResetForm();
                setConfigToast({
                    open: true,
                    message: res.state ? 'Registro completado satisfactoriamente.' : 'Error al realizar la acción. Intente de nuevo.',
                    type: res.state ? 'success' : 'error'
                });
            });
    }

    return (
        <AuthLayout
            title={configPagina.titulo}
            bannerImage="https://pbs.twimg.com/profile_images/1108821606388895744/RKGG9dsZ_400x400.png"
            bannerTitle="¡Sé parte del módulo de bienestar!"
        >
            {
                !configPagina.mostrarEmpleados ?
                    <FormComponent formState={formState} gruposFuncionales={gruposFuncionales}
                        onInputChange={onInputChange} onSubmit={onSubmit} />
                    : <ListComponent title='Empleados Registrados'
                        header={['Código', 'Nombre', 'Apellido', 'Email', 'Teléfono']} rows={empleados} />
            }

            <FormControlLabel
                control={
                    <Switch
                        checked={configPagina.mostrarEmpleados}
                        onChange={(e) => {
                            setConfigPagina({
                                mostrarEmpleados: e.target.checked,
                                titulo: e.target.checked ? '' : 'Regístrate'
                            });
                        }}
                    />
                }
                label="Mostrar Empleados"
            />

            {/* Toast para mostrar respuesta del API. */}
            <Snackbar open={configToast.open} autoHideDuration={2500} onClose={handleClose}>
                <Alert severity={configToast.type as AlertColor} sx={{ width: '100%' }} onClose={handleClose}>
                    {configToast.message}
                </Alert>
            </Snackbar>
        </AuthLayout>
    )
}
