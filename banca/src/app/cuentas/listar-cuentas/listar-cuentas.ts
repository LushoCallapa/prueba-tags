import { Component, inject, signal } from '@angular/core';
import { CuentasApi } from '../cuentas-api';
import { Cuenta } from '../cuenta';

@Component({
  selector: 'app-listar-cuentas',
  imports: [],
  templateUrl: './listar-cuentas.html',
  styleUrl: './listar-cuentas.scss',
})
export class ListarCuentas {
  private api  = inject(CuentasApi);

  cuentas = signal<Cuenta[]>([]);
  cargando = signal<boolean>(false);
  error = signal<string | null>(null);

  ngOnInit() {
    this.api.listar().subscribe({
      next: (cuentas) => {
        this.cuentas.set(cuentas);
        this.cargando.set(false);
      },
      error: (err) => {
        this.error.set('Error al cargar las cuentas');
        this.cargando.set(false);
      }
    });
  }
  
}
