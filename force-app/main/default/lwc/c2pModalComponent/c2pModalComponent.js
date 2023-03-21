import { LightningElement } from 'lwc';

export default class C2pModalComponent extends LightningElement {
    closeHandler(){
        const myEvent = new CustomEvent('close', {
            //Only detail key workd only
            //detail:"Modal Closed Successfully"
            bubbles:true,
            detail:{
                msg:"success"
            }
        });
        this.dispatchEvent(myEvent);
    }
    footerHandler(){
        console.log("footerHandler event called");
    }
}