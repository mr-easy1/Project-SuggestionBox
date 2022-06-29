import { Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{
      ngOnInit() 
      {
      }
      title = 'SuggestionBox';
      selected = '';
      SuggestionBoxBtn = true;
      showcard1 = false;
      showcard2 = false;
      showcard3 = false;
      showcard4 = false;
      showcard5 = false;
      showcard6 = false;
      OpenScreen()
      {
        this.SuggestionBoxBtn = false;
        this.showcard1 = true;
      }
      OpenScreen1()
      {
        this.showcard1 = false;
        this.showcard2 = true;
        this.SuggestionBoxBtn = false;
      }
      OpenScreen2()
      {
        this.showcard2 = false;
        this.showcard3 = true;
        this.SuggestionBoxBtn = false;
      }
      OpenScreen3()
      {
        this.showcard3 = false;
        this.showcard4 = true;
        this.SuggestionBoxBtn = false;
      }
      OpenScreen4()
      {
        this.showcard4 = false;
        this.showcard5 = true;
        this.SuggestionBoxBtn = false;
      }
      OpenScreen5()
      {
        this.showcard5 = false;
        this.showcard6 = true;
        this.SuggestionBoxBtn = false;
      }
}
