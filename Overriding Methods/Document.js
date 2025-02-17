class Document {
    save() {
        console.log("writing to disk");
    }
}
class Pdf extends Document {
    save() {
        super.save();
    }
}  
    const pdf1 = new Pdf();
    pdf1.save();
