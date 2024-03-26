function addSubDivisionRow() {
  // Get the reference to the current spreadsheet
  var roboticsLabInventorySpreadsheet = SpreadsheetApp.openById("1FMiVqqGp0gbf7FvKf4GJ_oAtmiFGbeOK3I4qo3eIS4c");

  // Identify target row to add before
  var targetRow = 5;

  // Get "Sub-Divisions" spreadsheet
  var subDivisionSheet = roboticsLabInventorySpreadsheet.getSheetByName('Sub-Divisions');

  // Create new empty row before the target row
  subDivisionSheet.insertRowBefore(targetRow);

  // Select the new row
  var newRow = subDivisionSheet.getRange(targetRow, 1, 1, subDivisionSheet.getLastColumn());

  // Define the values in the range
  var newRowValues = [[

    "=CONCATENATE(SUBSTITUTE(C5, \"P/T\", \"\"), \"-\", TEXT(D5, \"00\"))",

    "=CONCATENATE(VLOOKUP(C5,'Storage Locations'!$A:$C,2,FALSE),\" \",VLOOKUP(C5,'Storage Locations'!$A:$C,3,FALSE),\" || \",$E5, IF(G5 = \"Yes\",CONCATENATE(\" \", REGEXREPLACE(RIGHT(A5,2), \"^0+\",\"\")),\"\"), IF(ISBLANK(F5),\"\",CONCATENATE(\": \", F5)))",

    "",
    "",
    "",
    "",
    "",

  ]];

  // Write the values in the range
  newRow.setValues(newRowValues);

  formatSubDivisionSheet();
}

function addStorageRow () {
  // Get the reference to the current spreadsheet
  var roboticsLabInventorySpreadsheet = SpreadsheetApp.openById("1FMiVqqGp0gbf7FvKf4GJ_oAtmiFGbeOK3I4qo3eIS4c");

  // Identify target row to add before
  var targetRow = 5;

  // Get "Sub-Divisions" spreadsheet
  var locationsSheet = roboticsLabInventorySpreadsheet.getSheetByName('Storage Locations');

  // Create new empty row before the target row
  locationsSheet.insertRowBefore(targetRow);

  // Select the new row
  var newRow = locationsSheet.getRange(targetRow, 1, 1, locationsSheet.getLastColumn());

  // Define the values in the range
  var newRowValues = [[

    "=CONCATENATE(SUBSTITUTE(D5, \"P/T\", \"\"), \"/\", TEXT(E5, \"000\"))",

    "",
    "",
    "",
    "",
    "",
    "",

  ]];

  // Write the values in the range
  newRow.setValues(newRowValues);

  formatStorageLocationSheet();
}

function addRow() {
  // Get the reference to the current spreadsheet
  var roboticsLabInventorySpreadsheetID = "1FMiVqqGp0gbf7FvKf4GJ_oAtmiFGbeOK3I4qo3eIS4c";
  var roboticsLabInventorySpreadsheet = SpreadsheetApp.openById(roboticsLabInventorySpreadsheetID);

  // Identify target row to add before
  var targetRow = 5;

  // Get "Items" spreadsheet
  var itemsSheet = roboticsLabInventorySpreadsheet.getSheetByName('Items');

  // Unprotect the ranges
  // var locationInfoRange = itemsSheet.getRange("F4:H"); // Change this to your specific range
  // locationInfoRange.protect().remove();

  // var itemIDRange = itemsSheet.getRange("A4:A"); // Change this to your specific range
  // itemIDRange.protect().remove();

  // Get "roomsAndTypesSheet" spreadsheet
  var roomsAndTypesSheet = roboticsLabInventorySpreadsheet.getSheetByName('Rooms and Types');

  // Unprotect sheet
  // roomsAndTypesSheet.protect().remove();

  // Get cell where the maximum value of Item ID is stored, from "Rooms and Types" Sheet
  var maxItemIDCell = roomsAndTypesSheet.getRange('F3');

  // Reset maxItemID Cell in "Rooms and Types"
  maxItemIDCell.setFormula('=MAX(Items!$A$5:$A)');

  // write maximum ID value
  var maxValue = maxItemIDCell.getValue() + 1;

  // Get all current Item IDs
  // var itemIDs = itemsSheet.getRange('A4:A2000').getValues()[0]

  // Get the maximum value in the range
  // var maxValue = Math.max.apply(null, itemIDs);

  // Generate the new item ID
  // var newItemID = maxValue + 1;

  // Create new empty row before the target row 
  itemsSheet.insertRowBefore(targetRow);

  // Select first cell in row
  var firstCell = itemsSheet.getRange("A" + targetRow);

  // Select the new row
  var newRow = itemsSheet.getRange(targetRow, 2, 1, itemsSheet.getLastColumn() - 1);

  // Set first cell value
  // firstCell.setFormula('=DEC2HEX(RANDBETWEEN(0, 16777215), 6)');
  // firstCell.setValue(Math.floor(Math.random() * 16777215).toString(16).toUpperCase());
  firstCell.setValue(maxValue);

  // Get cell where the current date value is stored, from "Rooms and Types" Sheet
  var dateCell = roomsAndTypesSheet.getRange('G3');

  // Reset maxItemID Cell in "Rooms and Types"
  dateCell.setFormula('=TODAY()');

  // Write current date
  var dateValue = dateCell.getValue();

  // Define the values in the range
  var newRowValues = [[
    "", 
    "", 
    "",
    dateValue,
    "",
    "=VLOOKUP(F5,'Sub-Divisions'!A:$B,2,FALSE)",
    "=VLOOKUP(LEFT(F5,LEN(F5)-3),'Storage Locations'!$A:$F,6,FALSE)",
    "=VLOOKUP(CONCATENATE(\"P/T\",LEFT(F5,LEN(F5)-7)),\'Rooms and Types\'!$A:$B,2,FALSE)",
    ]];

  // Write the values in the range
  newRow.setValues(newRowValues);

  // Reset maxItemID Cell in "Rooms and Types"
  maxItemIDCell.setFormula('=MAX(Items!$A$5:$A)');

  // Re-protect ranges
  // locationInfoRange.protect();
  // itemIDRange.protect();
  // roomsAndTypesSheet.protect();
}
