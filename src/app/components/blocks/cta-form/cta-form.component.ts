import { Component } from '@angular/core';
import { FormInputComponent } from "../../common-ui/form-input/form-input.component";
import { KekboxComponent } from "../../common-ui/kekbox/kekbox.component";
import { FormButtonComponent } from "../../common-ui/form-button/form-button.component";

@Component({
  selector: 'app-cta-form',
  imports: [FormInputComponent, KekboxComponent, FormButtonComponent],
  templateUrl: './cta-form.component.html',
  styleUrl: './cta-form.component.scss'
})
export class CtaFormComponent {
nameInput = {
  placeholder: 'Имя',
  name: 'name',
  type: 'text'
}
numberInput = {
  placeholder: 'Телефон',
  name: 'phoneNumber',
  type: 'number'
}
checkboxData = {
  name: 'agreeBtn',
  id: 'agreeBtn',
  status: ''
}
formButton = {
  text: 'Отправить',
  data: ''
}
}
