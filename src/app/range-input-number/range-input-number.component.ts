import { Component, OnInit, Input } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-range-input-number',
    templateUrl: './range-input-number.component.html',
    styleUrls: ['./range-input-number.component.scss'],
})
export class RangeInputNumberComponent implements OnInit {
    fromNum: number;
    toNum: number;
    msg: String;
    pattern: string | RegExp;
    isWrongOrder: boolean = true;
    @Input() minLength: number;
    @Input() maxLength: number;

    constructor() {}

    ngOnInit() {
        this.pattern = '[0-9]+$';
    }

    compareOrder() {
        this.isWrongOrder = Number(this.fromNum) < Number(this.toNum);
    }
}
