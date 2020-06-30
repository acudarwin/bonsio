import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { SectwholeComponent } from './sectwhole/sectwhole.component';
import { SectportfolioComponent } from './sectportfolio/sectportfolio.component';
import { SectgranularComponent } from './sectgranular/sectgranular.component';
import { SectreportComponent } from './sectreport/sectreport.component';
import { SectlivereportComponent } from './sectlivereport/sectlivereport.component';
import { SectworkflowComponent } from './sectworkflow/sectworkflow.component';
import { SupportComponent } from './support/support.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    SectwholeComponent,
    SectportfolioComponent,
    SectgranularComponent,
    SectreportComponent,
    SectlivereportComponent,
    SectworkflowComponent,
    SupportComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
