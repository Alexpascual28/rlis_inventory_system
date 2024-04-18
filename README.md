<p align="center">
  <img src="https://www.svgrepo.com/show/380387/bookcase-books-bookshelf-shelf-decoration.svg" width="100" alt="project-logo">
</p>
<p align="center">
    <h1 align="center">RLIS Robotics Lab Inventory System</h1>
</p>
<p align="center">
    <em><code>The Robotics Laboratory Inventory System (RLIS) is a Google Sheets-based system designed to streamline inventory management in the robotics teaching laboratory. This repo contains Google Apps Script (Javascript) code for the Robotics Laboratory Inventory System (RLIS). These functions are used to modify or format the RLIS Google Spreadsheets database that stores all lab items and locations.</code></em>
</p>

<br><!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary><br>

- [ Overview](#-overview)
- [ Directory Description](#directory-description)
- [ Repository Structure](#-repository-structure)
- [ Modules](#-modules)
- [ Getting Started](#-getting-started)
  - [ Installation](#-installation)
  - [ Usage](#-usage)
- [RLIS](#rlis)
- [ Code Overview](#code-overview)
- [ Contributing](#-contributing)
</details>
<hr>

##  Overview

<code>This document provides a comprehensive guide for the Robotics Laboratory Inventory System (RLIS) developed using Google Apps Script. The RLIS is designed to manage and maintain an up-to-date inventory of items and locations in the robotics lab using Google Sheets as the backend database. This script suite enables dynamic interaction with the data, allowing users to add, sort, format, and generate reports directly from the spreadsheet interface.</code>

<code>It uses various sheets to organize items, their storage locations, and the detailed subdivisions of these locations. Each sheet is equipped with buttons for performing specific actions like adding new entries or sorting existing data, and the system includes visual maps to enhance user interaction.</code>

---

##  Directory Description

* **src/**: Contains all the Google Apps Script code for the project.

   * **Add Row.gs**: Contains functions to dynamically insert new rows in the "Items", "Storage Locations", and "Sub-Divisions" sheets. It aut**omates ID creation and linking data across sheets.
   * **Formating.gs**: Manages the aesthetic aspects of the spreadsheet, applying color formats and styles based on predefined criteria to enhance readability and data segmentation.
   * **Sorting.gs**: Includes functions to sort data in the "Items" sheet based on different attributes like item ID, location, and date to facilitate quick data retrieval and organization.

   * **Additional/**: Folder containing additional miscellaneous code.

      * **Custom RLIS Functions.gs**: Contains custom functions specific to the RLIS for content lookup and content completion. VLOOKUP() was used instead since it was more responsive.
      * **Dynamic Formatting.gs**: Applies conditional formatting dynamically based on the data content and criteria specific to the inventory needs.
      * **Sub Division Generator.gs** - Automates the creation of sub-divisions within the sub-divisions spreadsheet based on the given number of sub-divisions per storage location in the storage locations spreadsheet. Used to create sub-divisions in bulk.
      * **Tests.gs** - Includes tests to ensure the reliability and accuracy of the other scripts.

---

##  Repository Structure

```sh
└── rlis_inventory_system/
    ├── Robotics Laboratory Inventory System.xlsx
    ├── README.md
    └── src/
         ├── Add Row.gs
         ├── Formating.gs
         ├── Sorting.gs
         └── Additional/
               ├── Sub Division Generator.gs
               ├── Dynamic Formating.gs
               ├── Custom RLIS Functions.gs
               └── Tests.gs
```

---

##  Modules

<details open><summary>.</summary>

| File                                                                                                                          | Summary                         |
| ---                                                                                                                           | ---                             |
| [Sub Division Generator.gs](https://github.com/Alexpascual28/rlis_inventory_system.git/blob/master/Sub%20Division%20Generator.gs) | <code>► INSERT-TEXT-HERE</code> |
| [Tests.gs](https://github.com/Alexpascual28/rlis_inventory_system.git/blob/master/Tests.gs)                                   | <code>► INSERT-TEXT-HERE</code> |
| [Formating.gs](https://github.com/Alexpascual28/rlis_inventory_system.git/blob/master/Formating.gs)                           | <code>► INSERT-TEXT-HERE</code> |
| [Sorting.gs](https://github.com/Alexpascual28/rlis_inventory_system.git/blob/master/Sorting.gs)                               | <code>► INSERT-TEXT-HERE</code> |
| [Dynamic Formating.gs](https://github.com/Alexpascual28/rlis_inventory_system.git/blob/master/Dynamic%20Formating.gs)           | <code>► INSERT-TEXT-HERE</code> |
| [Add Row.gs](https://github.com/Alexpascual28/rlis_inventory_system.git/blob/master/Add%20Row.gs)                               | <code>► INSERT-TEXT-HERE</code> |
| [Custom RLIS Functions.gs](https://github.com/Alexpascual28/rlis_inventory_system.git/blob/master/Custom%20RLIS%20Functions.gs)   | <code>► INSERT-TEXT-HERE</code> |

</details>

---

##  Getting Started

**Prerequisites**

To run these scripts, you will need:

* Access to **Google Sheets**
* **Google Apps Script** linked to the **Google Sheets**

###  Installation

<h4>From <code>source</code></h4>

> 1. Clone the rlis_inventory_system repository:
>
> ```console
> $ git clone https://github.com/Alexpascual28/rlis_inventory_system.git
> ```
>
> 2. Change to the project directory:
> ```console
> $ cd rlis_inventory_system
> ```

**Setup Instructions**

To deploy RLIS on your Google Sheets:

* Import `Robotics Laboratory Inventory System (RLIS).xlsx`into your Google Drive or Google Docs. Open with Google sheets.
* Open Script Editor:
   - Navigate to **Extensions** > **Apps Script**.
   - Delete any code in the script editor and replace it with the code from the `.gs` files provided.

* Name and Save Your Project:
   - Click **File** > **Save** and name your project **Robotics Laboratory Inventory System (RLIS)**.

###  Usage

Each script file is equipped with specific functions that are triggered by either manual execution or spreadsheet events. Here's different ways how you can run the functions:

**Manual Execution**

* Go to the Apps Script window.
* Select the function you want to run from the dropdown.
* Click the **play/run** button.

**Trigger Setup**

You can set up triggers for these functions to run automatically based on specific actions or time intervals:

* Go to **Triggers** in the Apps Script menu.
* Click **Add Trigger**.
* Choose the function you want to set the trigger for.
* Set the type of trigger (e.g., *time-driven* or *event-driven*).

**Button Setup**

Creating a button in Google Sheets and linking it to a function in Google Apps Script is a straightforward process that enhances the interactivity of your spreadsheet.

1. Insert a Drawing as a Button

   * Click on **Insert** in the menu bar.
   * Select **Drawing** > **+ New**.
   * In the drawing dialog that appears, use the shape tool to draw a rectangle or any shape that you'd like to use as a button.
   * Add text to your shape if you want, like "*Add Row*".
   * Click **Save and Close** to add the drawing to your sheet.

2. Link the Drawing to Your Script

   * Once the drawing is placed in your sheet, click on it to select it.
   * You’ll see a small menu icon in the top right corner of the drawing (it looks like three vertical dots).
   * Click on the menu icon, and select **Assign script**.
   * In the dialog box that appears, enter the name of the function you wrote in Apps Script (`addRow` in this case). Do not include the parentheses.
   * Click **OK**.

---

##  RLIS

The `Robotics Laboratory Inventory System (RLIS)` spreadsheet is set up to help manage and organize inventory in a robotics lab. It uses several sheets within one Google Spreadsheet to keep track of items, their locations, subdivisions of these locations, and room details. Each sheet is equipped with buttons for performing specific actions like adding new entries or sorting existing data, and the system includes visual maps to enhance user interaction.

### Spreadsheet Structure and Functionality

1. **Items Sheet**

   This sheet lists all the items available in the laboratory. It serves as the central database for all individual items in the lab's inventory. The "Items" sheet also provides detailed information about individual items stored in the robotics laboratory. 

   * **Columns**:
        These two columns are filled automatically when a new row is created using the "Add Item" button(`addRow()`).

        - **Item ID**: A unique identifier for each item in the inventory. 
        - **Date Modified**: The last date when the item's information was updated in RLIS. This is filled with the cutrrent date when creating a new item, but it should be modified manually by the user when information about the item is changed.

        The user must then manually fill-up the following information about the new item:

        - **Item Name**: The name of the item.
        - **Description**: Detailed description of the item, possibly including its use or specifications.
        - **Quantity**: The quantity of each item available.
        - **Location ID**: The identifier of the storage location where the item is kept, linking back to the "Sub-Divisions" and "Storage Locations" sheet. The Location ID has a format of **/RRR/SSS-DD**, where *RRR* is the **room number** (e.g ifn room is P/T/410, *RRR* is 410), *SSS* is the **storage location number** (see area map for reference), and *DD* is the **sub-division number**.

        The following three columns are then automatically filled based on the inputted **Location ID**:

        - **Sub-Division Name**: The specific sub-division within the storage location where the item is stored. 
        - **Location Description**: A detailed description of the exact location of the item within the facility.
        - **Room**: The name of the room where the item is stored, further linking to details in the "Rooms and Types" sheet.

        **Example Item**:

        | Item ID  | Item Name          | Description                                     | Quantity| Date Modified | Location ID | Sub-Division Name | Location Description | Room |
        | ---      | ---                | ---                                             | ---     | ---           | ---         | ---               | ---                  | ---  |
        | 243      | RDaC Returned Kits | Untested RDaC returned kits (Robotics Students) | 20      | 2024-03-19    | /410/205-01 | Temporary Project Components Cupboard, Shelf 1 | Cupboard under robotics arena, next to Bench 14 | Robotics Teaching Lab (4th Floor) |

   * **Buttons**:
      - **[Add Item]**: Executes `addRow()` from "*Add Row.gs*" to insert new item entries.
      - **[By Item]**, **[By Date]**, **[By Location]**: Linked to `sortByItemID()`, `sortByDate()`, and `sortByLocation()` in "*Sorting.gs*", respectively. These buttons allow users to reorder the list based on the item ID, the date of entry/update, or the storage location.

   * **Area Map**: Illustrates the arrangement of storage locations within the lab, linking visual space to data entries, helping users find items’ physical locations faster.

2. **Storage Locations Sheet**

   It details where each item is stored within the lab. This helps in quickly finding where an item is physically located.

   **Purpose**: Details where each item is stored within the lab, described by identifiers like Storage ID and detailed descriptions of the location within the lab’s space.
   **Columns**: Storage ID, Storage Name, Storage Type, Room, and detailed location descriptions.
   **Buttons**:
      - **[Add Location]**: Tied to `addStorageRow()` in "*Add Row.gs*", which facilitates the inclusion of new storage locations into the system.
      - **[Re-Format Sheet Colours]**: Linked to `formatStorageLocationSheet()` in "*Formating.gs*", this button allows users to reapply color formats to enhance the visual differentiation of data.
   **Area Map**: Similar to the "**Items**" sheet, providing a visual representation of storage locations to improve spatial understanding.

3. **Sub-Divisions Sheet**

   This sheet breaks down each storage location into smaller parts, such as shelves or drawers. It is used for fine-grained management of the storage areas.

   * **Purpose**: Breaks down each storage location further into smaller divisions like shelves or drawers, crucial for precise inventory management.
   * **Columns**: Sub-Division ID, Full Name/Contents, Storage Location, ID Number, Sub-Division Type, Label, and a column indicating if an item count is required.
   * **Buttons**:
      - **[Add Sub-Division]**: Executes `addSubDivisionRow()` in "*Add Row.gs*" to add new subdivisions, enhancing the granularity of location data.
      - **[Re-Format Sheet Colours]**: Tied to `formatSubDivisionSheet()` in "*Formating.gs*", used to refresh the visual styling of the sheet.

4. **Rooms and Types Sheet**

   * Lists different rooms in the lab and their purposes.
   * Columns include Room ID, Room Name, Floor, Storage Types, Sub-Division Types, Max Item ID, and Current Date.
   * This sheet is crucial for managing spaces within the laboratory and understanding their usage.

### Features

**Data Entry and Management**

New items, locations, and subdivisions are added manually or through scripts in Google Apps Script that automate parts of the process, such as assigning new IDs or inserting new rows. Users can add new items, locations, or subdivisions by clicking the respective "**[Add]**" button. This action triggers a function that automatically inserts a new row, assigns an ID, and links relevant data across sheets.

Each item entry includes links to its storage and subdivision, ensuring that all data is interconnected for easy navigation and update.

**Sorting and Searching Data**

This makes it easy to find items quickly. Users can manually sort or use script triggers to automatically sort the inventory as new data is added. Custom functions in Google Apps Script are used to sort data in the sheets based on various criteria like item ID, location, or date. 

The sorting buttons on the "Items" sheet provide a quick way to organize the view based on different criteria. Clicking these buttons triggers sorting functions that reorder the data as specified, making it easier to locate or analyze inventory based on varying needs.

**Automated Formatting**

The spreadsheet uses scripts to apply conditional formatting automatically. This helps highlight different types of data, such as items that are low in stock or newly added equipment. Color coding and other visual aids are used to make the spreadsheet user-friendly and data easy to read at a glance.

The re-formatting buttons apply predefined color schemes to the sheets, enhancing readability and helping users quickly distinguish between different types of data or status.

**Integration and Updating**

The spreadsheet is designed to be flexible and scalable. It can be connected with other tools like Google Forms for inventory checks or updates, and it can be expanded with more sheets or columns as needed. Regular updates to the script ensure that the system remains efficient and continues to meet the needs of the lab.

**Area Maps**

The inclusion of area maps in the "Items" and "Storage Locations" sheets provides a visual tool that correlates physical space in the lab with data entries. This feature is especially useful in large labs where locating an item’s position can be challenging.

---

## Code Overview

### Adding Rows

When a new item or location needs to be added to the database, the corresponding add* function in **Add Row.gs** is executed. Here’s a brief snippet showing how a new row is added and ID is generated for sub-divisions:

```javascript
function addSubDivisionRow() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sub-Divisions');
  var lastRow = sheet.getLastRow();
  sheet.insertRowAfter(lastRow);
  var newRow = sheet.getRange(lastRow + 1, 1);
  newRow.setValues([['New ID', 'Other Info']]);
}
```

**Functions Overview**

* `addSubDivisionRow`:
   * This function adds a new row in the **"Sub-Divisions"** sheet of the spreadsheet.
   * It defines where to insert the new row and sets up formulas to automatically populate fields based on existing data in other sheets like **"Storage Locations"**.
   * It constructs the sub-division ID dynamically using concatenation and regex functions to format data from other cells in the sheet.
   * After inserting and setting up the new row, another function `formatSubDivisionSheet()` is called, presumably to apply formatting rules.

* `addStorageRow`:
   * Similar to the first function, it adds a new row to the **"Storage Locations"** sheet.
   * The new row’s data fields are set up with formulas that dynamically generate IDs and link data from other related sheets.
   * Specific functions for setting values in the row are tailored to maintain consistency and integrity of the storage location data.

* `addItemRow`:
   * This function manages the addition of new items into the **"Items"** sheet.
   * It generates a new item ID based on the maximum ID found in the sheet, ensuring unique identifiers for each entry.
   * It also includes dynamic date insertion using Google Sheets functions to always input the current date when adding a new row.
   * The item's storage and sub-division details are linked via **VLOOKUP** functions to other sheets, ensuring the data remains interlinked and accurate.

### Sorting Data

Data can be sorted by different criteria using the functions in **Sorting.gs**. For instance, sorting by item ID involves:

```javascript
function sortByItemID() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Items');
  var range = sheet.getRange('A2:A' + sheet.getLastRow());
  range.sort({column: 1, ascending: true});
}
```

**Functions Overview**

These functions are used to sort items in the "Items" sheet based on different criteria: Item ID, Location, and Date. This allows users to easily organize and view inventory based on different criteria, which is essential for effective inventory management in a dynamic environment like a robotics lab. The functions use a control cell (F2) to toggle the sort order, making it user-friendly and adaptable to different user needs or scenarios.

* `sortByItemID`:
   * Sorts the **"Items"** sheet by the Item ID.
   * *Implementation*:
         - Retrieves the **"Items"** sheet and a specific range starting from row 5.
         - Checks the current sort order from a cell (F2) and sorts the range accordingly either in ascending or descending order based on the Item ID (column A).

* `sortByLocation`:
   * Sorts the **"Items"** sheet by the Location and then by the sub-location within the same primary sort.
   * *Implementation*:
         - Similarly retrieves the **"Items"** sheet and the same range.
         - Fetches the current sort order from the same control cell (F2).
         - Sorts primarily by Location (column F) according to the specified order, and secondarily by sub-location (column E) always in descending order.

* `sortByDate`:
   * Sorts the **"Items"** sheet by the Date (likely of acquisition or last modified) and then by Location in a secondary order.
   * *Implementation*:
         - Uses the same retrieval method for the **"Items"** sheet and data range.
         - Acquires the current sort order from the control cell and applies a primary sort by Date (column E) and a secondary sort by Location (column F) in descending order.

### Formatting Sheets

The formatting is handled by **Formating.gs**, applying styles based on the content type:

```javascript
function formatSubDivisionSheet(){
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sub-Divisions');
  var range = sheet.getRange('A1:A' + sheet.getLastRow());
  range.setBackground('yellow');
}
```

**Functions Overview**

* `formatSubDivisionSheet()`:
   - This function focuses on formatting the **"Sub-Divisions"** sheet. It calls other functions to format columns based on specific conditions or data locations within the sheet.
   - It utilizes `formatColumnCellsByLocation()` for setting format conditions for column 'A', and calls `formatColumnCellsBySubDivision()` to apply additional specific formatting rules.

* `formatStorageLocationSheet()`:
   - Formats the "Storage Locations" sheet, specifically between columns 'A' and 'E', using the formatColumnCellsByLocation() function to apply consistent styling or data representation criteria.

* `formatColumnCellsByLocation(t_sheetName, t_sourceColumnName, t_targetColumnName)`:
   - A utility function that applies formatting to columns within a specified sheet. It dynamically sets background colors based on the numeric part of cell values, employing a subtle color gradient technique.
   - This function uses logic to extract numeric values from cell content and calculates background color based on these values, indicating a visual cue or grouping mechanism within the spreadsheet.

* `calculateSubtleGradientColorLocation(value)` and `calculateSubtleGradientColorSubDivision(value)`:
   - These functions generate color values based on calculated hues from extracted numeric values. They provide a way to visually differentiate data based on its content, enhancing readability and data management efficiency.

**Additional Utility Functions**

* `hslToRgb(h, s, l)` and `rgbToHex(rgb)`:
   - These functions convert HSL (Hue, Saturation, Lightness) color values to RGB (Red, Green, Blue), and then RGB to hexadecimal color codes for use in spreadsheet formatting. This allows the script to apply custom colors to spreadsheet cells based on specific conditions.

---

##  Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Report Issues](https://github.com/Alexpascual28/rlis_inventory_system.git/issues)**: Submit bugs found or log feature requests for the `rlis_inventory_system` project.
- **[Submit Pull Requests](https://github.com/Alexpascual28/rlis_inventory_system.git/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/Alexpascual28/rlis_inventory_system.git/discussions)**: Share your insights, provide feedback, or ask questions.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/Alexpascual28/rlis_inventory_system.git
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="center">
   <a href="https://github.com{/Alexpascual28/rlis_inventory_system.git/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=Alexpascual28/rlis_inventory_system.git">
   </a>
</p>
</details>

---
