/**
 * @param {Object} prefills - information about open email.
 * @return {Cardsection}
 */
function billFormSection(prefills){
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
