# nuxt_auth

> Nuxt.js project

Nuxt.jsのSPAモードで認証機能を実装してみるサンプル。（まだ開発中）

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## add bulma

```bash
@nuxtjs/bulma
```

https://github.com/nuxt-community/modules/tree/master/packages/bulmaw

[Nuxt.jsにBulmaを導入してカスタマイズ](https://qiita.com/mnmemo/items/5eb4fb8cbfe17670fd36)

## Nuxt modules

[font-awesome](https://github.com/nuxt-community/modules/tree/master/packages/font-awesome)

## auth server

```bash
cd server
bundle install --path .bundle
bundle exec ruby app.rb
```