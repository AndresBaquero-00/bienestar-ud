import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

import { EmployeeRequest, FunctionalGroup } from "../../../interfaces";

type Props = {
    formState: EmployeeRequest;
    gruposFuncionales: FunctionalGroup[];
    onInputChange: any;
    onSubmit: any;
}

export const FormComponent = ({ formState, gruposFuncionales, onInputChange, onSubmit }: Props) => {
    return (
        <>
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
                    onChange={onInputChange} value={formState.groupId === 0 ? '' : formState.groupId}>
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
        </>
    )
}
