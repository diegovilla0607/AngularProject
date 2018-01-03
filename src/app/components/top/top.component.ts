import { Component } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html'
})
export class TopComponent{

	constructor(public _is:InformacionService, private router:Router){

	}

	buscar_producto( termino:string ){
		console.log(termino);
		this.router.navigate(['buscar',termino])
	}
}
