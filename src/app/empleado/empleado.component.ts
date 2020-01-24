import { Component } from '@angular/core';
import { Respuesta } from './respuesta';
import { Empleado } from './empleado';
import { EmpleadoService } from './empleado.service';

@Component({
    selector: 'emp-pag',
    templateUrl: './empleado.component.html'
})
export class EmpleadoComponent {
    header: string = 'Empleado Component';
    respuesta: Respuesta;
    error: string;
    constructor(private servicio: EmpleadoService) {}

    buscarEmpleado(): void {
        // let emplados: Empleado[] = [];
        // let empleado: Empleado;
        // empleado = new Empleado(1, "Jose", 10, 20, "");
        // emplados.push(empleado);
        // this.respuesta = new Respuesta("success", emplados);

        this.servicio.getEmpleados().subscribe({
            next: r => this.respuesta = r,
            error: e => this.error = e
        });

    }

    borrar(): void {
        this.respuesta.data = [];
    }
    
}
