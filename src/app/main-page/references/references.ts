import { Component, signal } from '@angular/core';
import { LanguageService } from '../../shared/services/language-service';

@Component({
  imports: [],
  selector: 'app-references',
  styleUrl: './references.scss',
  templateUrl: './references.html',
})
export class References {
  references = [
    { textKey: 'referenceText1', author: 'Platzhalter' },
    { textKey: 'referenceText2', author: 'Platzhalter' },
    { textKey: 'referenceText3', author: 'Platzhalter' }
  ];
  currentIndex = signal(0);

  constructor(public languageService: LanguageService) {}

  getPreviousIndex(): number {
    if (this.currentIndex() === 0) {
      return this.references.length - 1;
    }
    return this.currentIndex() - 1;
  }

  getNextIndex(): number {
    if (this.currentIndex() === this.references.length - 1) {
      return 0;
    }
    return this.currentIndex() + 1;
  }

  showPrevious() {
    this.currentIndex.set(this.getPreviousIndex());
  }

  showNext() {
    this.currentIndex.set(this.getNextIndex());
  }

  showReference(index: number) {
    this.currentIndex.set(index);
  }
}