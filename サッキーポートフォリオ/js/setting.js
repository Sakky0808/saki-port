particlesJS('particle',{
    "particles":{

//--シェイプの設定----------
"number":{
	"value":40, //シェイプの数
	"density":{
	"enable":true,
	"value_area":200 //シェイプの密集度
	}
},
"shape":{
	"type":"circle", 
	"stroke":{
	"width":0, //シェイプの外線の太さ
	"color":"#305ef5" //シェイプの外線の色
	},
},
"color":{
	"value":"#47b0dc"
},
"opacity":{
	"value":1,
	"random":true,
	"anim":{
	"enable":true, //透明度をアニメーション
	"speed":0.002,
	"opacity_min":0.1, //透明度の最小値
	"sync":false //全てのシェイプを同時にアニメーションさせるか否か
	}
},
"size":{
	"value":3, //シェイプの大きさ
	"random":true, //シェイプの大きさをランダムにするか否か
	"anim":{
	"enable":true, //シェイプの大きさをアニメーションさせるか否か
	"speed":0.5, //アニメーションのスピード
	"size_min":0.1,
	"sync":false 
	}
},

  //--線の設定----------
        "line_linked":{
          "enable":true, //線を表示するか否か
          "distance":150, //線をつなぐシェイプの間隔
          "color":"#ffffff", //線の色
          "opacity":0.4, //線の透明度
          "width":1 //線の太さ
        },
  //--------------------

  //--動きの設定----------
	"move":{
		"speed":1.3, //シェイプの動くスピード
		"straight":false,
		"direction":"none", 
		"out_mode":"out"
	}
  //--------------------

	},

	"interactivity":{
	"detect_on":"canvas",
	"events":{

//--マウスオーバー時の処理----------
		"onhover":{
		"enable":true, //マウスオーバーが有効か否か
		"mode":"repulse" //マウスオーバー時に発動する動き(下記modes内のgrab、repulse、bubbleより選択)
		},
//--------------------

	},

	"modes":{

//--シェイプが膨らむ----------
		"bubble":{
		"distance":400, //カーソルからの反応距離
		"size":40, //シェイプの膨らむ大きさ
		"opacity":8, //膨らむシェイプの透明度
		"duration":2, //膨らむシェイプの持続時間(onclick時のみ)
		"speed":3 //膨らむシェイプの速度(onclick時のみ)
		},
//--------------------

//--シェイプが増える----------
		"push":{
		"particles_nb":4
		},
//--------------------

//--シェイプが減る----------
		"remove":{
		"particles_nb":2 
		}
//--------------------

	}
	},
	"retina_detect":true, //Retina Displayを対応するか否か
	"resize":true //canvasのサイズ変更にわせて拡大縮小するか否か
}
);