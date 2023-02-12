import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/paises-interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor( private PaisService: PaisService) { }

  buscar( termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.PaisService.buscarRegion(this.termino).subscribe( (paises) => {
      console.log(paises);
      this.paises = paises;

    }, (err) =>{
      console.log('Error');
      console.log(err);
      this.hayError = true;
      this.paises = [];
    });  
  }

}
