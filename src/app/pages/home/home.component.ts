import { Component, OnInit} from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import { UsersService} from 'src/app/_service/users.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'username', 'email', 'address', 'phone', 'company'];
  dataSource: any;
  isloding:boolean=false;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.isloding=true;
    this.ViewUserDetails();
  }

  ViewUserDetails() {
    this.usersService.GetUsers().subscribe(
      (response: any) => {
        this.isloding=false;
        this.dataSource = new MatTableDataSource(response.body);
        console.log("response", response.body);
        this.usersService = response.body;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
