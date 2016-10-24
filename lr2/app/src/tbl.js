function run(numStr) {
    let arr = [5489, 5583, 3156, 0835, 1988, 3912, 0938, 7460, 0869, 4420, 3522, 0935, 7877, 5665, 7020, 9555, 7379, 7124, 7878, 5544, 7555, 7579, 2550, 2487, 9477, 0864, 2349, 1012, 8250, 2633, 5759, 3554, 5080, 9074, 7001, 6249, 3224, 6368, 9102, 2672, 6303, 6895, 3371, 3196, 7231, 2918, 7380, 0438, 7547, 2644, 7351, 5634, 5323, 2623, 7803, 8374, 2191, 0464, 0696, 9529, 7068, 7803, 8832, 5119, 6350, 0120, 5026, 3684, 5657, 0304, 3613, 1428, 1796, 8447, 0503, 5654, 3254, 7336, 9536, 1944, 5143, 4534, 2105, 0368, 7890, 2473, 4240, 8652, 9435, 1422, 9815, 5144, 7649, 8638, 6137, 8070, 5345, 4865, 2456, 5708, 5780, 1277, 6316, 1013, 2867, 9938, 3930, 3203, 5696, 1769, 1187, 0951, 5991, 5245, 5700, 5564, 7352, 0891, 6249, 6568, 4184, 2179, 4554, 9083, 2254, 2435, 2965, 5154, 1209, 7069, 2916, 2972, 9885, 0275, 0144, 8034, 8122, 3213, 7666, 0230, 5524, 1341, 9860, 6565, 6981, 9842, 0171, 2284, 2707, 3008, 0146, 5291, 2354, 5694, 0377, 5336, 6460, 9585, 3415, 2358, 4920, 2825, 5238, 5402, 7937, 1993, 4332, 2327, 6875, 5230, 7978, 1947, 6380, 3425, 7267, 7285, 1130, 7722, 0164, 8573, 7453, 0653, 3645, 7497, 5969, 8682, 4191, 2976, 0361, 9334, 1473, 6938, 4899, 5348, 1641, 3652, 0852, 5296, 4538, 4456, 8162, 8797, 8000, 4707, 1880, 9660, 8446, 1883, 9768, 0881, 5645, 4219, 0807, 3301, 4279, 4168, 4305, 9937, 3120, 5547, 2042, 1192, 1175, 8851, 6432, 4635, 5757, 6656, 1660, 5389, 5470, 7702, 6958, 9080, 5925, 8519, 0127, 9233, 2452, 7341, 4045, 1730, 6005, 1704, 0345, 3275, 4738, 4862, 2556, 8333, 5880, 1257, 6163, 4439, 7276, 6353, 6912, 0731, 9033, 5294, 9083, 4260, 5277, 4998, 4298, 5204, 3965, 4028, 8936, 5148, 1762, 8713, 1189, 1090, 8989, 7273, 3213, 1935, 9321, 4820, 2023, 2589, 1740, 0424, 8924, 0005, 1969, 1636, 7237, 1227, 7965, 3855, 4765, 0703, 1678, 0841, 7543, 0308, 9732, 1289, 7690, 0480, 8098, 9629, 4819, 7219, 7241, 5128, 3853, 1921, 9292, 0426, 9573, 4903, 5916, 6576, 8368, 3270, 6641, 0033, 0867, 1656, 7016, 4220, 2533, 6345, 8227, 1904, 5138, 2537, 0505, 2127, 8255, 5276, 2233, 3956, 4118, 8199, 6380, 6340, 6295, 9795, 1112, 5761, 2575, 6837, 3336, 9322, 7403, 8345, 6323, 2615, 3410, 3365, 1117, 2417, 3176, 2434, 5240, 5455, 8672, 8536, 2966, 5773, 5412, 8114, 0930, 4697, 6919, 4569, 1422, 5507, 7596, 0670, 3013, 1351, 3886, 3268, 9469, 2584, 2653, 1472, 5113, 5735, 1469, 9545, 9331, 5303, 9914, 6394, 0438, 4376, 3328, 8649, 8327, 0110, 4549, 7955, 5275, 2890, 2851, 2157, 0047, 7085, 1129, 0460, 6821, 8323, 2572, 8962, 7962, 2753, 3077, 8718, 7418, 8004, 1425, 3706, 8822, 1494, 3837, 4098, 0220, 1217, 4732, 0150, 1637, 1097, 1040, 7372, 8542, 4126, 9274, 2251, 0607, 4301, 8730, 7690, 6235, 3477, 0139, 0765, 8039, 9484, 2577, 7859, 1976, 0623, 1418, 6685, 6687, 1943, 4307, 0579, 8171, 8224, 8641, 7034, 3595, 3875, 6242, 5582, 5872, 3197, 4919, 2792, 5991, 4058, 9769, 1918, 6859, 9606, 0522, 4993, 0345, 8958, 1289, 8825, 6941, 7685, 6590, 1932, 6043, 3623, 1973, 4112, 1795, 8465, 2110, 8045, 3482, 0478, 0221, 6738, 7323, 5643, 4767, 0106, 2272, 9862];

    let arr0_1 = [];
    let arr00_11 = [];
    let arr000_111 = [];

    let num = arr.length;
    for (let i = 0; i < num; ++i) {
        arr0_1.push(arr[i] % 2 + 2);
        arr00_11.push(arr[i] % 4 + 4);
        arr000_111.push(arr[i] % 8 + 8);
    }


    let tableData = document.getElementById("tbl-data");
    
    tableData.rows[0].cells[1].innerText = "0 - 1";
    tableData.rows[0].cells[2].innerText = "00 - 11";
    tableData.rows[0].cells[3].innerText = "000 - 111";

    for (let r = 1, n = numStr + 1; r < n; ++r) {
        tableData.rows[r].cells[1].innerText = arr0_1[r - 1].toString(2).substring(1);
        tableData.rows[r].cells[2].innerText = arr00_11[r - 1].toString(2).substring(1);
        tableData.rows[r].cells[3].innerText = arr000_111[r - 1].toString(2).substring(1);
    }

    let str0 = "";
    let str1 = "";
    let str2 = "";
    for (let i = 0; i < num; ++i) {
        str0 += arr0_1[i].toString(2).substring(1);
        str1 += arr00_11[i].toString(2).substring(1);
        str2 += arr000_111[i].toString(2).substring(1);
    }

    let result = identicalConsecutiveBitstest(str0);
    tableData.rows[numStr + 1].cells[1].classList.remove("false", "true");
    tableData.rows[numStr + 1].cells[1].classList.add(result > 0.01);
    tableData.rows[numStr + 1].cells[1].innerText =  (result * 100).toFixed(1) + "%";

    result = identicalConsecutiveBitstest(str1);
    tableData.rows[numStr + 1].cells[2].classList.remove("false", "true");
    tableData.rows[numStr + 1].cells[2].classList.add(result > 0.01);
    tableData.rows[numStr + 1].cells[2].innerText = (result * 100).toFixed(1) + "%";

    result = identicalConsecutiveBitstest(str2);
    tableData.rows[numStr + 1].cells[3].classList.remove("false", "true");
    tableData.rows[numStr + 1].cells[3].classList.add(result > 0.01);
    tableData.rows[numStr + 1].cells[3].innerText = (result * 100).toFixed(1) + "%";

    result = frequencyBitwiseTest(str0);
    tableData.rows[numStr + 2].cells[1].classList.remove("false", "true");
    tableData.rows[numStr + 2].cells[1].classList.add(result > 0.01);
    tableData.rows[numStr + 2].cells[1].innerText =  (result * 100).toFixed(1) + "%";

    result = frequencyBitwiseTest(str1);
    tableData.rows[numStr + 2].cells[2].classList.remove("false", "true");
    tableData.rows[numStr + 2].cells[2].classList.add(result > 0.01);
    tableData.rows[numStr + 2].cells[2].innerText = (result * 100).toFixed(1) + "%";

    result = frequencyBitwiseTest(str2);
    tableData.rows[numStr + 2].cells[3].classList.remove("false", "true");
    tableData.rows[numStr + 2].cells[3].classList.add(result > 0.01);
    tableData.rows[numStr + 2].cells[3].innerText = (result * 100).toFixed(1) + "%";
} 

