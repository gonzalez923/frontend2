import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { EmpleadoService } from '../../services/empleado';
import { Empleado } from '../../models/empleado';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-empleados',
  styleUrl: './empleados.css',
  templateUrl: './empleados.html',
})
export class Empleados implements OnInit {
  constructor(public empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    // Inicialización del componente
  }

  /**
   * Agrega un nuevo empleado utilizando el servicio.
   * Envía los valores del formulario a la API mediante POST.
   */
  agregarEmpleado(form?: NgForm): void {
    this.empleadoService.postEmpleado(form?.value).subscribe(
      (response) => {
        console.log('Empleado agregado exitosamente:', response);
        this.resetForm(form);
      },
      (error) => {
        console.error('Error al agregar empleado:', error);
      }
    );
  }

  /**
   * Restablece el formulario y limpia los datos.
   */
  resetForm(form?: NgForm): void {
    if (form) {
      form.resetForm();
    }

    this.empleadoService.selectedEmpleado = new Empleado();
  }
}