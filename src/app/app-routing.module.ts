import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TopMenuComponent } from './top-menu/top-menu.component';


const routes: Routes = [
  { path: "", pathMatch: "full", component: HomeComponent },
  { path: "topmenu", component: TopMenuComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
