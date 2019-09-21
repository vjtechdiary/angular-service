import { LogService } from './log.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularservice';

  constructor(logservice: LogService){
    logservice.writeToLog('Log Service Message');
  }
}
