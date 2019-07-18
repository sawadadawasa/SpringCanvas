<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>らくがき帳（TEST！）</title>
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/css/draw.css">
</head>

<body onLoad="changeColor(); changeWidth(); white();">
 
	<canvas id="main" width="640" height="420"
		onMouseDown="startDraw(event); beforeDraw();" onMouseMove="draw(event)"
		onMouseUp="endDraw(event)">
    </canvas>
        
	<div class="pallet">
		<canvas id="canvasColor" width="20" height="20"></canvas>
		ペンの色：[<span id="textColor">R:0, G:0, B:0, A:1.0</span>]<br> R:<input
			type="range" id="penR" value="0" min="0" max="255"
			onChange="changeColor()"> G:<input type="range" id="penG"
			value="0" min="0" max="255" onChange="changeColor()"> B:<input
			type="range" id="penB" value="0" min="0" max="255"
			onChange="changeColor()"> A:<input type="range" id="penA"
			value="1" min="0" max="1" step="0.1" onChange="changeColor()">
		<hr>
		基本色：
		<button type="button" class="red" onClick="setColor(255, 0, 0)">紅</button>
		<button type="button" class="yellow" onClick="setColor(255, 255, 0)">黄</button>
		<button type="button" class="green" onClick="setColor(0, 255, 0)">緑</button>
		<button type="button" class="cyan" onClick="setColor(0, 255, 255)">水</button>
		<button type="button" class="blue" onClick="setColor(0, 0, 255)">青</button>
		<button type="button" class="magenta" onClick="setColor(255, 0, 255)">紫</button>
		<button type="button" class="white" onClick="setColor(255, 255, 255)">白</button>
		<button type="button" class="black" onClick="setColor(0, 0, 0)">黒</button>
	</div>

	<div class="pallet">
		<canvas id="canvasWidth" width="20" height="20"></canvas>
		ペンの太さ： <input type="range" id="penW" value="10" min="1" max="20"
			onInput="changeWidth()">
		<input type="image" id="pencil" src="../img/1_pen_checked.png" width="35px"
			class="active" onClick="tool(1); penCheck();"> <input type="image"
			id="eraser" src="../img/2_era.png" width="35px" onClick="tool(2); eraCheck()">
	</div>

	<div id="buttons">
		<input type="button" value="らくがきを消す" onclick="clearCanvas()">
		<input type="button" value="スクリーンショット" onClick="showImage()">
        <input type="button" value="１つ戻る" onClick="undo()">
        <input type="button" value="１つ進む" onClick="redo()">
        <br>

	</div>
    <img src="" id="result" />

	<script type="text/javascript"
		src="${pageContext.request.contextPath}/js/draw.js"></script>
    <script type="text/javascript" src="https://code.jquery.com/jquery-latest.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.js"></script>


</body>
</html>
