<p align="center">
  <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" alt="project-logo">
</p>
<p align="center">
    <h1 align="center">RLIS Robotics Lab Inventory System</h1>
</p>
<p align="center">
    <em><code>The Robotics Laboratory Inventory System (RLIS) is a Google Sheets-based system designed to streamline inventory management in the robotics teaching laboratory. This repo contains Google Apps Script (Javascript) code for the Robotics Laboratory Inventory System (RLIS). This functions are used to modify or format the RLIS Google Spreadsheets database that stores all lab items and locations.</code></em>
</p>

<br><!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary><br>

- [ Overview](#-overview)
- [ Features](#-features)
- [ Repository Structure](#-repository-structure)
- [ Modules](#-modules)
- [ Getting Started](#-getting-started)
  - [ Installation](#-installation)
  - [ Usage](#-usage)
  - [ Tests](#-tests)
- [ Project Roadmap](#-project-roadmap)
- [ Contributing](#-contributing)
- [ License](#-license)
- [ Acknowledgments](#-acknowledgments)
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

<details closed><summary>.</summary>

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

1. Items Sheet

* **Purpose**: Serves as the central database for all individual items in the lab's inventory.
* **Columns**: Include details such as Item ID, Item Name, Description, Quantity, Date Modified, Location ID, Sub-Division Name, and Location Description.
* **Buttons**:
   - **[Add Item]**: Executes `addRow()` from "*Add Row.gs*" to insert new item entries.
   - **[By Item]**, **[By Date]**, **[By Location]**: Linked to `sortByItemID()`, `sortByDate()`, and `sortByLocation()` in "*Sorting.gs*", respectively. These buttons allow users to reorder the list based on the item ID, the date of entry/update, or the storage location.
* **Area Map**: Illustrates the arrangement of storage locations within the lab, linking visual space to data entries, helping users find items’ physical locations faster.

2. Storage Locations Sheet

**Purpose**: Details where each item is stored within the lab, described by identifiers like Storage ID and detailed descriptions of the location within the lab’s space.
**Columns**: Storage ID, Storage Name, Storage Type, Room, and detailed location descriptions.
**Buttons**:
   - **[Add Location]**: Tied to addStorageRow() in "Add Row.gs", which facilitates the inclusion of new storage locations into the system.
   - [Re-Format Sheet Colours]: Linked to formatStorageLocationSheet() in "Formating.gs", this button allows users to reapply color formats to enhance the visual differentiation of data.
**Area Map**: Similar to the "Items" sheet, providing a visual representation of storage locations to improve spatial understanding.

3. Sub-Divisions Sheet

Purpose: Breaks down each storage location further into smaller divisions like shelves or drawers, crucial for precise inventory management.
Columns: Sub-Division ID, Full Name/Contents, Storage Location, ID Number, Sub-Division Type, Label, and a column indicating if an item count is required.
Buttons:
[Add Sub-Division]: Executes addSubDivisionRow() in "Add Row.gs" to add new subdivisions, enhancing the granularity of location data.
[Re-Format Sheet Colours]: Tied to formatSubDivisionSheet() in "Formating.gs", used to refresh the visual styling of the sheet.

### How It Works

**Adding Data**

Users can add new items, locations, or subdivisions by clicking the respective "[Add]" button. This action triggers a function that automatically inserts a new row, assigns an ID, and links relevant data across sheets.

**Sorting Data**

The sorting buttons on the "Items" sheet provide a quick way to organize the view based on different criteria. Clicking these buttons triggers sorting functions that reorder the data as specified, making it easier to locate or analyze inventory based on varying needs.

**Formatting**

The re-formatting buttons apply predefined color schemes to the sheets, enhancing readability and helping users quickly distinguish between different types of data or status.

**Area Maps**

The inclusion of area maps in the "Items" and "Storage Locations" sheets provides a visual tool that correlates physical space in the lab with data entries. This feature is especially useful in large labs where locating an item’s position can be challenging.



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

##  License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

##  Acknowledgments

- List any resources, contributors, inspiration, etc. here.

[**Return**](#-overview)

---
