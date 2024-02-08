import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private _title: string = 'Bases';
  public get title(): string {
    return this._title;
  }
  public set title(value: string) {
    this._title = value;
  }
  private _counter: number = 10;
  
  public get counter(): number {
    return this._counter;
  }
  public set counter(value: number) {
    this._counter = value;
  }

  incrementar (): void {
    this.counter = this.counter+1;
  }
  decrementar (): void {
    this.counter--;
  }

  reset (): void {
    this.counter = 10;
  }

    get dameTitle (): string {
      return this.title;
    }
}
