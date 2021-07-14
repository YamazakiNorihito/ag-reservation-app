# bootstrap install

[Install Command](https://getbootstrap.jp/docs/5.0/getting-started/download/#npm)
注意：boostrap v5 である

```shell
npm install bootstrap@next
```

# navbar

```shell
ng g component common/navbar
```

# navbar

```shell
ng g component product-list
```

# product-detail

```shell
ng g component product-detail
```

# 構成の見直し

## product module

```shell
ng g module product
```

## product routing

```shell
ng g module product --routing
```

# node server api

## install

https://expressjs.com/ja/

```shell
npm install express --save
```

_server runnig proguram_

ファイル

- src/ag-reservation-app/server/index.js

```node
const express = require("express");

const app = express();

app.listen("3001", function () {
  console.log("I am running");
});
```

server excute command

```shell
node index.js
```

# MongoDB

https://www.mongodb.com/

MongoDB Atlas を利用します。

## アカウント作成

## Data Storage Create

// TODO 後で作成手順

## node.js mongod connect

https://mongoosejs.com/docs/

```shell
 npm install mongoose
```

# server client join

## service add

```shell
ng g service product/shared/product
```

## cros site

https://hsmtweb.com/angular/angular-cli-proxy.html

```shell

```

```shell

```

```shell

```

```shell

```

```shell

```

```shell

```

```shell

```

```shell

```

```shell

```

```shell

```

```shell

```

```shell

```

```shell

```

```shell

```

```shell

```
