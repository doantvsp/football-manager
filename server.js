import Index from "laravel-echo-server";

var options = {
    "appKey": '0e1052d6edc3db2c',
    "authHost": 'local-login-fb.com',
    "authEndpoint": "/broadcasting/auth",
    "database": 'redis',
    "databaseConfig": {
        "redis": {
            "port": 6379,
            "host": '127.0.0.1'
        },
        "sqlite": {
            "databasePath": "/database/laravel-echo-server.sqlite"
        }
    },
    "devMode": true,
    "host": 'local-login-fb.com',
    "protocol": 'http',
    "port": 6001,
    "referrers": [],
    "socketio": {},
    "sslCertPath": "",
    "sslKeyPath": "",
    "verifyAuthPath": true,
    "verifyAuthServer": true
};

/**
 * Run the Laravel Echo Server.
 */
Index.run(options);