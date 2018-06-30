---
layout: post
title: Setting up Postgres with Rails
logo: postgres.png
byline: Some notes for the curious
category: coding
# modified:
tags:
  - postgres
  - ruby on rails
---

Most of my toy Rails projects have relied on SQLite3 for database duties. This is fine if you don't need super high performance, but if you're building something more demanding (perhaps an [instant messaging app](https://github.com/StaphSynth/ptalk) and need to write to it often), or want to deploy your project to [Heroku](https://www.heroku.com/), then you might consider using [PostgreSQL](https://www.postgresql.org/) instead.

Setting up Postgres is a little more fiddly than SQLite3 (in that it will _need_ to be set up to work with Rails), so I've written some notes here from what I've learned for future reference.

### Installation

Postgres needs to be installed on your system for your Rails app to use it. Installing it is fairly easy, visit the [downloads page](https://www.postgresql.org/download/) and pick the method for your operating system. I'm using a macbook for this project, so I installed via [homebrew](https://brew.sh/).

```sh
$ brew install postgresql
```

To start Postgres after installation - and to make sure it's started as a service every time you boot your mac, you can use the following command:

```sh
$ pg_ctl -D /usr/local/var/postgres start && brew services start postgresql
```

Verify that it is installed and available:

```sh
$ postgres -V
# => postgres (PostgreSQL) 10.4
```

### Basic Configuration

This can be a little confusing at first, so I model it in my head like a Rails app: the Postgres application "server" can have many `roles` (a `role` is what Postgres calls a `user`).  Each `role` has a series of permissions which determine what actions can be taken (creating or deleting databases, for example). There are also many `database`s, to which individual `role`s may or may not have access. Each `role` also has a password for authorization.

Your Rails application will need to have a `role` configured for it to connect to Postgres and use the databases contained therein.

On installation, Postgres configures some default `role`s for you. It will also attempt to create a `postgres` user on your system. I found that if you don't have root access it won't be able to (obviously), but that this silently fails (which is kind of annoying, becuase most of the help and tutorials you will find on the net assume that this user exists).

To see what Postgres has configured after set up, you need to launch the command line utility.

```sh
$ psql postgres

# =>
psql (10.4)
Type "help" for help.

postgres=#
```

To see the existing roles and their permissions, type `\du` (short-hand commands in Postgres are preceeded with a backslash `\`).

```
                                          List of roles
    Role name     |                         Attributes                         | Member of
------------------+------------------------------------------------------------+-----------
 postgres         | Superuser, Create role, Create DB                          | {}
 ```

 To quit the utility, type `\q`.

### Creating a New Role

Before you can use Postgres with your Rails app, you'll need to create a new role for the app. You _could_ use the existing role(s), but this is a bad idea, since the defaults are widely known and have Superuser privileges.

To create a new role, start the utility and type:

```sh
postgres=# CREATE ROLE my_cool_rails_app WITH LOGIN PASSWORD 'super_strong_pw';
# => CREATE ROLE
```

While you're at it, you should set a password on the default account so it isn't vulnerable:

```sh
postgres=# \password
```

Typing `\du` will show your new role, but it won't have any attributes yet. This means is can't create, read or update databases. To give it some attributes and make it useful requires some more SQL:

```sh
postgres=# ALTER ROLE my_cool_rails_app CREATEDB;
# => ALTER ROLE
```

### Useage With Rails

Now that you have a role set up for the Rails app, you need to configure the app to use it. To do this, edit `database.yml`.

```yml
default: &default
  adapter: postgresql
  encoding: unicode
  pool: 5
  password: super_strong_pw

development:
  <<: *default
  database: my_cool_rails_app_development

test:
  <<: *default
  database: my_cool_rails_app_test

production:
  <<: *default
  database: my_cool_rails_app_production
  username: my_cool_rails_app
  password: <%= ENV['MY_RAILS_APP_DATABASE_PASSWORD'] %>
```

This sets up the databases the Rails app will use in test, development and production. Note the use of an environment variable to pass the production DB password to the app. Obviously, checking production passwords into source control is a _very bad idea_.

Then run:

```sh
$ rake db:setup && rails s
```

### Further Reading

Some useful links:

[Using roles and granting permissions](https://www.digitalocean.com/community/tutorials/how-to-use-roles-and-manage-grant-permissions-in-postgresql-on-a-vps--2), [Another Rails how-to guide](https://www.digitalocean.com/community/tutorials/how-to-setup-ruby-on-rails-with-postgres), [Installing Postres on MacOS X](https://www.codementor.io/engineerapart/getting-started-with-postgresql-on-mac-osx-are8jcopb)


