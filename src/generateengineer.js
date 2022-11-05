let nameEngineer = require('../index.js');
const generateEngineerHtml = function (engineerObj) {

    return `

    <p> Engineer´s name is ${engineerObj.name} </p>
    <p> Engineer´s Id ${engineerObj.id} </p>
    <p> Engineer´s GitHub (https://github.com/${engineerObj.github})</p>
    

`
}


module.exports = generateEngineerHtml
