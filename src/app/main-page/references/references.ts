import { Component, signal } from '@angular/core';
import { LanguageService } from '../../shared/services/language-service';

/**
 * Slider with references from colleagues.
 * It renders five cards: three visible ones and one hidden card on each side,
 * so the cards can slide smoothly to the next position.
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
  /** Positions of the five cards relative to the middle card. The outer two are hidden. */
  offsets = [-2, -1, 0, 1, 2];
  /** "move-next" or "move-prev" while the cards are moving, otherwise empty. */
  moveClass = signal('');

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

  /**
   * Returns the index of the reference at a position next to the middle card.
   * The modulo makes the list start again at the beginning or the end.
   * @param offset - Position relative to the middle card, e.g. -1 for the left card
   * @returns The index in the references list
   */
  getIndexAt(offset: number): number {
    const length = this.references.length;
    return (this.currentIndex() + offset + length * 2) % length;
  }

  /** Moves all cards one position to the left and shows the next reference. */
  showNext() {
    this.startMove('move-next', this.getNextIndex());
  }

  /** Moves all cards one position to the right and shows the previous reference. */
  showPrevious() {
    this.startMove('move-prev', this.getPreviousIndex());
  }

  /**
   * Shows a specific reference after a click on a dot.
   * @param index - Position of the reference in the list
   */
  showReference(index: number) {
    if (index === this.getNextIndex()) {
      this.showNext();
    } else if (index === this.getPreviousIndex()) {
      this.showPrevious();
    } else if (this.moveClass() === '') {
      this.currentIndex.set(index);
    }
  }

  /**
   * Starts the movement of the cards. After the movement the index is updated
   * and the class is removed, so the cards jump back to their start position
   * without being visible, because they now show the new content.
   * @param direction - "move-next" or "move-prev"
   * @param newIndex - Index of the reference that will be in the middle
   */
  startMove(direction: string, newIndex: number) {
    if (this.moveClass() !== '') {
      return;
    }
    this.moveClass.set(direction);
    setTimeout(() => {
      this.currentIndex.set(newIndex);
      this.moveClass.set('');
    }, 500);
  }
}