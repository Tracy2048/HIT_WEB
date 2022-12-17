//Cho 1 mảng dưới đây
var courses = ['C++', 'Java', 'Javascript'];

//viết hàm addCourse thêm 1 phần tử vào mảng courses
function addCourse(courses, str){
    courses.push(str);
}

addCourse(courses, 'Go');
console.log(courses) //output: [ 'C++', 'Java', 'Javascript', 'Go' ]

//viết hàm getFirstElement lấy phần tử đầu tiên
function getFirstElement(courses){
    return courses[0];
}

var firstElement = getFirstElement(courses);
console.log(firstElement) //output: C++;

//viết hàm joinArr nối các phần tử thành một chuỗi
function joinArr(courses, char){
    return courses.join(char);
}

var result1 = joinArr(courses, ",");
var result2 = joinArr(courses, " * ");

console.log(result1); //output: C++,Java,Javascript,Go
console.log(result2); //output: C++ * Java * Javascript * Go
