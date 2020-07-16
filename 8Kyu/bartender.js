function getDrinkByProfession(param) {
    let firstCapital = (param.split(' ')).reduce((acc, item) =>
        `${acc}${item[0].toUpperCase()}${item.slice(1).toLowerCase()} `, '').slice(0, -1);
    console.log(firstCapital)

    let drink
    switch (firstCapital) {
        case "Jabroni":
            drink = "Patron Tequila";
            break;
        case "School Counselor":
            drink = "Anything with Alcohol";
            break;
        case "Programmer":
            drink = "Hipster Craft Beer";
            break;
        case "Bike Gang Member":
            drink = "Moonshine";
            break;
        case "Politician":
            drink = "Your tax dollars";
            break;
        case "Rapper":
            drink = "Cristal";
            break;
        default:
            drink = "Beer";
    }

    return drink

}

console.log(getDrinkByProfession("School Counselor"));
console.log(getDrinkByProfession("JabrOni"));





/*
Input	                    Output
"Jabroni"	                "Patron Tequila"
"School Counselor"	        "Anything with Alcohol"
 "Programmer"	            "Hipster Craft Beer"
 "Bike Gang Member"	        "Moonshine" 
 "Politician"	            "Your tax dollars" 
 "Rapper"	                "Cristal" 
 *anything else*	        "Beer" 
 */