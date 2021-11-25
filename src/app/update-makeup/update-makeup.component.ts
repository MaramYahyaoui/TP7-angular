import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Makeup } from '../model/makeup.model';
import { MakeupService } from '../services/makeup.service';
@Component({
  selector: 'app-update-makeup',
  templateUrl: './update-makeup.component.html',
  styles: [
  ]
})
export class UpdateMakeupComponent implements OnInit {
  currentMakeup = new Makeup()

  constructor
  (private activatedRoute: ActivatedRoute,
    private router :Router,
    private makeupService: MakeupService) 
    { }

  ngOnInit(): void {
    //console.log(this.activatedRoute.snapshot.params.id);
    this.currentMakeup = this.makeupService.consulterMakeup(this.activatedRoute.snapshot.params.id);
    console.log(this.currentMakeup);


  }
  updateMakeup()
{ 
  //console.log(this.currentProduit);
  this.makeupService.updateMakeup(this.currentMakeup);
  this.router.navigate(['makeup']);
}
  

}
