import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-social-media-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-media-icon.component.html',
  styleUrls: ['./social-media-icon.component.scss'],
})
export class SocialMediaIconComponent {
  @Input() iconName: string = '';
  @Input() link: string = '';
  @Input() iconColor: string = '';
  // public size: string = '';
}
