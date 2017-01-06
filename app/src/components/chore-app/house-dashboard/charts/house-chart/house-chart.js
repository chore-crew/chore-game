import template from './house-chart.html';
import Chart from 'chart.js';

export default {
    template,
    bindings: {
        house: '<'
    }, 
    controller
};

// controller.$inject = ['$element'];

function controller() {

    this.$onInit = () => {

        // the house target for each chore & name
        // the house target for all chores & name

        // the user total for each chore for Jan 17 & name
        // the user total for all chores for Jan 17 & name
        this.choreTargets = this.house.chores.map(chore => {
            return chore.target;
        });
        this.sumChoreTargets = this.house.chores.reduce((acc, curr) => {
            if (curr.target) return acc += parseInt(curr.target);  
            else return acc;
        }, 0);

        this.houseCompleted = this.house.chores.map(chore => {
            if (!chore.completed) return null;
            return chore.completed['Jan 2017'];
        });

        this.sumHouseCompleted = this.house.chores.reduce((acc, curr) => {
            if (curr.completed && curr.completed['Jan 2017']) return acc += parseInt(curr.target);  
            else return acc;
        }, 0);

        this.houseChoreNames = this.house.chores.map(chore => chore.name);


        var sumTargetChart = new Chart('sumTargetChart', { //eslint-disable-line
            type: 'pie',
            data: {
                labels: ['Completed', 'Remaining'],
                datasets: [{
                    label: 'Times Completed',
                    data: [this.sumHouseCompleted, this.sumChoreTargets - this.sumHouseCompleted],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                
                }
            }
        });


    };
    
}