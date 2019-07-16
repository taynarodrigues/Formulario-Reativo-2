import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Cliente } from '../shared/cliente';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

formCliente: FormGroup;

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.createForm(new Cliente());
  }

  // createForm(cliente: Cliente){
  //   this.formCliente = new FormGroup({
  //     nome: new FormControl(cliente.nome),
  //     tipo: new FormControl(cliente.tipo),
  //     genero: new FormControl(cliente.tipo),
  //     dataNascimento: new FormControl(cliente.dataNascimento),
  //     observacao: new FormControl(cliente.observacao),
  //     inativo: new FormControl(cliente.inativo)
  //   })
  // }

  createForm(cliente: Cliente){
    this.formCliente = this.formBuilder.group({
      nome: [cliente.nome],
      tipo: [cliente.tipo],
      genero: [cliente.genero],
      dataNascimento: [cliente.dataNascimento],
      observacao: [cliente.observacao],
      inativo: [cliente.inativo]
    })
  }

  onSubmit(){
    console.log(this.formCliente.value);

    this.createForm(new Cliente());
  }

}
