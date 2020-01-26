import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { FlatpickrOptions, FlatpickrEvent } from "ng2-flatpickr";
import { Japanese } from "flatpickr/dist/l10n/ja.js";
import { Output, EventEmitter } from "@angular/core";
import { from } from "rxjs";
@Component({
    selector: "app-input-datetime",
    templateUrl: "./input-datetime.component.html",
    styleUrls: ["./input-datetime.component.scss"]
})
export class InputDatetimeComponent implements OnInit {
    @Input() flgBOrE: boolean; //true⇒開始日 ,false⇒終了日
    @Output() event = new EventEmitter<string>();
    @Input() isEnableTime: boolean;
    @ViewChild("dateB", { static: true }) dateBigining;
    @ViewChild("dateE", { static: true }) dateEnd;
    // 開始日のOptions
    optionsBigining: FlatpickrOptions;

    // 終了日のOptions
    optionsEnd: FlatpickrOptions;
    endDate = new Date();

    constructor() {}

    ngOnInit() {
        this.endDate.setHours(23, 59, 59);

        this.optionsBigining = {
            locale: Japanese, // ロケールを日本
            enableTime: this.isEnableTime, // 時刻選択を有効
            enableSeconds: true, // 秒選択を有効
            time_24hr: true, // 24時間表記を有効
            defaultDate: "today", //デフォルトで今日
            altInput: true, //「代替表記用input要素を生成します。」??
            altFormat: this.isEnableTime ? "Y-m-d H:i:S" : "Y-m-d", //表示の書式
            allowInput: true, //直接入力を許可
            altInputClas: "form-control" //スタイルを適用
        };

        this.optionsEnd = {
            locale: Japanese, // ロケールを日本
            enableTime: this.isEnableTime, // 時刻選択を有効
            enableSeconds: true, // 秒選択を有効
            time_24hr: true, // 24時間表記を有効
            defaultDate: this.endDate,
            altInput: true, //「代替表記用input要素を生成します。」??
            altFormat: this.isEnableTime ? "Y-m-d H:i:S" : "Y-m-d", //表示の書式
            allowInput: true, //直接入力を許可
            altInputClas: "form-control" //スタイルを適用
        };
    }

    //カレンダーのアイコンをクリックしてカレンダーを表示させるメソッド
    toggleB(): void {
        this.dateBigining.flatpickr.open();
        console.log("OK");
    }
    toggleE(): void {
        console.log("OK");
        console.log(this.dateEnd);
        // this.dateEnd.flatpickr.toggle();
    }
    onClick() {
        this.event.emit(
            "子コンポーネントから親コンポーネントへデータを渡す際はイベントを経由します。"
        );
    }
}
