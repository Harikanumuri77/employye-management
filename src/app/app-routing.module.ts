import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { EmphomeComponent } from './emphome/emphome.component';


const routes: Routes = [
  { path: '', component: EmphomeComponent },

  { path: 'add', component: AddComponent },
  { path: 'edit', component: EditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
