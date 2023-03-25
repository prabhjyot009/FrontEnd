
    const products=["H","E","N"];

    for(let i=0;i<products.length;i++)
    {
        console.log(products[i]);
    }
    //for in loop provide the index value
    for(let x in products)
    {
        console.log(products[x]);
    }
    //for of loop provide the string value itself
    for(let x of products)
    {
        console.log(x);
    }

    //While loop
    var i=0;

    while (i<products.length) {
        console.log(products[i]);
        i++;
    }