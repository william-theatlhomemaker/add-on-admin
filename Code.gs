//"https://www.gstatic.com/images/branding/product/1x/translate_24dp.png",
//<a href="https://www.flaticon.com/free-icons/invoice" title="invoice icons">Invoice icons created by Freepik - Flaticon</a>

/*
,
      "universalActions": [{
        "runFunction": "messageData"
      }]
      */

const DEFAULT_INPUT_TEXT = '';
const DEFAULT_OUTPUT_TEXT = '';
const DEFAULT_ORIGIN_LAN = ''; // Empty string means detect langauge
const DEFAULT_DESTINATION_LAN = 'en' // English

const properties = function(){
  let receiptSheet = SpreadsheetApp.openById('1rjdkU2R1K36ySk_zD1ZafAaiodAc17U5qbkID5Vlvzc').getSheetByName('')
}


const LANGUAGE_MAP = []

/**
 * Callback for rendering the main card.
 * @return {CardService.Card} The card to show the user.
 */
function onHomepage(e) {
  //e{clientPlatform=web, commonEventObject={hostApp=GMAIL, platform=WEB}, hostApp=gmail}
  
  return createSelectionCard(e, DEFAULT_ORIGIN_LAN, DEFAULT_DESTINATION_LAN, DEFAULT_INPUT_TEXT, DEFAULT_OUTPUT_TEXT);
}

/**
 * Main function to generate the main card.
 * @param {String} originLanguage Language of the original text.
 * @param {String} destinationLanguage Language of the translation.
 * @param {String} inputText The text to be translated.
 * @param {String} outputText The text translated.
 * @return {CardService.Card} The card to show to the user.
 */

/**
   *  Create a child card, and then navigate to it.
   *  @param {Object} e object containing the service property card to build.
   *  @return {ActionResponse}
   */
  function gotoRecipt(e) {
    Logger.log("gotoRecipt(e) called")
     //Logger.log(e)
    var service = e.parameters.service;  // Current card ID
    var title =  (service[0].toUpperCase() + service.substring(1)) + ' Card ';
    Logger.log(title)

    //message data
    let data = messageData(e)
    Logger.log(data)
    
    let card = CardService.newCardBuilder()
                .setHeader(
                  CardService.newCardHeader()
                  .setTitle("Enter Receipt"))
                .addSection(receiptFormSection(data))
                .build()

    
        

        
    // Create a Navigation object to push the card onto the stack.
    // Return a built ActionResponse that uses the navigation object.
    var nav = CardService.newNavigation().pushCard(card);
    return CardService.newActionResponseBuilder()
        .setNavigation(nav)
        .build();
  }

  function gotoCOI(e) {
    Logger.log("gotoRecipt(e) called")
     //Logger.log(e)
    var service = e.parameters.service;  // Current card ID
    var title =  (service[0].toUpperCase() + service.substring(1)) + ' Card ';
    Logger.log(title)

    //message data
    let data = messageData(e)
    Logger.log(data)
    
    let card = CardService.newCardBuilder()
                .setHeader(
                  CardService.newCardHeader()
                  .setTitle("Enter COI"))
                .addSection(coiFormSection(data))
                .build()

    
        

        
    // Create a Navigation object to push the card onto the stack.
    // Return a built ActionResponse that uses the navigation object.
    var nav = CardService.newNavigation().pushCard(card);
    return CardService.newActionResponseBuilder()
        .setNavigation(nav)
        .build();
  }

function createSelectionCard(e, originLanguage, destinationLanguage, inputText, outputText) {
  var hostApp = e['hostApp'];
  var builder = CardService.newCardBuilder();

 
  //Buttons section
  builder.addSection(CardService.newCardSection()
    .addWidget(CardService.newButtonSet()
      .addButton(CardService.newTextButton()
        .setText('Receipt')
        .setTextButtonStyle(CardService.TextButtonStyle.FILLED)
        .setOnClickAction(CardService.newAction().setFunctionName('gotoRecipt').setParameters({"service":"receipt"})) //.setParameters({'id': id.toString()})
        .setDisabled(false))
      .addButton(CardService.newTextButton()
        .setText('COI')
        .setTextButtonStyle(CardService.TextButtonStyle.FILLED)
        .setOnClickAction(CardService.newAction().setFunctionName('gotoCOI').setParameters({"service":"coi"}))
        .setDisabled(false))
      .addButton(CardService.newTextButton()
        .setText('Receipt2')
        .setTextButtonStyle(CardService.TextButtonStyle.FILLED)
        .setOnClickAction(CardService.newAction().setFunctionName('translateText'))
        .setDisabled(false))
      .addButton(CardService.newTextButton()
        .setText('Receipt3')
        .setTextButtonStyle(CardService.TextButtonStyle.FILLED)
        .setOnClickAction(CardService.newAction().setFunctionName('translateText'))
        .setDisabled(false))
        ))

        CardService.newNavigation()


/*
  if (hostApp === 'docs') {
    fromSection.addWidget(CardService.newButtonSet()
      .addButton(CardService.newTextButton()
        .setText('Get Selection')
        .setOnClickAction(CardService.newAction().setFunctionName('getDocsSelection'))
        .setDisabled(false)))
  } else if (hostApp === 'sheets') {
    fromSection.addWidget(CardService.newButtonSet()
      .addButton(CardService.newTextButton()
        .setText('Get Selection')
        .setOnClickAction(CardService.newAction().setFunctionName('getSheetsSelection'))
        .setDisabled(false)))
  } else if (hostApp === 'slides') {
    fromSection.addWidget(CardService.newButtonSet()
      .addButton(CardService.newTextButton()
        .setText('Get Selection')
        .setOnClickAction(CardService.newAction().setFunctionName('getSlidesSelection'))
        .setDisabled(false)))
  }else if (hostApp === 'gmail') {
    fromSection.addWidget(CardService.newButtonSet()
      .addButton(CardService.newTextButton()
        .setText('Get Selection')
        .setOnClickAction(CardService.newAction().setFunctionName('getSlidesSelection'))
        .setDisabled(false)))
  }


  builder.addSection(fromSection);
*/
  return builder.build();

}



/**
 * Helper function to translate the text. If the originLanguage is an empty string, the API detects the language
 * @return {CardService.Card} The card to show to the user.
 */
function translateText(e) {

}

/**
 * Helper function to clean the text.
 * @return {CardService.Card} The card to show to the user.
 */
function clearText(e) {
  var originLanguage = e.formInput.origin;
  var destinationLanguage = e.formInput.destination;
  return createSelectionCard(e, originLanguage, destinationLanguage, DEFAULT_INPUT_TEXT, DEFAULT_OUTPUT_TEXT);
}

/**
 * Helper function to get the text selected.
 * @return {CardService.Card} The selected text.
 */
function getDocsSelection(e) {
  var text = '';
  var selection = DocumentApp.getActiveDocument().getSelection();
  Logger.log(selection)
  if (selection) {
    var elements = selection.getRangeElements();
    for (var i = 0; i < elements.length; i++) {
      Logger.log(elements[i]);
      var element = elements[i];
      // Only modify elements that can be edited as text; skip images and other non-text elements.
      if (element.getElement().asText() && element.getElement().asText().getText() !== '') {
        text += element.getElement().asText().getText() + '\n';
      }
    }
  }

  if (text !== '') {
    var originLanguage = e.formInput.origin;
    var destinationLanguage = e.formInput.destination;
    var translation = LanguageApp.translate(text, e.formInput.origin, e.formInput.destination);
    return createSelectionCard(e, originLanguage, destinationLanguage, text, translation);
  }
}

/**
 * Helper function to get the text of the selected cells.
 * @return {CardService.Card} The selected text.
 */
function getSheetsSelection(e) {
  var text = '';
  var ranges = SpreadsheetApp.getActive().getSelection().getActiveRangeList().getRanges();
  for (var i = 0; i < ranges.length; i++) {
    const range = ranges[i];
    const numRows = range.getNumRows();
    const numCols = range.getNumColumns();
    for (let i = 1; i <= numCols; i++) {
      for (let j = 1; j <= numRows; j++) {
        const cell = range.getCell(j, i);
        if (cell.getValue()) {
          text += cell.getValue() + '\n';
        }
      }
    }
  }
  if (text !== '') {
    var originLanguage = e.formInput.origin;
    var destinationLanguage = e.formInput.destination;
    var translation = LanguageApp.translate(text, e.formInput.origin, e.formInput.destination);
    return createSelectionCard(e, originLanguage, destinationLanguage, text, translation);
  }
}

/**
 * Helper function to get the selected text of the active slide.
 * @return {CardService.Card} The selected text.
 */
function getSlidesSelection(e) {
  var text = '';
  var selection = SlidesApp.getActivePresentation().getSelection();
  var selectionType = selection.getSelectionType();
  if (selectionType === SlidesApp.SelectionType.TEXT) {
    var textRange = selection.getTextRange();
    if (textRange.asString() !== '') {
      text += textRange.asString() + '\n';
    }
  }
  if (text !== '') {
    var originLanguage = e.formInput.origin;
    var destinationLanguage = e.formInput.destination;
    var translation = LanguageApp.translate(text, e.formInput.origin, e.formInput.destination);
    return createSelectionCard(e, originLanguage, destinationLanguage, text, translation);
  }
}

