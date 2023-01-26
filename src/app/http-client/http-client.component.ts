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
  public form!: FormGroup;
  public formData: any;
  public isUpdate: boolean = false;
  public userId!: number;
  constructor(private mainService: MainService, private fb: FormBuilder) {
    this.form = this.fb.group({
      name: [null, Validators.required],
      phone: [null, Validators.required],
      email: [null, Validators.required],
    });
    this.mainService.getUsers().subscribe((resp) => {
      this.users = resp;
    });
  }

  ngOnInit(): void {}

  get formControls() {
    return this.form.controls;
  }

  onSave() {
    this.mainService.postUsers(this.form.value).subscribe((resp: any) => {
      console.log(resp);
      const data = {
        id: this.users.length + 1,
        ...this.form.value,
      };
      this.users.push(data);
    });
  }

  edit(data: any) {
    this.form.patchValue(data);
    this.userId = data.id;
    this.isUpdate = true;
  }
  delete(i: number) {
    this.mainService.deleteUsers(i).subscribe((resp: any) => {
      this.users.splice(i, 1);
    });
  }
}
