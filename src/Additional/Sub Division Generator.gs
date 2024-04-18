function createSubDivisions() {
  // Get current spreadsheet
  var roboticsLabInventorySpreadsheetID = "1FMiVqqGp0gbf7FvKf4GJ_oAtmiFGbeOK3I4qo3eIS4c";
  var roboticsLabInventorySpreadsheet = SpreadsheetApp.openById(roboticsLabInventorySpreadsheetID);

  // Get "Storage Locations" spreadsheet
  var storageLocationsSheet = roboticsLabInventorySpreadsheet.getSheetByName('Storage Locations');

  // Get "Sub-Divisions" spreadsheet
  var subDivisionsSheet = roboticsLabInventorySpreadsheet.getSheetByName('Sub-Divisions');

  // Get "Rooms and Types" spreadsheet
  var roomsAndTypesSheet = roboticsLabInventorySpreadsheet.getSheetByName('Rooms and Types');

  // In "Sub-Divisions" -> delete everything
  subDivisionsSheet.getDataRange().offset(1, 0, subDivisionsSheet.getMaxRows(), subDivisionsSheet.getMaxColumns()).clearContent();

  // In "Sub-Divisions" -> Create first row with titles
  var firstRow = subDivisionsSheet.getRange('A1:D1');

  // Set the values in the range
  var firstRowValues = [["Sub-Division ID", "Name/Contents", "Sub-Division Type", "Storage Location"]];
  firstRow.setValues(firstRowValues);

  // Make the text in the range bold
  firstRow.setFontWeight("bold");

  // Create loop and repeat until all rows are read
  for (var storageLocationsRowNum = 2; storageLocationsRowNum <= storageLocationsSheet.getLastRow(); storageLocationsRowNum++) {

    // In "Storage Locations" -> Read row, get contents into a list
    var storageRow = storageLocationsSheet.getRange(storageLocationsRowNum, 1, 1, storageLocationsSheet.getLastColumn()).getValues()[0];

    // Get default sub-division type
    // Specify the target cell and the range to check
    var storageTypesRange = roomsAndTypesSheet.getRange('D2:D11');

    // Get the values of the target cell and the range to check
    var storageTypeTargetValue = storageRow[2]
    var storageTypesRangeValues = storageTypesRange.getValues();

    // Save address in memory to store adjacent sub division value
    let subDivisionType = "";

    // Loop through the range values to check if the target value is present
    for (var i = 0; i < storageTypesRangeValues.length; i++) {
      if (storageTypesRangeValues[i][0] === storageTypeTargetValue) {

        // If the target value is found, return the value of the adjacent cell in column E
        subDivisionType = roomsAndTypesSheet.getRange(i + 2, 5).getValue();
      }
    }

    // Repeat loop {"# of Sub-Divisions" number of times}:
    for (var counter = 1; counter <= storageRow[5]; counter++) {

      // Get the next row number
      var subDivisionsRowNumber = subDivisionsSheet.getLastRow() + 1;
      
      // In "Sub-Divisions" -> Write:
      subDivisionsSheet.appendRow([
        
        // "Sub-Division ID"-> "=CONCATENATE(SUBSTITUTE(D2, "P/T", ""), {counter in /xx format} )"
        '=CONCATENATE(SUBSTITUTE(' + '$D$' + subDivisionsRowNumber + ', "P/T", ""), "/' + ('00' + counter).slice(-2) + '")',

        // "Name/Contents"-> "Name/Contents" + "Storage Type" + subDivisionType + counter
        // '=CONCATENATE("'+ storageRow[1] + ' "' + ', "' + storageRow[2] + ' "' + ', ' + '$C$' + subDivisionsRowNumber + ', " ' + counter + '")',
        '=CONCATENATE('+ '\'Storage Locations\'!$B$' + storageLocationsRowNum + '," ",' +
        '\'Storage Locations\'!$C$' + storageLocationsRowNum + '," ",' + '$C$' + subDivisionsRowNumber + '," ' + counter + '")',

        // "Sub-Division Type"-> respective according to list in "Rooms and Types" and "Storage Type" (dropdown)
        subDivisionType,

        // "Storage Location" -> "Storage ID" (dropdown)
        storageRow[0],
      ]);
    }
  }
}
