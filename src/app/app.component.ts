import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'stopWatch';

  ngOnInit(): void {}
  seconds: number = 0;
  minutes: number = 0;
  hour: number = 0;
  interval: any;

  start() {
    this.interval = setInterval(() => {
      this.seconds++;
      if (this.seconds > 59) {
        this.minutes++;
        this.seconds = 0;
      }
    }, 1000);
  }

  reset() {
    this.seconds = 0;
    this.minutes = 0;
    clearInterval(this.interval);
  }
}
