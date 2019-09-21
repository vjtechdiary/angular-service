import { LogService } from './../log.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(logservicefromUser: LogService) {
    logservicefromUser.writeToLog('Log Message from User Component');
  }

  ngOnInit() {
  }

}
