import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'PrsApiClientTest';
  vendor = {
    id: 0,
    code: "AMAZ",
    name: "Amazon",
    address: "1 Amazon Way",
    city: "Seattle",
    state: "WA",
    zip: "12345",
    phone: null,
    email: null
  }

  constructor(http: HttpClient) {
    http.post('http://localhost:5000/api/vendors', this.vendor).subscribe(
      res => {
        console.log(res);
      },
      (err: HttpErrorResponse) => {
        for(let key of Object.keys(err.error.errors)) {
          for(let e of err.error.errors[key]) {
            console.debug("ERROR:", e);
          }
        }
      }
    );
  }

  
}
