import { Component } from '@angular/core';
export interface TableRow {
  photo: string;
  name: string;
  email: string;
  mobile: string;
  hosted: string;
  action: string;
}
export interface TableHeader {
  key: string;
  label: string;
}
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {
[x: string]: any;
headerData: TableHeader[] = [
  { key: 'photo', label: 'Photo' },
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'mobile', label: 'Mobile' },
  { key: 'hosted', label: 'Hosted' },
  { key: 'action', label: 'Action' },
];
  bodyData: TableRow[] = [
    {
      photo: "../assets/avatar.png",
      name: 'Mariam Julius',
      email: 'mariamlius@nexus.com',
      mobile: '(+234) 7055829486',
      hosted: '16',
      action: '#555 343 3232',
    },
    {
      photo: "../assets/avatar.png",
      name: 'Mariam Julius',
      email: 'mariamlius@nexus.com',
      mobile: '(+234) 7055829486',
      hosted: '36',
      action: '#555 343 3232',
    },
    {
      photo: "../assets/avatar.png",
      name: 'Mariam Julius',
      email: 'mariamlius@nexus.com',
      mobile: '(+234) 7055829486',
      hosted: '46',
      action: '#555 343 3232',
    },
    {
      photo: "../assets/avatar.png",
      name: 'Mariam Julius',
      email: 'mariamlius@nexus.com',
      mobile: '(+234) 7055829486',
      hosted: '21',
      action: '#555 343 3232',
    },
    {
      photo: "../assets/avatar.png",
      name: 'Mariam Julius',
      email: 'mariamlius@nexus.com',
      mobile: '(+234) 7055829486',
      hosted: '60',
      action: '#555 343 3232',
    },
    {
      photo: "../assets/avatar.png",
      name: 'Mariam Julius',
      email: 'mariamlius@nexus.com',
      mobile: '(+234) 7055829486',
      hosted: '70',
      action: '#555 343 3232',
    },
    {
      photo: "../assets/avatar.png",
      name: 'Mariam Julius',
      email: 'mariamlius@nexus.com',
      mobile: '(+234) 7055829486',
      hosted: '23',
      action: '#555 343 3232',
    },
    {
      photo: "../assets/avatar.png",
      name: 'Mariam Julius',
      email: 'mariamlius@nexus.com',
      mobile: '(+234) 7055829486',
      hosted: '53',
      action: '#555 343 3232',
    },
    {
      photo: "../assets/avatar.png",
      name: 'Mariam Julius',
      email: 'mariamlius@nexus.com',
      mobile: '(+234) 7055829486',
      hosted: '16',
      action: '#555 343 3232',
    },
    {
      photo: "../assets/avatar.png",
      name: 'Mariam Julius',
      email: 'mariamlius@nexus.com',
      mobile: '(+234) 7055829486',
      hosted: '16',
      action: '#555 343 3232',
    },
    {
      photo: "../assets/avatar.png",
      name: 'Mariam Julius',
      email: 'mariamlius@nexus.com',
      mobile: '(+234) 7055829486',
      hosted: '16',
      action: '#555 343 3232',
    },
    {
      photo: "../assets/avatar.png",
      name: 'Mariam Julius',
      email: 'mariamlius@nexus.com',
      mobile: '(+234) 7055829486',
      hosted: '16',
      action: '#555 343 3232',
    },
    {
      photo: "../assets/avatar.png",
      name: 'Mariam Julius',
      email: 'mariamlius@nexus.com',
      mobile: '(+234) 7055829486',
      hosted: '16',
      action: '#555 343 3232',
    },
    {
      photo: "../assets/avatar.png",
      name: 'Mariam Julius',
      email: 'mariamlius@nexus.com',
      mobile: '(+234) 7055829486',
      hosted: '16',
      action: '#555 343 3232',
    },
    {
      photo: "../assets/avatar.png",
      name: 'Mariam Julius',
      email: 'mariamlius@nexus.com',
      mobile: '(+234) 7055829486',
      hosted: '16',
      action: '#555 343 3232',
    },
    {
      photo: "../assets/avatar.png",
      name: 'Mariam Julius',
      email: 'mariamlius@nexus.com',
      mobile: '(+234) 7055829486',
      hosted: '16',
      action: '#555 343 3232',
    },
  ];
}
