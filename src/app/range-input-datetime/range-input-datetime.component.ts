import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FlatpickrOptions, FlatpickrEvent } from 'ng2-flatpickr';
import { Japanese } from 'flatpickr/dist/l10n/ja.js';
import { Output, EventEmitter } from '@angular/core';
import { from } from 'rxjs';

@Component({
    selector: 'app-range-input-datetime',
    templateUrl: './range-input-datetime.component.html',
    styleUrls: ['./range-input-datetime.component.scss'],
})
export class RangeInputDatetimeComponent implements OnInit {
    @Input() flgBOrE: boolean; //true⇒開始日 ,false⇒終了日
    @Output() event = new EventEmitter<string>();
    @Input() isEnableTime: boolean;
    @ViewChild('dateB', { static: true }) dateBigining;
    @ViewChild('dateE', { static: true }) dateEnd;
    valueB = [new Date()];
    valueE = [new Date()];

    @Input() set vb(value: Date) {
        if (this.valueE[0] >= value) {
            this.valueB[0] = value;
        } else {
        }
    }

    // 開始日のOptions
    optionsBigining: FlatpickrOptions;
    beginningDate = new Date();

    // 終了日のOptions
    optionsEnd: FlatpickrOptions;
    endDate = new Date();

    constructor() {}

    compareDateOrder(valueB, valueE) {
        return valueB > valueE ? null : { compareOrder: { valid: false } };
    }

    ngOnInit() {
        if (this.isEnableTime) {
            this.beginningDate.setHours(0, 0, 0);
            this.endDate.setHours(23, 59, 59);
        } else {
            this.beginningDate.setDate(1);

            this.endDate.setMonth(this.endDate.getMonth() + 1);
            this.endDate.setDate(0);
        }

        this.optionsBigining = {
            locale: Japanese, // ロケールを日本
            enableTime: this.isEnableTime, // 時刻選択を有効
            enableSeconds: true, // 秒選択を有効
            time_24hr: true, // 24時間表記を有効
            defaultDate: this.beginningDate, //デフォルトで今日
            altInput: true, //「代替表記用input要素を生成します。」??
            altFormat: this.isEnableTime ? 'Y-m-d H:i:S' : 'Y-m-d', //表示の書式
            allowInput: true, //直接入力を許可
            altInputClass: 'hoge', //スタイルを適用
            maxDate: this.valueE[0],
        };

        this.optionsEnd = {
            locale: Japanese, // ロケールを日本
            enableTime: this.isEnableTime, // 時刻選択を有効
            enableSeconds: true, // 秒選択を有効
            time_24hr: true, // 24時間表記を有効
            defaultDate: this.endDate,
            altInput: true, //「代替表記用input要素を生成します。」??
            altFormat: this.isEnableTime ? 'Y-m-d H:i:S' : 'Y-m-d', //表示の書式
            allowInput: true, //直接入力を許可
            altInputClass: 'form-control', //スタイルを適用
            minDate: this.valueB[0],
        };
    }
    debug() {
        if (this.valueB.length === 0 || this.valueE.length === 0) {
            this.valueB = [new Date()];
            // if (this.isEnableTime) {
            //     this.beginningDate.setHours(0, 0, 0);
            //     this.endDate.setHours(23, 59, 59);
            // } else {
            //     this.beginningDate.setDate(1);

            //     this.endDate.setMonth(this.endDate.getMonth() + 1);
            //     this.endDate.setDate(0);
            // }
        }
        console.log({ 開始日: this.valueB, 終了日: this.valueE });
    }
}
