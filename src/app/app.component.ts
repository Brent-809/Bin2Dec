import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bin2Dec';
  binaryForm: FormGroup;
  givenNumber!: string;
  parsedNumber!: number;

  constructor(private fb: FormBuilder) {
    this.binaryForm = fb.group({
      BinaryNumber: ['', Validators.required, Validators.min(1)]
    })
  }

  Convert(givenNumber: string) {
    const number = givenNumber.toString();
    console.log(number)
    const parsedNumber = parseInt(number, 2);
    console.log(parsedNumber)
    this.parsedNumber = parsedNumber;
    console.log(this.parsedNumber)
  }
}
