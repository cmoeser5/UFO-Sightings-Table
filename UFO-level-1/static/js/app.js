const tableData = data
const tbody = d3.select('tbody')
let filters = {}


function buildTable(data) {
    tbody.html('')  // Clear existing data

    data.forEach((row) => {
        const currentRow = tbody.append('tr')  // append row
        Object.values(row).forEach((value) => {
            let cell = currentRow.append('td')
            cell.text(value)
        })
    })
}

const handleClick = () => {
    d3.event.preventDefault()
    let filteredData = tableData;

    // Get Filtered Inputs
    let dateInput = d3.select("#datetime").property("value")
    let cityInput = d3.select("#city").property("value")
    let stateInput = d3.select("#state").property("value")
    let countryInput = d3.select("#country").property("value")
    let shapeInput = d3.select("#shape").property("value")
    console.log(`Date: ${dateInput}`)
    console.log(`City: ${cityInput}`)
    console.log(`State: ${stateInput}`)
    console.log(`Country: ${countryInput}`)
    console.log(`Shape: ${shapeInput}`)

    // Filter data
    if (dateInput) {
        filteredData = filteredData.filter((row) => row.datetime === dateInput)
    }
    if (cityInput) {
        filteredData = filteredData.filter((row) => row.city === cityInput)
    }
    if (stateInput) {
        filteredData = filteredData.filter((row) => row.state.toUpperCase() === stateInput)
    }
    if (countryInput) {
        filteredData = filteredData.filter((row) => row.country.toUpperCase() === countryInput)
    }
    if (shapeInput) {
        filteredData = filteredData.filter((row) => row.shape === shapeInput)
    }

    tbody.html('')  // Clear existing data

    filteredData.forEach((row) => {
        let currentRow = tbody.append('tr')  // append row
        Object.values(row).forEach((value) => {
            let cell = currentRow.append('td')
            cell.text(value)
        })
    })
}

d3.selectAll('#submit').on('click', handleClick)
buildTable(tableData)

// function clearEntry(){
//     filteredData._groups[0].forEach(entry => {
//         if (entry.value !=0){
//             d3.select('#' + entry.id).node().value = "";
//         }
//     });
// };

// let clearOptions = d3.select("#clear");
// clearOptions.on('click', function() {
//     d3.event.preventDefault();
//     clearEntry()
// });

// d3.selectAll('#clear').on('click', function(clearEntry()))
