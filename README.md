## Populating the database with binary (For deployment)
Run `source db.sh` from root of project. This will create a new database and create all necessary collections in it.
This also creates a single admin user with username `newsroom@tools.com` (for password contact us).

## Converting JSON
To convert from Audit-style JSON to schema-ready-JSON (If needed), run the this from project's root: `cd ./json/audit && babel-node auditToJson.js`

## Importing JSON (Updating dbs)
To import the JSON itself and create new collections from new updates JSON, run `source importJSON.sh` from `./json/audit`. This will import the JSON files into `jt-dev` db.