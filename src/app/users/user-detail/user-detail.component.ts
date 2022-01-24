import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {IUser} from "../IUser";
import {UserService} from "../../services/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit, OnChanges {

  logs: any[] = [];

  @Input() user?: IUser | null //lớp con detail sẽ nhận dữ liệu từ lớp cha list bằng @input

  constructor(private userService: UserService,
              private router: ActivatedRoute) { }

  ngOnInit(): void {
    // @ts-ignore
    let id = +this.router.snapshot.paramMap.get('id');
    // console.log(id);
    this.user = this.userService.getUserById(id);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes['user'].currentValue)
    let namePre = changes['user'].previousValue?.name;
    if (namePre) {
      let nameCurrent = changes['user'].currentValue?.name;
      let message = "click từ " + namePre + " sang " + nameCurrent;
      this.logs.push(message);
      //đã khai báo mảng log
    }
  }
}
