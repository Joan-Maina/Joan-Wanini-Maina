import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public email:string = "mainajoan12@gmail.com";
  // public whatsapp:string = "https://wa.me/254712632595";

  towhatsapp(url:string){
    window.location.href = url;
  }
}
