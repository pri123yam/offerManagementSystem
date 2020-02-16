import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreateOfferComponent } from './offer/create-offer/create-offer.component';
import { ShowOfferComponent } from './offer/show-offer/show-offer.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { BrandSelectionComponent } from './offer/create-offer/brand-selection/brand-selection.component';
import {HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { GeoSelectionComponent } from './offer/create-offer/geo-selection/geo-selection.component';
import { TacticComponent } from './tactic/tactic.component';
import { ViewTacticComponent } from './tactic/view-tactic/view-tactic.component';
import { LeaseSelectionComponent } from './offer/create-offer/lease-selection/lease-selection.component';
import { TacticSelectionComponent } from './offer/create-offer/tactic-selection/tactic-selection.component';
import { CreateTacticComponent } from './tactic/create-tactic/create-tactic.component';
import { ValidationPeriodComponent } from './offer/create-offer/validation-period/validation-period.component';
import { PreviewAllComponent } from './offer/create-offer/preview-all/preview-all.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateOfferComponent,
    ShowOfferComponent,
    SideNavigationComponent,
    BrandSelectionComponent,
    DashboardComponent,
    TacticComponent,
    LeaseSelectionComponent,
    TacticSelectionComponent,
    ViewTacticComponent,
    CreateTacticComponent,
    ValidationPeriodComponent,
    PreviewAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
