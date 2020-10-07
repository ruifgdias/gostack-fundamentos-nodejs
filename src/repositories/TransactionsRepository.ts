import CreateTransactionDTO from '../models/CreateTransactionDTO';
import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {

    let income = 0;
    let outcome = 0;
    let total = 0;

    this.transactions.map(t => {
      if(t.type === 'income' )
        income +=t.value;

      if(t.type === 'outcome' )
        outcome +=t.value;
    });

    return { income,
      outcome,
      total: (income - outcome)
    }
  }

  public create({title, type, value} : CreateTransactionDTO): Transaction {
    const transaction = new Transaction({title, type, value});
    this.transactions.push(transaction);
    return transaction;
  }
}

export default TransactionsRepository;
