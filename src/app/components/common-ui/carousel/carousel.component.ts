import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  imports: [CommonModule]
})
export class CarouselComponent implements OnInit {
Array(arg0: number): any {
throw new Error('Method not implemented.');
}
  items = [
    { id: 1, img: '/assets/imgs/avatar-1.png', sity: 'Санкт-Петербург',  name: 'Константинов Михаил Павлович', description: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы' },
    { id: 2, img: '/assets/imgs/avatar-2.png', sity: 'Санкт-Петербург', name: 'Иван Иванов', description: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.' },
    { id: 3, img: '/assets/imgs/avatar-3.png', sity: 'Самара', name: 'Артем Корнилов', description: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.' },
    { id: 4, img: '/assets/imgs/avatar-1.png', sity: 'Санкт-Петербург', name: 'Константинов Михаил Павлович', description: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы' },
    { id: 5, img: '/assets/imgs/avatar-2.png', sity: 'Санкт-Петербург', name: 'Иван Иванов', description: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.' },
    { id: 6, img: '/assets/imgs/avatar-3.png', sity: 'Самара', name: 'Артем Корнилов', description: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.' },
    { id: 7, img: '/assets/imgs/avatar-1.png', sity: 'Санкт-Петербург', name: 'Константинов Михаил Павлович', description: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы' },
    { id: 8, img: '/assets/imgs/avatar-2.png', sity: 'Санкт-Петербург', name: 'Иван Иванов', description: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.' },
    { id: 9, img: '/assets/imgs/avatar-3.png', sity: 'Самара', name: 'Артем Корнилов', description: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.' }
  ];

  currentIndex = 0;
  itemsPerSlide = 3;
  itemsToSlide = 1;

  private slideInterval: any;

  constructor() {}

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  startAutoSlide(): void {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  stopAutoSlide(): void {
    clearInterval(this.slideInterval);
  }

  nextSlide(): void {
    if (this.currentIndex + this.itemsPerSlide < this.items.length) {
      this.currentIndex += this.itemsToSlide;
    }
  }

  prevSlide(): void {
    if (this.currentIndex - this.itemsToSlide >= 0) {
      this.currentIndex -= this.itemsToSlide;
    }
  }

  goToSlide(index: number): void {
    this.currentIndex = index * this.itemsPerSlide;
  }

  get visibleItems(): any[] {
    return this.items.slice(this.currentIndex, this.currentIndex + this.itemsPerSlide);
  }

  get slideCount(): number {
    return Math.ceil(this.items.length / this.itemsPerSlide);
  }

  get currentSlideIndex(): number {
    return Math.floor(this.currentIndex / this.itemsPerSlide);
  }
  getSlideIndices(count: number): number[] {
    return Array.from({ length: count }, (_, i) => i);
  }
}