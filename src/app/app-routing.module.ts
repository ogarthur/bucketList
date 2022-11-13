import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages-routing.module';
// route guard
import { AuthGuard } from './shared/guard/auth.guard';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    PagesRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }