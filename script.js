//CODING CHALLENGE 2

function printFullAge(years){
    var ages = [];
    var fullAges = [];

    for (var i = 0; i < years.length; i++){
        ages.unshift(2018 - years[i]);
    }
    
    for (var p = 0; p < ages.length ; p++){
        if(ages[p] >= 18){
            console.log('This person is of full age with ' + ages[p]);
            fullAges.push(true);
        }
        else
        {
            console.log('This person is not of full age with ' + ages[p]);
            fullAges.push(false);
        }
    }
    return fullAges;
}

var years = [1994, 1986, 2015, 2006, 1999];
var full_1 = printFullAge(years);
var full_2 = printFullAge([1999, 2014, 1980]);
