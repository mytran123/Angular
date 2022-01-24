import { Injectable } from '@angular/core';
import {IUser} from "../users/IUser";

//Đăng ký cho root Module
@Injectable({
  providedIn: 'root'
})

export class UserService {

  users: IUser[] = [
    {
      id: 1,
      name: "My Tran",
      email: "mytran@gmail.com",
      password: "123456",
      phone: "0925989908",
      address: "Sài Gòn"
    },
    {
      id: 2,
      name: "Mi Chan",
      email: "michan@gmail.com",
      password: "123456",
      phone: "0925223300",
      address: "Hà Tĩnh"
    },
    {
      id: 3,
      name: "Ha Thu",
      email: "hathu@gmail.com",
      password: "123456",
      phone: "0966882211",
      address: "Phú Thọ"
    },
    {
      id: 4,
      name: "Tuan Anh",
      email: "tuananh@gmail.com",
      password: "123456",
      phone: "0926677889",
      address: "Hà Nội"
    },
    {
      id: 5,
      name: "Ri Chan",
      email: "richan@gmail.com",
      password: "123456",
      phone: "0969112233",
      address: "Đà Nẵng"
    }
  ];

  constructor() { }

  getAll() {
    return this.users;
  }

  getUserById(id: number) {
    for (const user of this.users) {
      if (user.id == id) {
        return user;
      }
    }
    return null;
  }
}
