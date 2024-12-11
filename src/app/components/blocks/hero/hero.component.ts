import { Component, Input } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CtaButtonComponent } from "../../common-ui/cta-button/cta-button.component";

@Component({
  selector: 'app-hero',
  imports: [HeaderComponent, CtaButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  buttonData = {
    text: "Проще простого!"
  }
}
