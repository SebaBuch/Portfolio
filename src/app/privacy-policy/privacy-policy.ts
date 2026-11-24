import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../shared/services/language-service';

@Component({
  imports: [RouterLink],
  selector: 'app-privacy-policy',
  styleUrl: './privacy-policy.scss',
  templateUrl: './privacy-policy.html',
})
export class PrivacyPolicy {
  constructor(public languageService: LanguageService) { }
}
