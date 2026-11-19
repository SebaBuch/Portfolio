import { Component, signal } from '@angular/core';
import { LanguageService } from '../../shared/services/language-service';
import { projectList } from '../../shared/data/projects-data';

@Component({
  imports: [],
  selector: 'app-projects',
  styleUrl: './projects.scss',
  templateUrl: './projects.html',
})
export class Projects {
  projects = projectList;
  hoveredIndex = signal(-1);

  constructor(public languageService: LanguageService) { }

  showPreview(index: number) {
    this.hoveredIndex.set(index);
  }

  hidePreview() {
    this.hoveredIndex.set(-1);
  }
}
