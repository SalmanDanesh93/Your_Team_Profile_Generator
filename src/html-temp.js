const genTeam = team => {

    const genMan = man => {
        return `
        <div class="card e-c">
        <div class="card-header">
            <h2 class="card-title">${man.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${man.getRole()}</h3>
        </div>
        <div class="c-b">
            <ul class="l-g">
                <li class="l-g-i">Badge ID: ${man.getId()}</li>
                <li class="l-g-i">Email: <a href="mailto:${man.getEmail()}">${man.getEmail()}</a></li>
                <li class="l-g-i">Office #: ${man.getOffNum()}</li>
            </ul>
        </div>
    </div>
        `;
    };

    const genEng = eng => {
        return `
        <div class="card e-c">
    <div class="card-header">
        <h2 class="card-title">${eng.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${eng.getRole()}</h3>
    </div>
    <div class="c-b">
        <ul class="l-g">
            <li class="l-g-i">Badge ID: ${eng.getId()}</li>
            <li class="l-g-i">Email: <a href="mailto:${eng.getEmail()}">${eng.getEmail()}</a></li>
            <li class="l-g-i">GitHub: <a href="https://github.com/${eng.getGithub()}">${eng.getGithub()}</a></li>
        </ul>
    </div>
</div>
        `;
    };

    const genInt = int => {
        return `
        <div class="card e-c">
    <div class="card-header">
        <h2 class="card-title">${int.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${int.getRole()}</h3>
    </div>
    <div class="c-b">
        <ul class="l-g">
            <li class="l-g-i">Badge ID: ${int.getId()}</li>
            <li class="l-g-i">Email: <a href="mailto:${int.getEmail()}">${int.getEmail()}</a></li>
            <li class="l-g-i">School: ${int.getSchool()}</li>
        </ul>
    </div>
</div>
        `;
    };

    

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Engineer!")
        .map(eng => genEng(eng))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern!")
        .map(int => genInt(int))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Manager!")
        .map(man => genMan(man))
        .join("")
    );

    return html.join("");

}

module.exports = team => {

    return ` 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Your Team Profile!</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 mb-3 t-h">
                <h1 class="text-center">Your Team Profile!</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="t-a col-12 d-flex justify-content-center">
                ${genTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `
}
