import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMakeupComponent } from './add-makeup/add-makeup.component';
import { MakeupComponent } from './makeup/makeup.component';
import { UpdateMakeupComponent } from './update-makeup/update-makeup.component';

const routes: Routes = [
  {path:'makeup',component : MakeupComponent},
  {path:'add-makeup',component : AddMakeupComponent},
  { path: "", redirectTo: "produits", pathMatch: "full" },
  {path: "updateMakeup/:id", component: UpdateMakeupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
