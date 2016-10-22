var numStr = 15;
var num = 1000;

function createTableData(numRows, numTests) {
    var table = document.createElement("table"); 
    table.id = "tbl-data"; 
    table.width = 300; 
    table.border = 1; 

    let titleRow = table.insertRow(-1);

    let newCell = titleRow.insertCell(-1);
    newCell.classList.add("head"); 
    newCell.innerText = "";

    newCell = titleRow.insertCell(-1);
    newCell.classList.add("head"); 
    newCell.innerText = "NaN";

    newCell = titleRow.insertCell(-1);
    newCell.classList.add("head"); 
    newCell.innerText = "NaN";

    newCell = titleRow.insertCell(-1);
    newCell.classList.add("head"); 
    newCell.innerText = "NaN";

    for (let i = 1; i <= numRows; ++i) {
        let newRow = table.insertRow(-1);
        
        let newCell = newRow.insertCell(-1); 
        newCell.innerText = i;
        newCell.classList.add("left-hand");

        newCell = newRow.insertCell(-1);
        newCell.classList.add("data"); 

        newCell = newRow.insertCell(-1);
        newCell.classList.add("data"); 

        newCell = newRow.insertCell(-1);
        newCell.classList.add("data");        
     
    }

    for (let i = 1; i <= numTests; ++i) {
        let newRow = table.insertRow(-1);
           
        let newCell = newRow.insertCell(-1); 
        newCell.innerText = "test #" + i;
        newCell.classList.add("left-hand-test");

        newCell = newRow.insertCell(-1);
        newCell.classList.add("test");

        newCell = newRow.insertCell(-1);
        newCell.classList.add("test");

        newCell = newRow.insertCell(-1);
        newCell.classList.add("test");
    }

    document.body.appendChild(table);
} 

function run(mode) {
    let arr0_9 = [];
    let arr10_99 = [];
    let arr100_999 = [];

    let binaryMode = mode;

    let MIN_0, MAX_0, MIN_1 , MAX_1, MIN_2, MAX_2;

    if (binaryMode) {
        MIN_0 = parseInt("10", 2);
        MAX_0 = parseInt("11", 2);
        MIN_1 = parseInt("100", 2);
        MAX_1 = parseInt("111", 2);
        MIN_2 = parseInt("1000", 2);
        MAX_2 = parseInt("1111", 2);
    } else {
        MIN_0 = 0;
        MAX_0 = 9;
        MIN_1 = 10;
        MAX_1 = 99;
        MIN_2 = 100;
        MAX_2 = 999;
    }


    for (let i = 0; i < num; ++i) {
        arr0_9.push(getRandomInt(MIN_0, MAX_0));
        arr10_99.push(getRandomInt(MIN_1, MAX_1));
        arr100_999.push(getRandomInt(MIN_2, MAX_2));
    }

    let tableData = document.getElementById("tbl-data");
    
    tableData.rows[0].cells[1].innerText = MIN_0 + "-" + MAX_0;
    tableData.rows[0].cells[2].innerText = MIN_1 + "-" + MAX_1;
    tableData.rows[0].cells[3].innerText = MIN_2 + "-" + MAX_2;

    for (let r = 1, n = numStr + 1; r < n; ++r) {
        if (binaryMode) {
            tableData.rows[r].cells[1].innerText = arr0_9[r - 1].toString(2).substring(1);
            tableData.rows[r].cells[2].innerText = arr10_99[r - 1].toString(2).substring(1);
            tableData.rows[r].cells[3].innerText = arr100_999[r - 1].toString(2).substring(1);
        } else {
            tableData.rows[r].cells[1].innerText = arr0_9[r - 1];
            tableData.rows[r].cells[2].innerText = arr10_99[r - 1];
            tableData.rows[r].cells[3].innerText = arr100_999[r - 1];
        }
    }

    let str0 = "";
    let str1 = "";
    let str2 = "";
    for (let i = 0; i < num; ++i) {
        if (binaryMode) {
            str0 += arr0_9[i].toString(2).substring(1);
            str1 += arr10_99[i].toString(2).substring(1);
            str2 += arr100_999[i].toString(2).substring(1);
        } else {
            str0 += arr0_9[i].toString(2);
            str1 += arr10_99[i].toString(2);
            str2 += arr100_999[i].toString(2);
        }
    }

    tableData.rows[numStr + 1].cells[1].classList.remove("false", "true");
    tableData.rows[numStr + 1].cells[2].classList.remove("false", "true");
    tableData.rows[numStr + 1].cells[3].classList.remove("false", "true");

    tableData.rows[numStr + 2].cells[1].classList.remove("false", "true");
    tableData.rows[numStr + 2].cells[2].classList.remove("false", "true");
    tableData.rows[numStr + 2].cells[3].classList.remove("false", "true");


    tableData.rows[numStr + 1].cells[1].classList.add(identicalConsecutiveBitstest(str0));
    tableData.rows[numStr + 1].cells[2].classList.add(identicalConsecutiveBitstest(str1));
    tableData.rows[numStr + 1].cells[3].classList.add(identicalConsecutiveBitstest(str2));

    tableData.rows[numStr + 2].cells[1].classList.add(frequencyBitwiseTest(str0));
    tableData.rows[numStr + 2].cells[2].classList.add(frequencyBitwiseTest(str1));
    tableData.rows[numStr + 2].cells[3].classList.add(frequencyBitwiseTest(str2));
} 

numStr = parseInt(prompt("Введите кол-во чисел показываемых чисел для алгоритмического режима", numStr));
num = parseInt(prompt("Введите кол-во генерируемых чисел для алгоритмического режима", num));
createTableData(numStr, 2);