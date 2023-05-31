import { Component } from '@angular/core';

export interface TableHeader {
  key: string;
  label: string;
}
interface TableRowWithDropdown extends TableRow {
  showDropdown?: boolean;
}

export interface TableRow {
  status: string;
  checkin: string;
  checkout: string;
  date: string;
  host: string;
  visitor: string;
  meetingId: string;
  color?:string,
  image?:string,
  showDropdown?: boolean
}
@Component({
  selector: 'app-visitors',
  templateUrl: './visitors.component.html',
  styleUrls: ['./visitors.component.scss']
})
export class VisitorsComponent {
  [x: string]: any;
  Status = ["102 Expected", "Checked in", "Checked Out", "Unexpected Visitor"]


  headerColumns: string[] = ["status", "checkin", "checkout", "date", "host", "visitor", "meetingId"];
  
  headerData: TableHeader[] = [
    { key: 'status', label: 'Status' },
    { key: 'checkin', label: 'Checked In' },
    { key: 'checkout', label: 'Checked Out' },
    { key: 'date', label: 'Date' },
    { key: 'host', label: 'Host' },
    { key: 'visitor', label: 'Visitor' },
    { key: 'meetingId', label: 'Meeting ID' }
  ];
  getStatusColor(status: string): string {
    if (status === 'Checked In') {
      return 'bg-green text-white p-4';
    } 
    else if(
        status === 'Expected'){
          return 'bg-[blue]/80 text-white p-4'
        }
        else if(
          status === 'Checked Out'){
            return 'bg-red text-white p-4'
          }
        else if(
          status === 'Unexpected'){
            return 'bg-blue text-white p-4'
          }
      
  
   else {
      return '';
    }
  }
  getArrowColor(status: string): string {
    if (status === 'Checked In') {
      return 'bg-green/80 text-white';
    } 
    else if(
        status === 'Expected'){
          return 'bg-[blue]/70 text-white'
        }
        else if(
          status === 'Unexpected'){
            return 'bg-blue/80 text-white'
          }
      
    
    else if (status === 'Checked Out') {
      return 'bg-red/80 text-white';
    } else {
      return '';
    }
  }
  bodyData: TableRow[] = [
    {
      status: 'Checked In',
      checkin: '7:21am',
      checkout: '4:20pm',
      date: 'Monday, May 22, 2023',
      host: 'Ahamadu Bello',
      visitor: 'Mohammed Sodiq',
      meetingId: '#555 343 3232',
      image:"../assets/avatar.png",
      color:'red',
      showDropdown: false
    },
    {
      status: 'Unexpected',
      checkin: '7:21am',
      checkout: '4:20pm',
      date: 'Monday, May 22, 2023',
      host: 'Ahamadu Bello',
      visitor: 'Mohammed Sodiq',
      meetingId: '#555 343 3232',
      image:"../assets/avatar.png",
      color:'green'
    },
    {
      status: 'Expected',
      checkin: '7:21am',
      checkout: '4:20pm',
      date: 'Monday, May 22, 2023',
      host: 'Ahamadu Bello',
      visitor: 'Mohammed Sodiq',
      meetingId: '#555 343 3232',
      image:"../assets/avatar.png",
      color:'green'
    },
    {
      status: 'Checked Out',
      checkin: '7:21am',
      checkout: '4:20pm',
      date: 'Monday, May 22, 2023',
      host: 'Ahamadu Bello',
      visitor: 'Mohammed Sodiq',
      meetingId: '#555 343 3232',
      image:"../assets/avatar.png",
      color:'red'
    },
    {
      status: 'Checked Out',
      checkin: '7:21am',
      checkout: '4:20pm',
      date: 'Monday, May 22, 2023',
      host: 'Ahamadu Bello',
      visitor: 'Mohammed Sodiq',
      meetingId: '#555 343 3232',
      image:"../assets/avatar.png",
      color:'red'
    },
    {
      status: 'Unexpected',
      checkin: '7:21am',
      checkout: '4:20pm',
      date: 'Monday, May 22, 2023',
      host: 'Ahamadu Bello',
      visitor: 'Mohammed Sodiq',
      meetingId: '#555 343 3232',
      image:"../assets/avatar.png",
      color:'green'
    },
    {
      status: 'Checked Out',
      checkin: '7:21am',
      checkout: '4:20pm',
      date: 'Monday, May 22, 2023',
      host: 'Ahamadu Bello',
      visitor: 'Mohammed Sodiq',
      meetingId: '#555 343 3232',
      image:"../assets/avatar.png",
      color:'green'
    },
    {
      status: 'Checked In',
      checkin: '7:21am',
      checkout: '4:20pm',
      date: 'Monday, May 22, 2023',
      host: 'Ahamadu Bello',
      visitor: 'Mohammed Sodiq',
      meetingId: '#555 343 3232',
      image:"../assets/avatar.png",
      color:'green'
    },
    {
      status: 'Checked In',
      checkin: '7:21am',
      checkout: '4:20pm',
      date: 'Monday, May 22, 2023',
      host: 'Ahamadu Bello',
      visitor: 'Mohammed Sodiq',
      meetingId: '#555 343 3232',
      image:"../assets/avatar.png",
      color:'red'
    },
    {
      status: 'Checked Out',
      checkin: '7:21am',
      checkout: '4:20pm',
      date: 'Monday, May 22, 2023',
      host: 'Ahamadu Bello',
      visitor: 'Mohammed Sodiq',
      meetingId: '#555 343 3232',
      image:"../assets/avatar.png",
      color:'blue'
    },
    {
      status: 'Checked Out',
      checkin: '7:21am',
      checkout: '4:20pm',
      date: 'Monday, May 22, 2023',
      host: 'Ahamadu Bello',
      visitor: 'Mohammed Sodiq',
      meetingId: '#555 343 3232',
      image:"../assets/avatar.png",
      color:'blue'
    },
    {
      status: 'Checked Out',
      checkin: '7:21am',
      checkout: '4:20pm',
      date: 'Monday, May 22, 2023',
      host: 'Ahamadu Bello',
      visitor: 'Mohammed Sodiq',
      meetingId: '#555 343 3232',
      image:"../assets/avatar.png",
      color:'blue'
    },
    {
      status: 'Checked In',
      checkin: '7:21am',
      checkout: '4:20pm',
      date: 'Monday, May 22, 2023',
      host: 'Ahamadu Bello',
      visitor: 'Mohammed Sodiq',
      meetingId: '#555 343 3232',
      image:"../assets/avatar.png",
      color:'green'
    },
    
  ];
  toggleDropdown(header: TableRowWithDropdown): void {
    this.bodyData.forEach(item => {
      item.showDropdown = false;
    });
    header.showDropdown = true;
  }

  changeStatus(header: TableRowWithDropdown, newStatus: string): void {
    header.status = newStatus;
    header.showDropdown = false;
  }
}
