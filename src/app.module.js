import 'babel-polyfill';
import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import ngMaterial from 'angular-material';
import 'angular-animate';
import 'angular-aria';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.modules';
import { MortageCalculatorModule } from './mortgage-calculator/mortgage-calculator.modules';

import 'bootstrap';
const css = require('./scss/styles.scss');

export const app = angular.module('app', [
    uiRouter,
    ngMaterial,
    HomeModule,
    MortageCalculatorModule
  ])
  .component('app', AppComponent) 
  .config(($locationProvider, $urlMatcherFactoryProvider, $uiRouterProvider, $stateProvider, $urlRouterProvider) => {
    'ngInject';

    $urlMatcherFactoryProvider.strictMode(false);
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('home', {
        url: '/',
        component: 'home'
      })
      .state('mortgage-calculator', {
        url: '/mortgage-calculator',
        component: 'mortgageCalculator'
      });
  
    $urlRouterProvider.otherwise('/');
  }
).name;