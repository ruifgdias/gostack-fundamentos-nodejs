import TransactionsRepository from "../repositories/TransactionsRepository";

class ListTransactionsStatusService {
  private transactionsRepository :TransactionsRepository;
  constructor(transactionsRepository : TransactionsRepository){
    this.transactionsRepository = transactionsRepository;
  }

  public execute(){
    try {
      const transactions = this.transactionsRepository.all();
      const balance = this.transactionsRepository.getBalance();

      return {transactions, balance};      
    } catch (err) {
      throw new Error(`Error getting List Transactions Status ${err}`);      
    }

  }
}

export default ListTransactionsStatusService;