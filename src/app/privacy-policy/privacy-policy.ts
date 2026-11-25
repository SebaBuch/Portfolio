import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../shared/services/language-service';

/**
 * Privacy policy page. Shows the German or English text depending on the selected language.
 */
@Component({
  imports: [RouterLink],
  selector: 'app-privacy-policy',
  styleUrl: './privacy-policy.scss',
  templateUrl: './privacy-policy.html',
})
export class PrivacyPolicy {
  /**
   * @param languageService - Used to check the current language
   */
  constructor(public languageService: LanguageService) { }
}
