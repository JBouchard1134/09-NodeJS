const axios = require("axios");
const inquirer = require("inquirer");

//Global Object Definition
const questions = [
    {
        type: "input",
        message: "Enter your GitHub username?",
        name: "username"
    }
];

// Initialize with questions to user
function init() {
    inquirer
        .prompt(questions)
        .then(function (input) {
            // console.log(answers);
            username = input.username;
            const queryUrl = `https://api.github.com/users/${username}`;
            return queryUrl;
        })
        .then(function (queryUrl) {
            axios.get(queryUrl)
                .then(function () {
                    console.log(`Success!`);
                })
                .catch(function (error) {
                    console.log("Please enter a valid Github username", error);
                    return;
                });
        });
};

init();