import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';
import CreateTransactionDTO from '../models/CreateTransactionDTO';

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({title, type, value} : CreateTransactionDTO): Transaction {
    
    if (type === "outcome" && this.transactionsRepository.getBalance().total < value )// check if has money to make the transaction 
      throw new Error('No Enough Money');


    return this.transactionsRepository.create({title, type, value});
  }
}

export default CreateTransactionService;
