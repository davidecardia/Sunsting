import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../services/users.service";

@Component({
    selector: 'app-search',
    templateUrl: './search.page.html',
    styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
    url = "../assets/ssLogo.png";
    title = "Search";
    filteredUsers:any;
    exists= true;

    constructor(private usersService: UsersService) {
    }

    ngOnInit() {
    }

    getUsers(name){
        this.usersService.getUsers().subscribe(users => {
            this.filteredUsers = users.filter(user => {
                return user.firstname == (name.charAt(0).toUpperCase() + name.slice(1));
            });

            if(this.filteredUsers.length !== 0){
                this.exists = true;
            }else{
                this.exists = false;
            }
        })
    }

    searchUsers(name){
        this.getUsers(name);
        console.log(this.filteredUsers)
    }





}
