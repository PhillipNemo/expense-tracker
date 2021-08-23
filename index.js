const fullName = document.getElementById('name')
const date = document.getElementById('date')
const amount = document.getElementById('amount')
const button = document.getElementById('button')
const tbody = document.getElementById('tbody')
const tRow = document.getElementById('tRow')



button.addEventListener('click', add)

function add (){
  const  btn = document.createElement('button');
  const  tr = document.createElement('tr');
  btn.textContent = 'Delete';
  tbody.appendChild(tr);
  tr.innerHTML =   `<td> ${fullName.value}</td>
                    <td> ${date.value}</td>
                    <td> $${amount.value}</td>`
  tr.appendChild(btn);

  if(fullName.value == ''  || amount.value == '' ||
   date.value == ''  ){
       tbody.removeChild(tr)

  }
  btn.addEventListener('click', deleteRow)

  function deleteRow (){
    tbody.removeChild(tr);

  }
  
   fullName.value='';
   date.value='';
   amount.value='';
}

function deleteRow () {
    tRow.style.display='none'
}