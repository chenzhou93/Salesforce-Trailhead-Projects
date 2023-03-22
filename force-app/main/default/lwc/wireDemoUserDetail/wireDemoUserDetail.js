import { LightningElement, wire } from 'lwc';
import {getRecord} from 'lightning/uiRecordApi'; //adapter
import Id from '@salesforce/user/Id';
import NAME_FIELD from '@salesforce/schema/user.Name'
import EMAIL_FIELD from '@salesforce/schema/user.Email'

import {getObjectInfo} from 'lightning/uiObjectInfoApi'; //adapter
import {getObjectInfos} from 'lightning/uiObjectInfoApi'; //adapter multiple objects
import {getPicklistValues} from 'lightning/uiObjectInfoApi';

const fields = [NAME_FIELD, EMAIL_FIELD]

export default class WireDemoUserDetail extends LightningElement {
    userId = Id

    // @wire(adapter, {adapterConfig})
    // propertyORfunction

    // @wire(getRecord, {recordId : '0050p00002MXU6AAO', fields:['User.Name', 'User.Email']})
    // userDetailHandler(response){
    //     console.log(response);
    // }

    userDetail
    @wire(getRecord, {recordId:'$userId', /*recordId : '0050p00002MXU6AAO', */fields})
    userDetailHandler({data, error}){
        if(data){
            this.userDetail = data.fields;
        }
        if(error){
            console.log(error);
        }
    }

    @wire(getRecord, {recordId : '0050p00002MXU6AAO', fields /*fields:[NAME_FIELD, EMAIL_FIELD]*/})
    userDetailProperty
}