import { createRouter, createWebHistory } from 'vue-router';

import LayoutAccuracy from './layouts/Client/LayoutAccuracy.vue';
import LayoutHomePage from './layouts/Client/LayoutHomePage.vue';
import LayoutPageCharity from './layouts/Client/LayoutPageCharity.vue';
import LayoutContact from './layouts/Client/LayoutContact.vue';
import LayoutCharityInCategory from './layouts/Client/LayoutCharityInCategory.vue';
import LayoutInforCharity from './layouts/Client/LayoutInforCharity.vue';
import ShortCharity from './pages/Client/ShortCharity.vue';
import LongCharity from './pages/Client/LongCharity.vue';
import Contact from './pages/Client/Contact.vue';
import CharityCategory from './pages/Client/CharityCategory.vue';
import Donate from './pages/Client/Donate/Donate.vue';
import LayoutDonate from './layouts/Client/LayoutDonate.vue';
import LayoutCreateCharity from './layouts/Client/LayoutCreateCharity.vue';
import LayoutInforUser from './layouts/Client/LayourInforUser.vue';
import InforUser from './pages/Client/InforUser/InforUser.vue';
import InforUserDonate from './pages/Client/InforUser/InforUserDonate.vue';
import CharityUser from './pages/Client/InforUser/CharityUser.vue';
import EditCharity from './pages/Client/InforUser/Edit/EditCharity.vue';
import NotFound from './pages/Client/ErrorPage/NotFound.vue';
const token = localStorage.getItem("Token")
const routes = [
    {
        path: '',
        name: 'HomePage',
        component: LayoutHomePage
    },
    {
        path: '/accuracy',
        name: 'Accuracy',
        component: LayoutAccuracy,
    },
    {
        path: '/charity',
        name: 'Charity',
        component: LayoutPageCharity,
        children: [
            {
                path: 'short-time',
                name: 'ShortCharity',
                component: ShortCharity,
            },
            {
                path: 'long-time',
                name: 'LongCharity',
                component: LongCharity
            }
        ]
    },
    {
        path: '/data-category/:id',
        name: 'LayoutCharityInCategory',
        component: LayoutCharityInCategory,
        children: [
            {
                path: '',
                name: 'CharityCategory',
                component: CharityCategory
            }
        ]
    },
    {
        path: '/infor/:id',
        name: 'InforCharity',
        component: LayoutInforCharity
    },
    {
        path: '/contact-for-us',
        name: 'LayoutContact',
        component: LayoutContact,
        children: [
            {
                path: 'contact',
                name: 'Contact',
                component: Contact
            }
        ]
    },
    {
        path: '/donate',
        name: 'Donate',
        component: LayoutDonate,
        children: [
            {
                path: ':id',
                name: 'DonatePage',
                component: Donate
            }
        ]
    },
    {
        path: '/campaign',
        name: 'CreateCharity',
        component: LayoutCreateCharity
    },
    {
        path: '/infor',
        name: 'InforUser',
        component: LayoutInforUser,
        children: [
            {
                path: '',
                name: 'Infor',
                component: InforUser,
            },
            {
                path: 'campaign',
                name: 'CharityUser',
                component: CharityUser,
            },
            {
                path: 'campaign-donate',
                name: 'InforUserDonate',
                component: InforUserDonate,
            },
            {
                path: 'edit/:id',
                name: 'EditCharity',
                component: EditCharity,
            }
        ]
    },
    {
        name: 'NotFound',
        path: '/:pathMatch(.*)',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.name !== 'Accuracy' && !token) {
        next({ name: 'Accuracy' });
    } else if (to.name === 'Accuracy' && token) {
        next({ name: 'HomePage' });
    } else {
        next()
    }
});


export default router