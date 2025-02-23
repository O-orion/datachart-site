import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { IntersectionObserverDirective } from './interceptors/IntersectionObserverDirective.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreinamentosCarrouselComponent } from './components/treinamentos-carrousel/treinamentos-carrousel.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { FormContatoComponent } from './components/form-contato/form-contato.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    TreinamentosCarrouselComponent,
    CursosComponent,
    FormContatoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IntersectionObserverDirective,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
