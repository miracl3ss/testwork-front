import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-kekbox',
  imports: [],
  templateUrl: './kekbox.component.html',
  styleUrl: './kekbox.component.scss'
})
export class KekboxComponent {
  @Input() checkboxData!: {
    name: string,
    id: string
    status: string
  }
}
