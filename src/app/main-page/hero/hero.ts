import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../shared/services/language-service';

@Component({
  imports: [RouterLink],
  selector: 'app-hero',
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero {
  marqueeKeys = ['marqueeRemote', 'marqueeDeveloper', 'marqueeLocation', 'marqueeOpen'];
  marqueeRounds = [1, 2, 3, 4];

  constructor(public languageService: LanguageService) { }
}
