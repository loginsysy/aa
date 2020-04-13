import { Component, OnInit } from '@angular/core';
import { ProfileService } from "../profile.service";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
profile: any;
repos: any;
username:string;

  constructor(private profileServices: ProfileService) {
    this.profileServices.updateProfile(this.username);
    this.profileServices.getProfileInfo().subscribe(findProfile =>{
console.log(findProfile)
this.profile = findProfile;
    });
    this.profileServices.getProfileRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    });
   }

  ngOnInit() {
    this.profileServices.updateProfile("Antonykirunyu");
    this.profileServices
      .getProfileInfo()
      .subscribe(profile => (this.profile = profile));
    this.profileServices
      .getProfileRepos()
      .subscribe(repos => (this.repos = repos));
  }

}
