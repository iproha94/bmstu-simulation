function run(numStr) {
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


    let result = identicalConsecutiveBitstest(str);
    tableData.rows[numStr + 1].cells[1].classList.remove("false", "true");
    tableData.rows[numStr + 1].cells[1].classList.add(result > 0.01);
    tableData.rows[numStr + 1].cells[1].innerText =  (result * 100).toFixed(1) + "%";

    result = frequencyBitwiseTest(str);
    tableData.rows[numStr + 2].cells[1].classList.remove("false", "true");
    tableData.rows[numStr + 2].cells[1].classList.add(result > 0.01);
    tableData.rows[numStr + 2].cells[1].innerText =  (result * 100).toFixed(1) + "%";
}