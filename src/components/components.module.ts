import { NgModule } from '@angular/core';
import { ChatComponent } from './chat/chat';
import { HoroscopesComponent } from './horoscopes/horoscopes';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [
    HoroscopesComponent
  ],
	imports: [ ],
	exports: [ChatComponent,
    HoroscopesComponent]
})
export class ComponentsModule {}
