import { lowerCase, upperFirst } from "lodash-es"
import { Status } from "starknet"

import { TRANSACTION_STATUSES_TO_TRACK } from "../background/transactions/constants"
import { WalletAccount } from "./wallet.model"

export interface TransactionMeta {
  title?: string
  subTitle?: string
}

export interface TransactionBase {
  hash: string
  account: {
    networkId: string
  }
}

export interface TransactionRequest extends TransactionBase {
  account: WalletAccount
  meta?: TransactionMeta
}

export interface Transaction extends TransactionRequest {
  status: Status
  failureReason?: { code: string; error_message: string }
  timestamp: number
}

export const compareTransactions = (
  a: TransactionBase,
  b: TransactionBase,
): boolean => a.hash === b.hash && a.account.networkId === a.account.networkId

export function entryPointToHumanReadable(entryPoint: string): string {
  try {
    return upperFirst(lowerCase(entryPoint))
  } catch {
    return entryPoint
  }
}

export const getInFlightTransactions = (
  transactions: Transaction[],
): Transaction[] =>
  transactions.filter(({ status }) =>
    TRANSACTION_STATUSES_TO_TRACK.includes(status),
  )
