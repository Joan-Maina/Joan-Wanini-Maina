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
      name:"HTML"
    },
    {
      name:"CSS"
    },
    {
      name:"Javascript"
    },
    {
      name:"Typescript"
    },
    {
      name:"React"
    },
    {
      name:"Angular"
    },
    {
      name:"Node"
    },
    {
      name:"SQL"
    },
    {
      name:"Python"
    },
    {
      name:"MongoDB"
    },
    {
      name:"Java"
    },
    {
      name:"Kafka"
    },
    {
      name:"Docker"
    },
    {name:"Cypress"}
    ,{name:"Selenium"}
  ]
}
