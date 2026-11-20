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
  selectedIndex = signal(-1);

  constructor(public languageService: LanguageService) { }

  showPreview(index: number) {
    this.hoveredIndex.set(index);
  }

  hidePreview() {
    this.hoveredIndex.set(-1);
  }

  openProject(index: number) {
    this.selectedIndex.set(index);
  }

  closeProject() {
    this.selectIndex.set(-1)
  }

  nextProject() {
    let next = this.selectedIndex() + 1;
    if (next >= this.projects.length) {
      next = 0;
    }
    this.selectedIndex.set(next);
  }

  getProjectNumber(): string {
    return '0' + (this.selectedIndex() + 1);
  }

  getTechIcon(tech: string): string {
    let icon = '';
    switch (tech) {
      case 'HTML':
        icon = '/icons/tech-html.svg';
        break;
      case 'CSS':
        icon = '/icons/tech-css.svg';
        break;
      case 'JavaScript':
        icon = '/icons/tech-javascript.svg';
        break;
      case 'TypeScript':
        icon = '/icons/tech-typescript.svg';
        break;
      case 'Angular':
        icon = '/icons/tech-angular.svg';
        break;
      case 'Firebase':
        icon = '/icons/tech-Firebase.svg';
        break;
    }
    return icon;
  }
}
