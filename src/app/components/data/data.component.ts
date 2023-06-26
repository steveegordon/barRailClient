import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'
import { Data } from '../../Data';
import { Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  providers: [ DataService ],
  styleUrls: ['./data.component.sass']
})
export class DataComponent implements OnInit {
  socketData: any;
  sub!: Subscription;
  newData: Data = {
  time: '2023-06-14 20:15:00',
  s1: 25.36,
  s2: 25.36,
  s3: 25.36,
  s4: 25.36,
  s5: 25.36,
  s6: 25.36,
  s7: 25.36,
  s8: 25.36,
  }

  constructor(private dataService: DataService) {
    this.dataService.getEventListener().subscribe(() => console.log('wizzywig'));
  }

  ngOnInit(): void {
    
  }
  // getSocketData(): void {
  //   this.sub = this.dataService.sourceData()
  //     .subscribe(data => {
  //       this.socketData = data
  //     })
  post() {
    // console.log(this.socketData);
    // this.dataService
    //   .postData(this.newData)
    //   .subscribe(data => this.data$);
  }
}
