import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SeedGenerationComponent} from "./seed-generation/seed-generation.component";

const routes: Routes = [
  { path: 'seed-generation', component: SeedGenerationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
