import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent } from './Login/loginpage/loginpage.component';
import { OrderspageComponent } from './Orders/orderspage/orderspage.component';

const routes: Routes = [{
  path:'',component:LoginpageComponent
},
{
  path:'oders',component:OrderspageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
