import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ["antonio recio", "amador rivas", "enrique pastor", "coque calatrava", "Maite Figueros"];

  public heroeBorrado?: string='';

  borrarUltimoNombre(): void {
    if (this.heroNames.length > 0){
    this.heroeBorrado = String(this.heroNames.pop());
    } else {
      this.heroeBorrado='No hay más';
    }
  }
}
