import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../shared/services/language-service';

/**
 * "Skill Set" section with a short text and the icons of all skills.
 */
@Component({
  imports: [RouterLink],
  selector: 'app-skills',
  styleUrl: './skills.scss',
  templateUrl: './skills.html',
})
export class Skills {
  /** All skills with their name and icon path, shown in this order. */
  skills = [
    { name: 'HTML', icon: '/icons/skill-html.svg' },
    { name: 'CSS', icon: '/icons/skill-css.svg' },
    { name: 'JavaScript', icon: '/icons/skill-javascript.svg' },
    { name: 'TypeScript', icon: '/icons/skill-typescript.svg' },
    { name: 'SCSS', icon: '/icons/skill-scss.svg' },
    { name: 'Angular', icon: '/icons/skill-angular.svg' },
    { name: 'Git', icon: '/icons/skill-git.svg' },
  ];

  /**
   * @param languageService - Used for the translated texts
   */
  constructor(public languageService: LanguageService) { }
}
