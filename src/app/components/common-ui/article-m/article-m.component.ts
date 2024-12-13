import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-m',
  imports: [],
  templateUrl: './article-m.component.html',
  styleUrl: './article-m.component.scss'
})
export class ArticleMComponent {
  @Input() articleInfo!: {
    head: string,
    text: string
  }

}
