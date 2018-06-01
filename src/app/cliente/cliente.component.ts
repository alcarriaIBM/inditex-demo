import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ClienteComponent implements OnInit {


    isCollapsed = false;
    images: any;
    imagesRaw: any;

    busquedaImagenes = '';

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
     this.http.get('https://picsum.photos/list')
         .subscribe(images => this.imagesRaw = images);
   }

    ngOnChanges()	{

    }


    findAuthors () {
      this.images = this.imagesRaw.filter(
          image => image.author.toLowerCase().indexOf(this.conversacion.input.toLowerCase()) > -1);
     }

    addConversacion() {

      this.http.post('/clientep', this.conversacion).subscribe (res => {

          //console.log(JSON.stringify(res, null, 2));

          this.words.input = res["input"]["text"];
          this.words.output = res["output"]["text"];
          this.conversacion.input = "";
          this.busquedaImagenes = ''; //valor que se pasará para el filtro de imágenes.

          //this.router.navigate(['/mainpage'],this.words);
      }, (err) => {
            console.log(err);
          }
        );
  }



  }
