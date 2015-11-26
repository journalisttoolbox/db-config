## Populating the database
Run `source db.sh` from root of project. This will create a new database and create all necessary collections in it.
This also creates a single admin user with username `newsroom@tools.com` (for password contact us).

## Converting JSON
To convert from Audit-style JSON to schema-ready-JSON (If needed), run the this from project's root: `cd ./json/audit && babel-node stringToArray.js`