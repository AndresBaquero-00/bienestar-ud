
export interface Estudiante {
    cedula: string;
    nombre: string;
    apellido: string;
    telefono: string;
    email: string;
    password: string;
}

export interface Respuesta {
    ok: boolean;
    message?: string;
}