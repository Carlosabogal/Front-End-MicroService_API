import { Component, OnInit, ViewChild, AfterViewInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { VentasComponent } from './ventas/ventas.component';

interface Medicament {
  id: number;
  nombre: string;
  laboratorio: string;
  fechaFabricacion: Date;
  fechaVencimiento: Date;
  cantidadStock: number;
  valorUnitario: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent implements OnInit {

  
  title = '';
  description = '';
  activeContainer: string = 'search-delete-container';
  medicaments: Medicament[] = [];
  medicament: Medicament | null = null;
  medicamentId: number | undefined;
  isDataLoading = false;
  newMedicament: Medicament = {
    id: 0,
    nombre: '',
    laboratorio: '',
    fechaFabricacion: new Date(),
    fechaVencimiento: new Date(),
    cantidadStock: 0,
    valorUnitario: 0
  };
  showSuccessNotification = false;
  showUpdateButton = false;

  constructor(private http: HttpClient, private router: Router) { }




  message!: string;



  ngOnInit() {
    this.getMedicaments();
  }

  redirect() {
    this.activeContainer = '';
    this.router.navigate(['ventas']);
}
 

  getMedicaments() {
    if (this.medicamentId) {
      this.isDataLoading = true;

      this.http.get<Medicament>("http://localhost:8080/medicament/" + this.medicamentId).subscribe(
        (resp: Medicament) => {
          this.medicament = resp;
          this.isDataLoading = false;
        },
        (error: any) => {
          console.log(error);
          this.isDataLoading = false;
        }
      );
    }
  }

  createMedicament() {
    const url = 'http://localhost:8080/medicament';
    this.http.post<Medicament>(url, this.newMedicament).subscribe(
      (resp: Medicament) => {
        console.log('New Medicament Created:', resp);
        this.getMedicaments();
        this.showSuccessNotification = true;
        setTimeout(() => {
          this.showSuccessNotification = false;
        }, 5000); 
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  putMedicament(medicament: Medicament) {
    const url = `http://localhost:8080/medicament/${medicament.id}`;
    this.http.put<Medicament>(url, medicament).subscribe(
      (resp: Medicament) => {
        console.log('Medicament Updated:', resp);
        this.showSuccessNotification = true;
        this.getMedicaments(); // Assuming you have a 'getMedicaments' function to fetch updated data
        this.clearForm();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  deleteMedicamentById() {
    if (this.medicament && this.medicament.id) {
      const url = `http://localhost:8080/medicament/${this.medicament.id}`;
      this.isDataLoading = true;
  
      this.http.delete<any>(url).subscribe(
        () => {
          console.log(`Medicament with ID ${this.medicament!.id} Deleted`);
          this.getMedicaments();
          this.medicament = null; // Set medicament to null to clear the displayed information
          this.clearForm(); // Clear the form fields after deleting the medicament
        },
        (error: any) => {
          console.log(error);
          this.isDataLoading = false;
        }
      );
    } else {
      console.log('Medicament ID is missing.');
    }
  }

  clearForm() {
    this.newMedicament = {
      id: 0,
      nombre: '',
      laboratorio: '',
      fechaFabricacion: new Date(),
      fechaVencimiento: new Date(),
      cantidadStock: 0,
      valorUnitario: 0
    };
    this.showUpdateButton = false; // Hide the update button when the form is cleared
  }

  showContainer(containerName: string) {
    this.activeContainer = containerName;
  }
}