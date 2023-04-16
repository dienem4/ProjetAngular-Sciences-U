import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEtudiantComponent } from './create-etudiant/create-etudiant.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { EditEtudiantComponent } from './edit-etudiant/edit-etudiant.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'create', component: CreateEtudiantComponent, canActivate: [AuthGuard]},
  {path: 'list-etudiant', component: ListEtudiantComponent, canActivate: [AuthGuard]},
  {path: 'update-etudiant/:id', component: EditEtudiantComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

