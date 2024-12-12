import { Component } from '@angular/core';
import { ArticleComponent } from "../../common-ui/article/article.component";

@Component({
  selector: 'app-process',
  imports: [ArticleComponent],
  templateUrl: './process.component.html',
  styleUrl: './process.component.scss'
})
export class ProcessComponent {
  articleFirst = {
    img: '/assets/imgs/waiting.svg',
    head: 'Прочитай задание внимательно',
    text: 'Думаю у тебя не займет это больше двух-трех минут'
  }
  articleSecond = {
    img: '/assets/imgs/delivery-truck.svg',
    head: 'Изучи весь макет заранее',
    text: 'Подумай как это будет работать на разных разрешениях и при скролле'
  }
  articleThird = {
    img: '/assets/imgs/secure.svg',
    head: 'Сделай хорошо',
    text: 'Чтобы мы могли тебе доверить подобные задачи в будущем'
  }
  articleFourth =  {
    img: '/assets/imgs/money-bags.svg',
    head: 'Получи предложение',
    text: 'Ну тут все просто, не я придумал правила, но думаю так и будет)))'
  }
}
