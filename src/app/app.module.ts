import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { ClienteComponent } from './cliente/cliente.component';
import { DependienteComponent } from './dependiente/dependiente.component';
import { MainpageComponent } from './mainpage/mainpage.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes = [
  {
    path: 'mainpage',
    component: MainpageComponent,
    data: { title: 'Main Page' },
    pathMatch: 'full'
  },
  { path: 'cliente',
    component: ClienteComponent,
    data: { title: 'Cliente' }
  },
  { path: 'administrador',
    component: AdministradorComponent,
    data: { title: 'Administrador' }
  },
  { path: 'dependiente',
    component: DependienteComponent,
    data: { title: 'Dependiente' }
  },
  { path: '',
    redirectTo: '/mainpage',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    AdministradorComponent,
    ClienteComponent,
    DependienteComponent,
    MainpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
