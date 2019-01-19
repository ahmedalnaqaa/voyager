const fs = require('fs');

let environments = ['dev', 'prod', 'test'];
environments.forEach(function (environment) {
    try {
        if (!fs.existsSync('./config/vars/' + environment + '.env')) {
            fs.copyFile('./config/vars/.env.example', './config/vars/' + environment + '.env', {overwrite: false}, (err) => {
                if (err) throw err;
                console.log('' + environment + '.env is created successfully');
            });
        }
    } catch (err) {
        console.error(err)
    }
});