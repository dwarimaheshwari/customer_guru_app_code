import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../services/profile.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-singleuser',
  templateUrl: './singleuser.component.html',
  styleUrls: ['./singleuser.component.css']
})
export class SingleuserComponent implements OnInit {
  username:string;
  user:any[];
  repos:any[];
  constructor(private ad:ActivatedRoute,
                private profileservice:ProfileService,
               private route:Router) { }

  ngOnInit() {
    this.username=this.ad.snapshot.params['code'];
      this.user=[];
      this.repos=[];
      
      this.profileservice.updateUser(this.username);
      this.profileservice.getSingleUser().subscribe(profile=>{
        this.user.push(profile);
        console.log(this.user);
        
      });
      this.profileservice.getSingleUserRepos().subscribe(profile=>{
        this.repos=profile;
        console.log(this.repos);
        
      });
  
  }
  onclickButton(url:string):void{
    this.route.navigate([url]);
  }
  

}
