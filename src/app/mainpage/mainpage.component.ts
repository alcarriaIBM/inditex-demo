import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class MainpageComponent implements OnInit {

  isCollapsed = false;
  images = ["../../assets/1.jpg","../../assets/2.jpg","../../assets/3.jpg"];

  conversacion = {
    input: '',
    output: ''
  };
  words = {
    input:'',
    output: ''
  };

  constructor(private http: HttpClient, private router: Router,config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 4000;
    config.wrap = false;
    config.keyboard = false;
   }

  ngOnInit() {
  }

  ngOnChanges()	{

  }


  addConversacion() {

    this.http.post('/mpage', this.conversacion).subscribe (res => {

        //console.log(JSON.stringify(res, null, 2));

        this.words.input = res["input"]["text"];
        this.words.output = res["output"]["text"];
        this.conversacion.input = "";

        //this.router.navigate(['/mainpage'],this.words);
    }, (err) => {
          console.log(err);
        }
      );
}



}
