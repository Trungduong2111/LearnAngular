
import { Component } from '@angular/core';
import { DataService } from '../data.service'
@Component({
  selector: 'app-infomation',
  templateUrl: './infomation.component.html',
  styleUrls: ['./infomation.component.css'],
  providers: [DataService]
})
export class InfomationComponent {
  infoReceive1: string[] = [];
  infoReceive2: string[] = [];
  infoReceive3: string[] = [];

  getInfoFromService1() {
    this.infoReceive1 = this.dservice.getInfo1();

  }
  getInfoFromService2() {

    this.infoReceive2 = this.dservice.getInfo2();
  }
  getInfoFromService3() {
    this.infoReceive3 = this.dservice.getInfo3();
  }

  constructor(private dservice: DataService) {

  }
  updateInfo(frm :any){
    this.dservice.addInfo(frm.value.location)
  }
}
