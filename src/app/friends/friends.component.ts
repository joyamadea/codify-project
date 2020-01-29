import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  public users=[];
  tag:string;
  constructor(private dataService:DataService,private router:Router) { }

  ngOnInit() {
    this.dataService.getUser()
    .subscribe(data=>this.users=data);
  }

  explore(tag){
    this.router.navigateByUrl('/explore/'+tag);
  }

}
