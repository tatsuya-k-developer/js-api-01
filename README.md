# JavaScriptでGoogleスプレッドシートのデータを取得してWebページに表示させる方法


## 1. Google Sheets APIの有効化
1. [Google Cloud Console](https://console.cloud.google.com/)にアクセスし、新しいプロジェクトを作成します。
2. **APIとサービス** > **ライブラリ** から「Google Sheets API」を検索し、有効にします。
3. **認証情報**タブで、**APIキー**を作成し、このAPIキーを後で使用します。

## 2. スプレッドシートのデータを公開
1. 取得したいスプレッドシートを開きます。
2. **ファイル** > **ウェブに公開** を選択し、「リンクを知っている全員が閲覧可能」に設定します。



## パラメータの置き換え
- `YOUR_GOOGLE_SHEETS_API_KEY`：取得したAPIキーに置き換えてください。
- `YOUR_SHEET_ID`：スプレッドシートのIDに置き換えてください（URLの`/spreadsheets/d/`以降の部分です）。

このコードで、指定した範囲のスプレッドシートのデータがWebページにテーブルとして表示されます。JavaScriptでGoogleスプレッドシートのデータを取得してWebページに表示させる方法は、Google Sheets APIを使用するのが一般的です。以下に手順をまとめます。