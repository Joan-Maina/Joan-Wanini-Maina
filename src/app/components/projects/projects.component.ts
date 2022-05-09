import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public projects = [
    {
      name:"Currency converter",
      link:"https://my-currency-converter.vercel.app/",
      image:"https://images.unsplash.com/photo-1638913659197-46040471de1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      description:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
    },
    {
      name:"Github UI",
      link:"https://github-ui.vercel.app/",
      image:"https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=888&q=80",
      description:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
    }
    ,{
      name:"Tip-calculator",
      link:"https://tip-calculator-ui.netlify.app/",
      image:"https://images.unsplash.com/photo-1523540939399-141cbff6a8d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      description:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    }
  ]
}
