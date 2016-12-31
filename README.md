# Carthage
## API Services Made Easy with Node.js

View the website at [carthagejs.com](http://carthagejs.com).

Carthage is a web server and opinionated framework for building
data manipulation-centric (Create Read Update Destroy) API services in Node.js for
web, mobile or IoT apps.

## Why Carthage?

Carthage is built upon an ideology of a robust, scalable architecture for
data storage and retrieval APIs.

Carthage servers are not meant to be monoliths. They're *stateless* and *distributed*

Remember: **one input, one output**. Side effects dealing with model state
should be managed via your Database. Carthage should not be used for streaming
(long poll) requests and the HTTP request and response objects are intentionally
obfuscated.

This also means you *can not rely on socket connections*. If you need to
incorporate realtime functionality in your application, there should be a
separate server responsible for this. It can interface with your Carthage API
server and even receive events from it, but your API server should never have
a stateful (prolonged) connection with any client.

## Getting Started

Getting started with Carthage is easy.

1. Download and install the newest Node 6.x version from [nodejs.org](https://nodejs.org)
2. In Terminal: type `npm install carthage -g`.
(If you get an error, run `sudo npm install carthage -g` or fix permissions permanently by
  [following these directions](https://docs.npmjs.com/getting-started/fixing-npm-permissions)
3. Again in Terminal, visit your projects folder. Perhaps with `cd ~`.
4. Run `carthage new`.
5. Follow the on screen instructions, enter your new project directory and type `carthage s`.

That's it! Your Carthage webserver is up and running.

## Hooking Up Your Database

Once Carthage is up and running, it's likely that you'll want to connect your project
to a database. Carthage comes packaged with Migrations, a Query Composer and full
PostgreSQL integration.

First you'll need to install PostgreSQL.

Once you've installed Postgres, make sure to run:

```
$ createuser postgres -s
```

To create a default postgres superuser with no password. (Default for Carthage's
configuration.)

First step then:

```
$ carthage db:create
```

To create the database and then,

```
$ carthage db:prepare
```

To prepare for migrations.

From here, `carthage db:migrate` runs all pending migrations and `carthage db:rollback`
will roll back migrations, one at a time by default.

## Server Types

Carthage works best when you follow its ideology, and that means creating a new
service to solve specific *Problem Domains* of your application and business.

The main three suggestions are **Branding Server**, **API Server** and **Application Server**.

### API Server

Create an API server using Carthage's Models, PostgreSQL integration, built-in JSON
API formatting, and Query Composer (ORM). Bi-directional migrations are packaged
with Carthage, meaning you can maintain the integrity of your data.
User (including password) and OAuth AccessToken models and controllers are
pre-built for you and can be added easily to your project.

Packaged with Carthage are workers, scheduling modules, and much more for all of
your data needs.

We can look at what an API Controller might look like for, say, blog posts:

```javascript
class BlogPostsController extends Carthage.Controller {

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


Follow me on Twitter, [@hatchvenom](http://twitter.com/hatchvenom)

Fork me on GitHub, [SlimBN](http://github.com/SlimBN)

