import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [
    LoginService
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  passwordVisible: boolean = false;

  constructor(private loginService: LoginService, private toastService: ToastrService) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      senha: new FormControl('', Validators.required)
    });
    
  }

  // Alterna a visibilidade da senha
  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  // Envio do formulário
  onLogin(){
    this.loginService.login(this.loginForm.value.username, this.loginForm.value.senha).subscribe({
      next: () => this.toastService.success("Login feito com sucesso!"),
      error: () => this.toastService.error("Ocorreu um erro! Tente novamente")
    })
  }
}