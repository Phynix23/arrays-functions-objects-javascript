function processMarket() {
    let market = {
        name: "Balogun Market",
        location: "Lagos Island",
        totalStalls: 400,
        openDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    };
    
    // Print market name and location
    console.log(`${market.name} is located in ${market.location}`);
    
    // Print number of open days
    console.log("Number of open days:", market.openDays.length);
    
    // Print each open day
    console.log("Open days:");
    for (let i = 0; i < market.openDays.length; i++) {
        console.log(market.openDays[i]);
    }
}
processMarket();