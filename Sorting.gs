function sortByItemID() {
  // Get the reference to the current spreadsheet
  var roboticsLabInventorySpreadsheet = SpreadsheetApp.openById("1FMiVqqGp0gbf7FvKf4GJ_oAtmiFGbeOK3I4qo3eIS4c");

  // Get "Items" sheet
  var itemsSheet = roboticsLabInventorySpreadsheet.getSheetByName('Items');

  // Get range
  var itemsRange = itemsSheet.getRange('A5:I');

  // Get cell where the current order value is stored
  var orderCell = itemsSheet.getRange('F2');

  // Get current order
  var orderValue = orderCell.getValue();

  if(orderValue === "Ascending") {
    var isAscending = true; 
  }
  else {
    var isAscending = false; 
  }

  itemsRange.sort({column: 1, ascending: isAscending})
}

function sortByLocation() {
  // Get the reference to the current spreadsheet
  var roboticsLabInventorySpreadsheet = SpreadsheetApp.openById("1FMiVqqGp0gbf7FvKf4GJ_oAtmiFGbeOK3I4qo3eIS4c");

  // Get "Items" sheet
  var itemsSheet = roboticsLabInventorySpreadsheet.getSheetByName('Items');

  // Get range
  var itemsRange = itemsSheet.getRange('A5:I');

  // Get cell where the current order value is stored
  var orderCell = itemsSheet.getRange('F2');

  // Get current order
  var orderValue = orderCell.getValue();

  if(orderValue === "Ascending") {
    var isAscending = true; 
  }
  else {
    var isAscending = false; 
  }

  itemsRange.sort([{column: 6, ascending: isAscending}, {column: 5, ascending: false}])
}

function sortByDate() {
  // Get the reference to the current spreadsheet
  var roboticsLabInventorySpreadsheet = SpreadsheetApp.openById("1FMiVqqGp0gbf7FvKf4GJ_oAtmiFGbeOK3I4qo3eIS4c");

  // Get "Items" sheet
  var itemsSheet = roboticsLabInventorySpreadsheet.getSheetByName('Items');

  // Get range
  var itemsRange = itemsSheet.getRange('A5:I');

  // Get cell where the current order value is stored
  var orderCell = itemsSheet.getRange('F2');

  // Get current order
  var orderValue = orderCell.getValue();

  if(orderValue === "Ascending") {
    var isAscending = true; 
  }
  else {
    var isAscending = false; 
  }

  itemsRange.sort([{column: 5, ascending: isAscending}, {column: 6, ascending: false}])
}