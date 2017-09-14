import { NgModule } from '@angular/core';
import { ChatComponent } from './chat/chat';
import { HoroscopesComponent } from './horoscopes/horoscopes';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SignsComponent } from './signs/signs';
@NgModule({
	declarations: [
    HoroscopesComponent,
    SignsComponent
  ],
	imports: [ ],
	exports: [ChatComponent,
    HoroscopesComponent,
    SignsComponent]
})
export class ComponentsModule {}
