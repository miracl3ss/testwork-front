import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from "./components/blocks/hero/hero.component";
import { HeaderComponent } from "./components/blocks/header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-testwork';
}
