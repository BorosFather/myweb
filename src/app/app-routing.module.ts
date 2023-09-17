import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModellComponent } from './modell/modell.component';
import { ProjectComponent } from './project/project.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "modell", component: ModellComponent},
  {path: "project", component: ProjectComponent},
  {path: "about", component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
