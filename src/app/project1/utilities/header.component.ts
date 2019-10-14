import { Component, Input } from '@angular/core';
import { HeaderModel } from './header-model';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})

export class HeaderComponent {
  @Input('header-model') headerModel: HeaderModel
}
