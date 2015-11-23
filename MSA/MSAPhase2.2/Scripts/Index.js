document.addEventListener("DOMContentLoaded", function () {
    loadSpecialsTable();
});

function loadSpecialsTable() {
    var specialsTable = document.getElementById("tblspecialcontent");

    SpecialsModule.getSpecials(function (specialsList) {
        setupSpecialsTable(specialsList);
    });

    function setupSpecialsTable(specials) {
        console.log(specials);
        for (i = 0; i < specials.length; i++) {
            console.log("creating rows");

            var row = document.createElement('tr');
            row.setAttribute("data-id", specials[i].ID);

            // Add the columns in the row (td / data cells)
            var lastnamecol = document.createElement('td');
            lastnamecol.innerHTML = specials[i].surname;
            row.appendChild(lastnamecol);

            console.log(specials[i].surname);

            var firstnamecol = document.createElement('td');
            firstnamecol.innerHTML = specials[i].name;
            row.appendChild(firstnamecol);

            var enrollmentdatecol = document.createElement('td');
            enrollmentdatecol.innerHTML = specials[i].country;
            row.appendChild(enrollmentdatecol);

            // Append the row to the end of the table
            specialsTable.appendChild(row);
        }
    }


}