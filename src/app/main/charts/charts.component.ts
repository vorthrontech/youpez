import {Component, OnInit} from '@angular/core'
import charts from '../../../@youpez/data/charts'

@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.css'],
    standalone: false
})
export class ChartsComponent implements OnInit {

  public charts = charts

  constructor() {
  }

  ngOnInit(): void {
  }

}
