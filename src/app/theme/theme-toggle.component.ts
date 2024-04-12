import { Component } from '@angular/core';
import { ThemeService } from './theme.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-theme-toggle',
  template: `
    <button (click)="toggleTheme()" mat-icon-button>
      <mat-icon>{{ themeIcon }}</mat-icon>
    </button>
  `,
  imports: [
    MatIconModule
  ],
  standalone: true
})
export class ThemeToggleComponent {
    themeIcon: string;

    constructor(private themeService: ThemeService) {
        this.themeIcon = '';
        this.themeService.isDarkTheme.subscribe(isDark => {
            this.themeIcon = isDark ? 'brightness_7' : 'brightness_3';
        });
    }

    toggleTheme() {
        this.themeService.setDarkTheme(!this.themeIcon.includes('7'));
    }
}
