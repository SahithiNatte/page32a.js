
let customers = [
  { 
    id: 1, 
    name: "chancy",
    balance: 5000,
    transactions: [] 
},
  { 
    id: 2, 
    name: "sisilia", 
    balance: 5000, 
    transactions: []
   } ,
];

function deposit(id, amount) {
  customers = customers.map((customer) => {
    if (customer.id === id) {
      return {
        ...customer,
        balance: customer.balance + amount,
        transactions: [
          ...customer.transactions,
          {
            type: "credit",
            amount: amount,
            date: Date.now(),
          },
        ],
      };
    } else {
      return customer;
    }
  });
  console.log("deposit successful");
}

function withdraw(id, amount) {
  let customer = customers.find(customer=> customer.id === id);

  if (customer && customer.balance >= amount) {
    customer.balance -= amount;

    customer.transactions.push({
      type: "debit",
      amount: amount,
      date: Date.now()
    });

    console.log("Withdrawal successful");
  } else {
    console.log("Insufficient balance");
  }
}

function checkBalance(id) {
  const customer = customers.find((customer) => customer.id === id);
  console.log(customer);
}
function showTransactions(id) {
  let customer = customers.find(customer => customer.id === id);
    console.log(customer.transactions);
  }

deposit(2, 1000);
withdraw(2, 500);
checkBalance(2);
showTransactions(2);