const uName = document.getElementById("name");
const uMobile = document.getElementById("mobile");
const uEmail = document.getElementById("email");
const uError = document.getElementById("error");
const nameTable = document.querySelectorAll("#nameColumn")[0];

const noReuslt = document.getElementById("noResult");

const addContact = document.getElementById("submit");

const ValidateName = (name) => {
  var regName = /^[A-Za-z][A-Za-z\s]*$/;
  if (!regName.test(name)) {
    return false;
  } else {
    return true;
  }
};

function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}

addContact.addEventListener("click", function () {
  if (
    ValidateName(uName.value) &&
    uMobile.value.length === 10 &&
    ValidateEmail(uEmail.value)
  ) {
    // Find a <table> element with id="myTable":
    var table = document.querySelectorAll("#summaryTable tbody")[0];

    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow(table.length);

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    // Add some text to the new cells:
    cell1.innerHTML = uName.value;
    cell2.innerHTML = uMobile.value;
    cell3.innerHTML = uEmail.value;

    // sortTable();
    colorTheRow();
    uName.value = "";
    uMobile.value = "";
    uEmail.value = "";
  } else {
    console.log(error);
    document.getElementById("error").style.display = "block";
  }
});

function sortTableAsc() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.querySelectorAll("#summaryTable tbody")[0];
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < rows.length - 1; i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
      //check if the two rows should switch place:

      if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

function sortTableDes() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.querySelectorAll("#summaryTable tbody")[0];
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < rows.length - 1; i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
      //check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
var firstClick = 0;
nameTable.addEventListener("click", function () {
  console.log(firstClick);
  firstClick++;
  if (firstClick % 2 === 0) sortTableAsc();
  else {
    sortTableDes();
  }
});

function colorTheRow() {
  var tableElements = document.getElementById("summaryTable");
  var rows = tableElements.getElementsByTagName("tr");
  for (i = 0; i < rows.length; i++) {
    if (i % 2 == 1) {
      rows[i].className = "odd";
    }
  }
}

document.getElementById("search").addEventListener("keyup", filter_table);

function filter_table(e) {
  let showNoResult = "";
  let show = false;
  const rows = document.querySelectorAll("tbody tr");
  rows.forEach((row) => {
    if (row.innerText.includes(e.target.value)) {
      showNoResult = "";
      show = false;
    } else {
      showNoResult = "none";
      show = true;
    }
    row.style.display = showNoResult;
  });
  if (show) {
    noReuslt.style.display = "block";
  } else noReuslt.style.display = "none";
}
