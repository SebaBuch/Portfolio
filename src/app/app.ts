import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/components/header/header';
import { Footer } from './shared/components/footer/footer';

/**
 * Root component with header, page content, footer and the green glow that follows the mouse.
 */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  host: {
    '(document:mousemove)': 'moveGlow($event)'
  }
})
export class App {
  /** Horizontal mouse position in pixels. Starts outside the screen. */
  mouseX = signal(-1000);
  /** Vertical mouse position in pixels. Starts outside the screen. */
  mouseY = signal(-1000);

  /**
   * Moves the glow to the current mouse position.
   * @param event - The mouse event with the position
   */
  moveGlow(event: MouseEvent) {
    this.mouseX.set(event.clientX);
    this.mouseY.set(event.clientY);
  }
}