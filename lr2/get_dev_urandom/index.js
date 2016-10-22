var RandBytes = new require('randbytes');
 
var randomSource = RandBytes.urandom.getInstance();
 
randomSource.getRandomBytes(1000, function (buff) {
    console.log(buff.length, " bytes from /dev/urandom :) ");
    
    let str_0_1 = "";
    let str_00_11 = "";
    let str_000_111 = "";
    
    for (let i = 0; i < 1000; ++i) {
    	str_0_1 += ((buff[i] % 2 + 2) + ", ");
    	str_00_11 += ((buff[i] % 4 + 4) + ", ");
    	str_000_111 += ((buff[i] % 8 + 8) + ", ");
    }

	console.log("От b10 до b11");
	console.log(str_0_1);

	console.log("От b100 до b111");
	console.log(str_00_11);


	console.log("От b1000 до b1111");
	console.log(str_000_111);
}); 
