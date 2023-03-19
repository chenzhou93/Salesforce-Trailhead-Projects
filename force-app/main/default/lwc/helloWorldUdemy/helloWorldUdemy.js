import { LightningElement, track } from 'lwc';

export default class HelloWorldUdemy extends LightningElement {
    // name; //undefined
    // age = 30;
    // fullName = "Salesforce Udemy";
    // showData = false;
    // details = {
    //     name : "dummy",
    //     place : "new york"
    // }
    // userList = ["A", "B", "C"];

    fullname = "Zero to Hero";
    
    //this does not work:
    //users = ["A", "B", "C"]

    title = "aura";
    changeHandler(event){
        this.title = event.target.value;
    }

    //Property <- object
    //title is tracked, but not a single property of an object
    //address is an object
    //@track is commented
    address = {
        city : "Boston",
        zipCode : "01001",
        country : "United States"
    }

    trackHandler(event){
        //property of the address object
        //this.address.city = event.target.value;
        
        //better practice instead of using @track
        this.adderss = {...this.address, "city" : event.target.value};
    }

    //getter
    users = ["john", "sam", "adam"];
    num1 = 10;
    num2 = 20;
    //this.firstUser = this.users[0];
    get firstUser(){
        return this.users[0];
    }

    get multiply(){
        return this.num1 * this.num2;
    }
    
}