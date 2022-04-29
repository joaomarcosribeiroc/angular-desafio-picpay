import { ReceiverService } from './receiver.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SectionTitleComponent } from './section-title/section-title.component';
import { ReceiverListComponent } from './receiver-list/receiver-list.component';
import { PayUserComponent } from './pay-user/pay-user.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SectionTitleComponent,
    ReceiverListComponent,
    PayUserComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    ReceiverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
