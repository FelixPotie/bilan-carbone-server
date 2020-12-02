import {createConnection} from "typeorm";

export let connect = async () => {

    const connection = await createConnection({
        "name": "default",
        "type": "postgres",
        "host": "localhost",
        "port": 5432,
        "username":"postgres",
        "password":"postgres",
        "database": "bilan_carbone_db",
        "synchronize": false,
        "logging": true,
        "migrationsTableName": "custom_migration_table",
        "entities": [
            __dirname + '/models/User.model.js'
        ],
        "migrations": [
            __dirname + '/migrations/*.js'
        ],
        "cli": {
            entitiesDir: __dirname + "/models/",
            migrationsDir: __dirname + '/migrations/'
        }
    });
    console.log(__dirname);
    console.log(connection.entityMetadatas);

};