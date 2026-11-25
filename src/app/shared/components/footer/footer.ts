import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language-service';

/**
 * Footer with logo, copyright and links to GitHub, email, legal notice and privacy policy.
 */
@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  /** The current year for the copyright notice. */
  year = new Date().getFullYear();

  /**
   * @param languageService - Used for the translated link texts
   */
  constructor(public languageService: LanguageService) { }
}
