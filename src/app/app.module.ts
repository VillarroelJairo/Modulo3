import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { BodyComponent } from './componentes/body/body.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { LoginComponent } from './componentes/header/login/login.component';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModuleTsModule } from './app-routing.module.ts/app-routing.module.ts.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModuleTsModule
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent, BodyComponent, FooterComponent, LoginComponent]
})
export class AppModule { }
