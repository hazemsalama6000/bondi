import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})

export class NumberService {

    constructor() { }

    callAfterViewInitial() {
        this.preventNumbers();
        this.preventText();
    }

    preventNumbers() {
        document.querySelector('.numbers-only')?.addEventListener('keydown', function (event: any) {
            const keyValue: any = event.key;
            if (isNaN(keyValue)) {
                event.preventDefault();
            }
        })
    }

    preventText() {
        document.querySelector('.text-only')?.addEventListener('keydown', function (event: any) {
            const keyValue: any = event.key;
            if (!isNaN(keyValue)) {
                event.preventDefault();
            }
        });
    }

}