import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SeedGenerationComponent} from "./seed-generation/seed-generation.component";
import {BalanceComponent} from "./balance/balance.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  { path: 'seed-generation', component: SeedGenerationComponent },
  {path: 'balance', component: BalanceComponent },
  {path: '', redirectTo: 'home', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
