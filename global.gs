/**
 * todo: 
 *  add memo line to all cards. message subject will be the memo
 *  find referance # should hit on (Invoice No. : ECT-76546)
 *  convert attachment type docx to pdf
 */

/**
 * prevents data writing to drive and sheets
 * @global {Bolean} _testigInProgress
 */
let _testigInProgress = false

/**
 * sheetname: Receipt Uploader
 * @global {Sheet} receiptSheet
 */
let receiptSheet = SpreadsheetApp.openById('1rjdkU2R1K36ySk_zD1ZafAaiodAc17U5qbkID5Vlvzc').getSheetByName('Receipts')

/**
 * sheetname: Receipt Uploader
 * @global {Sheet} receiptSheet
 */
let coiSheet = SpreadsheetApp.openById('1JipJWSvW5bZkXOcMRP5CDaOf_S3zkxJub5wdU3RRWcc').getSheetByName('Sheet1')

/**
 * sheetname: Receipt Uploader
 * @global {Sheet} receiptSheet
 */
let billSheet = SpreadsheetApp.openById('1JDdR2BQueG-cweGzyIOdBtlihzjjB0ny4LhGKvI4I7U').getSheetByName('Invoices')
