import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PhoneService } from './phone.service';
import { PhonesComponent } from './phones/phones.component';
import { PhoneBrandsComponent } from './phone-brands/phone-brands.component';

@NgModule({
  declarations: [AppComponent, PhonesComponent, PhoneBrandsComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [PhoneService],
  bootstrap: [AppComponent],
})
export class AppModule {}
