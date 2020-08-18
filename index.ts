// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = '';
var status = "pending";
var taskName:Array<string>=["task1","task2","task3","task4","task5","task6","task7","task8","task9","task10"]

function date(dt:string,mon:string,yr:string){
  dates= dt+" "+ mon+" "+yr;
  return dates;
}
function update(){
  taskName[4]="pending";
return taskName;
}
taskName[4] ="done";
let dates=date("30","August","2020");
console.log (taskName ,dates,taskName[4])