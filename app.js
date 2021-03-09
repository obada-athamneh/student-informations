'use strict';

let mainEl = document.getElementById('container');
let tableEl = document.createElement('table');
mainEl.appendChild(tableEl);

function header(){
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    let th1El = document.createElement('th');
    trEl.appendChild(th1El);
    let th2El = document.createElement('th');
    trEl.appendChild(th2El);
    let th3El = document.createElement('th');
    trEl.appendChild(th3El);
    let th4El = document.createElement('th');
    trEl.appendChild(th4El);
    let th5El = document.createElement('th');
    trEl.appendChild(th5El);
    let th6El = document.createElement('th');
    trEl.appendChild(th6El);
    th1El.textContent = 'id';
    th2El.textContent = 'Name';
    th3El.textContent = 'Email';
    th4El.textContent = 'Mobile';
    th5El.textContent = 'Age';
    th6El.textContent = 'Tuition';
}
header();
// console.log(header)
let objectArr = [];
let i =1;
function StudentInf(email,mobile,tuition){
   
    this.id = i++;
   
    this.name= email.substring(0, email.lastIndexOf("@"));
    this.email = email;
    this.mobile=mobile;
    this.min = 18;
    this.max = 24;
    this.age=0;
    this.tuition=tuition;
    this.total= 0;
    
}
StudentInf.prototype.randomAge = function(){
    this.age = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
}

StudentInf.prototype.render = function(){
    let tr1El = document.createElement('tr');
    tableEl.appendChild(tr1El);
    let td1El = document.createElement('td');
    tr1El.appendChild(td1El);
    let td2El = document.createElement('td');
    tr1El.appendChild(td2El);
    let td3El = document.createElement('td');
    tr1El.appendChild(td3El);
    let td4El = document.createElement('td');
    tr1El.appendChild(td4El);
    let td5El = document.createElement('td');
    tr1El.appendChild(td5El);
    let td6El = document.createElement('td');
    tr1El.appendChild(td6El);
    td1El.textContent = this.id;
    td2El.textContent = this.name;
    td3El.textContent = this.email;
    td4El.textContent = this.mobile;
    td5El.textContent = this.age;
    td6El.textContent = this.tuition;
}


let formEl = document.getElementById('form');
formEl.addEventListener('submit',newStudent);
function newStudent(event){
    event.preventDefault();
    const NewStudentEmail = event.target.one.value;
    const NewStudentMobile = event.target.two.value;
    const NewTuition = event.target.three.value;

    let NewInf = new StudentInf(NewStudentEmail,NewStudentMobile,NewTuition);
    NewInf.randomAge();
    NewInf.render();
    saveData();
}
newStudent();
console.log(newStudent)

function saveData(){
    let data = JSON.stringify(objectArr);
    localStorage.setItem('data',data);

}
let getArr = [];
function getData(){
    let data2 = localStorage.getItem('data');
    let data3 = JSON.parse(data2);
    if (data3){
        getArr=data3;
    }
}