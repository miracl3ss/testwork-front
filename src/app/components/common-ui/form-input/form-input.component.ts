import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  imports: [FormsModule],
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.scss'
})
export class FormInputComponent {
  @Input() inputData!: {
    placeholder: string | null,
    name: string,
    type: string | null;
  }
  public inputValue: string = '';
  dynamicPlaceholder: string = '';
  onFocus(): void {
    // Дополнительная логика при фокусировке, если необходимо
  }

  onBlur(): void {
    // Дополнительная логика при потере фокуса, если необходимо
  }
  updatePlaceholder(): void {
    console.log('works')
    this.dynamicPlaceholder = this.inputValue;

  }
}