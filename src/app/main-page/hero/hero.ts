import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../shared/services/language-service';

/**
 * First section of the main page with name, buttons, side lines and the animated marquee.
 */
@Component({
  imports: [RouterLink],
  selector: 'app-hero',
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero {
  /** Translation keys of the texts in the marquee. */
  marqueeKeys = ['marqueeDeveloper', 'marqueeLocation', 'marqueeOpen'];
  /** How often the marquee texts are repeated, so the band has no gaps on wide screens. */
  marqueeRounds = [1, 2, 3, 4];

  /**
   * @param languageService - Used for the translated button and marquee texts
   */
  constructor(public languageService: LanguageService) { }
}
