let employees = [
    {id: 101, name: "Ram", sal: 45000},
    {id: 101, name: "Joshi", sal: 55000},
    {id: 101, name: "Raj", sal: 85000},
    {id: 101, name: "Navitha", sal: 75000}
]
/*function display_Data() {
    let rows = ""
    for (employee of employees) {
        rows = rows + `<tr>
                        <td>${employee.id}</td>
                
                       
                        </tr>`
                        
    }
    document.getElementById('abc').innerHTML = rows
}*/

function display_Data() {
    let rows = "<tr><td>101</td> <td>naveen</td> <td>85000</td></tr>"
   
    document.getElementById('abc').innerHTML = rows
}