import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../common';
import { MainService } from '../main.service';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss'],
})
export class HttpClientComponent implements OnInit {
  public users!: any;
  public editIndex!: number;
  public userForm!: FormGroup;
  public isUpdate: boolean = false;
  public userId!: number;
  constructor(private mainService: MainService, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: [null, Validators.required],
      phone: [null, Validators.required],
      email: [null, Validators.required],
    });
    this.getUsersDetails();
  }

  ngOnInit(): void {}

  get formControls() {
    return this.userForm.controls;
  }
  getUsersDetails() {
    this.mainService.getUsers().subscribe((resp) => {
      this.users = resp;
    });
  }
  onSubmit() {
    if (this.userId) {
      const data = (this.users[this.editIndex] = {
        id: this.userId,
        ...this.userForm.value,
      });
      this.mainService.putUsers(data).subscribe((resp: any) => {});
    } else {
      const data = {
        id: this.users.length + 1,
        ...this.userForm.value,
      };
      this.mainService.postUsers(data).subscribe((resp: any) => {
        this.users.push(resp);
      });
    }
    this.userForm.reset();
  }

  edit(data: any, index: number) {
    this.userForm.patchValue(data);
    this.editIndex = index;
    this.userId = data.id;
    this.isUpdate = true;
  }
  delete(index: number) {
    this.mainService.deleteUsers(index).subscribe(() => {
      this.users.splice(index, 1);
    });
  }
}
