function dutyFree(normPrice, discount, hol) {
	//calculate the savings on one bottle of whiskey
	//calculate the numbers of whiskies to buy so that the savings = holiday cost
	return Math.floor(hol / (normPrice * discount / 100));
}
console.log(dutyFree(12, 50, 1000), 166);
console.log(dutyFree(17, 10, 500), 294);
console.log(dutyFree(24, 35, 3000), 357);
