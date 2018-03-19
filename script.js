//Lecture: Loops
//For Loops:

var names = ['Sebastian', 'James', 'Rick', 'Stan', 'Casey'];

for (var i = 0; i < 5; i++){
    console.log(names[i]);
}

// This will print the array names in order from 0 to 5

for (var p = names.length - 1; p >= 0; p--){
    console.log(names[p]);
}

// And this up here will print the names backwards, meaning from 5 to 0.


//While Loops:

var i = 0;
while(i < names.length){
    console.log(names[i]);
    i++;
}

for (var i = 1; i <=5; i++){
    console.log(i);
    if(i === 3){
        break;
    }
}

for (var i = 1; i <=5; i++){
    if(i === 3){
        continue;
    }
    console.log(i);
}
