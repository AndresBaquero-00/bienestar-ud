import axios from "axios";

import { 
    EmployeeRequest, 
    APIResponse, 
    EmployeeCreationResponse, 
    FunctionalGroup, 
    EmployeeQuery 
} from "../interfaces";

export class EmployeeService {

    private readonly url = 'http://localhost:8080/ud/api/v1/employee';

    public async registrarEmpleado(empleado: EmployeeRequest): Promise<APIResponse<EmployeeCreationResponse>> {
        const response = await axios.post(`${this.url}/create`, empleado);
        return response.data;
    }

    public async consultarEmpleados(): Promise<APIResponse<EmployeeQuery[]>> {
        const response = await axios.get(`${this.url}/all`);
        return response.data;
    }

    public async consultarGruposFuncionales(): Promise<APIResponse<FunctionalGroup[]>> {
        const response = await axios.get(`${this.url}/find-groups`);
        return response.data;
    }
}