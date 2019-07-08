//マウスが押されているかどうかを調べる変数を宣言
var mouseDown = false;

//ペンの設定
var penX = 0;
var penY = 0;
var penColor = "rgba(0,0,0,1)";
var penWidth = 10;

//ペンか消しゴムか
var pen = document.getElementById("pencil");
var era = document.getElementById("eraser");

//スタックしておく最大回数
var STACK_MAX_SIZE = 10;

//描画の回数をカウント
var drawCount = 0;

//スタックデータ保存用の配列
var undoDataStack = [];
var redoDataStack = [];

//背景を透明ではなく白に設定
function white(){
    //キャンバスの取得
    var canvas = document.getElementById("main");
    //コンテキストの取得
    var context = canvas.getContext("2d");
    
    //塗りつぶし色の設定
    context.fillStyle = "white";
    
    //パスの開始
    context.beginPath();
    //中心(450, 350)、半径80の円の作成
    context.fillRect(0, 0, 640, 420);
}

//クリックされたボタンによってペンか消しゴムかの選択
function tool(btnNum) {

    //キャンバスの取得
    var canvas = document.getElementById("main");
    //コンテキストの取得
    var context = canvas.getContext("2d");


    //ペンだったら
    if (btnNum == 1) {
        context.globalCompositeOperation = "source-over";
    }
    //消しゴムだったら
    else if (btnNum == 2) {
        context.globalCompositeOperation = "destination-out";
    }
}

//描画の開始
function startDraw(event) {
    //マウスボタンが押された
    mouseDown = true;

    //ペンの座標をセット
    //eventオブジェクトに格納されている座標を取得
    penX = event.clientX;
    penY = event.clientY;
}

//描画
function draw(event) {
    //マウスボタンが押されている（mouseDown == true）とき描画
    if (mouseDown) {

        //キャンバスの取得
        var canvas = document.getElementById("main");
        //コンテキストの取得
        var context = canvas.getContext("2d");

        //ペンのセット
        context.strokeStyle = penColor;
        context.lineWidth = penWidth;
        context.lineCap = "round";
        //マウスカーソルの取得
        //引数eventから取得！
        var x = event.clientX;
        var y = event.clientY;

        //パスの開始
        context.beginPath();
        //座標の移動
        context.moveTo(penX, penY);
        //線の描画
        context.lineTo(x, y);
        //パスの描画
        context.stroke();
        
        if(x >= 640 || y >= 420) {
            mouseDown = false;
        }

        //ペン座標の切り替え
        penX = x;
        penY = y;
    }

}

//描画の終了
function endDraw(event) {
    //マウスボタンが離された
    mouseDown = false;
    drawCount++;
}

//ペンの色を変更
function changeColor() {

    //スライダーの値を取得
    var penR = document.getElementById("penR").value;
    var penG = document.getElementById("penG").value;
    var penB = document.getElementById("penB").value;
    var penA = document.getElementById("penA").value;

    //ペンの色をセット
    penColor = "rgba(" + penR + "," + penG + "," + penB + "," + penA + ")";

    //ペンの色用のキャンバスの取得
    var canvasColor = document.getElementById("canvasColor");
    //コンテキストの取得
    var contextColor = canvasColor.getContext("2d");

    //ペンの色を塗りつぶしの四角形で表示
    contextColor.clearRect(0, 0, 20, 20);
    contextColor.fillStyle = penColor;
    contextColor.fillRect(0, 0, 20, 20);

    //ペンの色をテキストで表示
    var textColor = document.getElementById("textColor");
    textColor.innerHTML = "R: " + penR + ", G: " + penG + ", B: " + penB + ", A: " + penA;

}

//基本色をペンの色にセット
function setColor(r, g, b) {
    document.getElementById("penR").value = r;
    document.getElementById("penG").value = g;
    document.getElementById("penB").value = b;

    changeColor();

}

//ペンの太さを変更
function changeWidth() {
    //スライダーの値を取得
    penWidth = document.getElementById("penW").value;

    //ペンの太さ用キャンバスの取得
    var canvasWidth = document.getElementById("canvasWidth");
    //コンテキストの取得
    var contextWidth = canvasWidth.getContext("2d");

    //ペンの太さを塗りつぶしの円で表示
    contextWidth.clearRect(0, 0, 20, 20);
    contextWidth.beginPath();
    contextWidth.arc(10, 10, penWidth / 2, 0, 2 * Math.PI, false);
    contextWidth.fill();
}

//キャンバスをクリア
function clearCanvas() {

    //キャンバスの取得
    var canvas = document.getElementById("main");
    //コンテキストの取得
    var context = canvas.getContext("2d");

    //キャンバスをクリア(消す)
    context.clearRect(0, 0, canvas.width, canvas.height);
}

//らくがきを別ウィンドウで表示
function showImage() {

    //キャンバスの取得
    var canvas = document.getElementById("main");

    //新しいウィンドウを作成open(URL, ウィンドウ名)メソッド
    var imageWin = window.open("", "");

    //新しいウィンドウにHTMLを書き込む
    imageWin.document.open();
    imageWin.document.write('<html>');
    imageWin.document.write('<head><title>らくがき</title></head>');
    imageWin.document.write('<body>');

    //キャンバスのデータをURLデータとして生成
    imageWin.document.write('<img src="' + canvas.toDataURL() + '">');
    imageWin.document.write('<a href="' + canvas.toDataURL() + '" id="ss" download="drawss.png">スクリーンショットをダウンロード</a>')
    imageWin.document.write('</body></html>');
    imageWin.document.close();

}

//ペンが選択された時に画像変更
function penCheck() {
    document.getElementById("pencil").src = "../img/1_pen_checked.png";
    document.getElementById("eraser").src = "../img/2_era.png";
}
//消しゴムが選択されたときに画像変更
function eraCheck() {
    document.getElementById("pencil").src = "../img/1_pen.png";
    document.getElementById("eraser").src = "../img/2_era_checked.png";
}

//canvasへの描画処理を行う前に行う処理
function beforeDraw(){
    //キャンバスの取得
    var canvas = document.getElementById("main");
    //コンテキストの取得
    var context = canvas.getContext("2d");
    
    //やり直し用スタックの中身を削除
    redoDataStack = [];
    //元に戻す用の配列が最大保持数より大きくなっているかどうか
    if(undoDataStack.length >= STACK_MAX_SIZE){
        //条件に該当する場合、末尾の要素を削除
        undoDataStack.pop();
    }
    //元に戻す配列の先頭にcontextのImageDataを保持する
    undoDataStack.unshift(context.getImageData(0, 0, canvas.width, canvas.height));
}

function undo(){
    //キャンバスの取得
    var canvas = document.getElementById("main");
    //コンテキストの取得
    var context = canvas.getContext("2d");
    
    //戻す配列にスタックしているデータがなければ処理を終了する
    if(undoDataStack.length <= 0) return;
    //やり直し用の配列に元に戻す操作をする前のCanvasの状態をスタックしておく
    redoDataStack.unshift(context.getImageData(0, 0, canvas.width, canvas.height));
    // 元に戻す配列の先頭からイメージデータを取得して
    var imageData = undoDataStack.shift();
    // 描画する
    context.putImageData(imageData, 0, 0);
}

function redo(){
    //キャンバスの取得
    var canvas = document.getElementById("main");
    //コンテキストの取得
    var context = canvas.getContext("2d");
    
    //やり直し配列にスタックしているデータがなければ処理を終了する
    if(redoDataStack.length <= 0) return;
    
    // 元に戻す用の配列にやり直し操作をする前のCanvasの状態をスタックしておく
    undoDataStack.unshift(context.getImageData(0, 0, canvas.width, canvas.height));
    // やり直す配列の先頭からイメージデータを取得して
    var imageData = redoDataStack.shift();
    // 描画する
    context.putImageData(imageData, 0, 0);
}


//スクリーンショットを撮る
function screenShot(){

      //ボタンを押下した際にダウンロードする画像を作る
      html2canvas(document.getElementById("main"),{
        onrendered: function(canvas){
          //aタグのhrefにキャプチャ画像のURLを設定
          var imgData = canvas.toDataURL();
          document.getElementById("ss").href = imgData;
        }
      });

    }