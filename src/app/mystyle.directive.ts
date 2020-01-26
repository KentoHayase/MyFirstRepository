import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
    selector: '[appMystyle]',
})
export class MystyleDirective implements OnInit {
    private el: ElementRef;
    @Input() c: string = 'black';
    @Input() bg: string = 'aqua';

    constructor(el: ElementRef) {
        this.el = el;
    }

    ngOnInit() {
        this.el.nativeElement.style.color = this.c;
        this.el.nativeElement.style.backgroundColor = this.bg;
    }
}
