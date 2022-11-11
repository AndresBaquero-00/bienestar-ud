import { useState, useEffect } from "react";
import { 
    Button, 
    FormControl, 
    FormControlLabel, 
    InputLabel, 
    MenuItem, 
    Select, 
    Switch, 
    TextField 
} from "@mui/material";
import swal from 'sweetalert';

import { useForm } from "../../../hooks";
import { EmployeeService } from "../../../services";
import { TableComponent } from "../../../components";
import { EmployeeQuery, EmployeeRequest, FunctionalGroup } from "../../../interfaces";

import { AuthLayout } from "../layouts/AuthLayout";

const employeeService = new EmployeeService();

export const SigninPage = (): JSX.Element => {
    const [enviado, setEnviado] = useState(false);
    const [actualizaEmpleados, setActualizaEmpleados] = useState(false);
    const [muestraEmpleados, setMuestraEmpleados] = useState(false);
    const [gruposFuncionales, setGruposFuncionales] = useState([] as FunctionalGroup[]);
    const [empleadosRegistrados, setEmpleadosRegistrados] = useState([] as EmployeeQuery[]);
    const { formState, onInputChange, onResetForm } = useForm<EmployeeRequest>({
        groupId: '',
        name: '',
        lastName: '',
        number: '',
        email: ''
    });

    useEffect(() => {
        employeeService.consultarGruposFuncionales()
            .then(res => {
                setGruposFuncionales(res.data);
            }).catch(console.log);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        employeeService.consultarEmpleados()
            .then(res => {
                setEmpleadosRegistrados(res.data);
            }).catch(console.log);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [actualizaEmpleados]);

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setEnviado(true);

        employeeService.registrarEmpleado(formState)
            .then(res => {
                onResetForm();
                setEnviado(false);
                if (!res.state) {
                    swal('Oops', 'Hubo un error. Intente de nuevo.', 'error');
                    return;
                }

                swal('Registro Exitoso', 'El registro se ha completado. Un mensaje llegará pronto a tu correo electrónico', 'success');
                setActualizaEmpleados(!actualizaEmpleados);
            }).catch(() => {
                swal('Oops', 'Hubo un error. Intente de nuevo.', 'error');
                setEnviado(false);
            });
    }

    return (
        <AuthLayout
            contentTitle='Regístrate'
            bannerDesc='Digita los datos correspondientes en el formulario.'
        >
            {
                !muestraEmpleados ?
                <form onSubmit={onSubmit}>
                    <TextField fullWidth label="Nombres" variant="standard"
                        type="text" name="name" value={formState.name} onChange={onInputChange} />
                    <TextField fullWidth label="Apellidos" variant="standard"
                        type="text" name="lastName" value={formState.lastName} onChange={onInputChange} />
                    <TextField fullWidth label="Teléfono" variant="standard"
                        type="number" name="number" value={formState.number} onChange={onInputChange} />
                    <TextField fullWidth label="Correo Electrónico" variant="standard"
                        type="email" name="email" value={formState.email} onChange={onInputChange} />

                    <FormControl fullWidth variant="standard">
                        <InputLabel>Grupo Funcional</InputLabel>
                        <Select label="Grupo Funcional"
                            name="groupId" value={formState.groupId} onChange={onInputChange}
                        >
                            {
                                gruposFuncionales.map((grupo, index) => (
                                    <MenuItem key={index} value={grupo.groupId}>
                                        {grupo.nameGroup}
                                    </MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>

                    <Button fullWidth disableElevation variant="contained"
                        className="button--global" type="submit" disabled={enviado}
                    >
                        Enviar
                    </Button>
                </form>
                :
                <TableComponent title="Empleados Registrados" 
                    header={['Código', 'Nombres', 'Apellidos', 'Correo Electrónico', 'Teléfono']} 
                    rows={empleadosRegistrados}
                />
            }

            <FormControlLabel label="Mostrar Empleados"
                sx={{
                    marginTop: '35px'
                }}

                control={
                    <Switch
                        checked={muestraEmpleados}
                        onChange={(e) => setMuestraEmpleados(e.target.checked)}
                    />
                }
            />
        </AuthLayout>
    )
}
