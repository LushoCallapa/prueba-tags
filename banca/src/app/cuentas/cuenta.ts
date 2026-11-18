export interface Cuenta {
  id: number;
  nombre: string;
  tipo: string;
  saldo: number;
}

export interface Transferencia {
  origenId: string;
  destino: string;
  monto: number;
}