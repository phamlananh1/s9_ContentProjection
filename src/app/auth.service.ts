import { Injectable } from '@angular/core';
let defaultId = 1;
@Injectable({
  providedIn: 'root'
})
export class AuthService {
user: string = 'Defualt Id:' + defaultId++;
  constructor() { }
}
