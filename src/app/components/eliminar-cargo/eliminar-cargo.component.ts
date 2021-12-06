import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudCargoService } from 'src/app/services/crud-cargo.service';
import { Cargos } from 'src/app/cargos';

@Component({
  selector: 'app-eliminar-cargo',
  templateUrl: './eliminar-cargo.component.html',
  styleUrls: ['./eliminar-cargo.component.css']
})
export class EliminarCargoComponent implements OnInit {

  constructor(private route: ActivatedRoute, private api: CrudCargoService, private router: Router) { }
  cargos: Cargos = { consecutivo: '', empresa: 1, codigo: '', nombre: ''}
  cons: string= '';
  alert= false;
  alertexist=false;
 
  deleteCargos(consecutivo: string) {
    if(this.cargos.consecutivo != null){
      this.api.deleteCargos(consecutivo)
      .subscribe(res => {
          this.router.navigate(['borrarCargo']);
          this.alert= true;
        }, (err) => {
          console.log(err);
        }
      );
    } else { 
      this.alertexist= true;
    }    
    
  }

  ngOnInit(): void {
    
  }
}
