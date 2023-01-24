import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-demo-formarray',
  templateUrl: './demo-formarray.component.html',
  styleUrls: ['./demo-formarray.component.scss'],
})
export class DemoFormarrayComponent implements OnInit {
  public userReport!: FormGroup;
  public skillData!: string;
  public errorMsg: string = 'Please fill this first';
  public taskDataError!: string;
  public progressDataError!: string;
  public pendingDataError!: string;
  public queryError!: string;
  public noteError!: string;
  public isInvalid!: boolean;
  public monthList: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  fullDate: any = new Date();
  date: string = this.fullDate.getDate();
  month: string = this.monthList[this.fullDate.getMonth()];
  year: string = this.fullDate.getFullYear();

  constructor(private fb: FormBuilder) {
    // console.log('this.month :>> ', this.month);
    this.userReport = this.fb.group({
      clientName: [''],
      projectName: [''],
      name: [''],
      taskData: this.fb.array([new FormControl('', [Validators.required])]),
      progressData: this.fb.array([new FormControl('', [Validators.required])]),
      pendingData: this.fb.array([new FormControl('', [Validators.required])]),
      queries: this.fb.array([new FormControl('', [Validators.required])]),
      notes: this.fb.array([new FormControl('', [Validators.required])]),
    });
  }

  ngOnInit(): void {}
  get formControls() {
    return this.userReport.controls;
  }

  get taskData() {
    return this.userReport.get('taskData') as FormArray;
  }

  get progressData() {
    return this.userReport.get('progressData') as FormArray;
  }

  get pendingData() {
    return this.userReport.get('pendingData') as FormArray;
  }

  get queries() {
    return this.userReport.get('queries') as FormArray;
  }
  get notes() {
    return this.userReport.get('notes') as FormArray;
  }

  addData(arrayName: string) {
    console.log(arrayName);
    switch (arrayName) {
      case 'taskData':
        if (this.formControls['taskData'].valid) {
          this.taskData.push(this.formControl());
          this.isInvalid = false;
        } else {
          this.taskDataError = this.errorMsg;
          this.isInvalid = true;
        }
        break;
      case 'progressData':
        if (this.formControls['progressData'].valid) {
          this.progressData.push(this.formControl());
          this.isInvalid = false;
        } else {
          this.progressDataError = this.errorMsg;
          this.isInvalid = true;
        }
        break;
      case 'pendingData':
        if (this.formControls['pendingData'].valid) {
          this.pendingData.push(this.formControl());
          this.isInvalid = false;
        } else {
          this.pendingDataError = this.errorMsg;
          this.isInvalid = true;
        }
        break;
      case 'queries':
        if (this.formControls['queries'].valid) {
          this.queries.push(this.formControl());
          this.isInvalid = false;
        } else {
          this.queryError = this.errorMsg;
          this.isInvalid = true;
        }
        break;
      case 'notes':
        if (this.formControls['notes'].valid) {
          this.notes.push(this.formControl());
          this.isInvalid = false;
        } else {
          this.noteError = this.errorMsg;
          this.isInvalid = true;
        }
    }
  }

  removeField(i: number, arr: any) {
    arr.removeAt(i);
  }

  formControl() {
    return this.fb.control('', [Validators.required]);
  }
}
