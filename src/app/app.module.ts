import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule} from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MissionComponent } from './mission/mission.component';
import { ObjectiveComponent } from './objective/objective.component';
import { TargetComponent } from './target/target.component';
import { DevComponent } from './dev/dev.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';




@NgModule({
  declarations: [AppComponent, HomeComponent, ContactComponent, MissionComponent, ObjectiveComponent, TargetComponent, DevComponent, AboutComponent, ServiceComponent],
   imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule],
 
  bootstrap: [AppComponent]
})
export class AppModule {}
