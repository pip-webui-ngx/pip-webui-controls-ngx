import { TestBed, async } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslocoTestingModule } from '@ngneat/transloco';
import { PipThemesModule } from 'pip-webui-themes-ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CheckListExampleModule } from './check-list-example/check-list-example.module';
import { ColorPickerExampleModule } from './color-picker-example/color-picker-example.module';
import { EmptyStateExampleModule } from './empty-state-example/empty-state-example.module';
import { JumbotronExampleModule } from './jumbotron-example/jumbotron-example.module';
import { ExamplesListModule } from './examples-list/examples-list.module';
import { PartsExampleModule } from './parts-example/parts-example.module';
import { RefListExampleModule } from './ref-list-example/ref-list-example.module';
import { SearchInputExampleModule } from './search-input-example/search-input-example.module';
import { SliderExampleModule } from './slider-example/slider-example.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        NoopAnimationsModule,
        FlexLayoutModule,
        MatToolbarModule,
        MatSelectModule,
        MatSidenavModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        TranslocoTestingModule,
        PipThemesModule.forRoot(),
        AppRoutingModule,
        CheckListExampleModule,
        ColorPickerExampleModule,
        EmptyStateExampleModule,
        JumbotronExampleModule,
        ExamplesListModule,
        PartsExampleModule,
        RefListExampleModule,
        SearchInputExampleModule,
        SliderExampleModule,
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
