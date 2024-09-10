function companyUsers(arr) {
    const companyObj = {};
    for (const string of arr) {
        const [companyName, id] = string.split(" -> ");

        if (!companyObj.hasOwnProperty(companyName)) {
            companyObj[companyName] = [id];
        } else {
            if (!companyObj[companyName].includes(id)) {
                companyObj[companyName].push(id);
            }
        }
    }
    
    const entries = Object.entries(companyObj);
    entries.sort((arr1, arr2) => arr1[0].localeCompare(arr2[0]));

    for (const [companyName, ids] of entries) {
        console.log(companyName);
        for (const curId of ids) {
            console.log("--" + " " + curId);
        }
    }
}