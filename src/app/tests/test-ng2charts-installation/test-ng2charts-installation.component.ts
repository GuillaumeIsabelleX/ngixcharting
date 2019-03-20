import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-ng2charts-installation',
  templateUrl: './test-ng2charts-installation.component.html',
  styleUrls: ['./test-ng2charts-installation.component.scss']
})
export class TestNg2chartsInstallationComponent implements OnInit {

  chartOptions = {
    responsive: true
  };

  chartData = [
    { data: [12, 22, 34, 13, 15, 27] },
    { data: [11, 22, 32, 18, 15, 27] }
  ];
  chartLabels = ['a', 'b', 'c', 'd', 'e', 'f'];

  onChartClick(event){
    console.log(event);
  }

  constructor() { }

  ngOnInit() {
  }

}
