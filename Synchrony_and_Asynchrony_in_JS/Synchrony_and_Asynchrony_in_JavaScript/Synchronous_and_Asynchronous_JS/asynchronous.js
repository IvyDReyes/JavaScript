async function example() {
    const promise = new Promise((resolve) => {
        setTimeout(() => resolve("The operation is finished"), 1500);
    }


    );
    const output = await promise;
    console.log(output);
}
example();
console.log("Hello");
// Output:
// Hello
// The operation is finished