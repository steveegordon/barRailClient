import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'
import { Data } from '../../Data';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  providers: [ DataService ],
  styleUrls: ['./data.component.sass']
})
export class DataComponent implements OnInit {
  data$: any[] = [];
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

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // this.data$ = this.dataService.getData();
    this.dataService.sourceUsers().subscribe((usrs:any)=>{
      this.data$.push(usrs);
    });
    console.log(this.data$);
  }

  post() {
    this.dataService
      .postData(this.newData)
      .subscribe(data => this.data$);
  }

}
