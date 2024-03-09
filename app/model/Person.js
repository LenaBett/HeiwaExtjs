Ext.define('HeiwaExtjs.model.Person', {
    name: 'Unknown',
    requires: ['HeiwaExtjs.util.Util', 'HeiwaExtjs.util.Math'],

    constructor: function (name) {
        if (name) {
            this.name = name;
        }
    },

    eat: function (foodType) {
        HeiwaExtjs.util.Util.logInfo(this.name + " is eating: " + foodType);
    }
},
    () => {
        var bob = Ext.create('HeiwaExtjs.model.Person', 'Bob');

        bob.eat("Salad"); // alert("Bob is eating: Salad");
    }
);

