/**
 * todo: 
 *  add memo line to all cards. message subject will be the memo
 *  find referance # should hit on (Invoice No. : ECT-76546) && (#548)
 *  text fields for vendors and customers in the receipt, coi, and bill cards will need to check if in contacts already. 
 *  if not prompt user with add contact card using contact service.
 *  the contact card needs to have input fields for all add or set methods.
 *  bill attachment upload time is vary slow
 *  find ways to push processing off client side in hopes to reduce UI interruptions 
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

