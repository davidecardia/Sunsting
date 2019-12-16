import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-features',
    templateUrl: './features.page.html',
    styleUrls: ['./features.page.scss'],
})
export class FeaturesPage implements OnInit {
    url = "../assets/ssLogo.png";
    title = "Features";
    constructor() {
    }

    ngOnInit() {
    }

}
