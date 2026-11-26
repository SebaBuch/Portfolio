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
  /** CSS class that starts the slide animation, e.g. "slide-next-a". */
  slideClass = signal('');
  /** Switches between the "a" and "b" animation so it restarts on every click. */
  slideToggle = false;

  /**
   * @param languageService - Used for the translated texts
   */
  constructor(public languageService: LanguageService) { }

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

  /** Shows the previous reference and slides the cards in from the left. */
  showPrevious() {
    this.currentIndex.set(this.getPreviousIndex());
    this.startSlide('slide-prev');
  }

  /** Shows the next reference and slides the cards in from the right. */
  showNext() {
    this.currentIndex.set(this.getNextIndex());
    this.startSlide('slide-next');
  }

  /** Jumps to a reference via the dots and picks the slide direction. */
  showReference(index: number) {
    if (index === this.currentIndex()) {
      return;
    }
    const direction = index > this.currentIndex() ? 'slide-next' : 'slide-prev';
    this.currentIndex.set(index);
    this.startSlide(direction);
  }

  /** Sets the animation class, alternating "-a" and "-b" so it runs again on every click. */
  startSlide(direction: string) {
    this.slideToggle = !this.slideToggle;
    const suffix = this.slideToggle ? '-a' : '-b';
    this.slideClass.set(direction + suffix);
  }
