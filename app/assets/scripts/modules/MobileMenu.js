import $ from 'jquery';

class MobileMenu{

    constructor(){
        // alert("Hello");
        this.siteHeader = $(".site-header");
        this.menuIcon = $(".site-header__menu-icon");
        this.menuContent = $(".site-header__menu-content");
        this.menuLogo = $(".site-header__logo");
        this.events();
    }//calling all the functions in constructor

    events(){
        this.menuIcon.click(this.toggleTheMenu.bind(this));
        this.menuIcon.click(this.toggleTheLogo.bind(this));
    }//calling the methods when clicking on hamburger icon

    toggleTheMenu(){
        // console.log("Toggle");
        this.menuContent.toggleClass("site-header__menu-content--is-visible");
        this.siteHeader.toggleClass("site-header--is-expanded");
    }//hiding and showing menu for mobile screens

    toggleTheLogo(){
        this.menuLogo.toggleClass("site-header__logo--is-visible");
    }//hiding logo when hamburger is clicked
}

export default MobileMenu;
