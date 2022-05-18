module.exports = function generateHTML(employeesArray) {
    let profiles = ``;
    let html = ``;
    let header = `
        <!DOCTYPE html>
        <html lang="en">
        
        <header>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
            <title>Team Profiles</title>
        </header>
        
        <body>
            <div class="jumbotron font-weight-bold text-center">
                <h1>TEAM PROFILES</h1>
            </div>
        
            <div class="container justify-content-center">
        
                <div class="d-flex flex-wrap justify-content-center"> 
    `

    html += header;
    for (let i = 0; i < employeesArray.length; i++) {

        // Because no other employees have the property mangerOffice, this can be used to identify the manager
        if (employeesArray[i].getRole() === "Manager") {

            profiles +=`            
                <div class="card text-center ml-4 mr-4 mb-5 border-dark">
                    <div class="card-body bg-danger text-light">
                        <h4 class="card-header">Name: ${employeesArray[i].getName()}</h4>
                        <h4 class="card-title">${employeesArray[i].getRole()}</h4>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${employeesArray[i].getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${employeesArray[i].getEmail()}">${employeesArray[i].getEmail()}</a></li>
                        <li class="list-group-item">Phone Number: ${employeesArray[i].getManagerOffice()}</li>
                    </ul>
                </div>
            `
        } else if (employeesArray[i].getRole() === "Engineer") {

            profiles += `
                <div class="card text-center ml-4 mr-4 mb-5 border-dark">
                    <div class="card-body bg-info text-light">
                        <h4 class="card-header">${employeesArray[i].getName()}</h4>
                        <h4 class="card-title">${employeesArray[i].getRole()}</h4>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${employeesArray[i].getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${employeesArray[i].email}">${employeesArray[i].email}</a></li>
                        <li class="list-group-item"><a href="https://github.com/${employeesArray[i].github}" target= "_blank">GitHub</a></li>
                    </ul>
                </div>
            `
        } else if (employeesArray[i].getRole() === "Intern") {

            profiles += `
                <div class="card text-center ml-4 mr-4 mb-5 border-dark">
                    <div class="card-body bg-warning text-light">
                    <h4 class="card-header">${employeesArray[i].getName()}</h4>
                    <h4 class="card-title">${employeesArray[i].getRole()}</h4>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${employeesArray[i].getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${employeesArray[i].email}">${employeesArray[i].email}</a></li>
                        <li class="list-group-item">School: ${employeesArray[i].getSchool()}</li>
                    </ul>
                </div>
            `

        }
    }
    html += profiles;

    // The closing HTML is consistent no matter how the user responds

    let footer =
        `
            </div>
            </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
            </body>
            </html>
        `

    html += footer;

    return html
}

