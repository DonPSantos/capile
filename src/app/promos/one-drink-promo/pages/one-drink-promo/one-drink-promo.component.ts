import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//PRIME
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

//Custom
import { SocialMediaIconComponent } from 'src/app/shared/components/social-media-icon/social-media-icon.component';
//Services
import { OneDrinkPromoService } from '../../services/one-drink-promo.service';
import { CpfValidate } from 'src/app/shared/utils/validations';

@Component({
  selector: 'app-one-drink-promo',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    //
    InputTextModule,
    ButtonModule,
    InputMaskModule,
    SocialMediaIconComponent,
    ToastModule,
  ],
  templateUrl: './one-drink-promo.component.html',
  styleUrls: ['./one-drink-promo.component.scss'],
  providers: [MessageService],
})
export class OneDrinkPromoComponent {
  registerForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    cpf: ['', [Validators.required, CpfValidate]],
  });

  constructor(
    private oneDrinkPromoService: OneDrinkPromoService,
    private fb: FormBuilder,
    private errorMessages: MessageService
  ) {}
  onSubmit(): void {
    if (this.registerForm.invalid) {
      if (this.registerForm.get('name')?.invalid) {
        this.errorMessages.add({
          severity: 'warn',
          summary: 'Atenção',
          detail: 'Nome invalido',
        });
      }

      if (this.registerForm.get('cpf')?.invalid) {
        this.errorMessages.add({
          severity: 'warn',
          summary: 'Atenção',
          detail: 'CPF invalido',
        });
      }
    } else {
      this.oneDrinkPromoService
        .register({
          name: this.registerForm.value.name,
          cpf: this.registerForm.value.cpf,
        })
        .subscribe({
          next: (res) => {
            console.log(res);
            if (res.status === 202) console.log('status', 'created');
          },
          error: (e) => {
            if (e.status === 409) console.log('status', 'CPF existente');
          },
        });
    }
  }
}
