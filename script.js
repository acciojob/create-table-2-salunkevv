function createTable() {
  //Write your code here
let cn= prompt("Input number of colums");
let rn=prompt("Input number of rows");
let table= document.getElementById("myTable");
for(let i=0;i<rn;i++)
{
  let row=document.createElement("tr")
  for(let j=0;j<cn;j++)
  {
    let cell=document.createElement("td");
    cell.innerText=`Row-${i} Column-${j}`
    row.append(cell);
  }
  table.append(row);
}
}
