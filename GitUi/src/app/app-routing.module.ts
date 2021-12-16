import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchhistoryComponent } from './searchhistory/searchhistory.component';
import { SearchprofileComponent } from './searchprofile/searchprofile.component';

const routes: Routes = [
  {path:'searchUser',component: SearchprofileComponent},
  {path: 'history',component :SearchhistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
