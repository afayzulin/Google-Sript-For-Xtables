//CONSTANTS
const MAIN_TABLE_NAME = 'now';
const DEVICES_RANGE = "D1:N1000";
const CUSTOMER_INFO_RANGE = "O1:V1000"; 
//CONSTANTS END

function getMianTableValues(range) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(MAIN_TABLE_NAME);
  const values = sheet.getRange(range).getValues();
  return values;
}

function getPreparedContent() {
  const customerInfo = getMianTableValues(CUSTOMER_INFO_RANGE);
  const customerInfoTitles = customerInfo.splice(0, 1);

  const devicesValues = getMianTableValues(DEVICES_RANGE);
  const devicesTitles = devicesValues.splice(0, 1);

  const result = [['Виріб', 'Кіл-ть', ...customerInfoTitles[0]]];
  devicesValues.forEach((item, step) => {
    item.forEach((value, index) => {
      if (value) result.push([devicesTitles[0][index], value, ...customerInfo[step]]);
    });
  });
  return result;
}

//Documentation
// ... please provide some explanation there
