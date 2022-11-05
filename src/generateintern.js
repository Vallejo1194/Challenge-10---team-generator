let nameIntern = require('../index.js')

const generateInternHtml = function (internObj) {

    return `
    
    <p> Intern´s Name is ${internObj.name}</p>
    <p> Intern´s id is ${internObj.id}</p>
    <p> Intern´s email is ${internObj.email}</p>
    <p> Intern´s school is ${internObj.school}</p>
    
    `
}

module.exports = generateInternHtml