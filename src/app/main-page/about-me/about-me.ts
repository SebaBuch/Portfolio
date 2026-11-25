import { Component } from '@angular/core';
import { LanguageService } from '../../shared/services/language-service';

/**
 * "About me" section with photo and a short introduction.
 */
@Component({
  imports: [],
  selector: 'app-about-me',
  styleUrl: './about-me.scss',
  templateUrl: './about-me.html',
})
export class AboutMe {
  /** Path to the profile photo. If empty, a placeholder is shown. */
  photo = '/images/sebastian.webp';

  /**
   * @param languageService - Used for the translated texts
   */
  constructor(public languageService: LanguageService) { }
}
