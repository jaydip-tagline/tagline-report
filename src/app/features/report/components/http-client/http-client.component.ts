import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../../common';
import { MainService } from '../../../../main.service';
import { ToastrService } from 'ngx-toastr';
import { Observable, Observer } from 'rxjs';

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
  public deletedId!: number;
  public userDetails: any;
  constructor(
    private mainService: MainService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
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
      let customObserve = Observable.create((observe: Observer<any>) => {
        observe.next(this.users);
      });
      customObserve.subscribe((res: any) => {
        this.userDetails = res;
      });
    });
  }
  onSubmit() {
    if (this.userId) {
      const data = (this.users[this.editIndex] = {
        id: this.userId,
        ...this.userForm.value,
      });
      this.mainService.putUsers(data).subscribe((resp: any) => {});
      this.toastr.success('Your Data is Updated!', 'Updated');
    } else {
      const data = {
        id: this.users.length + 1,
        ...this.userForm.value,
      };
      this.mainService.postUsers(data).subscribe((resp: any) => {
        this.users.push(resp);
        this.toastr.success('Your Data is Submitted!', 'Submitted');
      });
    }
    this.userForm.reset();
  }

  edit(data: any, index: number) {
    this.userForm.patchValue(data);
    this.toastr.info("You're in Edit Mode!", 'Editted!');
    this.editIndex = index;
    this.userId = data.id;
    this.isUpdate = true;
  }
  deletedIndex(index: number) {
    this.deletedId = index;
  }
  delete(index: number) {
    this.mainService.deleteUsers(this.deletedId).subscribe(() => {
      this.users.splice(this.deletedId, 1);
      this.toastr.success('Your Data is Successfully Deleted!', 'Deleted!');
    });
  }
}
