export interface Medicamento {
    id: number;
    nombre: string;
    laboratorio: string;
    fechaFabricacion: Date;
    fechaVencimiento: Date;
    cantidadStock: number;
    valorUnitario: number;
  }