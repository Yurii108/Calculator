'use-strict';

import calculator from './modules/carculator';
import exchange from './modules/exchange';
import tabs from './modules/tabs';
import watch from './modules/watch';


window.addEventListener('DOMContentLoaded', function () {
    calculator();
    exchange();
    tabs();
    watch();
});