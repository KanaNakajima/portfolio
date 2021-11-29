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
            fontSize: 20
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
            fontSize: 20
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

     // オーバレイを開閉する関数
     const overlay2 = document.getElementById('overlay2');
     function overlayToggle2() {
       overlay2.classList.toggle('overlay-on2');
     }
    
    // 指定した要素に対して上記関数を実行するクリックイベントを設定
    const clickArea1 = document.getElementsByClassName('overlay-event-work1');
    for(let i = 0; i < clickArea1.length; i++) {
      clickArea1[i].addEventListener('click', overlayToggle, false);
    }
    // 指定した要素に対して上記関数を実行するクリックイベントを設定
    const clickArea2 = document.getElementsByClassName('overlay-event-work2');
    for(let i = 0; i < clickArea2.length; i++) {
      clickArea2[i].addEventListener('click', overlayToggle2, false);
    }
    
    // イベントに対してバブリングを停止
    function stopEvent(event) {
      event.stopPropagation();
    }
    const overlayInner = document.getElementById('overlay-inner');
    overlayInner.addEventListener('click', stopEvent, false);
    
  }, false);



  //スリック
  $(function() {
    $('.thumb-item').slick({
         infinite: true,
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: false,
         fade: true,
         asNavFor: '.thumb-item-nav' //サムネイルのクラス名
    });
    $('.thumb-item-nav').slick({
         infinite: true,
         slidesToShow: 4,
         slidesToScroll: 1,
         asNavFor: '.thumb-item', //スライダー本体のクラス名
         focusOnSelect: true,
    });
});