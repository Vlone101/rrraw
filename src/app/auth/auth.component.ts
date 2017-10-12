import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'my-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
    usersTypes: string[] = ['Пользователь','Владелец'];

    ngOnInit() {
        document.getElementById('btn').classList.toggle('selected');
        document.getElementById('bt').classList.toggle('not-selected');
    }

    choseTypeOfRegistration(/*event: Event*/) {
        /*if(event.target.nextElementSibling !== null){
             event.target.classList.toggle('selected');
             event.target.classList.toggle('not-selected');
             if(event.target.nextElementSibling.classList.contains('selected')){
                 event.target.nextElementSibling.classList.remove('selected');
                 event.target.nextElementSibling.classList.add('not-selected');
             }
        }else{
            event.target.classList.toggle('selected');
            event.target.classList.toggle('not-selected');
            if(event.target.previousElementSibling.classList.contains('selected')){
                event.target.previousElementSibling.classList.remove('selected');
                event.target.previousElementSibling.classList.add('not-selected');
            }
        }*/
    }

}