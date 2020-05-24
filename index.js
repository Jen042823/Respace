const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");

inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is your title of your project? "

    },
    {
        type: "input",
        name: "description",
        message: "Please provide a description for your project."
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide a steps for your installation."

    },
    {
        type: "input",
        name: "usage",
        message: "Please provide how your going to use this project."
    },
    {
        type: "input",
        name: "licensing",
        message: "Please provide a list of any licensensing for this project."   
    },
    {
        type: "input",
        name: "contribution",
        message: "Please list of the developers who contributed to this project."
    },
    {
        type: "input",
        name: "test",
        message: "Please try test around your project."
    },
    {
        type: "input",
        name: "githubprofile",
        message: "Please link your Github profile link."
    },
    {
        type: "input",
        name: "githubemail",
        message: "Please provide githubemail."
    },

]).then(function(data) {
    generateMarkdown(data)
});






