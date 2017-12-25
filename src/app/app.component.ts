import { Component, OnInit } from '@angular/core';
import { Title } from './title';
import $ from 'jquery';
import { animateCss } from './animate'

const SOCIAL = [
{
	icon: "/assets/images/facebook.png",
	link: "https://www.facebook.com/pavan1645"
},
{
	icon: "/assets/images/instagram.png",
	link: "https://www.instagram.com/pavan79/"
},
{
	icon: "/assets/images/github.png",
	link: "https://github.com/pavan1645"
},
{
	icon: "/assets/images/hackerrank.png",
	link: "https://www.hackerrank.com/pavan1645"
},
{
	icon: "/assets/images/hackerearth.png",
	link: "https://www.hackerearth.com/@pavan1645"
},
{
	icon: "/assets/images/codechef.png",
	link: "https://www.codechef.com/users/pavan1645"
}
]
const DETAILS = [
{
	title: "Age",
	desc: "21",
	icon: "fa-user"
},
{
	title: "Email",
	desc: "pavan1645@gmail.com",
	icon: "fa-envelope"
},
{
	title: "Phone",
	desc: "+91 8082160741",
	icon: "fa-phone"
},
{
	title: "Address",
	desc: "Kamothe, Navi Mumbai",
	icon: "fa-map-marker"
},
{
	title: "Website",
	desc: "pavanmahadik.herokuapp.com",
	icon: "fa-globe"
}
]

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
	socials = SOCIAL;
	details = DETAILS;
	ngOnInit() { 
		//animateCss('.centerCardLeft','bounceInLeft',null);
		//animateCss('.centerCardRight','bounceInRight', null);
		animateCss('.centerCardPhoto, .centerCardDetails','bounceInDown',null);
		animateCss('.socialIcons','slideInUp',null);
	}
	constructor(){	}
}
