import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudCargoService } from 'src/app/services/crud-cargo.service';

import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-actualizar-cargo',
  templateUrl: './actualizar-cargo.component.html',
  styleUrls: ['./actualizar-cargo.component.css']
})
export class ActualizarCargoComponent implements OnInit {
  cargoForm: FormGroup;
  consecutivo= '';
  empresa= 1;
  codigo= '';
  nombre = '';
  alert=false;
  alertexist=false;
 

  constructor(private router: Router, private route: ActivatedRoute, private api: CrudCargoService, private formBuilder: FormBuilder) {
    this.cargoForm = this.formBuilder.group({
      consecutivo: '',
      empresa: 1,
      codigo: '',
      nombre: ''
    })
  }

  ngOnInit(): void {
    this.cargoForm = this.formBuilder.group({
      consecutivo : [null, Validators.required],
      empresa : [1, Validators.required],
      codigo : [null, Validators.required],
      nombre : [null, Validators.required],
    });
  }

  getCargoById(consecutivo: any) {
      this.api.getCargoById(consecutivo).subscribe((data: any) => {
        this.cargoForm.setValue({
          consecutivo: data.consecutivo,
          empresa: data.empresa,
          codigo: data.codigo,
          nombre: data.nombre,
        });
      });
    
    
  }

  onFormSubmit() {
    if(this.consecutivo != null){
      this.api.updateCargos(this.consecutivo, this.cargoForm.value)
    
      .subscribe((res: any) => {
          const id = res.consecutivo;
          this.router.navigate(['/modificarCargo']);
          this.alert = true
        }, (err: any) => {
          console.log(err);
          console.log("definido")
        }
      );
    } else {
      this.alertexist = true;
      console.log("indef")
    }
    
  }
}
