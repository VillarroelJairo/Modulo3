import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {}; from ''
import {}; from ''
import {}; from ''

const routes: Routes = [
  {path: 'inicio', },
  {path: 'otra-pagina', },
  {path: 'sobre-nosotros', }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModuleTsModule { }
