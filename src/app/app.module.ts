import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { from } from 'rxjs';
import { MessageComponent } from './message/message.component';
import { MystyleDirective } from './mystyle.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputDatetimeComponent } from './input-datetime/input-datetime.component';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import { RangeInputDatetimeComponent } from './range-input-datetime/range-input-datetime.component';

@NgModule({
    declarations: [
        AppComponent,
        HelloComponent,
        MessageComponent,
        MystyleDirective,
        InputDatetimeComponent,
        RangeInputDatetimeComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        Ng2FlatpickrModule,
    ],
    providers: [],
    bootstrap: [HelloComponent],
})
export class AppModule {}
