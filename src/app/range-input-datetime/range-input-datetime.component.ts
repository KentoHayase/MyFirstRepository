import { Component, OnInit, ViewChild, Input, ChangeDetectorRef } from '@angular/core';
import { FlatpickrOptions, FlatpickrEvent } from 'ng2-flatpickr';
import { Japanese } from 'flatpickr/dist/l10n/ja.js';
import { Output, EventEmitter } from '@angular/core';
import { from } from 'rxjs';
import flatpickr from 'flatpickr';
import { FlatpickrInstance } from 'ng2-flatpickr/src/flatpickr-instance';

@Component({
    selector: 'app-range-input-datetime',
    templateUrl: './range-input-datetime.component.html',
    styleUrls: ['./range-input-datetime.component.scss'],
})
export class RangeInputDatetimeComponent implements OnInit {
    @Input() flgBOrE: boolean; //true⇒開始日 ,false⇒終了日
    @Output() event = new EventEmitter<string>();
    @Input() isEnableTime: boolean;
    valueB = [new Date()];
    valueE = [new Date()];
    @ViewChild('dateB', { static: true }) pickerBigining;
    @ViewChild('dateE', { static: true }) pickerEnd;
    @Input() set _valueB(value: Date) {
        if (this.valueE[0] >= value) {
            this.valueB[0] = value;
        }
    }
    @Input() set _valueE(value: Date) {
        if (this.valueB[0] <= value) {
            this.valueE[0] = value;
        }
    }

    // 開始日のOptions
    optionsBigining: FlatpickrOptions;
    beginningDate = new Date();

    // 終了日のOptions
    optionsEnd: FlatpickrOptions;
    endDate = new Date();

    constructor() {}
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
        };
        console.log({ デフォ開始日: this.optionsBigining.defaultDate });

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
        console.log({ デフォ終了日: this.optionsEnd.defaultDate });
    }
    replace() {
        if (this.valueB.length === 0) {
            this.valueB[0] = this.beginningDate;
        }
        if (this.valueE.length === 0) {
            this.valueE[0] = this.endDate;
        }
        console.log({ 開始日: this.valueB[0], 終了日: this.valueE[0] });
    }
    replaceMinDate() {
        this.pickerEnd.flatpickr.set({
            minDate: new Date(this.valueB[0].setDate(this.valueB[0].getDate() + 1)),
        }); //一日刻み選べない問題発生中！！
    }
    replaceMaxDate() {
        this.pickerBigining.flatpickr.set({
            maxDate: new Date(this.valueE[0].setDate(this.valueE[0].getDate() - 1)),
        });
    }
}
