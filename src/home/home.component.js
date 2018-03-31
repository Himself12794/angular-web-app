import template from './home.html';

export const HomeComponent = {
    template,
    controller: class HomeComponent {
        constructor($state) {
            'ngInject';
            this.$state = $state;

            this.title = 'HOME';
        }

        $onInit() {
            this.date = this.getFormattedDate();
        }

        getFormattedDate(){
            let today = new Date();
            let dd = today.getDate();
            let mm = today.getMonth()+1;
            let yyyy = today.getFullYear();

            if(dd<10){
                dd='0'+dd;
            }

            if(mm<10){
                mm='0'+mm;
            }

            return `${dd}/${mm}/${yyyy}`;
        }

        navigateToMortgageCalculator() {
            this.$state.go('mortgage-calculator');
        }
    }
};