function storage(arr) {
    const storage = new Map();
 
    for (const string of arr) {
         const item = string.split(" ").shift();
         const qty = Number(string.split(" ").pop());
         if (!storage.has(item)) {
             storage.set(item, qty);
         } else {
             const curQty = storage.get(item);
             storage.set(item, curQty + qty);
         }
    }
    for (const [item, qty] of storage) {
         console.log(`${item} -> ${qty}`);
    }
 }