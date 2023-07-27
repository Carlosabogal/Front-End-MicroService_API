import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { VentaDTO } from './venta.dto';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  medicamentoId = 0;
  cantidad = 0;
  valorUnitario = 0; // New field for updating ventas
  modalOpen = false;
  ventas: any[] = [];
  fechaInicio = '';
  fechaFin = '';
  selectedVentaId = 0; // Add the selectedVentaId property
  venta: VentaDTO = {
    id: 0,
    medicamentoId: 0,
    cantidad: 0,
    valorUnitario: 0,
    valorTotal: 0
  };

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  
  }

  getVentas() {
    // Fetch the ventas from the backend API
    const url = 'http://localhost:8080/venta';
    this.http.get<any[]>(url).subscribe(
      (ventas: any[]) => {
        this.ventas = ventas;
      },
      (error: any) => {
        console.error('Error al obtener las ventas:', error);
      }
    );
  }

  realizarVentas() {
    // Perform the ventas request to the backend API
    const ventasRequest = [{
      medicamentoId: this.medicamentoId,
      cantidad: this.cantidad
    }];
    const url = 'http://localhost:8080/venta/realizar';

    this.http.post<any>(url, ventasRequest).subscribe(
      (response: any) => {
        console.log('Ventas realizadas:', response);

        // Close the modal after ventas are made
        this.closeModal();
        // Refresh ventas data
        this.getVentas();
      },
      (error: any) => {
        console.error('Error al realizar las ventas:', error);
      }
    );
  }

  eliminarVenta(ventaId: number) {
    const url = `http://localhost:8080/venta/${ventaId}`;

    this.http.delete(url).subscribe(
      () => {
        console.log(`Venta con ID ${ventaId} eliminada`);
        // Refresh the ventas list after successful venta deletion
        this.getVentas();
      },
      (error: any) => {
        console.error(`Error al eliminar la venta con ID ${ventaId}:`, error);
      }
    );
  }

  redirectToUpdateForm(ventaId: number): void {
    // Set the venta ID to update
    this.selectedVentaId = ventaId;

    // Set the existing values to the form fields
    const ventaToUpdate = this.ventas.find(venta => venta.id === ventaId);
    this.medicamentoId = ventaToUpdate.medicamentoId;
    this.cantidad = ventaToUpdate.cantidad;
    this.valorUnitario = ventaToUpdate.valorUnitario;

    // Open the modal
    this.modalOpen = true;
  }

  actualizarVenta(ventaId: number) {
    const url = `http://localhost:8080/ventas/${ventaId}`;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.http.put<VentaDTO>(url, this.venta, httpOptions).subscribe(
      (response: VentaDTO) => {
        console.log('Venta actualizada:', response);
        // Optionally, you can handle the response here if needed
        this.closeModal();
        // Refresh ventas data after updating the sale
        this.getVentas();
      },
      (error: any) => {
        console.error(`Error al actualizar la venta con ID ${ventaId}:`, error);
      }
    );
  }

  openModal() {
    // Open the modal
    this.modalOpen = true;
  }

  closeModal() {
    // Close the modal
    this.modalOpen = false;
    // Clear input values
    this.medicamentoId = 0;
    this.cantidad = 0;
    this.valorUnitario = 0; // Reset the valorUnitario field
  }

  obtenerVentasPorRangoDeFechas() {
    // Check if both dates are provided before making the request
    if (this.fechaInicio && this.fechaFin) {
      // Perform the request to the backend API to filter ventas by date range
      const url = 'http://localhost:8080/venta/filtrar';

      // Create HttpParams to pass the query parameters (fechaInicio and fechaFin)
      const params = new HttpParams()
        .set('fechaInicio', this.formatDate(this.fechaInicio))
        .set('fechaFin', this.formatDate(this.fechaFin));

      // Make the HTTP GET request with the query parameters
      this.http.get<any[]>(url, { params }).subscribe(
        (ventas: any[]) => {
          this.ventas = ventas;
        },
        (error: any) => {
          console.error('Error al obtener las ventas por rango de fechas:', error);
        }
      );
    }
  }

  private formatDate(dateString: string): string {
    // Convert the date string to the format "yyyy-MM-ddTHH:mm:ss"
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
  }

  todayDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = this.formatNumber(today.getMonth() + 1);
    const day = this.formatNumber(today.getDate());
    return `${year}-${month}-${day}`;
  }

  private formatNumber(num: number): string {
    return num < 10 ? `0${num}` : num.toString();
  }
}