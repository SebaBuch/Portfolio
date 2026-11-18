import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../shared/services/language-service';

@Component({
  imports: [RouterLink],
  selector: 'app-skills',
  styleUrl: './skills.scss',
  templateUrl: './skills.html',
})
export class Skills {
  skills = [
    { name: 'HTML', icon: '/icons/skill-html.svg' },
    { name: 'CSS', icon: '/icons/skill-css.svg' },
    { name: 'JavaScript', icon: '/icons/skill-javascript.svg' },
    { name: 'TypeScript', icon: '/icons/skill-typescript.svg' },
    { name: 'SCSS', icon: '/icons/skill-scss.svg' },
    { name: 'Angular', icon: '/icons/skill-angular.svg' },
    { name: 'Git', icon: '/icons/skill-git.svg' },
  ];

  constructor(public languageService: LanguageService) { }
}
