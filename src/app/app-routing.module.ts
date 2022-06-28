import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { BooksComponent } from './books/books.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'books',component:BooksComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'admin',component:AdminpageComponent},
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
