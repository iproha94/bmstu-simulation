function run() {
	let table = document.getElementById("tbl-data");
	
	let matrix = [];

	for (let r = 1, n = table.rows.length; r < n; r++) {
		matrix[r - 1] = [];

        for (let c = 1, m = table.rows[r].cells.length; c < m; c++) {
            matrix[r - 1][c - 1] = parseInt(table.rows[r].cells[c].innerText);
        }
    }

    let koefKolmagorof = getKoefKolmagorof(matrix);
    let koefSLAU = getKoefSLAU(koefKolmagorof);
    let result = gause(koefSLAU);

} 

function getKoefKolmagorof(matrix) {
    console.log(matrix);

    let result = [];
    for (let i = 0, n = matrix.length; i < n; ++i) {
		result[i] = [];

        for (let j = 0, m = matrix[i].length; j < m; ++j) {
            result[i][j] = 0;
        }
    }

    for (let i = 0, n = matrix.length; i < n; ++i) {
        for (let j = 0, m = matrix[i].length; j < m; ++j) {
        	if (i != j) {
            	result[i][i] -= matrix[i][j];
        	}
        }
    }

    for (let i = 0, n = matrix.length; i < n; ++i) {
        for (let j = 0, m = matrix[i].length; j < m; ++j) {
        	if (i != j) {
            	result[j][i] += matrix[i][j];
        	}
        }
    }

    return result;
}

function getKoefSLAU(matrix) {
    console.log(matrix);

	let addNormEquation = [];
    for (let i = 0, n = matrix[0].length; i < n; ++i) {
    	addNormEquation.push(1);
    }
    matrix.unshift(addNormEquation);

    let addFreeMembers = [];
    addFreeMembers.push(1);
    for (let i = 1, n = matrix[0].length; i < n; ++i) {
    	addFreeMembers.push(0);
    }
    matrix.unshift(addFreeMembers);

    return matrix;
}

function gause(matrix) {
    console.log(matrix);
    return [];
}

