import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';



import { MissionComponent } from './mission/mission.component';
import { ObjectiveComponent } from './objective/objective.component';
import { TargetComponent } from './target/target.component';




const routes: Routes = [
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  {path:'' ,component:HomeComponent},
 {path:'home' ,component: HomeComponent},{path:'contact' , component:ContactComponent},{path:'mission' , component:MissionComponent},{path:'objective' , component:ObjectiveComponent},{path:'target' , component:TargetComponent}
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
