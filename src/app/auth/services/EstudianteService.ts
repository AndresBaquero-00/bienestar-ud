import axios from "axios";
import { EmployeeRequest, APIResponse, EmployeeCreationResponse,FunctionalGroup } from "../interfaces";

export class EstudianteService {

    private readonly url = 'http://localhost:8080/employee';

    public async registrarEstudiante(estudiante: EmployeeRequest): Promise<APIResponse<EmployeeCreationResponse>> {
        const res = await axios.post(`${this.url}/registro`, estudiante);
        console.log(res);
        return res.data;
    }

    public async consultarGruposFuncionales():Promise<APIResponse<FunctionalGroup[]>>{
        const response = await axios.get(`${this.url}/find-groups`);
        return response.data;
    }
}