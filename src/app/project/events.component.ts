import { Component, OnInit } from '@angular/core';
import { EventService } from './event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styles: []
})
export class EventsComponent implements OnInit {

  constructor(private _eventService:EventService) { }
  events=[];
  ngOnInit() {
      this._eventService.getEvents()
        .subscribe(
           res=> this.events= res,
          error=> console.log(error)
        )}
  }


