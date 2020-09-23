import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../phone.service';
import { map } from 'rxjs/operators';
import { PhoneBrand } from '../phone-brand.mode';
import { Option } from '../option';

@Component({
  selector: 'app-phone-brands',
  templateUrl: './phone-brands.component.html',
  styleUrls: ['./phone-brands.component.css'],
})
export class PhoneBrandsComponent implements OnInit {
  constructor(private phoneService: PhoneService) {}

  title = [];

  ngOnInit(): void {
    this.getPhoneBrands();
  }

  phoneModels: Option[] = [];
  phoneBrand: PhoneBrand;

  getPhoneBrands() {
    this.phoneService.getPhoneBrands().subscribe((brands: PhoneBrand) => {
      this.phoneBrand = brands;
      this.phoneModels = this.phoneBrand.options;
    });
  }
}
