import {Component, OnInit, ViewChild} from '@angular/core';
import {IUser} from "../IUser";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userClicked?: IUser

  users: IUser[] = [];
  //   {
  //     id: 1,
  //     name: "My Tran",
  //     email: "mytran@gmail.com",
  //     phone: "0925989908",
  //     address: "Sài Gòn"
  //   },
  //   {
  //     id: 2,
  //     name: "Mi Chan",
  //     email: "michan@gmail.com",
  //     phone: "0925223300",
  //     address: "Hà Tĩnh"
  //   },
  //   {
  //     id: 3,
  //     name: "Ha Thu",
  //     email: "hathu@gmail.com",
  //     phone: "0966882211",
  //     address: "Phú Thọ"
  //   },
  //   {
  //     id: 4,
  //     name: "Tuan Anh",
  //     email: "tuananh@gmail.com",
  //     phone: "0926677889",
  //     address: "Hà Nội"
  //   },
  //   {
  //     id: 5,
  //     name: "Ri Chan",
  //     email: "richan@gmail.com",
  //     phone: "0969112233",
  //     address: "Đà Nẵng"
  //   }
  // ];

  userFilter: IUser[] = [];

  displayedColumns: string[] = ['STT', 'Name', 'Email', 'Action'];
  dataSource = new MatTableDataSource<IUser>(this.userService.getAll());

  constructor(private userService: UserService) { }



  @ViewChild(MatPaginator) paginator?: MatPaginator;

  ngAfterViewInit() {
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.users = this.userService.getAll();
    this.userFilter = this.users;
    //để ko làm thay đổi giá trị ban đầu
  }

  // clickUser(index: number) {
  //   this.userClicked = this.users[index];
  // }

  //lấy theo id
  clickUser(id: number) {
    // console.log(id)
    let user = this.users.filter(user => {
      return user.id === id
    });
    this.userClicked = user[0];
  }

  search(event: any) {
    // console.log(event)
    let name = event;
    this.userFilter = (name) ? this.getUserByName(name) : this.users
  }

  getUserByName(name: string) {
    return this.users.filter(user => {
      return user.name == name
    })
  }

}
