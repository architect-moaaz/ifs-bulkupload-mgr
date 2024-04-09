export const configuration = {
    keycloakurl:'https://keycloak.intelliflow.in:8443/',
    env:'UAT',
    dbuser:false,
    dbusername:'',
    dbpassword:'',
    database: {
        host: 'localhost',
        port: '27017',
        name: 'recruitment-brd',
        username: 'rootuser',
        password: 'rootuser'
    },
    mail: {
        service: 'gmail',
        host: 'smtp.gmail.com',
        secure: false,
        port: 587,
        auth: {
            user: 'test@gmail.com',
            pass: 'test1234'
        },
        tls: {
            rejectUnauthorized: false
        },
        debug: true
    }
};
