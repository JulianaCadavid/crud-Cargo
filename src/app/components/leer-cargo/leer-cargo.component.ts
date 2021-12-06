import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudCargoService } from 'src/app/services/crud-cargo.service';
import { Cargos } from 'src/app/cargos';


@Component({
  selector: 'app-leer-cargo',
  templateUrl: './leer-cargo.component.html',
  styleUrls: ['./leer-cargo.component.css']
})
export class LeerCargoComponent implements OnInit {  

  constructor(private route: ActivatedRoute, private api: CrudCargoService, private router: Router) { }
  cons: string = '';
  cargos: Cargos[] = []

  
  getCargosDetails(cons: string) {
    this.api.getCargoById(this.cons)
      .subscribe((data: any) => {
        this.cargos = data;
        console.log(this.cargos);
      });
  }
  ngOnInit(): void {
    
  }


}
