/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */

/* Polyfill - code that adds a feature that the engine of an older browser may lack */

if (!Object.create) {
    Object.create = function (o) {
        "use strict";
        if (arguments.length > 1) {
            throw new Error('Object.create implementation only accepts the first paramemter.');
        }
        function F() {}
        F.prototype = o;
        return new F();
    };
    
}

/* End of Polyfill */

// Object creation of "Toy" with "new".
function Toy(name, team) {
    "use strict";
    this.toyName = name;
    this.teamName = team;
    console.log(this.toyName + ' the ' + this.teamName);
}

Toy.prototype.ShowAllStats = function () {
    "use strict";
    var para = document.createElement("p");
    var node = document.createTextNode("Toy name: " + this.toyName + " Alignment: " + this.teamName);
    para.appendChild(node);
    document.body.appendChild(para);
};

var megatron = new Toy("Megatron", "Predacon");
console.log(megatron);

var optimus = new Toy("Optimus", "Maximal");
console.log(optimus);

megatron.ShowAllStats();
optimus.ShowAllStats();

// Object creation with Object.create

var doll = {
    
    name: "default",
    company: "default",
    dollStats: function () {
        "use strict";
        var para = document.createElement("p");
        var node = document.createTextNode("Doll name: " + this.name + " Manufacturer: " + this.company);
        para.appendChild(node);
        document.body.appendChild(para);
    }
};

var barbie = Object.create(doll);
barbie.name = "Barbie";
barbie.company = "Mattel";
barbie.dollStats();

var bratz = Object.create(doll);
bratz.name = "Bratz";
bratz.company = "MGA Entertainment";
bratz.dollStats();