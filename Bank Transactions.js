function processBankTransactions() {
    let bank = {
        accountHolder: "Ngozi Adeyemi",
        accountNumber: "0123456789",
        balance: 250000,
        transactions: [5000, -12000, 30000, -8500, 15000]
    };
    
    // Print account holder's name
    console.log("Account Holder:", bank.accountHolder);
    console.log("Initial Balance: ₦" + bank.balance);
    
    // Apply each transaction
    for (let i = 0; i < bank.transactions.length; i++) {
        const transaction = bank.transactions[i];
        if (transaction > 0) {
            console.log(`Credit: ₦${transaction}`);
        } else {
            console.log(`Debit: ₦${Math.abs(transaction)}`);
        }
        bank.balance += transaction;
    }
    
    console.log("Final Balance: ₦" + bank.balance);
}
processBankTransactions();