import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalMenuComponent } from "../../common-ui/modal-menu/modal-menu.component";

@Component({
  selector: 'app-header',
  imports: [CommonModule, FormsModule, ModalMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isModalOpen = false;

  toggleModal(): void {
    this.isModalOpen = !this.isModalOpen;
  }

  closeModal(): void {
    this.isModalOpen = false;
    console.log('hereiam')
  }
}
