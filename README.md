# Mina
## API Services Made Easy with Node.js

View the website at [minajs.com](http://minajs.com).

Mina is a web server and opinionated framework for building
data manipulation-centric (Create Read Update Destroy) API services in Node.js for
web, mobile or IoT apps.

## Why Mina?

[Hello, Mina — Building Node.js Servers for Everybody](https://medium.com/@keithwhor/hello-mina-why-we-re-building-node-js-servers-for-everybody-dce14b27a233)
is our first blog post that helps you get acquainted with the reasons behind
the creation of the framework. :)

[Post Parse Prototyping](https://thoughts.ishuman.co/post-parse-prototyping-72b8570af416) is also a fantastic
read explaining the benefits of Mina for quick and easy mobile / IoT backend development.

## Overview

Mina is built upon an ideology of a robust, scalable architecture for
data storage and retrieval APIs.
It is an opinionated, explicit, idiomatic and highly-extensible full-service
framework that takes care of all of the hard decisions for you and your team.
This allows you to focus on creating an effective product in a
short timespan while minimizing technical debt.

Mina servers are not meant to be monoliths. They're *stateless* and *distributed*,
meant to service your needs of interfacing with your data layer effortlessly.
While you can output any data format with Mina, it's recommended you offload
things like static page rendering to other optimized services like CDNs.

## Stateless Dogma

It's important to note that Mina is meant for **stateless** API services. This
means you should not rely on memory within a specific process to serve multiple
requests, and Mina will use process clustering (even in development) to actively
discourage this practice. If you need to work with unstructured data for rapid
prototyping, *connect Mina to a PostgreSQL database* and use the "JSON" field
type. You'll find yourself encountering a lot of trouble if you start trying to
use in-process memory across different requests.

Remember: **one input, one output**. Side effects dealing with model state
should be managed via your Database. Mina should not be used for streaming
(long poll) requests and the HTTP request and response objects are intentionally
obfuscated.

This also means you *can not rely on socket connections*. If you need to
incorporate realtime functionality in your application, there should be a
separate server responsible for this. It can interface with your Mina API
server and even receive events from it, but your API server should never have
a stateful (prolonged) connection with any client.

## Getting Started

Getting started with Mina is easy.

1. Download and install the newest Node 6.x version from [nodejs.org](https://nodejs.org)
2. Open terminal, and type `npm install mina -g`.
(If you get an error, run `sudo npm install mina -g` or fix permissions permanently by
  [following these directions](https://docs.npmjs.com/getting-started/fixing-npm-permissions)
3. Using your terminal, visit your projects folder. Perhaps with `cd ~`.
4. Run `mina new`.
5. Follow the on screen instructions, enter your new project directory and type `mina s`.

That's it! Your Mina webserver is up and running.

## Hooking Up Your Database

Once Mina is up and running, it's likely that you'll want to connect your project
to a database. Mina comes packaged with Migrations, a Query Composer and full
PostgreSQL integration.

First you'll need to install PostgreSQL. OS X users, I recommend using
[Postgres.app](http://postgresapp.com/) for your development environment.

Once you've installed Postgres, make sure to run:

```
$ createuser postgres -s
```

To create a default postgres superuser with no password. (Default for Mina's
configuration.)

To begin using your database, start with:

```
$ mina db:create
```

To create the database and then,

```
$ mina db:prepare
```

To prepare for migrations.

From here, `mina db:migrate` runs all pending migrations and `mina db:rollback`
will roll back migrations, one at a time by default.

## Server Types

Mina works best when you follow its ideology, and that means creating a new
service to solve specific *Problem Domains* of your application and business.

The main three suggestions are **Branding Server**, **API Server** and **Application Server**.

### API Server

Create an API server using Mina's Models, PostgreSQL integration, built-in JSON
API formatting, and Query Composer (ORM). Bi-directional migrations are packaged
with Mina, meaning you can maintain the integrity of your data.
User (including password) and OAuth AccessToken models and controllers are
pre-built for you and can be added easily to your project.

Packaged with Mina are workers, scheduling modules, and much more for all of
your data needs.

We can look at what an API Controller might look like for, say, blog posts:

```javascript
class BlogPostsController extends Mina.Controller {

  index() {

    BlogPost.query()
      .join('user')
      .join('comments')
      .where(this.params.query)
      .end((err, blogPosts) => {

        this.respond(err || blogPosts);

      });

  }

  show() {

    BlogPost.find(this.params.route.id, (err, blogPost) => this.respond(err || blogPost));

  }

  create() {

    BlogPost.create(params.body, (err, blogPost) => this.respond(err || blogPost));

  }

  update() {

    BlogPost.update(this.params.route.id, params.body, (err, blogPost) => this.respond(err || blogPost));

  }

  destroy() {

    BlogPost.destroy(this.params.route.id, (err, blogPost) => this.respond(err || blogPost));

  }

}
```


## Beginner's Guide

You'll be able to learn more about Mina at [minajs.com](http://minajs.com).

## Documentation

Check out the website at [minajs.com](http://minajs.com).


Follow me on Twitter, [@hatchvenom](http://twitter.com/hatchvenom)

Fork me on GitHub, [keithwhor](http://github.com/SlimBN)

Thanks for checking out Mina!
