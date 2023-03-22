import { LightningElement,wire } from 'lwc';
import { reduceErrors } from 'c/ldsUtils';
import getContacts from '@salesforce/apex/ContactController.getContacts';
import CONTACT_FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import CONTACT_LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import CONTACT_EMAIL_FIELD from '@salesforce/schema/Contact.Email';

const COLUMNS = [
    { label: 'First Name', fieldName: CONTACT_FIRSTNAME_FIELD.fieldApiName, type: 'text' },
    { label: 'Last Name', fieldName: CONTACT_LASTNAME_FIELD.fieldApiName, type: 'text' },
    { label: 'Email', fieldName: CONTACT_EMAIL_FIELD.fieldApiName, type: 'email' }
];

export default class ContactList extends LightningElement {
    columns = COLUMNS;

    @wire(getContacts)
    contactList

    get errors(){
        return (this.contactList.error) ? reduceErrors(this.contacts.error) : [];
    }

}