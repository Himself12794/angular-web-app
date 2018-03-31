import angular from 'angular';

import { MortgageCalculatorComponent } from './mortgage-calculator.component';

const css = require('./mortgage-calculator.scss');

export const MortageCalculatorModule = angular
    .module('mortageCalculatorModule', [])
    .component('mortgageCalculator', MortgageCalculatorComponent) 
    .name;