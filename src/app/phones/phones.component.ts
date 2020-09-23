import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css'],
})
export class PhonesComponent implements OnInit {
  constructor(private phoneService: PhoneService) {}

  phones = [];

  ngOnInit(): void {
    this.getPhones();
  }

  getPhones() {
    this.phoneService.getPhones().subscribe((phones) => {
      console.log(phones);
    });
  }
}
