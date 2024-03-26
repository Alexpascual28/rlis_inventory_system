function getSubdivisionName(locationID) {
  // Get the reference to the current spreadsheet
  var roboticsLabInventorySpreadsheetID = "1FMiVqqGp0gbf7FvKf4GJ_oAtmiFGbeOK3I4qo3eIS4c";
  var roboticsLabInventorySpreadsheet = SpreadsheetApp.openById(roboticsLabInventorySpreadsheetID);

  // Get "Sub-Divisions" spreadsheet
  var subDivisionsSheet = roboticsLabInventorySpreadsheet.getSheetByName('Sub-Divisions');

  // Get column 1 values of subDivisionsSheet
  var subDivisionIDs = subDivisionsSheet.getRange('A:A').getValues();

  // Save address in memory to store adjacent sub division value
  let subDivisionName = "";

  // Loop through the range values to check if the target value is present
  for (var i = 0; i < subDivisionIDs.length; i++) {
    if (subDivisionIDs[i][0] === locationID) {

      // If the target value is found, return the value of the adjacent cell
      subDivisionName = subDivisionsSheet.getRange(i + 1, 2).getValue();

      return subDivisionName;
    }
  }

  return subDivisionName;
}

function getLocationDescription(locationID) {
  // get only the storage ID by removing the last 3 characters from the string
  var storageID = locationID.slice(0, -3);

  // Get the reference to the current spreadsheet
  var roboticsLabInventorySpreadsheetID = "1FMiVqqGp0gbf7FvKf4GJ_oAtmiFGbeOK3I4qo3eIS4c";
  var roboticsLabInventorySpreadsheet = SpreadsheetApp.openById(roboticsLabInventorySpreadsheetID);

  // Get "storageLocationsSheet" spreadsheet
  var storageLocationsSheet = roboticsLabInventorySpreadsheet.getSheetByName('Storage Locations');

  // Get column 1 values of storageLocationsSheet
  var storageLocationIDs = storageLocationsSheet.getRange('A:A').getValues();

  // Save address in memory to store adjacent sub division value
  let locationDescription = "";

  // Loop through the range values to check if the target value is present
  for (var i = 0; i < storageLocationIDs.length; i++) {
    if (storageLocationIDs[i][0] === storageID) {

      // If the target value is found, return the value of the adjacent cell
      locationDescription = storageLocationsSheet.getRange(i + 1, 5).getValue();

      return locationDescription;
    }
  }

  return locationDescription;
}

function getRoomName(locationID) {
  // Get only the room ID by removing the last 7 characters from the string and adding "P/T" to the start of the string
  var roomID = "P/T" + locationID.slice(0, -7);

  // Get the reference to the current spreadsheet
  var roboticsLabInventorySpreadsheetID = "1FMiVqqGp0gbf7FvKf4GJ_oAtmiFGbeOK3I4qo3eIS4c";
  var roboticsLabInventorySpreadsheet = SpreadsheetApp.openById(roboticsLabInventorySpreadsheetID);

  // Get "roomsAndTypesSheet" spreadsheet
  var roomsAndTypesSheet = roboticsLabInventorySpreadsheet.getSheetByName('Rooms and Types');

  // Get column 1 values of roomsAndTypesSheet
  var roomIDs = roomsAndTypesSheet.getRange('A:A').getValues();

  // Save address in memory to store adjacent sub division value
  let roomName = "";

  // Loop through the range values to check if the target value is present
  for (var i = 0; i < roomIDs.length; i++) {
    if (roomIDs[i][0] === roomID) {

      // If the target value is found, return the value of the adjacent cell
      roomName = roomsAndTypesSheet.getRange(i + 1, 2).getValue();

      return roomName;
    }
  }

  return roomName;
}
