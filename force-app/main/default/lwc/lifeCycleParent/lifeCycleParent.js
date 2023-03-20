import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {
    isChildVisible = false;
    constructor(){
        super();
        //this.template.querySelector("abc"); //cannot query, DOM not ready
        console.log("Parent constructor called");
    }

    connectedCallback(){//do not use to set values
        console.log("connecttedCallback called");
    }

    renderedCallback(){
        console.log("renderedCallback called");
    }

    // name;
    // changeHandler(event){
    //     this.name = event.target.value;
    // }

    handleClick(){
        this.isChildVisible = !this.isChildVisible;
    }
}