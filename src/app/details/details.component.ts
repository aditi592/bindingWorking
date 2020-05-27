import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {


  fname='';
  lname='';
  mno='';
  add='';
  d:boolean=false;
  @Input() pattern: string | RegExp

  constructor() { }

  ngOnInit() {
  }
update(obj1,obj2,obj3,obj4,obj5)
{
  this.fname= obj1;
  this.lname=obj2;
  this.mno=obj3;
  this.add=obj4;
  this.d=!this.d;
}

}
