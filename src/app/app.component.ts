import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from './http-service.service';
import { BehaviorSubject, Subject } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'myproject';
  public suggestions = [];
  private subject = new Subject();

  constructor(private httpService: HttpServiceService) {

  }

  ngOnInit() {
    this.subject.pipe(debounceTime(300),
      switchMap((value: any) => this.httpService.getSuggestions(value))).subscribe((response) => {
        this.suggestions = response;
      });
  }

  handleKeypress(event) {

    const formValue = event.target.value;

    this.subject.next(formValue);

  }
}
