import { LightningElement } from 'lwc';

export default class HelloQuerySelectorDemo extends LightningElement {
    userNames = ["John", "Sam", "Apple", "Mike"];
    fetchDetailHandler(){
        const elem = this.template.querySelector('h1');
        const userElements = this.template.querySelectorAll('.name');
        console.log(elem.innerText);
        Array.from(userElements).forEach(item=>{
            //each div
            console.log(item.innerText);
            item.setAttribute("title", item.innerText);
        })
    }
}