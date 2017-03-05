import angular from 'angular';

import GameOnController from './controller/gameon-controller.jsx';
import GameOnDirective from './directive/gameon-directive.jsx';

export default angular.module('gameon', []) 
    .controller('gameOnController', GameOnController)
    .directive('gameOnDirective', GameOnDirective);