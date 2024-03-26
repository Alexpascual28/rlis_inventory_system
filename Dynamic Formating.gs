// function onEdit(e) {
//   // Get the active range
//   var cell = e.range;

//   // Get the reference to the current spreadsheet
//   var roboticsLabInventorySpreadsheet = SpreadsheetApp.getActiveSpreadsheet();

//   // Get the active sheet
//   var activeSheet = roboticsLabInventorySpreadsheet.getActiveSheet();

//   // Get "Items" spreadsheet
//   var itemsSheet = roboticsLabInventorySpreadsheet.getSheetByName('Items');

//   // Get "Sub-Divisions" spreadsheet
//   var subDivisionsSheet = roboticsLabInventorySpreadsheet.getSheetByName('Sub-Divisions');

//   // Get column 1 values of subDivisionsSheet
//   var subDivisionIDRange = subDivisionsSheet.getRange('A3:A');
//   var subDivisionIDs = subDivisionIDRange.getValues();

//   if(activeSheet === itemsSheet) {
//     if(cell.getColumn() == 5 && cell.getRow() >= 4){

//       // Loop through the range values to check if the target value is present
//       for (var i = 0; i < subDivisionIDs.length; i++) {

//         if (subDivisionIDs[i][0] === cell.value) {

//           var subDivisionCell = subDivisionsSheet.getRange(i + 3, 1);
//           var targetCell = itemsSheet.getRange(cell.range.getRow(), cell.range.getColumn());

//           var backgroundColour = subDivisionCell.getBackground();

//           targetCell.setBackground(backgroundColour);

//           return;
//         }
//       }
//     }
//   }
// }