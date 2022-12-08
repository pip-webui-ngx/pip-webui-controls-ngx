import { Component, ViewChild } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { MatSidenav } from '@angular/material/sidenav';
import { TranslocoService } from '@ngneat/transloco';
import { PipThemesService, Theme } from 'pip-webui-themes-ngx';
import { combineLatest, map, Observable } from 'rxjs';
import { ExmapleListItem } from './examples-list/shared/ExampleListItem';
import { MainService } from './services/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  ctx$: Observable<{
    currentTheme: Theme;
    themes: Theme[];
  }>;
  public themes: Theme[];
  public theme: Theme;
  public url: string;

  list: ExmapleListItem[] = [
    {
      name: 'Reference list',
      id: 'ref-list',
      route: 'ref_list',
    },
    {
      name: 'Check list',
      id: 'check-list',
      route: 'check_list',
    },
    {
      name: 'Color picker',
      id: 'color-picker',
      route: 'color_picker',
    },
    {
      name: 'Empty state',
      id: 'empty-state',
      route: 'empty_state',
    },
    {
      name: 'Parts',
      id: 'parts',
      route: 'parts',
    },
    {
      name: 'Jumbotron',
      id: 'jumbotron',
      route: 'jumbotron',
    },
    {
      name: 'Slider',
      id: 'slider',
      route: 'slider',
    },
    {
      name: 'Search input',
      id: 'search_input',
      route: 'search_input',
    },
  ];
  @ViewChild('sidenav') sidenav: MatSidenav;

  public constructor(
    private pipThemes: PipThemesService,
    public mainService: MainService,
    public media: MediaObserver,
    public translate: TranslocoService,
  ) {
    this.pipThemes.selectTheme(this.pipThemes.config.defaultThemeName).then();
    this.mainService.breadcrumbs = [{ title: 'title' }];
    this.ctx$ = combineLatest({
      currentTheme: this.pipThemes.currentTheme$,
      themes: this.pipThemes.themes$.pipe(map((themes) => Array.from(themes.values()))),
    });
  }

  changeTheme(theme: Theme) {
    this.pipThemes.selectTheme(theme.name).then();
  }
}
