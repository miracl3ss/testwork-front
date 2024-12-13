import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from "./components/blocks/hero/hero.component";
import { HeaderComponent } from "./components/blocks/header/header.component";
import { ProcessComponent } from "./components/blocks/process/process.component";
import { AdvertisementComponent } from "./components/blocks/advertisement/advertisement.component";
import { TestimonialsComponent } from "./components/blocks/testimonials/testimonials.component";
import { QAComponent } from "./components/blocks/qa/qa.component";
import { InfoStatsComponent } from "./components/blocks/info-stats/info-stats.component";
import { CtaFormComponent } from "./components/blocks/cta-form/cta-form.component";
import { FormsModule } from '@angular/forms';
import { FooterComponent } from "./components/blocks/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroComponent, HeaderComponent, ProcessComponent, AdvertisementComponent, TestimonialsComponent, QAComponent, InfoStatsComponent, CtaFormComponent, FormsModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  title = 'angular-testwork';
}
