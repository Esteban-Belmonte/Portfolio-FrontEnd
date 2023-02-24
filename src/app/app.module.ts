import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { HttpClientModule } from '@angular/common/http';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/login.component';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AcercaDeService } from './servicios/acerca-de.service';
import { PortfolioService } from './servicios/portfolio.service';
import { EducacionService } from './servicios/educacion.service';
import { SkillsService } from './servicios/skills.service';
import { ProyectoService } from './servicios/proyectos.service';
import { PersonaService } from './servicios/persona.service';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    IniciarSesionComponent,
    PorfolioComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AcercaDeService,
    AcercaDeComponent,
    PortfolioService,
    EducacionService,
    EducacionComponent,
    SkillsComponent,
    SkillsService,
    ProyectoService,
    ProyectosComponent,
    PersonaService,
    EncabezadoComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
