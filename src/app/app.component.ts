import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PhoneService } from './phone.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(private phoneService: PhoneService) {}

  ngOnInit() {}
}
