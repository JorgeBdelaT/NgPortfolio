import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutMePageComponent } from './pages/about-me-page/about-me-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'about',
    // loadChildren: () =>
    //   import('./pages/about-me-page/about-me-page.module').then(
    //     (m) => m.AboutMePageModule
    //   ),
    component: AboutMePageComponent,
  },
  {
    path: 'whatido',
    loadChildren: () =>
      import('./pages/what-i-do-page/what-i-do-page.module').then(
        (m) => m.WhatIDoPageModule
      ),
  },
  {
    path: 'skills',
    loadChildren: () =>
      import('./pages/skills-page/skills-page.module').then(
        (m) => m.SkillsPageModule
      ),
  },
  {
    path: 'experience',
    loadChildren: () =>
      import('./pages/experience-page/experience-page.module').then(
        (m) => m.ExperiencePageModule
      ),
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./pages/projects-page/projects-page.module').then(
        (m) => m.ProjectsPageModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./pages/contact-page/contact-page.module').then(
        (m) => m.ContactPageModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/home-page/home-page.module').then(
        (m) => m.HomePageModule
      ),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // scrollOffset: () => [0, 30],
      // scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
