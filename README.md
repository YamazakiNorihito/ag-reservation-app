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

# deploy

利用するクラウドサーバー
[HEROKU](https://jp.heroku.com/)

1. アカウント作成
2. 右上の Create 押下
3. New App
   1. AppName は HEROKU 全体で一意の名前を作成。なるべくＧｉｔプロジェクトに合わせる
   2. region:USA
4. Deployment method: ＧｉｔＨｕｂ
   1. Connet to GitHub 入力しＳｅａｒｃｈ押下
      1. account:Ｇｉｔアカウント
      2. repository:対象リポジトリ
5. Automatic deploys
   1. branch : master
   2. Automatic Deploys:Enable Automatic Deploys on
6. Manual Deploy 初回のみ master branch 選択し DeployBranch
7. Deploy Complite After "View" buton
   → ただし、今回はエラーになる可能性があります。調査方法
   1. "Activity" tag open
   2. 本番環境で"npm run build --prod"で実行されるため packeg.json の build を変更する
   3. npm,node のバージョンが一致しないかの可能性あるので、package.json "engines"を追記
8. deploy アプリケーションスタートは npm start を使う。server 側の node.js を動かしたいので、package.json 修正
   package.json
9. server node.js project add(※１)
   1. src/ag-reservation-app/server/package.json を修正（※2）
   2. ローカル環境で確認
      1. npm start
         →localhost:3001

```json
  "engines" :{
    "node":"[cmd node -v の値]",
    "npm":"[cmd npm -v の値]"
  },
  "scripts": {
    "start": "npm run start --prefix server",
    "build": "ng build --configuration production",
  },
```

```shell
node -v
npm -v
```

- server dir で下記のコマンド実行（※１）

```shell
npm init
# すべて空白でOK
```

- /server/package.json（※2）

```json
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
  },
  "author": "",
  "license": "ISC"
}
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
