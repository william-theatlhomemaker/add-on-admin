/**
 * @param {Object} prefills - information about open email.
 * @return {Cardsection}
 */
function billFormSection(prefills){
  let section = CardService.newCardSection()
  
  section.addWidget(
      vendor()
    )
  section.addWidget(
      date(prefills)
    )
    section.addWidget(
      refNumber()
    )
  section.addWidget(
      dueDate()
    )
  section.addWidget(
      amount()
    )
    
  section.addWidget(
      job()
    ) 
  section.addWidget(
      attachmentRadioButton(prefills)
    )
  section.addWidget(
      submitBill()
    )
    
  return section
}

/**
 * create text input field 
 * todo: use send email to prefill vendor
 * @param {Object} prefills - information about open email.
 * @return {TextInput}
 */
function job(){

  return CardService.newTextInput()
    .setFieldName('job')
    .setTitle('Job')
}

/**
 * create text input field 
 * todo: use send email to prefill vendor
 * @param {Object} prefills - information about open email.
 * @return {TextInput}
 */
function refNumber(){
    
  return CardService.newTextInput()
    .setFieldName('refNum')
    .setTitle('Ref #')
}

/**
 * create text input field 
 * todo: use send email to prefill vendor
 * @param {Object} prefills - information about open email.
 * @return {TextInput}
 */
function amount(){
    
  return CardService.newTextInput()
    .setFieldName('amount')
    .setTitle('Amount')
}

/**
 * create text input field 
 * todo: use send email to prefill vendor
 * @param {Object} prefills - information about open email.
 * @return {TextInput}
 */
function vendor(){
  //vendor
  var vendorAction = CardService.newAction()
      .setFunctionName('getVendor')
    
  return CardService.newTextInput()
    .setFieldName('vendor')
    .setTitle('Vendor')
    .setSuggestionsAction(vendorAction)
}

/**
 * Create a date
 * @param {Object} prefills - information about open email.
 * @return {DatePicker}
 */
function date(prefills){
  Logger.log("date(prefills) called").log(prefills)
  return CardService.newDatePicker()
    .setValueInMsSinceEpoch(
      new Date(prefills.receivedDate).getTime()
    )
    .setFieldName("date")
    //.setTitle("Date")
}

/**
 * Create a date
 * @param {Object} prefills - information about open email.
 * @return {DatePicker}
 */
function dueDate(prefills){
  Logger.log("date(prefills) called").log(prefills)
  return CardService.newDatePicker()
    .setFieldName("dueDate")
    .setTitle("Due Date")
}

/**
 * create buttons
 * 
 * @return {ButtonSet} 
 */
function submitBill(){

  var submitBillForm = CardService.newAction().setFunctionName('submitBillForm');

  return CardService.newButtonSet()
    .addButton(
      CardService.newTextButton()
        .setText('Submit')
        .setOnClickAction(submitBillForm)
    );
}
