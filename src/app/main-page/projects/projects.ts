import { Component, signal } from '@angular/core';
import { LanguageService } from '../../shared/services/language-service';
import { projectList } from '../../shared/data/projects-data';

/**
 * Project list with hover preview and an overlay with all details of a project.
 */
@Component({
  imports: [],
  selector: 'app-projects',
  styleUrl: './projects.scss',
  templateUrl: './projects.html',
})
export class Projects {
  /** All projects from projects-data.ts. */
  projects = projectList;
  /** Index of the project under the mouse, -1 if there is none. */
  hoveredIndex = signal(-1);
  /** Index of the project shown in the overlay, -1 if the overlay is closed. */
  selectedIndex = signal(-1);

  /**
   * @param languageService - Used for the translated texts
   */
  constructor(public languageService: LanguageService) { }

  /**
   * Shows the preview image of a project.
   * @param index - Position of the project in the list
   */
  showPreview(index: number) {
    this.hoveredIndex.set(index);
  }

  /** Hides the preview image. */
  hidePreview() {
    this.hoveredIndex.set(-1);
  }

  /**
   * Opens the overlay with the details of a project.
   * @param index - Position of the project in the list
   */
  openProject(index: number) {
    this.selectedIndex.set(index);
  }

  /** Closes the project overlay. */
  closeProject() {
    this.selectedIndex.set(-1);
  }

  /** Shows the next project in the overlay. After the last project it starts again with the first one. */
  nextProject() {
    let next = this.selectedIndex() + 1;
    if (next >= this.projects.length) {
      next = 0;
    }
    this.selectedIndex.set(next);
  }

  /**
   * Returns the number of the open project with a leading zero.
   * @returns The project number, e.g. "01"
   */
  getProjectNumber(): string {
    return '0' + (this.selectedIndex() + 1);
  }

  /**
   * Returns the path of the small icon for a technology.
   * @param tech - Name of the technology, e.g. "HTML"
   * @returns The icon path, or an empty string if there is no icon for this technology
   */
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
        icon = '/icons/tech-firebase.svg';
        break;
    }
    return icon;
  }
}
