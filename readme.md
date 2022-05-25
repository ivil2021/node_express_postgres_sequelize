## node_express_postgres_sequelize

This is a backend for the news_list application

Stack: [Node](https://nodejs.org/en/), [Express](https://expressjs.com/), [PostgreSQL](https://www.postgresql.org/), [Sequelize](https://sequelize.org/)
<br>
<br>

### Deploy

Local PostgreSQL installation is required

PostgreSQL can be installed on MacOS with Brew:
https://gist.github.com/peterdee/087dae4bb1ed7937c6f1d650059113fe

Install PostgreSQL on Ubuntu:
https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-18-04

After the installation you should create a role that is going to be used for the database access:

```shell script
sudo -u postgres createuser --interactive

Enter name of role to add: <ROLE NAME>
Shall the new role be a superuser? (y/n) <YES>
```

Created role should be a superuser

After creating a role, you should create a default database for that role:

```shell script
createdb <ROLE NAME>
```

After that, you should set a password for the created role via `psql`:

```shell script
psql

ALTER ROLE <ROLE NAME> WITH ENCRYPTED PASSWORD '<PASSWORD>';
```

Clone the project and install the dependencies:

```shell script
git clone https://github.com/ivil2021/node_express_postgres_sequelize
cd ./node_express_postgres_sequelize
nvm use 16
npm i
```
<br>

### Environment

The `.env` file is required, see the [.env_example](env_example) for details
<br>
<br>

### Launch (development)
Run the server in a terminal via nodemon:

```shell script
nodemon
```