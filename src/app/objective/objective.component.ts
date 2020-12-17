import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-objective',
  templateUrl: './objective.component.html',
  styleUrls: ['./objective.component.css']
})
export class ObjectiveComponent implements OnInit {

   constructor(
public alertController: AlertController) { }

  ngOnInit() {
  }
async apply() {
const alert = await this.alertController.create({
cssClass: 'secondary',
header:'You Want to Apply?',
message:'Contact : Mrs Ntshangase | 063 210 7053',

        buttons: [{ text: 'Cancel', role: 'cancel' },
                  { text: 'ok', handler: (todo) => {
 
          }
        }
      ]
    });
    alert.present();
}
}