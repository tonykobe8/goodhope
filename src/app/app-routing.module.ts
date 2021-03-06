import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { MissionComponent } from './mission/mission.component';
import { ObjectiveComponent } from './objective/objective.component';
import { TargetComponent } from './target/target.component';

import { ServiceComponent } from './service/service.component';
import { MenuComponent } from './menu/menu.component';
import { DevComponent } from './dev/dev.component';



import { TeachersComponent } from './teachers/teachers.component';
import { SustainComponent } from './sustain/sustain.component';

const routes: Routes = [
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  {path:'' ,component:HomeComponent},
  {path:'about' ,component:AboutComponent },
  {path:'menu' ,component: MenuComponent},
 {path:'home' ,component: HomeComponent},{path:'contact' , 
 component:ContactComponent},{path:'mission' , component:MissionComponent},{path:'objective' , component:ObjectiveComponent},{path:'target' , component:TargetComponent}, {path:'service' , component:ServiceComponent},
 {path:'dev' , component:DevComponent },{path:'teachers' , component:TeachersComponent },{path:'sustain' , component:SustainComponent }
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
