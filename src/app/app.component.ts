import { Component } from '@angular/core';
import { EmpdataService } from './empdata.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  constructor(private empService:EmpdataService){}
  title = 'employee-management';

}

