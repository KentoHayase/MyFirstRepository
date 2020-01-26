import { MessageComponent } from 'src/app/message/message.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-hello',
    templateUrl: './hello.component.html',
    styleUrls: ['./hello.component.css'],
})
export class HelloComponent implements OnInit {
    title: string;
    message: string[];
    lastTarget: any;
    lastColor: string;
    input1: string;
    @ViewChild(MessageComponent, { static: false }) private msgComponent: MessageComponent;

    constructor() {}

    ngOnInit() {
        this.title = 'hello-app';
        this.message = ['First item', 'Second item', 'Third item'];
        this.input1 = '';
    }

    push() {
        if (this.input1 == '') {
            alert('テキスト入れて');
            return;
        }
        this.msgComponent.push(this.input1);
        this.input1 = '';
    }

    pop() {
        this.msgComponent.pop();
    }

    doClick(event) {
        if (this.lastTarget != null) {
            this.lastTarget.style.color = this.lastColor;
            this.lastTarget.style.backgroundColor = 'white';
        }
        this.lastTarget = event.target;
        this.lastColor = event.target.style.color;
        event.target.style.color = 'white';
        event.target.style.backgroundColor = 'red';
    }
}
