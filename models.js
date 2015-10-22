'use strict';


var DROPTABLES = false;


if (process.env.PORTFOLIO_DROP === 'true') {
    DROPTABLES = true;
}


var Sequelize = require('sequelize');

var sequelize = new Sequelize(
    process.env.PORTFOLIO_NAME, // database name
    process.env.PORTFOLIO_USERNAME, // username
    process.env.PORTFOLIO_PASSWORD, // password
    { logging: function () {} }
);

var Project = sequelize.define('project', {
    name: Sequelize.STRING,
    image: Sequelize.STRING,
    description: Sequelize.TEXT
});


exports.Project = Project;


exports.start = function() {
        return sequelize.sync({
                force: DROPTABLES
            }) // Use {force:true} only for updating the above models,
            // it drops all current data
            .then(function() {

                return Project.findOrCreate({
                    where: {
                        name: 'Excess-Three Gray Code Counter',
                        image: 'images/project-idea.png',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam fugit similique eius et, eveniet maxime culpa possimus, quasi asperiores. Maxime non earum eligendi. Culpa, totam reprehenderit iste, obcaecati magnam aspernatur!',
                    }
                });
            })
            .then(function() {

                return Project.findOrCreate({
                    where: {
                        name: 'IP Address Filter using Algorithms',
                        image: 'images/project-idea.png',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum neque quod itaque quisquam, nulla odio soluta aliquam repellendus pariatur velit eius, atque at reiciendis maxime impedit maiores, voluptatibus, voluptatem rem.',
                    }
                });
            })
            .then(function() {

                return Project.findOrCreate({
                    where: {
                        name: 'Image Processing Package w/ Stacks and Linked Lists',
                        image: 'images/project-idea.png',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas alias maiores quam voluptatum molestiae, fuga, vel, repudiandae expedita eaque accusamus minus repellat laboriosam, velit deserunt illo non a? Aperiam, quam!',
                    }
                });
            })
            .then(function() {

                return Project.findOrCreate({
                    where: {
                        name: 'To-Do List w/ Implmenting Lists from the Abstract List ADT',
                        image: 'images/project-idea.png',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate animi non, sunt dolorum aperiam ex eaque esse. Quia tempora sequi minus, aperiam deserunt illum. Exercitationem optio ullam fugit cum magnam.',
                    }
                });
            })
            .then(function() {

                return Project.findOrCreate({
                    where: {
                        name: 'Some Project',
                        image: 'images/project-idea.png',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, doloribus, assumenda! Magni provident sunt maxime iste molestias nostrum dignissimos commodi quam eveniet voluptates pariatur fugit nisi enim, sint, natus blanditiis.',
                    }
                });
            })
            .then(function() {

                    return Project.findOrCreate({
                            where: 
                            {
                            	name: 'Some Other Project',
                            image: 'images/project-idea.png',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, doloribus, assumenda! Magni provident sunt maxime iste molestias nostrum dignissimos commodi quam eveniet voluptates pariatur fugit nisi enim, sint, natus blanditiis.',
                        }
                    });
            })
    .then(function() {
        if (DROPTABLES) {
            console.log('Testing: All Table Data Dropped');
        }
        console.info('Tables Synced');
        return true;
    })
    .catch(function(error) {
        console.error(error);
    });

};
