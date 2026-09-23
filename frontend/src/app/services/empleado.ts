import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../models/empleado';

@Injectable({
    providedIn: 'root'
})
export class EmpleadoService {
    selectedEmpleado: Empleado = new Empleado();
    empleados: Empleado[] = [];
    readonly URL_API = 'https://backend53.vercel.app/api/empleados';


    constructor(private http: HttpClient) { }

    /**
     * Obtiene la lista completa de empleados desde la API.
     * @returns Observable con el array de empleados
     */
    getEmpleados() {
        return this.http.get(this.URL_API);
    }

    /**
     * Registra un nuevo empleado en la API.
     * @param empleado - Objeto empleado a registrar
     * @returns Observable con el empleado creado
     */
    postEmpleado(empleado: Empleado) {
        return this.http.post(this.URL_API, empleado);
    }

    /**
     * Actualiza un empleado existente en la API.
     * @param empleado - Objeto con los datos actualizados (debe contener _id)
     * @returns Observable con el empleado actualizado
     */
    putEmpleado(empleado: Empleado) {
        return this.http.put(`${this.URL_API}/${empleado._id}`, empleado);
    }

    /**
     * Elimina un empleado de la API.
     * @param id - Identificador del empleado (_id de MongoDB)
     * @returns Observable con la respuesta de eliminación
     */
    deleteEmpleado(id: string) {
        return this.http.delete(`${this.URL_API}/${id}`);
    }
}
