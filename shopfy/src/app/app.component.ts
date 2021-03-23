import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shopfy';
  state: string = 'recipe';
  whois(el:string){
    switch(el){
      case 'recipe': this.state = 'recipe'; break;
      case 'shopping': this.state = 'shopping';break;
    }
  }
}
