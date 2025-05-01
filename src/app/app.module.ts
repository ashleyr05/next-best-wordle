import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuessformComponent } from './guessform/guessform.component';
import { provideHttpClient } from '@angular/common/http';
import { GuesslineComponent } from './guessline/guessline.component';
import { GuessboxComponent } from './guessbox/guessbox.component';

//https://cs4640.cs.virginia.edu/zwu6su/hw9/

@NgModule({
  declarations: [
    AppComponent,
    GuessformComponent,
    GuesslineComponent,
    GuessboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
