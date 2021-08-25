import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FizzbuzzComponent } from './fizzbuzz/fizzbuzz.component';
import { FibonaaciComponent } from './fibonaaci/fibonaaci.component';
import { MagicGetterSetterComponent } from './magic-getter-setter/magic-getter-setter.component';
import { FibonaaciPipe } from './fibonaaci/fibonaaci.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FizzbuzzComponent,
    FibonaaciComponent,
    MagicGetterSetterComponent,
    FibonaaciPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
