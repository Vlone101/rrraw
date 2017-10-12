import { Component/*, OnInit*/ } from '@angular/core';

import { NgxSiemaOptions/*, NgxSiemaService*/ } from 'ngx-siema';

import '../style/app.scss';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent /*implements OnInit*/ {
   
    constructor(/*private ngxSiemaService: NgxSiemaService*/) {
    }


    options: NgxSiemaOptions = {
        selector: '.siema',
        duration: 1000,
        easing: 'ease',
        perPage:1,
        startIndex: 0,
        draggable: false,
        threshold: 20,
        loop: true
    };

    /*viewHandler() {
        this.ngxSiemaService.prev(1)
            .subscribe((data: any) => console.log(data));
    }

    tik() {
        let but = document.getElementById('but');
        let event = new Event('click');
        but.dispatchEvent(event);
    }

    ngOnInit() {
        setInterval(() => {
            this.tik();
        },1500);
    }*/
}
