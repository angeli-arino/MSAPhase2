var SpecialsModule = (function () {
    // Return anything that you want to expose outside the closure
    return {
        getSpecials: function (callback) {
            //Make GET call to /api/Specials
            console.log("gathering data")
            $.ajax({
                type: "GET",
                dataType: "json",
                url: "http://nandosoawesome.azurewebsites.net/api/Specials",
                success: function(data) {
                    console.log(data);
                    callback(data);
               }
            });
        },

        getSpecialById: function (id) {
            //Make GET call to /api/Specials/id
        },

        addSpecials: function (special) {
            //Make POST call
        },

        updateSpecial: function (id, special) {
            //Make PUT calll
        },

        deleteSpecial: function (id) {
            //Make DELETE call
        }
    };
}());