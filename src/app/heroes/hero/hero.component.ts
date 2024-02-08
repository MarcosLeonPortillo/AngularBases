import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  private _nombre: string = "ironman";

  public get nombre(): string {
    return this._nombre;
  }

  public set nombre(value: string) {
    this._nombre = value;
  }

  public get nombreEnMayusculas(): string {
    return this._nombre.toUpperCase();
  }

  dimeDescripcion(): string {
    return `${this._nombre} - ${this.edad}`
  }

cambiarNombre() : void{
  let nuevoNombre: String | null =String (prompt("Dime el nuevo nombre"));
  console.log(nuevoNombre);
  this._nombre=nuevoNombre+ "";
}

cambiarEdad(){
  let nuevaEdadSt:number | null = Number( prompt("Dime la nueva edad"));
  console.log(nuevaEdadSt);
  this.edad=nuevaEdadSt;
}

reset (): void {
  this._nombre = "ironman";
  this.edad = 45;
}

public edad: number=45;


}
