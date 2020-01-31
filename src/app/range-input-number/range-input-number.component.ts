import { Component, OnInit, Input } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: "app-range-input-number",
    templateUrl: "./range-input-number.component.html",
    styleUrls: ["./range-input-number.component.scss"]
})
export class RangeInputNumberComponent implements OnInit {
    fromNum: number;
    toNum: number;
    msg: String;
    isWrongOrder: boolean = true;
    @Input() public pattern: string | RegExp;

    constructor() {}

    ngOnInit() {
        if (this.pattern === "[0-9]+$") {
            this.msg = "半角数字のみ入力してください。";
        }
    }

    compareOrder() {
        //     if (Number(this.fromNum) > Number(this.toNum)) {
        //         this.isWrongOrder = false;
        //     } else {
        //         this.isWrongOrder = true;
        // 	}
        this.isWrongOrder = Number(this.fromNum) < Number(this.toNum);
    }
}
