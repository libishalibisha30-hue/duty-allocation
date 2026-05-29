import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FacultyComponent } from './pages/faculty/faculty.component';
import { DutyAllocationComponent } from './pages/duty-allocation/duty-allocation.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'faculty', component: FacultyComponent },
  { path: 'duty', component: DutyAllocationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}