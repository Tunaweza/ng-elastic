import { ElementRef, AfterViewInit, OnInit, OnDestroy, NgZone } from '@angular/core';
import { NgModel } from '@angular/forms';
export declare class ElasticDirective implements OnInit, OnDestroy, AfterViewInit {
    private element;
    private ngZone;
    private model;
    private modelSub;
    private textareaEl;
    constructor(element: ElementRef, ngZone: NgZone, model: NgModel);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    onInput(): void;
    private isTextarea(el);
    private setupTextarea(textareaEl);
    private adjust();
}
