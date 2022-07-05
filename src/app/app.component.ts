import { Component, OnInit} from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{

  constructor(private fb: FormBuilder) { }
  Suggestion = this.fb.group({
    suggestiondescription: ['',],
    suggestion: ['',Validators.required],
    contacted: ['',Validators.required],
  });

onFileSelected(event: any)
  {
    console.log(event);
  } 
      ngOnInit() 
      {
      }
      title = 'SuggestionBox';
      selected = '';
      SuggestionBoxBtn = true;
      showcard1 = false;
      showcard2 = false;
      showcard3 = false;
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
      CloseScreen1()
      {
        this.showcard1 = true;
        this.showcard2 = false;
        this.SuggestionBoxBtn = false;
      }
      OpenScreen2()
      {
        this.showcard2 = false;
        this.showcard3 = true;
        this.SuggestionBoxBtn = false;
      }
      CloseScreen2()
      {
        this.showcard2 = true;
        this.showcard3 = false;
        this.SuggestionBoxBtn = false;
        
      }
      OpenScreen5()
      {
        this.showcard3 = false;
        this.showcard6 = true;
        this.SuggestionBoxBtn = false;
      }
      CloseScreen5()
      {
        this.showcard3 = true;
        this.showcard6 = false;
        this.SuggestionBoxBtn = false;
      }
      getsuggestion()
      {
        
      }
}

