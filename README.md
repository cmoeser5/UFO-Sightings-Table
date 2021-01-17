# UFO Sightings Database Table

## Background
Utilized a dataset of UFO sightings to create a dynamic table that will filter and show data based on user input.

## Technologies Used
* JavaScript
* D3
* HTML
* CSS

### UFO Database
Created a multiple category searcg table that uses multiple input tags so the use can set different filters to search UFO sightings. The filters include: date, city, state, country, and shape (of UFO).

```js
//function to build table
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
```

### UFO Table
![table](UFO-level-1/static/images/UFO_Sightings.png)

### Filtered Table 
Table is shown filtered for Fresno.

![filtered](UFO-level-1/static/images/filter.png)
