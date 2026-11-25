import { Routes } from '@angular/router';
import { MainPage } from './main-page/main-page';
import { Imprint } from './imprint/imprint';
import { PrivacyPolicy } from './privacy-policy/privacy-policy';

/**
 * All routes of the app. Unknown URLs redirect to the main page.
 */
export const routes: Routes = [
    { path: '', component: MainPage },
    { path: 'imprint', component: Imprint },
    { path: 'privacy-policy', component: PrivacyPolicy },
    { path: '**', redirectTo: '' }
];