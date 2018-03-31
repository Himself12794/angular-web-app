import angular from 'angular';

import { HomeComponent } from './home.component';

const css = require('./home.scss');

export const HomeModule = angular.module('homeModule', [])
  .component('home', HomeComponent) 
  .name;