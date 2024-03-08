Ext.define(
    "HeiwaExtjs.model.City", // className => <AppName>.<foldername>.<ClassAndFileName>
    {
        extend: "Ext.data.Model",
        fields: [
            "id",
            "name",
            { name: "phone", type: "string" },
            { name: "age", type: "int" },
        ],
    }, // Configuration/ properties
    function () {
        var city = Ext.create("HeiwaExtjs.model.City");
        console.log(city);
    }
); 