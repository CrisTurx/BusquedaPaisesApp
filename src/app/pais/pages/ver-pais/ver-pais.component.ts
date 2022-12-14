import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
})
export class VerPaisComponent implements OnInit {

  pais!: Country ;

  constructor(
     private enlace: ActivatedRoute,
     private paisService: PaisService
     ) { }

  ngOnInit(): void {



    this.enlace.params
    .pipe(
      switchMap( ( {id} ) => this.paisService.getPaisPorCodigo( id ) ),
      tap(console.log)
    )
    .subscribe(pais => this.pais = pais[0] );
      
    

  //  this.enlace.params
  //  .subscribe (({ id })  => {
  //   console.log(id); 
    
  //   this.paisService.getPaisPorCodigo(id)
  //   .subscribe(pais => {
  //     console.log(pais);
  //   });

  //  });
  }

}
