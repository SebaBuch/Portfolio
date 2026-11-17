import { Component } from '@angular/core';
import { LanguageService } from '../../shared/services/language-service';

@Component({
  imports: [],
  selector: 'app-about-me',
  styleUrl: './about-me.scss',
  templateUrl: './about-me.html',
})
export class AboutMe {
  constructor(public languageService: LanguageService) { }
}