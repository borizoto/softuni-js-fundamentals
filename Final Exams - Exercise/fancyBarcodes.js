function fancyBarcodes(arr) {
    const pattern = /(@#+)(?<productGroup>[A-Z][A-Za-z0-9]{4,}[A-Z])(@#+)/;

    let count = arr.shift();

    for (let i = 0; i < count; i++) {
        const string = arr.shift();
        let matches = pattern.exec(string);
        
        if (matches) {
            let text = matches.groups.productGroup;
            
            if (/\d/.test(text)) {
                text = text.split(/[A-Za-z]/)
                console.log(`Product group: ${text.join("")}`);
            } else {
                console.log("Product group: 00");
            }
        } else {
            console.log("Invalid barcode");
        }
    }
}