import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  filtersForm: FormGroup;

  ngOnInit(): void {

    this.filtersForm = this.createFiltersForm();

    this.filtersForm.valueChanges.subscribe(
      (data) => console.log(data)
    );

  }

  private createFiltersForm() {
    return new FormGroup({
      date: new FormControl(new Date()),
    });
  }

}
