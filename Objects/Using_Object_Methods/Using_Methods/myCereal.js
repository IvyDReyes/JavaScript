const myCereal = {
    name: "Trix",
    display: function() {
        console.log(this) //The keyword this refers to the object that contains the method. In this case, myCereal.
    }
};
myCereal.display();


const myCereal1 = {
    name: "Trix",
    display: function() {
        console.log(this.name); //We can use this followed by a . to get the object's properties from inside its methods.
    }
}
myCereal1.display(); 

//The this keyword can only be used to access an object's properties inside the object methods.
const myCereal2 = {
    name: "Trix",
    changeAndDisplay: function() {
        this.name = "Cap'n Crunch"; //Similarly, we can use this followed by a . to update the obejct's properties from inside its methods.
        console.log(this.name);
    }
};
myCereal2.changeAndDisplay();