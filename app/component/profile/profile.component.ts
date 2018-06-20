import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../../services/profile.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:any[];
  username:string;
  
  constructor(private profileService:ProfileService) {
   }

  ngOnInit() {
  }
  setname(){
   this.profileService.updateUser(this.username);
   this.profileService.getUsers().subscribe(profile=>{
    this.profile=profile.items;
    console.log(profile);
  });
  }


}
