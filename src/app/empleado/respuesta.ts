import { Empleado } from './empleado';

export class Respuesta {
    status: string;
    data: Empleado[];

    constructor(status: string, data: Empleado[]) {
        this.status = status;
        this.data = data;
    }
}
