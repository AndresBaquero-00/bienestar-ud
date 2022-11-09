import axios from "axios";
import { EmployeeRequest, APIResponse, EmployeeCreationResponse, FunctionalGroup } from "../interfaces";

export class EmployeeService {

    private readonly url = 'http://localhost:8080/employee';

    public async registrarEmpleado(empleado: EmployeeRequest): Promise<APIResponse<EmployeeCreationResponse>> {
        const response = await axios.post(`${this.url}/registro`, empleado);
        return response.data;
    }

    public async consultarGruposFuncionales(): Promise<APIResponse<FunctionalGroup[]>> {
        const response = await axios.get(`${this.url}/find-groups`);
        return response.data;
        /* return ({
            "state": true,
            "message": "Consulta exitosa.",
            "code": "200",
            "data": [
                {
                    "groupId": 2,
                    "nameGroup": "Grupo Funcional Deportes"
                },
                {
                    "groupId": 3,
                    "nameGroup": "Grupo Funcional Ambiental"
                },
                {
                    "groupId": 4,
                    "nameGroup": "Grupo Funcional Economico"
                },
                {
                    "groupId": 1,
                    "nameGroup": "Grupo Funcional Arte y Cultura"
                }
            ]
        }); */
    }
}