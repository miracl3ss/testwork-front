import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-menu',
  imports: [CommonModule],
  templateUrl: './modal-menu.component.html',
  styleUrl: './modal-menu.component.scss'
})
export class ModalMenuComponent {
  @Input() isOpen: boolean = false;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  closeModal(): void {
    console.log('works');
    this.close.emit();
  }
}
