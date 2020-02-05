import { Component, OnInit, ViewChild, EventEmitter, Input, Output } from '@angular/core';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { NgModel } from '@angular/forms';

function permit() {}

@Component({
    selector: 'app-input-text',
    templateUrl: './input-text.component.html',
    styleUrls: ['./input-text.component.scss'],
})
export class InputStringComponent implements OnInit {
    public inputWord: string = null;
    public patternMsg: string;
    @Input() value: number;
    @Input() minLength: number;
    @Input() maxLength: number;
    @Input() isRequired: boolean;
    @Input() public pattern: string | RegExp;
    @Output() valueChange = new EventEmitter<string>();

    constructor() {}

    ngOnInit() {
        if (this.pattern === '[0-9]+$') {
            this.patternMsg = '半角数字のみ入力してください。';
        }
        if (this.pattern === '[A-Za-z0-9]+$') {
            this.patternMsg = '半角英数のみ入力してください。';
        }
        if (this.pattern === '[0-9a-zA-Z_@/*!#$%=+-]+$') {
            this.patternMsg = '半角英数字、記号（_@/*!#$%=+-）のみ入力してください。';
        }
        if (this.pattern === '[0-9a-zA-Z_@/*!#$%=+-Ａ-Ｚぁ-んァ-ヴｦ-ﾟs]+$') {
            this.patternMsg = '半角英数記号（_@/*!#$%=+-）および全角文字のみ入力してください。';
        }
    }
}
