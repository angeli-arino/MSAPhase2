document.addEventListener("DOMContentLoaded", function () {
    loadSpecialsTable();
    console.log("loading table")
});

function loadSpecialsTable() {
    var specialsTable = document.getElementById("tblspecialcontent");

    SpecialsModule.getSpecials(function (specialsList) {
        setupSpecialsTable(specialsList);
    });

    function setupSpecialsTable(specials) {
        for (i = 0; i < specials.length; i++) {
            console.log("creating rows");

            var row = document.createElement('tr');
            row.setAttribute("data-id", specials[i].ID);

            // Add the columns in the row (td / data cells)
            var lastnamecol = document.createElement('td');
            lastnamecol.innerHTML = specials[i].name;
            row.appendChild(lastnamecol);

            console.log(specials[i].surname);

            var firstnamecol = document.createElement('td');
            firstnamecol.innerHTML = specials[i].price;
            row.appendChild(firstnamecol);

            var enrollmentdatecol = document.createElement('td');
            enrollmentdatecol.innerHTML = specials[i].start;
            row.appendChild(enrollmentdatecol);

            var endcol = document.createElement('td');
            endcol.innerHTML = specials[i].end;
            row.appendChild(endcol);

            // Append the row to the end of the table
            specialsTable.appendChild(row);
        }

        //Show table after it's all loaded
        document.getElementById("tblspecial").classList.remove("hidden");
        document.getElementById("loadingmsg").style.display = "none";
    }


}