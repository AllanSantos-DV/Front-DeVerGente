import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ThemeToggleComponent } from "./theme/theme-toggle.component";
import { ThemeService } from './theme/theme.service';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, RouterModule, ThemeToggleComponent]
})

export class AppComponent implements OnInit {
  title = 'Devergente-Front';

  constructor(
    private themeService: ThemeService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    this.themeService.isDarkTheme.subscribe(isDark => {
      const body = this.document.body;
      if (isDark) {
        this.renderer.addClass(body, 'dark-theme');
      } else {
        this.renderer.removeClass(body, 'dark-theme');
      }
    });
  }
}