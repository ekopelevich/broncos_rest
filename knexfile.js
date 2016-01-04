module.exports = {
    development: {
        client: 'pg',
        connection: {
            database: 'broncosdb',
            user:     'elanakopelevich'
        }
    },
    production: {
        client: 'pg',
        connection: 'postgres://elanakopelevich@localhost/broncosdb'
    }
};
