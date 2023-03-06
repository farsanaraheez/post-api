import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="postapi";
  constructor( private http:HttpClient){}
     onSubmit(data: any){
      this.http.post('https://jsonplaceholder.typicode.com/posts',data)
      .subscribe((result)=>{
      console.log("result", +result);
     })

    }
    
 
    
}
