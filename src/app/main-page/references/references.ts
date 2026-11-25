import { Component, signal } from '@angular/core';
import { LanguageService } from '../../shared/services/language-service';

/**
 * Slider with references from colleagues.
 * It always shows three cards: the previous, the current and the next one.
 */
@Component({
  imports: [],
  selector: 'app-references',
  styleUrl: './references.scss',
  templateUrl: './references.html',
})
export class References {
  /** All references with the translation key of the text and the author. */
  references = [
    { textKey: 'referenceText1', author: 'Name' },
    { textKey: 'referenceText2', author: 'Name' },
    { textKey: 'referenceText3', author: 'Name' }
  ];
  /** Index of the reference in the middle of the slider. */
  currentIndex = signal(0);

  /**
   * @param languageService - Used for the translated texts
   */
  constructor(public languageService: LanguageService) {}

  /**
   * Returns the index of the reference before the current one.
   * At the beginning it jumps to the last reference.
   * @returns The previous index
   */
  getPreviousIndex(): number {
    if (this.currentIndex() === 0) {
      return this.references.length - 1;
    }
    return this.currentIndex() - 1;
  }

  /**
   * Returns the index of the reference after the current one.
   * At the end it jumps to the first reference.
   * @returns The next index
   */
  getNextIndex(): number {
    if (this.currentIndex() === this.references.length - 1) {
      return 0;
    }
    return this.currentIndex() + 1;
  }

  /** Moves the slider one reference back. */
  showPrevious() {
    this.currentIndex.set(this.getPreviousIndex());
  }

  /** Moves the slider one reference forward. */
  showNext() {
    this.currentIndex.set(this.getNextIndex());
  }

  /**
   * Shows a specific reference in the middle, e.g. after a click on a dot.
   * @param index - Position of the reference in the list
   */
  showReference(index: number) {
    this.currentIndex.set(index);
  }
}
