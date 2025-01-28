import { Component, Input } from '@angular/core';

@Component({
  selector: 'best-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
@Input() caption: string = '';
}
