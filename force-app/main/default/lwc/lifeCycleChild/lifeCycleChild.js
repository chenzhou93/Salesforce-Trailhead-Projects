import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {
    constructor(){
        super();
        //this.template.querySelector("abc"); //cannot query, DOM not ready
        console.log("Child constructor called");
    }

    connectedCallback(){//do not use to set values
        console.log("connecttedCallback Child called");
        window.addEventListener('click', this.handleClick);
    }

    renderedCallback(){
        console.log("renderedCallback Child called");
    }

    disconnectedCallback(){
        alert("Child disconnectedCallback called");
        window.removeEventListener('click', this.handleClick);//avoid memory leak
    }
}