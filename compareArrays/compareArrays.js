function getLargerNumbers(courses,arr) {

var arrTotal = [];
var coursesAnswer = [];
var arrAnswer = [];

for(i=0;i<courses.length;i++){
    
    if(courses[i]>arr[i]){
        
        coursesAnswer[i] = courses[i] + " is located at the first array. It's bigger than " + arr[i] + " which is located at the second array" + "<br>"; 
        arrTotal.push(coursesAnswer[i] + "<br>");  
    }else if(courses[i]<arr[i]){
        
        arrAnswer[i] = arr[i] + " is located at the second array. It's bigger than " + courses[i] + " which is located at the first array" + "<br>"; 
        arrTotal.push(arrAnswer[i] + "<br>");
        
    }
}

return arrTotal;
}

var num = prompt("How many numbers do you want in first array?");
var courses = [];
courses.length = num;


var num2 = prompt("How many numbers do you want in second array?");
var arr = [];
arr.length = num;

for(i=0;i<courses.length;i++){
    courses[i]= prompt("Introduce number nº " + (i+1)+ ":");
    }


for(i=0;i<arr.length;i++){
    arr[i]= prompt("Introduce number nº " + (i+1) + ":");
}

var arrtodot = [];
var cadena = new String(getLargerNumbers(courses,arr));

document.write(cadena.replace(/,/g,""));


    




