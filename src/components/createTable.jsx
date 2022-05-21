function Create(){
  const createTable = ()=>{
    let table = document.getElementById('myTable');
    let button = document.getElementById('button')
    let count = 0;
    
    button.addEventListener('click', () => {
        let rows = document.getElementById("rows").value
        let columns = document.getElementById("columns").value
        for (let i = 1; i <= rows; i++) {
            let row = document.createElement('tr');
            for (let i = 0; i < columns ; i++) {  
                count += 1
            let tableData = row.appendChild(document.createElement('td'));
            tableData.innerHTML = count;
            table.appendChild(row)
        }
    }
    button.value = `click to add more rows and columns`
    })
  }
  return(
<div className="w-1/2 bg-blue-100 h-96 rounded-sm pl-64 mx-auto ml-auto mt-32 pt-4">
  <h1 className="w-1/3 border-2 pl-8 border-slate-600 border-solid">Create table</h1>
  <table id="myTable" border="1"></table>
  <form>
    <label></label>
  <input type="text" id="rows" placeholder="enter the number of rows" className=" w-32 block h-12 rounded-sm border-solid border-b-2 border-teal-500 block mt-2  focus:outline-none"/>
  <label></label>
  <input type="text" id="columns" placeholder="enter the number of columns" className="w-32 block  h-12 rounded-sm border-solid border-b-2 border-teal-500 block mt-2 focus:outline-none"/>
  <input type="button" value="Create the table" id="button" onClick={createTable} className="block h-12 w-32 bg-red-500 text-white rounded-sm text-sm mt-8"/>
  <label></label>

  </form>
</div>
);
}
export default Create
