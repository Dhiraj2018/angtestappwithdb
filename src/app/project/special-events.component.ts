import { Component, OnInit } from '@angular/core';
import { EventService } from './event.service';
import { HttpHeaderResponse } from '@angular/common/http';
import { Router } from '@angular/router'
@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styles: []
})
export class SpecialEventsComponent implements OnInit {
  specialEvents=[];
  constructor(private _eventService: EventService,
              private _router:Router) { }

  ngOnInit() {
    this._eventService.getSpecialEvents()
      .subscribe(
        res => this.specialEvents= res,
        error => {
          if(error instanceof HttpHeaderResponse){
            if(error.status== 401){
              this._router.navigate(['/login'])
            }
          }
        })
               
  }

}
