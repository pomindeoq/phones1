import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../phone.service';
import { map } from 'rxjs/operators';
import { PhoneBrand } from '../phone-brand.mode';

@Component({
  selector: 'app-phone-brands',
  templateUrl: './phone-brands.component.html',
  styleUrls: ['./phone-brands.component.css'],
})
export class PhoneBrandsComponent implements OnInit {
  constructor(private phoneService: PhoneService) {}

  brands: any = [];

  title = [];

  ngOnInit(): void {
    this.getPhoneBrands();
  }

  phoneBrands = [];

  getPhoneBrands() {
    this.phoneService
      .getPhoneBrands()
      .pipe(
        map((responseData) => {
          const Brands = [];
          for (const key in responseData) {
            Brands.push(responseData[key]);
          }
          return Brands;
        })
      )
      .subscribe((brands) => {
        this.phoneBrands = brands;
        brands = this.phoneBrands[2];
      });
  }
}
