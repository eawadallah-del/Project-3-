import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FinanceComponent } from './finance/finance.component';
import { SalesComponent } from './sales/sales.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'finance', component: FinanceComponent },
  { path: 'sales', component: SalesComponent }
];