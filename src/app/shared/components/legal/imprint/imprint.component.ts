import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'best-imprint',
  standalone: true,
  imports: [RouterLink, ButtonComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

}
