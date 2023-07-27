export class VentaDTO {
    id: number;
    medicamentoId: number;
    cantidad: number;
    valorUnitario: number;
    valorTotal: number;
  
    constructor(
      id: number,
      medicamentoId: number,
      cantidad: number,
      valorUnitario: number,
      valorTotal: number
    ) {
      this.id = id;
      this.medicamentoId = medicamentoId;
      this.cantidad = cantidad;
      this.valorUnitario = valorUnitario;
      this.valorTotal = valorTotal;
    }
  }