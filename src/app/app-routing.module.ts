import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageComponent } from './image/image.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'app-image',
    component: ImageComponent,
  },
  {
    path:'',
    component:AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
