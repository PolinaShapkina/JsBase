for (let i = 10; i <= 100; i++) {
	let str = String(i); 
		console.log(str[0]);
}

for (let i = 10; i <= 1000; i++) {
	let str = String(i); 
    res = Number(str[0]) + Number(str[1])
    console.log(res);
}

for (let i = 10; i <= 1000; i++) {
    str = String(i);
    if (str[0] == 1) {
        console.log(Number(str));
    } else {
        continue;
    };
};

for (let i = 10; i <= 1000; i++) {
    str = String(i);
    if (Number(str[0]) + Number(str[1])  == 5) {
        console.log(Number(str));
    } else {
        continue;
    };
};