import { LightningElement } from 'lwc';

export default class HelloLooping extends LightningElement {
    carList = ["Ford", "Audi", "Toyota", "Honda", "Hyundai"];

    ceoList = [
        {
            id : 1,
            company : "Google",
            name : "Pichai"
        },
        {
            id : 2,
            company : "Apple",
            name : "Tim"
        },
        {
            id : 3,
            company : "Facebook",
            name : "Mark"
        },
        {
            id : 4,
            company : "Amazon",
            name : "Jeff"
        }
    ];
}