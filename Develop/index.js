const fs = require('fs');
const inquirer = require("inquirer");
const axios = require("axios");
const generate = require('./utils/generateMarkdown');

const questions = [
    {
        type: "input",
        name: "title",
        message: "Project Title"
    },
    {
        type: "input",
        name: "badge",
        message: "Badge links"
    },
    {
        type: "input",
        name: "description",
        message: "Project's Description"
    },
    {
        type: "input",
        name: "installation",
        message: "Installation instructions"
    },
    {
        type: "input",
        name: "usage",
        message: "Usage"
    },
    {
        type: "input",
        name: "licence",
        message: "License"
    },
    {
        type: "input",
        name: "contributing",
        message: "Contributors"
    },
    {
        type: "input",
        name: "test",
        message: "Tests"
    },
    {
        type: "input",
        name: "username",
        message: "GibHub Username"
    },
];

inquirer
    .prompt(questions)
    .then(function(data){
        const queryUrl = `https://api.github.com/users/${data.username}`;

        axios.get(queryUrl).then(function(res) {
            
            const githubInfo = {
                githubImage: res.data.avatar_url,
                email: res.data.email,
                profile: res.data.html_url,
                name: res.data.name
            };

            console.log(githubInfo);
            
          fs.writeFile("README.md", generate(data, githubInfo), function(err) {
            if (err) {
              throw err;
            };
    
            console.log("New README file created with success!");
          });
        });

});

function init() {

}

init();