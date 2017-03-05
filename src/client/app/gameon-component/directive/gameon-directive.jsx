export default class GameOnDirective {
    constructor() {
        this.template = '<div>{{ctrl.name}}</div>';
        this.restrict = 'E';
        this.scope = {};
        
        this.controller = ExampleDirectiveController;
        this.controllerAs = 'ctrl';
        this.bindToController = true;
    }

    // Directive compile function
    compile() {
		
    }
    
    // Directive link function
    link() {
		
    }
}

// Directive's controller
class GameOnDirectiveController {
    constructor () {
        this.name = 'david';
    }
}