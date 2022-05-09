import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  skills = [
    {
      name:"HTML",
      experience:"1 year"
    },
    {
      name:"CSS",
      experience:"1 year"
    },
    {
      name:"javascript",
      experience:"1 year"
    },
    {
      name:"Typescript",
      experience:"1 year"
    },
    {
      name:"React",
      experience:"1 year"
    },
    {
      name:"Angular",
      experience:"1 year"
    },
    {
      name:"Node",
      experience:"1 year"
    },
    {
      name:"SQL",
      experience:"1 year"
    },
    {
      name:"Python",
      experience:"1 year"
    },
    {
      name:"MongoDB",
      experience:"1 year"
    },
    {
      name:"java",
      experience:"1 year"
    }
  ]
}
