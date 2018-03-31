import template from './mortgage-calculator.html';

export const MortgageCalculatorComponent = {
    template,
    controller: class MortgageCalculatorComponent {
        constructor($state) {
            'ngInject';

            this.$state = $state;

            this.title = 'MORTGAGE CALCULATOR';
        }

        $onInit() {
            this.message = 'We will calculate your mortgage!';
        }

        navigateToHome(){
            this.$state.go('home');
        }
    }
};