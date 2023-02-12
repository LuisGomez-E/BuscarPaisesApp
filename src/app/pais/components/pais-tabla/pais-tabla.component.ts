import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/paises-interfaces';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [
  ]
})
export class PaisTablaComponent {

  hayError: boolean = false;
  @Input() paises: Country[] = [];

  constructor() { }

}
