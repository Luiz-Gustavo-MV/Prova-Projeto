
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-empresa',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './empresa.html',
  styleUrl: './empresa.css'
})
export class Empresa {

  empresa = {
    nome: '',
    cnpj: '',
    logomarca: '',
    fundacao: '',
    descricao: ''
  };

  enviar(): void {
    console.log('Dados da empresa:', this.empresa);
  }

  limpar(): void {
    this.empresa = {
      nome: '',
      cnpj: '',
      logomarca: '',
      fundacao: '',
      descricao: ''
    };
  }
}
  