import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateOfferComponent } from './offer/create-offer/create-offer.component';
import { AppComponent } from './app.component';
import { ShowOfferComponent } from './offer/show-offer/show-offer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { GeoSelectionComponent } from './offer/create-offer/geo-selection/geo-selection.component';
import { LeaseSelectionComponent } from './offer/create-offer/lease-selection/lease-selection.component';
import { TacticSelectionComponent } from './offer/create-offer/tactic-selection/tactic-selection.component';
import {ViewTacticComponent} from './tactic/view-tactic/view-tactic.component';
import { CreateTacticComponent } from './tactic/create-tactic/create-tactic.component';
import { ValidationPeriodComponent } from './offer/create-offer/validation-period/validation-period.component';
import { PreviewAllComponent } from './offer/create-offer/preview-all/preview-all.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path:'',redirectTo:'/dashboard', pathMatch :'full'},
  {path:'dashboard',component:DashboardComponent},
  // {path:'home', component: AppComponent},
  {path:'createoffer', component: CreateOfferComponent},
  // {path:'createoffer/selectGeo', component: GeoSelectionComponent},
  {path:'createoffer/sLease', component: LeaseSelectionComponent},
  {path:'createoffer/sTactic', component: TacticSelectionComponent},
  {path:'viewoffer', component: ShowOfferComponent},
  {path:'viewTactics', component: ViewTacticComponent},
  {path:'createTactics', component: CreateTacticComponent},
  {path:'createoffer/valDate', component: ValidationPeriodComponent},
  {path:'createoffer/preview', component: PreviewAllComponent},
  {path:'**',component: PageNotFoundComponent}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }