function checkString(str) {
    if(str=== null || str===undefined || str.substring(0,2)==='Py'){
        console.log("No change")
        return str;
    }
    console.log("Change")
    return "Py"+str;
}
console.log(checkString("Python"));
console.log(checkString("thon"));