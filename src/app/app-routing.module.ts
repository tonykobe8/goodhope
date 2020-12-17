import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { MissionComponent } from './mission/mission.component';
import { ObjectiveComponent } from './objective/objective.component';
import { TargetComponent } from './target/target.component';

import { ServiceComponent } from './service/service.component';
import { DeveloperComponent } from './developer/developer.component';

const routes: Routes = [
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  {path:'' ,component:HomeComponent},{path:'about' ,component:AboutComponent },
 {path:'home' ,component: HomeComponent},{path:'contact' , component:ContactComponent},{path:'mission' , component:MissionComponent},{path:'objective' , component:ObjectiveComponent},{path:'target' , component:TargetComponent},
 {path:'service' , component:ServiceComponent},{path:'developer' , component:DeveloperComponent }
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
