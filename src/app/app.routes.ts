import {Routes} from '@angular/router';
import {MainPageComponent} from './pages/main/main-page.component';
import {NextPageComponent} from './pages/next/next-page.component';

export const routes: Routes = [
    {path: 'main', component: MainPageComponent},
    {path: 'next', component: NextPageComponent},
    {path: '', redirectTo: '/main', pathMatch: 'full'}
];
