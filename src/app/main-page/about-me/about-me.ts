import { Component } from '@angular/core';
import { LanguageService } from '../../shared/services/language-service';

@Component({
  imports: [],
  selector: 'app-about-me',
  styleUrl: './about-me.scss',
  templateUrl: './about-me.html',
})
export class AboutMe {
photo = '/images/sebastian.webp';

  constructor(public languageService: LanguageService) { }
}