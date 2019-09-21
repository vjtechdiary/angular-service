import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  writeToLog(logMessage: string) {
    console.log(logMessage);
  }
}
