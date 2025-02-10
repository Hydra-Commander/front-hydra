import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../../shared/services/session.service';
import { LoginResponse } from '../../shared/types/login-response.type';
import { Router } from '@angular/router';
import { LoginService } from '../../shared/services/login.service';

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

  constructor(
    private loginService: LoginService,
    private toastService: ToastrService,
    private sessionService: SessionService,
    private router: Router
  ) {}

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
      next: (response: LoginResponse) => {
        this.sessionService.saveSession(response);
        this.router.navigate(["/dashboard"]);
      },
      error: () => this.toastService.error("Error! Please, try again!")
    })
  }
}
