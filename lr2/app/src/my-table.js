var numStr = 10;

function createTableData(numRows, numTests) {
    var table = document.createElement("table"); 
    table.id = "tbl-data"; 
    table.width = 200; 
    table.border = 1; 

    let titleRow = table.insertRow(-1);

    let newCell = titleRow.insertCell(-1);
    newCell.classList.add("head"); 

    newCell = titleRow.insertCell(-1);
    newCell.classList.add("head"); 
    newCell.innerText = "nums";

    for (let i = 1; i <= numRows; ++i) {
        let newRow = table.insertRow(-1);
        
        let newCell = newRow.insertCell(-1); 
        newCell.innerText = i;
        newCell.classList.add("left-hand");

        newCell = newRow.insertCell(-1);
        newCell.classList.add("data");
        newCell.contentEditable = "true";
    }

    for (let i = 1; i <= numTests; ++i) {
        let newRow = table.insertRow(-1);
           
        let newCell = newRow.insertCell(-1); 
        newCell.innerText = "test #" + i;
        newCell.classList.add("left-hand-test");

        newCell = newRow.insertCell(-1);
        newCell.classList.add("test");
    }


    document.body.appendChild(table);
} 

function run() {
    let num = numStr;

    let tableData = document.getElementById("tbl-data");
    
    let arr = [];

    for (let r = 1; r <= num; ++r) {
        arr[r - 1] = parseInt(tableData.rows[r].cells[1].innerText);
        
        if (isNaN(arr[r - 1])) {
            arr[r - 1] = 0;
        }
    }

    let str = "";
    for (let i = 0; i < num; ++i) {
        str += arr[i].toString(2);
    }

    tableData.rows[numStr + 1].cells[1].classList.remove("false", "true");
    tableData.rows[numStr + 2].cells[1].classList.remove("false", "true");

    tableData.rows[numStr + 1].cells[1].classList.add(identicalConsecutiveBitstest(str));
    tableData.rows[numStr + 2].cells[1].classList.add(frequencyBitwiseTest(str));
}

numStr = parseInt(prompt("Введите кол-во чисел для ручного ввода", numStr));
createTableData(numStr, 2);