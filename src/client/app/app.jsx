import angular from 'angular';
import _ from 'lodash';

import gameOn from './gameon-component/gameOn.jsx';

// stylesheets
import '../sass/styles.scss'
import 'bootstrap/dist/css/bootstrap.css';

angular.module('app', [
	'gameon'
]);

angular.bootstrap(document, ['app']);

/*
angular
    .module ('GameOnSwift', [])
    .controller('gameOnController', GameOnSwift);
*/