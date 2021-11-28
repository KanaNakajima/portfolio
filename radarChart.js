Chart.defaults.global.defaultFontSize = 15;
var ctx = document.getElementById("myRaderChart1");
var myRadarChart = new Chart(ctx, {
    type: 'radar', 
    data: { 
        scaleLabel:{fontSize: 30},
        labels: ["HTML", "CSS", "Javascript", "jQuery", "Vue.js"],
        datasets: [{
            label: 'Skill',
            data: [3,3,3,2,1],
            backgroundColor: 'RGBA(225,95,150, 0.5)',
            borderColor: '#8B0000',
            borderWidth: 1,
            pointBackgroundColor: '#8B0000'
        }]
    },
    options: {
        maintainAspectRatio: false,
        legend:{
            labels:{
            fontSize: 10
            }
        },
        title: {
            display: true,
            text: 'Front-end',
            fontSize: 30,
            fontColor: '#000'
        },
        scale:{
            pointLabels: {       // 軸のラベル（"国語"など）
                fontSize: 16,         // 文字の大きさ
                fontColor: "black"    // 文字の色
            },
            ticks:{
                showLabelBackdrop:false,
                suggestedMin: 0,
                suggestedMax: 5,
                stepSize: 1,
                callback: function(value, index, values){
                    return  value 
                }
            }
        }
    }
});
var ctx = document.getElementById("myRaderChart2");
var myRadarChart = new Chart(ctx, {
    type: 'radar', 
    data: { 
        scaleLabel:{fontSize: 30},
        labels: ["Flutter", "Firebase", "Dart", "Figma", "GitHub"],
        datasets: [{
            label: 'Skill',
            data: [1,1,1,1,1],
            backgroundColor: 'skyblue',
            borderColor: 'blue',
            borderWidth: 1,
            pointBackgroundColor: 'blue'
            
        }]
    },
    
    options: {
        maintainAspectRatio: false,
        legend:{
            labels:{
            // fontSize: 20
            }
        },
        title: {
            display: true,
            text: 'Android',
            fontSize: 30,
            fontColor: '#000'
        },
        scale:{
            pointLabels: {       // 軸のラベル（"国語"など）
                fontSize: 16,         // 文字の大きさ
                fontColor: "black"    // 文字の色
            },
            ticks:{
                showLabelBackdrop:false,
                suggestedMin: 0,
                suggestedMax: 5,
                backgroundColor:'#fff',
                stepSize: 1,
                callback: function(value, index, values){
                    return  value
                }
            }
        }
    }
});

var ctx = document.getElementById("myRaderChart3");
var myRadarChart = new Chart(ctx, {
    type: 'radar', 
    data: { 
        labels: ["Java", "Spring Boot", "SQL", "Linux", "Thymeleaf"],
        datasets: [{
            label: 'Skill',
            data: [1,1,1,1,1],
            backgroundColor: '#90EE90',
            borderColor: 'green',
            borderWidth: 1,
            pointBackgroundColor: 'green'
        }]
    },
    options: {
        maintainAspectRatio: false,
        legend:{
            labels:{
            fontSize: 20
            }
        },
        title: {
            display: true,
            text: 'Back-end',
            fontSize: 30,
            fontColor: '#000'
        },
        scale:{
            pointLabels: {       // 軸のラベル（"国語"など）
                fontSize: 16,         // 文字の大きさ
                fontColor: "black"    // 文字の色
            },
            ticks:{
                showLabelBackdrop:false,
                suggestedMin: 0,
                suggestedMax: 5,
                stepSize: 1,
                callback: function(value, index, values){
                    return  value 
                }
            }
        }
    }
});


document.addEventListener('DOMContentLoaded', function(){
  
    // オーバレイを開閉する関数
    const overlay = document.getElementById('overlay');
    function overlayToggle() {
      overlay.classList.toggle('overlay-on');
    }
    // 指定した要素に対して上記関数を実行するクリックイベントを設定
    const clickArea = document.getElementsByClassName('overlay-event');
    for(let i = 0; i < clickArea.length; i++) {
      clickArea[i].addEventListener('click', overlayToggle, false);
    }
    
    // イベントに対してバブリングを停止
    function stopEvent(event) {
      event.stopPropagation();
    }
    const overlayInner = document.getElementById('overlay-inner');
    overlayInner.addEventListener('click', stopEvent, false);
    
  }, false);



  //スリック

  //上部画像の設定
$('.gallery').slick({
	infinite: true, //スライドをループさせるかどうか。初期値はtrue。
	fade: true, //フェードの有効化
	arrows: true,//左右の矢印あり
	prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
	nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
});

//選択画像の設定
$('.choice-btn').slick({
	infinite: true, //スライドをループさせるかどうか。初期値はtrue。
	slidesToShow: 8, //表示させるスライドの数
	focusOnSelect: true, //フォーカスの有効化
	asNavFor: '.gallery', //連動させるスライドショーのクラス名
});
  
//下の選択画像をスライドさせずに連動して変更させる設定。
$('.gallery').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
	var index = nextSlide; //次のスライド番号
	//サムネイルのslick-currentを削除し次のスライド要素にslick-currentを追加
	$(".choice-btn .slick-slide").removeClass("slick-current").eq(index).addClass("slick-current");
});