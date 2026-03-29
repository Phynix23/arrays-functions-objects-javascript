function analyzeInventory() {
    let inventory = [
        { item: "Pen", price: 50, quantity: 200 },
        { item: "Notebook", price: 350, quantity: 80 },
        { item: "Ruler", price: 100, quantity: 150 },
        { item: "Eraser", price: 30, quantity: 300 },
        { item: "Marker", price: 200, quantity: 60 }
    ];
    
    let highestValue = 0;
    let highestValueItem = "";
    let totalInventoryValue = 0;
    
    console.log("Items with stock value above ₦15,000:");
    for (let i = 0; i < inventory.length; i++) {
        const item = inventory[i];
        const stockValue = item.price * item.quantity;
        totalInventoryValue += stockValue;
        
        if (stockValue > 15000) {
            console.log(`- ${item.item}: ₦${stockValue}`);
        }
        
        if (stockValue > highestValue) {
            highestValue = stockValue;
            highestValueItem = item.item;
        }
    }
    
    console.log(`\nItem with highest stock value: ${highestValueItem} (₦${highestValue})`);
    console.log(`Combined inventory value: ₦${totalInventoryValue}`);
}
analyzeInventory();