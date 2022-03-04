function getLargerNumbers(courses,arr) {

var arrTotal = [];
var coursesAnswer = [];
var arrAnswer = [];

for(i=0;i<courses.length;i++){
    
    if(courses[i]>arr[i]){
        
        coursesAnswer[i] = courses[i] + ", located at the first array, is bigger than " + arr[i] + ", located at the second array. "; 
        arrTotal.push(coursesAnswer[i]);  
    }else if(courses[i]<arr[i]){
        
        arrAnswer[i] = arr[i] + ", located at the second array, is bigger than " + courses[i] + ", located at the first array. "; 
        arrTotal.push(arrAnswer[i]);
        
    }
}
return arrTotal;
}

var courses = [1,2,3,4,5,6,7,8];
var arr = [8,7,6,5,4,3,2,1];
var arrtodot = [];
console.log(getLargerNumbers(courses,arr));
    




