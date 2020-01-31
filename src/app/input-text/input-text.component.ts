import {
    Component,
    OnInit,
    ViewChild,
    EventEmitter,
    Input,
    Output
} from "@angular/core";
import { NgbTooltip } from "@ng-bootstrap/ng-bootstrap";
import { NgModel } from "@angular/forms";

function permit() {}

@Component({
    selector: "app-input-text",
    templateUrl: "./input-text.component.html",
    styleUrls: ["./input-text.component.scss"]
})
export class InputStringComponent implements OnInit {
    /**
     * validaion のための双方向データバインドを行うプロパティ
     */
    public inputWord: string = null;
    @Input() value: number;
    @Input() minLength: number;
    @Input() maxLength: number;
    @Output() valueChange = new EventEmitter<string>();
    public msg: string;

    /**
     * 入力された内容の最小文字数チェック
     */
    // public readonly minLength: number = 7;

    /**
     * 入力された内容の最大文字数チェック
     */
    // public readonly maxLength: number = 15;

    /**
     * 入力された内容のパターンチェック
     * 半角英数記号のみ許可、スペースなし
     */
    @Input() public pattern: string | RegExp;

    constructor() {}

    ngOnInit() {
        if (this.pattern === "[0-9]+$") {
            this.msg = "半角数字のみ入力してください。";
        }
        if (this.pattern === "[A-Za-z0-9]+$") {
            this.msg = "半角英数のみ入力してください。";
        }
        if (this.pattern === "[0-9a-zA-Z_@/*!#$%=+-]+$") {
            this.msg = "半角英数字、記号（_@/*!#$%=+-）のみ入力してください。";
        }
        if (this.pattern === "[0-9a-zA-Z_@/*!#$%=+-Ａ-Ｚぁ-んァ-ヴｦ-ﾟs]+$") {
            this.msg =
                "半角英数記号（_@/*!#$%=+-）および全角文字のみ入力してください。";
        }
    }
}
