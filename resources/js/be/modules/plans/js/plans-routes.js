
import PlansContainerComponent from './components/plans/PlansContainerComponent.vue';
import PlansList from './components/plans/PlansListComponent.vue';
import PlanCreate from './components/plans/PlanCreateComponent.vue';

import SubscriptionsContainerComponent from './components/subscriptions/SubscriptionsContainerComponent.vue';
import SubscriptionsList from './components/subscriptions/SubscriptionsListComponent.vue';
import SubscriptionCreate from './components/subscriptions/SubscriptionCreateComponent.vue';

var path = '/'

export default [
    {
        path: path + '/plans',
        component: PlansContainerComponent,
        children: [
            {
                path: 'list',
                component: PlansList,
                name: 'plans_list'
            },
            {
                path: 'create',
                component: PlanCreate,
                name: 'create_plan'
            },
            {
                path: 'edit/:id',
                component: PlanCreate,
                name: 'edit_plan'
            },
        ]
    },
    {
        path: path + '/subscriptions',
        component: SubscriptionsContainerComponent,
        children: [
            {
                path: 'list',
                component: SubscriptionsList,
                name: 'subscriptions_list'
            },
            {
                path: 'create',
                component: SubscriptionCreate,
                name: 'create_subscription'
            },
            {
                path: 'edit/:id',
                component: SubscriptionCreate,
                name: 'edit_subscription'
            },
        ]
    },
]