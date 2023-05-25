import { Component } from '@angular/core';
export interface TableRow {
  photo: string;
  name: string;
  email: string;
  mobile: string;
  action: string;
  role: string
}
export interface TableHeader {
  key: string;
  label: string;
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  headerData: TableHeader[] = [
    { key: 'name', label: 'Name' },
    { key: 'details', label: 'Details' },
    { key: 'role', label: 'Role' },
    { key: 'action', label: 'Action' },
  ];
    bodyData: TableRow[] = [
      {
        photo: "../assets/avatar.png",
        name: 'Mariam Julius',
        email: 'mariamlius@nexus.com',
        mobile: '(+234) 7055829486',
        role:"Security",
        action: '#555 343 3232',
      },
      {
        photo: "../assets/avatar.png",
        name: 'Mariam Julius',
        email: 'mariamlius@nexus.com',
        mobile: '(+234) 7055829486',
        action: '#555 343 3232',
        role:"Security"
      },
      {
        photo: "../assets/avatar.png",
        name: 'Mariam Julius',
        email: 'mariamlius@nexus.com',
        mobile: '(+234) 7055829486',
        action: '#555 343 3232',
        role:"Security"
      },
      {
        photo: "../assets/avatar.png",
        name: 'Mariam Julius',
        email: 'mariamlius@nexus.com',
        mobile: '(+234) 7055829486',
        action: '#555 343 3232',
        role:"Security"
      },
      {
        photo: "../assets/avatar.png",
        name: 'Mariam Julius',
        email: 'mariamlius@nexus.com',
        mobile: '(+234) 7055829486',
        action: '#555 343 3232',
        role:"Security"
      },
      {
        photo: "../assets/avatar.png",
        name: 'Mariam Julius',
        email: 'mariamlius@nexus.com',
        mobile: '(+234) 7055829486',
        action: '#555 343 3232',
        role:"Security"
      },
      {
        photo: "../assets/avatar.png",
        name: 'Mariam Julius',
        email: 'mariamlius@nexus.com',
        mobile: '(+234) 7055829486',
        action: '#555 343 3232',
        role:"Security"
      },
      {
        photo: "../assets/avatar.png",
        name: 'Mariam Julius',
        email: 'mariamlius@nexus.com',
        mobile: '(+234) 7055829486',
        action: '#555 343 3232',
        role:"Security"
      },
      {
        photo: "../assets/avatar.png",
        name: 'Mariam Julius',
        email: 'mariamlius@nexus.com',
        mobile: '(+234) 7055829486',
        action: '#555 343 3232',
        role:"Security"
      },
      {
        photo: "../assets/avatar.png",
        name: 'Mariam Julius',
        email: 'mariamlius@nexus.com',
        mobile: '(+234) 7055829486',
        action: '#555 343 3232',
        role:"Security"
      },
      {
        photo: "../assets/avatar.png",
        name: 'Mariam Julius',
        email: 'mariamlius@nexus.com',
        mobile: '(+234) 7055829486',
        action: '#555 343 3232',
        role:"Security"
      },
    ]
}
