/**
 * @param {Object} prefills - information about open email.
 * @return {Cardsection}
 */
function coiFormSection(prefills){
  let section = CardService.newCardSection()
  
  section
    .addWidget(CardService.newDecoratedText().setTopLabel("Heads up").setText('Make sure the COI has:\n    1. The Additional Insured box marked with\n"X", "yes", or any other affermitive mark.\n2. The Certificate holder must read\nThe ATL Homemaker, LLC\nP.O. Box 46288\n Atlanta, GA 30311\nIf not email Vendors agent, CC the \nVendor, to have an updated COI Emailed.' ))
    .addWidget(date(prefills))
    .addWidget(insured())
    .addWidget(glDatePicker(prefills))
    .addWidget(wcDatePicker(prefills))
    .addWidget(attachmentRadioButton(prefills))
    .addWidget(submitCoi())
  return section
}

/**
 * create buttons
 * 
 * @return {ButtonSet} 
 */
function submitCoi(){

  var submitForm = CardService.newAction().setFunctionName('submitCoiForm');

  return CardService.newButtonSet()
    .addButton(
      CardService.newTextButton()
        .setText('Submit')
        .setOnClickAction(submitForm)
    );
}

/**
 * create text input field 
 * @param {Object} prefills - information about open email.
 * @return {TextInput}
 */
function insured(){
  //insured
  var insuredAction = CardService.newAction()
      .setFunctionName('getInsured')
    
  return CardService.newTextInput()
    .setFieldName('insured')
    .setTitle('Insured')
    .setSuggestionsAction(insuredAction)
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

function _certificateHolder(){
  Logger.log("certificateHolder() called")

  return CardService.newButtonSet()
      .addButton(CardService.newTextButton()
        .setText('Receipt')
        .setTextButtonStyle(CardService.TextButtonStyle.FILLED)
        .setOnClickAction(CardService.newAction().setFunctionName('gotoRecipt').setParameters({"service":"receipt"})) //.setParameters({'id': id.toString()})
        .setDisabled(false))
}

/**
 * Create a date
 * @param {Object} prefills - information about open email.
 * @return {DatePicker}
 */
function glDatePicker(prefills){
  Logger.log("glDatePicker(prefills) called").log(prefills)
  return CardService.newDatePicker()
    .setFieldName("glDate")
    .setTitle("GL Exp. Date")
}

/**
 * Create a date
 * @param {Object} prefills - information about open email.
 * @return {DatePicker}
 */
function wcDatePicker(prefills){
  Logger.log("wcDatePicker(prefills) called").log(prefills)
  return CardService.newDatePicker()
    .setFieldName("wcDate")
    .setTitle("WC Exp. Date")
}