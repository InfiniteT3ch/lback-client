import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { MainComponent } from './app/main/main';
import { BackupsComponent } from './app/backups/backups.component';
import { RestoresComponent } from './app/restores/restores.component';
import { HomeComponent } from './app/home/home.component';
import { UsesrComponent } from './app/users/users.component';
import { LbackService } from './app/lback.service';
import { LibService } from './app/lib.service';
import { Routes, RouterModule } '@angular/router';

if (environment.production) {
  enableProdMode();
}

const appRoutes: Routes = [ 
  {
   "path": "/", "component", MainComponent,
  },
  {
   "path": "/home", "component": HomeComponent,
  },
  {
   "path": "/backups", "component": BackupsComponent,
  },
  {
   "path": "/restores", "component": RestoresComponent,
  },
  {
   "path": "/users", "component": UsersComponent
  }
];


bootstrap(AppComponent, {"imports": [RouterModule.forRoot(appRoutes)],
	 "providers": [LbackService, LibService]
});
