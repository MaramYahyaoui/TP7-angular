import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Makeup } from '../model/makeup.model';
import { MakeupService } from '../services/makeup.service';


@Component({
  selector: 'app-add-makeup',
  templateUrl: './add-makeup.component.html',
  styleUrls: ['./add-makeup.component.css']
})
export class AddMakeupComponent implements OnInit {

  newMakeup = new Makeup();

  msg : String;

  constructor(private makeupService: MakeupService , private router : Router) {

  }

  ngOnInit(): void {
  }
  addMakeup(){
    this.makeupService.ajouterMakeup(this.newMakeup);
    this.router.navigate(['makeup']);
  }

}
