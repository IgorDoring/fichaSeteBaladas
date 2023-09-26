import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { GeneralInfoComponent } from './home/components/general-info/general-info.component';
import { AtributosComponent } from './home/components/atributos/atributos.component';
import { EquipamentoPericiaInfoComponent } from './home/components/equipamento-pericia-info/equipamento-pericia-info.component';
import { ArmasComponent } from './home/components/armas/armas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    GeneralInfoComponent,
    AtributosComponent,
    EquipamentoPericiaInfoComponent,
    ArmasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
