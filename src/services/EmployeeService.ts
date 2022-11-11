import axios from "axios";

import { 
    EmployeeRequest, 
    APIResponse, 
    FunctionalGroup, 
    EmployeeQuery 
} from "../interfaces";

export class EmployeeService {

    private readonly url = 'http://localhost:8080/ud/api/v1/employee';

    public async consultarEmpleados(): Promise<APIResponse<EmployeeQuery[]>> {
        const response = await axios.get(`${this.url}/all`);
        return response.data;

        // eslint-disable-next-line no-unreachable
        return ({
            state: true,
            code: '200',
            message: 'Empleados obtenidos satisfactoriamente.',
            data: [
                {
                    code: '5a1f61cs8',
                    name: 'Andrés Leonardo',
                    lastName: 'Baquero Hernández',
                    email: 'correo@correo.com',
                    phone: '3112401388'
                }
            ]
        });
    }

    public async registrarEmpleado(empleado: EmployeeRequest): Promise<APIResponse> {
        const response = await axios.post(`${this.url}/create`, empleado);
        return response.data;
        
        // eslint-disable-next-line no-unreachable
        return ({
            state: true,
            code: '200',
            message: 'Usuario registrado satisfactoriamente.',
            data: {}
        });
    }

    public async consultarGruposFuncionales(): Promise<APIResponse<FunctionalGroup[]>> {
        const response = await axios.get(`${this.url}/find-groups`);
        return response.data;

        // eslint-disable-next-line no-unreachable
        return ({
            state: true,
            code: '200',
            message: 'Grupos obtenidos satisfactoriamente.',
            data: [
                {
                    groupId: 0,
                    nameGroup: 'Grupo A'
                },
                {
                    groupId: 1,
                    nameGroup: 'Grupo B'
                },
                {
                    groupId: 2,
                    nameGroup: 'Grupo C'
                }
            ]
        })
    }
}