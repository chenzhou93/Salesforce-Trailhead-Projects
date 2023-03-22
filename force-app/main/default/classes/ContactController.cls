public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(){
        try{
            System.debug('apex call');
            return [SELECT Id, FirstName, LastName, Email FROM Contact];
        }catch(Exception e){
            throw new AuraHandledException(e.getMessage());
        }
    }

}