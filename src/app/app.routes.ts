import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ImprintComponent } from './shared/components/legal/imprint/imprint.component';
import { LegalNoticeComponent } from './shared/components/legal/legal-notice/legal-notice.component';
import { TermsComponent } from './shared/components/legal/terms/terms.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    component: MainContentComponent,
    title: 'behutsam-stark',
  },

  {
    path: 'about',
    component: AboutComponent,
    title: 'Über mich',
  },

  {
    path: 'legal',
    children: [
      {
        path: 'notice',
        component: LegalNoticeComponent,
        title: 'Datenschutzerklärung',
      },
      { path: 'imprint', component: ImprintComponent, title: 'Impressum' },
      { path: 'terms', component: TermsComponent, title: 'AGB' },
    ],
  },
];
