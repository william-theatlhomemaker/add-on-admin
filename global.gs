/**
 * sheetname: Receipt Uploader
 * @global {Sheet} receiptSheet
 */
let receiptSheet = SpreadsheetApp.openById('1rjdkU2R1K36ySk_zD1ZafAaiodAc17U5qbkID5Vlvzc').getSheetByName('Receipts')

/**
 * prevents data writing to drive and sheets
 * @global {Bolean} _testigInProgress
 */
let _testigInProgress = true