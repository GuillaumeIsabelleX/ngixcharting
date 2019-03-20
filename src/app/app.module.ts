import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChartsModule} from 'ng2-charts';
import { TestNg2chartsInstallationComponent } from './tests/test-ng2charts-installation/test-ng2charts-installation.component';

@NgModule({
  declarations: [
    AppComponent,
    TestNg2chartsInstallationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
