import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//prime
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { DialogModule } from 'primeng/dialog';

//shared
import { SocialMediaIconComponent } from 'src/app/shared/components/social-media-icon/social-media-icon.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    InputMaskModule,
    SocialMediaIconComponent,
    DialogModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
}
