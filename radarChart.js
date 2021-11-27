
var ctx = document.getElementById("myRaderChart1");
var myRadarChart = new Chart(ctx, {
    type: 'radar', 
    data: { 
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
        title: {
            display: true,
            text: 'Front end'
        },
        scale:{
            ticks:{
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
        labels: ["Flutter", "Firebase", "Dart", "Figma", ""],
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
        title: {
            display: true,
            text: 'Android'
        },
        scale:{
            ticks:{
                suggestedMin: 0,
                suggestedMax: 5,
                backgroundColor:'#fff',
                stepSize: 1,
                callback: function(value, index, values){
                    return  value +  '点'
                }
            }
        }
    }
});

var ctx = document.getElementById("myRaderChart3");
var myRadarChart = new Chart(ctx, {
    type: 'radar', 
    data: { 
        labels: ["Java", "Spring Boot", "", "", ""],
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
        title: {
            display: true,
            text: 'Back end'
        },
        scale:{
            ticks:{
                suggestedMin: 0,
                suggestedMax: 5,
                stepSize: 1,
                callback: function(value, index, values){
                    return  value +  '点'
                }
            }
        }
    }
});



//スクロールしたときに表示する機能
// 1. ページがスクロールされた時にイベントを設定する
$(window).scroll(function () {
    
    // 2. ウィンドウの位置を取得する
    var scrollTop = $(this).scrollTop(); // ウィンドウ枠内の上の位置を取得する
    var scrollBottom = scrollTop + $(this).height(); // ウィンドウ枠内の下の位置を取得する

    // 3. 指定した要素にそれぞれ処理を追加する
    $(".radarChart .myRaderChart1").each(function (i) {

        // 4. ウィンドウの位置と表示したい要素の位置を比較する
        if (scrollBottom > $(this).offset().top) {
            
            // 5. 0.3秒毎ごとに1つずつfadeinクラスを付与する
            var target = this;
            setTimeout(function () {
                $(target).addClass("fadein");
            }, 300 * i);

        }

    });
});