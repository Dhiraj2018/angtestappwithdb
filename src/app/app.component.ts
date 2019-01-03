import { Component } from '@angular/core';
import { AuthService} from './project/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'testtutorial';
  constructor(private _authService:AuthService){}
}
