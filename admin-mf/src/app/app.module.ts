import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FacultyComponent } from './pages/faculty/faculty.component';
import { DutyAllocationComponent } from './pages/duty-allocation/duty-allocation.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FacultyComponent,
    DutyAllocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
