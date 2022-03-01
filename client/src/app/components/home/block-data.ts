import { Transaction } from './transaction';

export interface BlockData {
  blockHash: string
  blockNumber: number
  previousBlock: number
  transactions: Transaction[];
}