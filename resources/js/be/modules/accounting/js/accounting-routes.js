
import AccountingContainerComponent from './components/AccountingContainerComponent.vue';
import TransactionsList from './components/AdminTransactionsComponent.vue';

var path = '/'

export default [
    {
        path: path,
        component: AccountingContainerComponent,
        children: [
            {
                path: 'transactions/list',
                component: TransactionsList,
                name: 'transactions_list'
            }
        ]
    }
]