import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../shared/services/language-service';

/**
 * Legal notice page. Shows the German or English text depending on the selected language.
 */
@Component({
  imports: [RouterLink],
  selector: 'app-imprint',
  styleUrl: './imprint.scss',
  templateUrl: './imprint.html',
})
export class Imprint {
  /**
   * @param languageService - Used to check the current language
   */
  constructor(public languageService: LanguageService) { }
}