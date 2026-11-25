import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language-service';

/**
 * Fixed header with navigation, language switch and logo.
 * On small screens it shows a burger menu instead of the navigation.
 */
@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  /** True while the mobile menu is open. */
  isMenuOpen = signal(false);

  /**
   * @param languageService - Used for the translated menu texts and the language switch
   */
  constructor(public languageService: LanguageService) { }

  /** Opens the mobile menu if it is closed and closes it if it is open. */
  toggleMenu() {
    this.isMenuOpen.set(!this.isMenuOpen());
  }

  /** Closes the mobile menu, e.g. after a click on a menu link. */
  closeMenu() {
    this.isMenuOpen.set(false);
  }
}
