const height = 5 * 80;
function sakuraFall(v) {
	if (v <= 0) return 0;
	// your code here
	//find time using given speed and height speed = distance / time
	return height / v;
}

console.log(sakuraFall(5), 80);
console.log(sakuraFall(10), 40);
console.log(sakuraFall(-1), 0);
