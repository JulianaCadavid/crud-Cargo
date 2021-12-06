import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudCargoService } from 'src/app/services/crud-cargo.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-crear-cargo',
  templateUrl: './crear-cargo.component.html',
  styleUrls: ['./crear-cargo.component.css']
})
export class CrearCargoComponent implements OnInit {
  cargoForm: FormGroup;
  alert=false;

  constructor(private router: Router, private api: CrudCargoService, private formBuilder: FormBuilder) {
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

  onFormSubmit() {
    this.api.addCargos(this.cargoForm.value)
      .subscribe((res: any) => {
          const consecutivo = res.consecutivo;
          console.log(res)
          this.router.navigate(['/crearCargo']);
          this.alert= true;
        }, (err: any) => {
          console.log(err);
        });
  }

  

}
