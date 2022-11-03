import Main from "./components/Main";
import Transaction from "./components/Transaction";
import Transactions from "./components/Transactions";
import { MAIN_ROUTE, TRANSACTIONS_ROUTE, TRANSACTION_ROUTE } from "./utils/constants";


export const financRouters = [
    {
        path: MAIN_ROUTE,
        Element: Main,
    },
    {
        path: TRANSACTIONS_ROUTE,
        Element: Transactions
    },
    {
        path: TRANSACTION_ROUTE,
        Element: Transaction,
    }
];