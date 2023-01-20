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
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userReport = this.fb.group({
      clientName: [''],
      projectName: [''],
      taskData: this.fb.array([new FormControl('', [Validators.required])]),
      progressData: this.fb.array([new FormControl('', [Validators.required])]),
      skills: this.fb.array([new FormControl('', [Validators.required])]),
    });
  }
  get formControls() {
    return this.userReport.controls;
  }

  get taskData() {
    return this.userReport.get('taskData') as FormArray;
  }

  get progressData() {
    return this.userReport.get('progressData') as FormArray;
  }

  get skills(): FormArray {
    return this.userReport.get('skills') as FormArray;
  }

  newSkill(): FormGroup {
    return this.fb.group({
      skill: ['', [Validators.required]],
    });
  }
  addData(i: number) {
    this.taskData.push(new FormControl(''));
    console.log(this.taskData.controls[i].value);
  }
  addProgresstask() {
    this.progressData.push(new FormControl(''));
  }
  addSkills() {
    this.skills.push(this.newSkill());
  }
  removeData(i: number) {
    this.taskData.removeAt(i);
  }

  removeProgressTask(i: number) {
    this.progressData.removeAt(i);
  }
  removeSkill(i: number) {
    this.skills.removeAt(i);
  }
}
