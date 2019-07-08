//四角形を描画
function drawRect(){

    //キャンバスの取得
    var canvas = document.getElementById("main");
    //コンテキストの取得（この2つはキャンバスを使用するうえで必ず記述）
    var context = canvas.getContext("2d");
    
    //線の色の確定
    context.strokeStyle = "red";
    //四角形の描画
    context.strokeRect(50, 50, 100, 180);
    
    //塗りつぶし色の設定
    context.fillStyle = "blue";
    //
    //四角形（塗りつぶし）の描画
    context.fillRect(200, 50, 100, 180);
}

//線を描画
function drawLine(){
    //キャンバスの取得
    var canvas = document.getElementById("main");
    //コンテキストの取得
    var context = canvas.getContext("2d");
    
    //線の色の設定
    context.strokeStyle = "red";
    
    //パスの指定
    context.beginPath();
    //始点の移動
    context.moveTo(350, 50);
    //線の作成
    context.lineTo(600, 150);
    //線の作成
    context.lineTo(400, 200);
    //パスを閉じる
    context.closePath();
    //パスの描画
    context.stroke();
}

//円を描画
function drawCircle(){
    //キャンバスの取得
    var canvas = document.getElementById("main");
    //コンテキストの取得
    var context = canvas.getContext("2d");
    
    //線の色の設定
    context.strokeStyle = "red";
    
    //パスの開始
    context.beginPath();
    
    //始点の移動
    context.moveTo(200, 350);
    //中心(200, 350)、半径80、中心角90度の扇の作成
    context.arc(200, 350, 80, 2*Math.PI*(45/360), 2*Math.PI*(135/360), false);
    
    //パスを閉じる
    context.closePath();
    //パスの描画
    context.stroke();
    
    
    //塗りつぶし色の設定
    context.fillStyle = "blue";
    
    //パスの開始
    context.beginPath();
    //中心(450, 350)、半径80の円の作成
    context.arc(450, 350, 80, 0, 2*Math.PI, false);
    //パスの塗りつぶし
    context.fill();
}