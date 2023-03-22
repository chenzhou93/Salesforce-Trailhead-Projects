import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';
import filterAccountType from '@salesforce/apex/AccountController.filterAccountTypeName';  

export default class ApexWireDemo extends LightningElement {
    accountList;
    selectedType = '';
    @wire(getAccountList)
    accounts

    @wire(getAccountList)
    accountsHanlder({data, error}){
        if(data){
            this.accountList = data.map(item=>{
                let newType = item.Type === 'Customer - Channel' ? 'Channel' : '-----';
                return {...item, newType}
            })
        }
        if(error){
            console.log(error);
        }
    }

    @wire(filterAccountType, {type:"$selectedType"})
    filteredAccounts

    get typeOptions(){
        return [
            {label: "Customer - Channel", value:"Customer - Channel"},
            {label: "Customer - Direct", value:"Customer - Direct"}
        ]
    }

    typeHandler(event){
        this.selectedType = event.target.value;
    }

}