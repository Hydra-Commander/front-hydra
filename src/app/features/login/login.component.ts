import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  identificacao: string = '';
  senha: string = '';
  passwordVisible: boolean = false;

  // Alterna a visibilidade da senha
  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  // Lida com o envio do formulário
  onLogin(event: Event): void {
    event.preventDefault(); // Previne o recarregamento da página
    console.log('Identificação:', this.identificacao);
    console.log('Senha:', this.senha);
    // Adicione sua lógica de autenticação aqui
  }
}





/**import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
})
export class LoginComponent {
  loginForm!: FormGroup

  constructor(){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }
} **/
