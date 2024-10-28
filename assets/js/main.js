const API_KEY = ''; //　APIKEYを入れる
const SPREADSHEET_ID = ''; // スプレッドシートのIDを入れる
const RANGE = ''; //　スプレッドシートの読み取り範囲の指定　例hoge!A1:D3


// スプレッドシートのデータを読み込むための関数
const loadSheet = () => gapi.load('client', initializeClient);


// クライアントの初期化とデータ取得処理
const initializeClient = async () => {
    try {
        // gapiクライアントの初期化を行う。APIキーとAPIの構造を指定
        await gapi.client.init({
            apiKey: API_KEY,
            discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'] // Google Sheets APIのディスカバリードキュメントURL
        });
        
        // スプレッドシートからデータを取得
        const response = await gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: SPREADSHEET_ID, // 対象のスプレッドシートID
            range: RANGE // 読み取る範囲
        });

        // 取得したデータ（セルの値）をdata変数に格納
        const data = response.result.values;

        // データを整形して画面に表示
        displayData(data);

    } catch (error) {
        // エラーハンドリング。API呼び出しでエラーが発生した場合の処理
        console.error('Error:', error);
        document.getElementById('outputArea').innerHTML = 'データの取得に失敗しました。';
    }
}; 


// データをフォーマットしてHTMLに表示する関数
const displayData = (data) => {
    let html = '<table>';
    data.forEach(row => {
        html += '<tr>';
        row.forEach(cell => {
            html += `<td>${cell}</td>`;
        });
        html += '</tr>';
    });
    html += '</table>';
    document.getElementById('outputArea').innerHTML = html;
};


