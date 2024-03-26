function formatSubDivisionSheet(){
  formatColumnCellsByLocation("Sub-Divisions", "A", "A");
  formatColumnCellsBySubDivision();
}

function formatStorageLocationSheet() {
  formatColumnCellsByLocation("Storage Locations", "A", "E");
}

function formatColumnCellsByLocation(t_sheetName, t_sourceColumnName, t_targetColumnName) {
  // Get the reference to the current spreadsheet
  var roboticsLabInventorySpreadsheetID = "1FMiVqqGp0gbf7FvKf4GJ_oAtmiFGbeOK3I4qo3eIS4c";
  var roboticsLabInventorySpreadsheet = SpreadsheetApp.openById(roboticsLabInventorySpreadsheetID);

  // Set the sheet and column you want to format
  var sheetName = t_sheetName; // "Storage Locations"; // Replace with your sheet name
  var sourceColumnName = t_sourceColumnName; // "A"; // Column to read
  var targetColumnName = t_targetColumnName; // "E"; // Column to format

  var sheet = roboticsLabInventorySpreadsheet.getSheetByName(sheetName);
  var range = sheet.getRange(sourceColumnName + "5:" + sourceColumnName + sheet.getLastRow());
  var targetRange = sheet.getRange(targetColumnName + "5:" + targetColumnName + sheet.getLastRow());

  var values = range.getValues();

  // Loop through each cell in the specified column
  for (var i = 0; i < values.length; i++) {
    var cellValue = values[i][0];

    if(sourceColumnName === "A" && sheetName === "Sub-Divisions") {
      // Extract the middle three characters as a number
      var lastThreeCharacters = parseInt((cellValue.slice(-6).slice(0, -3)), 10);
    }
    else {
      // Extract the last three characters as a number
      var lastThreeCharacters = parseInt(cellValue.slice(-3), 10);
    }

    // Calculate the color based on the subtle gradient
    var color = calculateSubtleGradientColorLocation(lastThreeCharacters);

    // Set the background color of the cell
    targetRange.getCell(i + 1, 1).setBackground(color);
  }
}

function calculateSubtleGradientColorLocation(value) {
  // Calculate the hue based on the subtle gradient from 1 to 60

  // Extract the first digit as an integer
  var firstDigit = Number.isInteger(value) && value >= 100 && value <= 999 ? parseInt(value.toString().charAt(0), 10) : 0;

  var offset = firstDigit * 100;
  var remainder = value - offset;

  // var hue = ((((remainder / 11) * 360 + (firstDigit * 180)) / 360) % 1) * 360; // Adjust 120 for a different color range
  var hue = ((((remainder / 13) * 360) / 360) % 1) * 360; // Adjust 120 for a different color range

  // Convert HSL to RGB
  var rgbColor = hslToRgb(hue / 360, 0.8, 0.9);

  // Convert RGB to hexadecimal color code
  var hexColor = rgbToHex(rgbColor);

  return hexColor;
}

function formatColumnCellsBySubDivision() {
  // Get the reference to the current spreadsheet
  var roboticsLabInventorySpreadsheetID = "1FMiVqqGp0gbf7FvKf4GJ_oAtmiFGbeOK3I4qo3eIS4c";
  var roboticsLabInventorySpreadsheet = SpreadsheetApp.openById(roboticsLabInventorySpreadsheetID);

  // Set the sheet and column you want to format
  var sheetName = "Sub-Divisions"; // Replace with your sheet name
  var sourceColumnName = "A"; // Column to read
  var targetColumnName = "D"; // Column to format

  var sheet = roboticsLabInventorySpreadsheet.getSheetByName(sheetName);
  var sourceRange = sheet.getRange(sourceColumnName + "5:" + sourceColumnName + sheet.getLastRow());
  var targetRange = sheet.getRange(targetColumnName + "5:" + targetColumnName + sheet.getLastRow());

  var values = sourceRange.getValues();

  // Loop through each cell in the specified column
  for (var i = 0; i < values.length; i++) {
    var cellValue = values[i][0];

    // Extract the last two characters as a number
    var lastTwoCharacters = parseInt(cellValue.slice(-2), 10);

    // Calculate the color based on the subtle gradient
    var color = calculateSubtleGradientColorSubDivision(lastTwoCharacters);

    // Set the background color of the cell
    targetRange.getCell(i + 1, 1).setBackground(color);
  }
}

function calculateSubtleGradientColorSubDivision(value) {
  // Calculate the hue based on the subtle gradient from 1 to 60
  var hue = ((((value / 17) * 360) / 360) % 1) * 360; // Adjust 120 for a different color range

  // Convert HSL to RGB
  var rgbColor = hslToRgb(hue / 360, 0.8, 0.9);

  // Convert RGB to hexadecimal color code
  var hexColor = rgbToHex(rgbColor);

  return hexColor;
}

function hslToRgb(h, s, l) {
  var r, g, b;

  if (s == 0) {
    r = g = b = l; // achromatic
  } else {
    function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    }

    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function rgbToHex(rgb) {
  return "#" + ((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2]).toString(16).slice(1);
}

function calculateColor(value) {
  // Define the color gradient mapping
  var colorGradient = [
    "#00ff00", "#00ffff", "#0000ff", "#800080", "#ff00ff",
    "#ff0000", "#ffa500", "#ffff00"
  ];

  // Adjust value to fit within the range 0-7
  value = Math.min(Math.max(value, 0), 7);

  // Calculate the index in the gradient based on the value
  var index = Math.round((value / 7) * (colorGradient.length - 1));

  return colorGradient[index];
}

