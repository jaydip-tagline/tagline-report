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
  public isInvalid!: boolean;
  constructor(private fb: FormBuilder) {
    this.userReport = this.fb.group({
      clientName: [''],
      projectName: [''],
      taskData: this.fb.array([new FormControl('', [Validators.required])]),
      progressData: this.fb.array([new FormControl('', [Validators.required])]),
      pendingData: this.fb.array([new FormControl('', [Validators.required])]),
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

  addTaskdata() {
    console.log('formControls:>> ', this.taskData.value);
    if (this.formControls['taskData'].valid) {
      this.taskData.push(this.formControl());
      this.isInvalid = false;
    } else {
      this.taskDataError = this.errorMsg;
      this.isInvalid = true;
    }
  }
  addProgresstask() {
    if (this.formControls['progressData'].valid) {
      this.progressData.push(this.formControl());
      this.isInvalid = false;
    } else {
      this.progressDataError = this.errorMsg;
      this.isInvalid = true;
    }
  }
  addPendingtask() {
    if (this.formControls['pendingData'].valid) {
      this.pendingData.push(this.formControl());
      this.isInvalid = false;
    } else {
      this.pendingDataError = this.errorMsg;
      this.isInvalid = true;
    }
  }

  removeField(i: number, arr: any) {
    arr.removeAt(i);
  }

  formControl() {
    return this.fb.control('', [Validators.required]);
  }
}
