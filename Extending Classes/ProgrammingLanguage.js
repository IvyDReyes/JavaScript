class ProgrammingLanguage {
    constructor(usesCurlies) {
        this.usesCurlies = usesCurlies;
    }
    compile() {
        console.log("Compiling, curlies: " + this.usesCurlies);
    }
}
class Java extends ProgrammingLanguage {}
class Python extends ProgrammingLanguage {}
const lang1 = new Java(true);
const lang2 = new Python(false);
lang1.compile();
lang2.compile();