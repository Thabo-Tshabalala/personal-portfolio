import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ResumeComponent } from './resume/resume.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' }, 
  { path: 'about', component: AboutMeComponent },
  { path: 'resume', component: ResumeComponent },
  {path: 'projects', component: ProjectsComponent},
  { path: 'contact', component: ContactMeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
