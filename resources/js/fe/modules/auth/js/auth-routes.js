import AuthContainerComponent from './components/AuthContainerComponent.vue';
import AuthLoginComponent from './components/AuthLoginComponent.vue';
import AuthRegisterComponent from './components/AuthRegisterComponent.vue';
import AuthForgotPasswordComponent from './components/AuthForgotPasswordComponent.vue';
import AuthPlansComponent from './components/AuthPlansComponent.vue';
import AuthPaymentMethodComponent from './components/AuthPaymentMethodComponent.vue';
import PaySubscriptionComponent from './components/PaySubscriptionComponent.vue';

export default [
    {
        path: '/auth',
        component: AuthContainerComponent,
        children: [
            {
                path: '/login',
                component: AuthLoginComponent,
                name: 'auth_login'
            },
            {
                path: 'register',
                component: AuthRegisterComponent,
                name: 'auth_register'
            },
            {
                path: 'password/reset',
                component: AuthForgotPasswordComponent,
                name: 'auth_forgot_password',
                props: true
            },
            {
                path: 'plans',
                component: AuthPlansComponent,
                name: 'auth_plans',
            },
            {
                path: 'payment-method/:subscription_id',
                component: AuthPaymentMethodComponent,
                name: 'auth_payments',
                props: true
            },
            {
                path: 'pay-subscription/:subscription_id',
                component: PaySubscriptionComponent,
                name: 'pay_subscription',
                props: true
            },
        ]
    }
    
]