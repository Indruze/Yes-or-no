import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-landing',
  template: `
            <div class='image' *ngIf="yesno" [style.background-image]="'url(' + yesno.image + ')'">
              <h1>{{yesno?.answer}}</h1>
            </div>
            `,
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  yesno: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://yesno.wtf/api').subscribe(yesno => {
    this.yesno = yesno;
    });
  }

}
