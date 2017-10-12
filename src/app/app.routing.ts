import { RouterModule, Routes } from '@angular/router';

// Required components
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { FieldComponent } from './field/field.component' ;

const routes: Routes = [
    {path: 'Auth', component: AuthComponent},
    {path: '', component: HomeComponent},
    {path: 'Field', component: FieldComponent}
];

export const routing = RouterModule.forRoot(routes);
