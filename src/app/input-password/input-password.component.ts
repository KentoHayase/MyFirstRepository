import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-input-password",
    templateUrl: "./input-password.component.html",
    styleUrls: ["./input-password.component.scss"]
})
export class InputPasswordComponent implements OnInit {
    private password: string;
    private passwordFlg = false;
    private passwordType = "password";

    /**
     * 入力された内容の最小文字数チェック
     */
    public readonly min: number = 7;

    /**
     * 入力された内容の最大文字数チェック
     */
    public readonly max: number = 15;

    /**
     * 入力された内容のパターンチェック
     * 半角英数記号のみ許可、スペースなし
     */
    public readonly pattern: string = "^[A-Za-z0-9]+$";
    constructor() {}

    passwordTypeChange() {
        if (!this.passwordFlg) {
            this.passwordType = "password";
        } else {
            this.passwordType = "text";
        }
    }

    ngOnInit() {}
}
