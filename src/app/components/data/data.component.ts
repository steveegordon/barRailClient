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
  data$!: Observable<Data[]>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.data$ = this.dataService.getData();
    console.log(this.data$);
  }

}
