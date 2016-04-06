# nlt_f2
nowlistening.tokyo frontend v2

## 開発をはじめる
```
bundle install --path vendor/bundle
npm install
bundle exec middleman server
```

http://localhost:4567/

にてサーバーが起動する

## build
```
bundle exec middleman build
```

## スタイルガイド

http://localhost:4567/styleguide/

kssの記法でsassを書いていればスタイルガイドが生成される

## テスト
```
npm run test
```

全然使いこなせてない。

## TODO

-[] uiの再設計
-[] テスト周りの理解を深める
-[] json schema を用いたテストができるようにする

