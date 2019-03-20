# ngixcharting

Mastery Experimentation to Mastery Charting using Angular and relevant Charting package such as ng2-chart

https://guillaumeisabellex.github.io/ngixcharting/docs/

https://stackblitz.com/edit/angular-ng2-charts-190320?file=app%2Fline-chart.component.html

## Installation

```bash
npm install ng2-charts chart.js --save

#optional 
npm i ng2-charts-schematics --save-dev
```

### angular.json
```json
 {
    "styles": ["./node_modules/chart.js/dist/Chart.min.css",
              "src/styles.scss"
            ],

   "scripts": ["./node_modules/chart.js/dist/Chart.min.js"]
 }
 ```
 ### app.modules.ts
 ```typescript

import { ChartsModule} from 'ng2-charts';
//...

@NgModule({
  imports: [
    ChartsModule,
    //...
 ```