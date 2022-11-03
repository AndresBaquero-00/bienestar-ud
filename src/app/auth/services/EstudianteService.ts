import axios from "axios";
import { Estudiante, Respuesta } from "../interfaces";

export class EstudianteService {
    private readonly url = 'http://localhost:8080/estudiante';

    public async registrarEstudiante(estudiante: Estudiante): Promise<Respuesta> {
        const res = await axios.post(`${this.url}/registro`, estudiante);
        return res.data;
    }
}