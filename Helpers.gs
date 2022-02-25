/**
 * gets users email
 * @returns {String}
 */
function getUsersEmail(){
  return Session.getActiveUser().getEmail()
}

/**
 * Retrives a sorted list from filter sheet
 * Makes text suggestions 
 * builds card using suggestions
 *  
 * @param {Event} event The key up event from text input feild.
 * @return {Card}
 */
function getPurchaseAccounts(e){
  Logger.log(' getPurchaseAccounts(e) called ')
  //Logger.log(e.formInputs.purchaseAccount[0])
  let suggestions = CardService.newSuggestions();
  let filterSheet = SpreadsheetApp.openById('1rjdkU2R1K36ySk_zD1ZafAaiodAc17U5qbkID5Vlvzc').getSheetByName('filter')
  
  let accounts = []
  
  filterSheet.getRange(2,3,filterSheet.getLastRow()).getValues().forEach(function(account){
      //let data = []
      if(account!=''){
        accounts.push(account[0])
      }else{
        return
      }
      
    })

  let account = autoComplete(e.formInputs.purchaseAccount[0],accounts)
  Logger.log("account").log(account)

  account.forEach(function(account){
   suggestions.addSuggestion(account)
  })

  if(e.formInputs.isLookup){

  }else{

  return CardService.newSuggestionsResponseBuilder()
      .setSuggestions(suggestions)
      .build();
  }
}

/**
 * Find suggestions in array based on text entered by user
 * 
 * @param {String} input text entered by user
 * @param {array} array list of suggestions
 * @return {String}
 */
function autoComplete(input,array) {
  Logger.log('autoComplete(input,array) called')
  //Logger.log("input: " + input)
  //Logger.log("array: " + array)
  var reg = new RegExp(input.split('').join('\\w*').replace(/\W/, ""), 'i');
  return( array.filter(function(element) {
    //Logger.log("Auto>>>").log(element + " Match " +input + " >>> " + element.match(reg))
    if (element.match(reg)) {
      //Logger.log(element.replace(/[^a-zA-Z ]/g, ""))
      return element.replace(/[^a-zA-Z ]/g, "")
    }
  })
  )
}

/**
 * Retrives a sorted list from filter sheet
 * Makes text suggestions 
 * builds card using suggestions
 *  
 * @param {Event} event The key up event from text input feild.
 * @return {Card}
 */
function getProperties(e){
  Logger.log('getProperties(e) called')
  Logger.log(e)
  //get Purchase accounts 
  var suggestions = CardService.newSuggestions();
  let filterSheet = SpreadsheetApp.openById('1rjdkU2R1K36ySk_zD1ZafAaiodAc17U5qbkID5Vlvzc').getSheetByName('filter')

  
  let properties = []

  filterSheet.getRange(2,4,filterSheet.getLastRow()).getValues().forEach(function(property){
      
      if(property!=''){
        properties.push(property[0])
      }else{
        return
      }
    })
   let property = autoComplete(e.formInputs.property[0],properties)
   property.forEach(function(property){
   suggestions.addSuggestion(property)
  })

  return CardService.newSuggestionsResponseBuilder()
      .setSuggestions(suggestions)
      .build();
}

/**
 * Retrives a sorted list from filter sheet
 * Makes text suggestions 
 * builds card using suggestions
 *  
 * @param {Event} event The key up event from text input feild.
 * @return {Card}
 */
function getVendors(e){
  Logger.log("getVendor Called")
  Logger.log(e.formInputs.vendor[0])
   
  var suggestions = CardService.newSuggestions();
  let filterSheet = SpreadsheetApp.openById('1rjdkU2R1K36ySk_zD1ZafAaiodAc17U5qbkID5Vlvzc').getSheetByName('filter')

  
  let vendors = []

  filterSheet.getRange(2,5,filterSheet.getLastRow()).getValues().forEach(function(vendor){
      
      if(vendor!=''){
        vendors.push(String(vendor[0]).replace(/[^a-zA-Z ]/g, ""))
      }else{
        return
      }
    })

  let vendor = autoComplete(e.formInputs.vendor[0],vendors)
  
  
  vendor.forEach(function(vendor){
    console.log(typeof vendor)
   suggestions.addSuggestion(vendor)
  })

  return CardService.newSuggestionsResponseBuilder()
      .setSuggestions(suggestions)
      .build();
}

/**
 * Retrives a sorted list from filter sheet
 * Makes text suggestions 
 * builds card using suggestions
 *  
 * todo: lookup insured by email sender
 * 
 * @param {Event} event The key up event from text input feild.
 * @return {Card}
 */
function getInsured(e){
  Logger.log("getInsured Called")
  Logger.log(e.formInputs.insured[0])
   
  var suggestions = CardService.newSuggestions();
  let subcontractorSheet = SpreadsheetApp.openById('1JipJWSvW5bZkXOcMRP5CDaOf_S3zkxJub5wdU3RRWcc').getSheetByName('Subcontractor')

  
  let subcontractors = []

  //subcontractorSheet.getRange(2,2,subcontractorSheet.getLastRow()).getValues().flat() //.forEach(function(subcontractor){
      
      //if(subcontractor!=''){
      //  subcontractors.push(subcontractor[0])
     // }else{
      //  return
      //}
    //})

  let subcontractor = autoComplete(e.formInputs.insured[0],subcontractorSheet.getRange(2,2,subcontractorSheet.getLastRow()).getValues().flat())
  
  
  subcontractor.forEach(function(subcontractor){
    //console.log(typeof subcontractor)
   suggestions.addSuggestion(subcontractor)
  })

  return CardService.newSuggestionsResponseBuilder()
      .setSuggestions(suggestions)
      .build();
}


/**
 * Retrives a sorted list from filter sheet
 * Makes text suggestions 
 * builds card using suggestions
 *  
 * @param {Event} event The key up event from text input feild.
 * @return {Card}
 */
function getItems(e){
  Logger.log(e.formInputs.item[0])
   
  var suggestions = CardService.newSuggestions();
  let filterSheet = SpreadsheetApp.openById('1rjdkU2R1K36ySk_zD1ZafAaiodAc17U5qbkID5Vlvzc').getSheetByName('filter')

  let items = []

  filterSheet.getRange(2,6,filterSheet.getLastRow()).getValues().forEach(function(item){
      
      if(item!=''){
        items.push(item[0])
      }else{
        return
      }
    })
  let item = autoComplete(e.formInputs.item[0],items)
  
  item.forEach(function(item){
   suggestions.addSuggestion(item)
  })

  return CardService.newSuggestionsResponseBuilder()
      .setSuggestions(suggestions)
      .build();
}

/**
 * Determines expense description by joining sender name and message subject.
 *
 * @param {Message} message The message that is currently open.
 * @returns {String}
 */
function getExpenseDescription(message) {
  var sender = message.getFrom();
  var subject = message.getSubject();
  return sender + " | " + subject;
}
/**
 * Determines most recent spreadsheet URL.
 * Returns null if no URL was previously submitted.
 *
 * @returns {String}
 */
function getSheetUrl() {
  return PropertiesService.getUserProperties().getProperty('SPREADSHEET_URL');
}

/**
 * Create new row in DB
 * @param {Event} e 
 * 
 */
function submitForm(e) {
  Logger.log("submitForm(e) called")

  let responce = e.formInput
  let timestamp = (new Date().getMonth()+1)+'/'+new Date().getDate()+'/'+new Date().getFullYear()+" " + new Date().toTimeString().split(' ')[0]
  let date = new Date(responce['transactionDate']['msSinceEpoch'])
  let transactionDate = (date.getMonth()+1)+'/'+date.getDate()+'/'+date.getFullYear()
  let amount = amountData(e)
  let data = [String(ATL.getUUID()).split("-")[0],timestamp,,Session.getUser().getEmail(),,transactionDate,responce['purchaseAccount'],
      responce['property'],responce['vendor'],responce['item'],/*responce['amount']*/amount,responce['referanceNumber']]
    
  data = data.concat(fileData(e))
  
  if(!_testigInProgress)receiptSheet.appendRow(data)

}

/**
 * Create new row in DB
 * @param {Event} e 
 * 
 */
function submitCoiForm(e) {
  // file structure - 'COI Uploader DB_Files_/4528d239.COI PDF.132125.pdf'
  // file structure - 'COI Uploader DB_Images/5a2ac7f6.COI image.142756.jpg'
  //e={insured=Neeklight LLC, date={msSinceEpoch=1.6455744E12}, wcDate={msSinceEpoch=1.6456608E12}, attachments=-1.0, glDate={msSinceEpoch=1.6455744E12}}
  //id	Timestamp	COI image	COI PDF	Date	Insured	GL EXP 	WC EXP	Certificate Holder	ADDL INSD
  Logger.log("submitForm(e) called")

  let responce = e.formInput
  let timestamp = (new Date().getMonth()+1)+'/'+new Date().getDate()+'/'+new Date().getFullYear()+" " + new Date().toTimeString().split(' ')[0]
  let date = new Date(responce.date.msSinceEpoch)
  //let transactionDate = (date.getMonth()+1)+'/'+date.getDate()+'/'+date.getFullYear()
  //let amount = amountData(e)
  let data = [String(ATL.getUUID()).split("-")[0],timestamp,/*Image*/,/*fileData(e)*/,new Date(responce.date.msSinceEpoch),responce.insured,new Date(responce.glDate.msSinceEpoch),new Date(responce.wcDate.msSinceEpoch),responce,responce]
      //responce['property'],responce['vendor'],responce['item'],/*responce['amount']*/amount,responce['referanceNumber']]
    
  //data = data.concat(fileData(e))
  
  //if(!_testigInProgress)receiptSheet.appendRow(data)
  Logger.log(responce).log(date)


  let  message = getCurrentMessage(e)
  let attachmentIndex = e.formInput.attachments

  let COI_Uploader_DB_Files_Id = '1qb-FhLkd1ApgJvuYuuOdjk5EEuetI-vS' //foldrName:'COI_Uploader_DB_Files_'
  let COI_Uploader_DB_Files_ = DriveApp.getFolderById(COI_Uploader_DB_Files_Id)
  let COI_Uploader_DB_ImagesId = '1GZC-yQ70XjCo8UycN4yPMWatg6KiDQWG' //foldrName:'COI_Uploader_DB_Images'
  let COI_Uploader_DB_Images = DriveApp.getFolderById(COI_Uploader_DB_ImagesId)

  let directory
  let fileName
  let output

  if(attachmentIndex == -1){
    directory = 'COI_Uploader_DB_Files_' 
    fileName = String(ATL.getUUID()).split("-")[0] + '.COI PDF.' + String(ATL.getUUID().split("-")[4])

    output = directory + "/" + fileName + '.pdf'

    if(_testigInProgress){/*left blank intentioanlly*/}else{
      //temp file
      let temp = COI_Uploader_DB_Files_.createFile(fileName+".txt", message.getBody(), "text/html") //MimeType.PDF);  
      fileName = String(ATL.getUUID()).split("-")[0] + '.PDF file.' + String(ATL.getUUID().split("-")[4])
      COI_Uploader_DB_Files_.createFile(temp.getAs("application/pdf")).setName(fileName)
      temp.setTrashed(true);
    }

  }else{
  let attachment = message.getAttachments()[parseInt(attachmentIndex)]
  let attachmentBlob = attachment.copyBlob()   
    let fileType = attachment.getContentType().split("/")[1]
    switch(attachment.getContentType()){
      case 'image/jpeg':
        directory = 'COI_Uploader_DB_Images' 
        fileName = String(ATL.getUUID()).split("-")[0] + ".COI image." + String(ATL.getUUID().split("-")[4])
        output = directory + "/" + fileName + '.' + fileType
        if(_testigInProgress){/*left blank intentioanlly*/Logger.log(output)}else{COI_Uploader_DB_Images.createFile(attachmentBlob).setName(fileName+"."+fileType)}
        //if(!_testigInProgress)COI_Uploader_DB_Images.createFile(attachmentBlob).setName(fileName)
      break
      case 'application/pdf':
        directory = 'Receipts_Files_' // folder id'1pOd3phzjBgg4Hcmm5iLPu-z_uhWL1olg'
        fileName = String(ATL.getUUID()).split("-")[0] + '.PDF file.' + String(ATL.getUUID().split("-")[4])
        output = directory+ "/" +fileName+'.'+fileType
        if(_testigInProgress){/*left blank intentioanlly*/Logger.log(output)}else{COI_Uploader_DB_Files_.createFile(attachmentBlob).setName(fileName+"."+fileType)}
      break
    }  
    Logger.log(output)  
  }


}

/**
 * retrives amount data
 * 
 * @param {Event} 
 * @return {String}
 */
function amountData(e){
  Logger.log('amountData(e) called')
  //Logger.log(Object.keys(e.formInput))
  //Logger.log(findDollarAmounts(getCurrentMessage(e))[parseInt(e.formInput.amountIndex)])
  
  let keys = Object.keys(e.formInput)
  if(keys.includes('amountIndex')){
    return findDollarAmounts(getCurrentMessage(e))[parseInt(e.formInput.amountIndex)] 
  }else{
    return e.formInput.amount
  }
}

/**
 * Create new receipt image or pdf in drive
 * @param {Event} e 
 * @return {array} output - will be appended to row data for logging
 */
function fileData(e){
  Logger.log('sendToDrive(e) called')
  let  message = getCurrentMessage(e)
  let attachmentIndex = e.formInput.attachments
  Logger.log("Index: " ).log(attachmentIndex)

  let Receipts_Files_Id = '1pOd3phzjBgg4Hcmm5iLPu-z_uhWL1olg' //foldrName:'Receipts_Files_'
  let Receipts_Files_ = DriveApp.getFolderById(Receipts_Files_Id)
  let Receipts_ImagesId = '1EjBgyuuJu2Fhga4ZyppZvRH23pX0TaHD' //foldrName:'Receipts_Images'
  let Receipts_Images = DriveApp.getFolderById(Receipts_ImagesId)

  let directory
  let fileName
  let output

  if(attachmentIndex == -1){
    directory = 'Receipts_Files_' // folder id'1pOd3phzjBgg4Hcmm5iLPu-z_uhWL1olg'
    fileName = String(ATL.getUUID()).split("-")[0] + '.PDF file.' + String(ATL.getUUID().split("-")[4])
    output = ['',directory+ "/" +fileName+'.'+'pdf','PDF','false']
    if(_testigInProgress){/*left blank intentioanlly*/}else{
      //temp file
      let temp = Receipts_Files_.createFile(fileName+".txt", message.getBody(), "text/html") //MimeType.PDF);  
      fileName = String(ATL.getUUID()).split("-")[0] + '.PDF file.' + String(ATL.getUUID().split("-")[4])
      Receipts_Files_.createFile(temp.getAs("application/pdf")).setName(fileName+'.pdf')
      temp.setTrashed(true);
    }

  }else{
  let attachment = message.getAttachments()[parseInt(attachmentIndex)]
  let attachmentBlob = attachment.copyBlob()   
    let fileType = attachment.getContentType().split("/")[1]
    switch(attachment.getContentType()){
      case 'image/jpeg':
        directory = 'Receipts_Images' // folder id '1EjBgyuuJu2Fhga4ZyppZvRH23pX0TaHD'
        fileName = String(ATL.getUUID()).split("-")[0] + ".Image." + String(ATL.getUUID().split("-")[4])
        output = [directory+ "/" +fileName+'.'+fileType,'','Image','false']
        if(_testigInProgress){/*left blank intentioanlly*/}else{Receipts_Images.createFile(attachmentBlob).setName(fileName)}
        if(!_testigInProgress)Receipts_Images.createFile(attachmentBlob).setName(fileName)
      break
      case 'application/pdf':
        directory = 'Receipts_Files_' // folder id'1pOd3phzjBgg4Hcmm5iLPu-z_uhWL1olg'
        fileName = String(ATL.getUUID()).split("-")[0] + '.PDF file.' + String(ATL.getUUID().split("-")[4])
        output = ['',directory+ "/" +fileName+'.'+fileType,'PDF','false']
        if(_testigInProgress){/*left blank intentioanlly*/}else{Receipts_Files_.createFile(attachmentBlob).setName(fileName)}
      break
    }    
  }
  Logger.log(output)
  return output
}


/**
 * @see https://stackoverflow.com/questions/11404855/javascript-autocomplete-without-external-library
 */
