import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { mstThemes, PipThemesModule, pipWebUI2ThemesList } from 'pip-webui-themes-ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckListExampleModule } from './check-list-example/check-list-example.module';
import { ColorPickerExampleModule } from './color-picker-example/color-picker-example.module';
import { EmptyStateExampleModule } from './empty-state-example/empty-state-example.module';
import { ExamplesListModule } from './examples-list/examples-list.module';
import { JumbotronExampleModule } from './jumbotron-example/jumbotron-example.module';
import { PartsExampleModule } from './parts-example/parts-example.module';
import { RefListExampleModule } from './ref-list-example/ref-list-example.module';
import { SearchInputExampleModule } from './search-input-example/search-input-example.module';
import { SliderExampleModule } from './slider-example/slider-example.module';
import { TranslocoRootModule } from './transloco-root.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSelectModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    PipThemesModule.forRoot({
      themes: [...pipWebUI2ThemesList, mstThemes['Elegant']],
    }),
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
    HttpClientModule,
    TranslocoRootModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
