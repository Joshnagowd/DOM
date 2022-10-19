let employees = [
    {id: 101, name: "Ram", sal: 45000},
    {id: 101, name: "Joshi", sal: 55000},
    {id: 101, name: "Raj", sal: 85000},
    {id: 101, name: "Navitha", sal: 75000}
]
function display_Data() {
    let rows = ""
    for (emp of employees) {
        rows = rows + `<tr>
                        <td>${emp.id}</td>
                        <td>${emp.name}</td>
                        <td>${emp.sal}</td>
                        </tr>`
                        
    }
    document.getElementById('abc').innerHTML = rows
}