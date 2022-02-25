/**
 * @param {Object} prefills - information about open email.
 * @return {Cardsection}
 */
function coiFormSection(prefills){
  let section = CardService.newCardSection()
  
  section.addWidget(
      date(prefills)
    )
  section.addWidget(
      insured()
    )
  section.addWidget(
      glDatePicker(prefills)
    ) 
  section.addWidget(
      wcDatePicker(prefills)
    ) 
  section.addWidget(
      attachmentRadioButton(prefills)
    )
  section.addWidget(
      submit()
    )
  return section
}

/**
 * create buttons
 * 
 * @return {ButtonSet} 
 */
function submit(){

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


function certificateHolder(){
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