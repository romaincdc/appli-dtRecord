import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user = {
    mail: '',
    
  };
  constructor() {
    var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQ5MzQwNjA5LCJleHAiOjE2NDk0MjcwMDl9.tunJpyyAS6VubhB9YT78j0kZx_QbFFU_dYOpvJSuOgA';
    fetch('http://localhost:8080/api/user', {headers: {
      "x-access-token": token
    }}).
      then(response => {
          return response.json();
      })
      .then(data => {
        console.log(data);
        
        
      
      });

    
      }
}
