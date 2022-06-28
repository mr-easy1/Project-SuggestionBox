import { Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit() {
  }
  title = 'SuggestionBox';
  selected = '';
  SuggestionBoxBtn = true;
  showcard1 = false;
  showcard2 = false;
  showcard3 = false;
  // openSuggestionBoxWindow(event:any)
  //   {
  //       document.getElementById("appreciationModule2").style.display="block";
  //       document.getElementById("SuggestionBoxBtn").style.display="none";
  //   }
    // closeSuggestionWindow()
    // {
    //   document.getElementById("appreciationModule2").style.display = "none";
    //   document.getElementById("SuggestionBoxBtn").style.display="block";
    // }
    // closeSuggestionWindow2()
    // {
    //   document.getElementById("appreciationModule3").style.display = "none";
    //   document.getElementById("SuggestionBoxBtn").style.display="block";
    // }
    // closeSuggestionWindow3()
    // {
    //   document.getElementById("appreciationModule4").style.display = "none";
    //   document.getElementById("SuggestionBoxBtn").style.display="block";
    // }
    OpenScreen(){
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
}
