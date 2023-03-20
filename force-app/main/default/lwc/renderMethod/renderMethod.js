import { LightningElement } from 'lwc';
import signinTemplate from './signinTemplate.html'
import signupTemplate from './signupTemplate.html'
import renderTemplate from './renderTemplate.html'

export default class RenderMethod extends LightningElement {
    selectedBtn = '';

    render(){
        //return renderTemplate;
        return this.selectedBtn === 'Signup' ? signupTemplate : this.selectedBtn === 'Signin' ? signinTemplate : renderTemplate;
    }

    handleClick(event){
        this.selectedBtn = event.target.label //Signup or Signin
    }

    submitHandler(event){
        console.log(`${event.target.label} successfully` );
    }
}