function createTableData(numRows, numColumns, numTests) {
    var table = document.createElement("table"); 
    table.id = "tbl-data"; 
    table.width = 200; 
    table.border = 1; 

    let titleRow = table.insertRow(-1);

    let newCell = titleRow.insertCell(-1);
    newCell.classList.add("head"); 
    newCell.innerText = "";

    for (let k = 0; k < numColumns; ++k) {
      newCell = titleRow.insertCell(-1);
      newCell.classList.add("head"); 
      newCell.innerText = "NaN";      
    }

    for (let i = 1; i <= numRows; ++i) {
        let newRow = table.insertRow(-1);
        
        let newCell = newRow.insertCell(-1); 
        newCell.innerText = i;
        newCell.classList.add("left-hand");

        for (let k = 0; k < numColumns; ++k) {
            newCell = newRow.insertCell(-1);
            newCell.classList.add("data"); 
            newCell.contentEditable = "true";
        }
    }

    for (let i = 1; i <= numTests; ++i) {
        let newRow = table.insertRow(-1);
           
        let newCell = newRow.insertCell(-1); 
        newCell.innerText = "test #" + i;
        newCell.classList.add("left-hand-test");

        for (let k = 0; k < numColumns; ++k) {
            newCell = newRow.insertCell(-1);
            newCell.classList.add("test");
        }
    }

    document.body.appendChild(table);
}  