1. copy fazbook_auth_development to folder outside of WDI
2. npm install to add the neccessary dependencies
2a. check node modules for the dependencies - bcrypt, passport, passport-local, bcryptjs, dotenv,express-session
3. npm start -- won't work! we have app work to do
4. Start a Git Repo
5. git init
6. name it, no readme box checked
7. git clone ..
8. make a commit
9  git push -u master
10. Create the Database and Config Sequelize
11. sequelize init
12. createdb fazbook_auth_development, the name of our DB
13. reconfig the db/config.json file that was created -- dont forget the edits
14. under username, enter the db root name -- 'kevinturney'
15. under database, 'fazbook_auth_development'
16. under dialect, 'postgres'
17. Create the User Model
18. sequelize model:create --name User -- attributes " username:string(32) password:text email:string(128) firstName:string lastName:string dob:date"
````
this creates the User table with column names and data types, the columns are
username, password, email, firstName, lastName, and dob. __read sequelize docs 
about creating a model__

__If you fuck up__ 
    a. psql -- fire up postgres
    b. kevinturney=# DROP DATABASE fazbook_auth_development; -- drop the database and start fresh
    c. kevinturney=# \q -- quit postgres
    d. sequelize init --force -- overwites what you did
    e. createdb fazbook_auth_development -- create the db fazbook_auth_development
    f. REDO THE db/config.json -- edit username, database, and dialect 
    g. create the User model -- see step 18.

````
19. sequelize db:migrate
20.
