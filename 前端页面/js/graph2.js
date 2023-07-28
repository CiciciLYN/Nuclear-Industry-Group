 // 生成二维网格数据
 function generateData() {
  let data = [];
  let rowData = [
    [0, 0, 0, 0, 0, 51, 52, 50, 51, 52, 0, 0, 0, 0, 0],
    [0, 0, 0, 46, 47, 48, 49, 45, 46, 47, 48, 49, 0, 0, 0],
    [0, 0, 40, 41, 42, 43, 44, 39, 40, 41, 42, 43, 44, 0, 0],
    [0, 26, 27, 28, 29, 30, 31, 25, 26, 27, 28, 29, 30, 31, 0],
    [0, 33, 34, 35, 36, 37, 38, 32, 33, 34, 35, 36, 37, 38, 0],
    [10, 11, 12, 13, 14, 15, 16, 9, 10, 11, 12, 13, 14, 15, 16],
    [18, 19, 20, 21, 22, 23, 24, 7, 18, 19, 20, 21, 22, 23, 24],
    [2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8],
    [10, 11, 12, 13, 14, 15, 16, 9, 10, 11, 12, 13, 14, 15, 16],
    [18, 19, 20, 21, 22, 23, 24, 7, 18, 19, 20, 21, 22, 23, 24],
    [0, 26, 27, 28, 29, 30, 31, 25, 26, 27, 28, 29, 30, 31, 0],
    [0, 33, 34, 35, 36, 37, 38, 32, 33, 34, 35, 36, 37, 38, 0],
    [0, 0, 40, 41, 42, 43, 44, 39, 40, 41, 42, 43, 44, 0, 0],
    [0, 0, 0, 46, 47, 48, 49, 45, 46, 47, 48, 49, 0, 0, 0],
    [0, 0, 0, 0, 0, 51, 52, 50, 51, 52, 0, 0, 0, 0, 0]
  ];

  for (let i = 0; i < rowData.length; i++) {
    for (let j = 0; j < rowData[i].length; j++) {
      data.push([j, i, rowData[i][j]]);
    }
  }

  return data;
}

var dom = document.getElementById('graph2');
dom.style.height = '500px';

var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false
});

var app = {};

var option = {
  xAxis: {
    type: 'category',
    data: Array.from({ length: 15 }, (_, i) => i + 1),
    axisLabel: {
      textStyle: {
        color: 'white' // 将 x 轴标签文字颜色设置为白色
      }
    },
    axisLine: {
      lineStyle: {
        color: 'white' // 将 x 轴线的颜色设置为白色
      }
    }
  },
  yAxis: {
    type: 'category',
    data: Array.from({ length: 15 }, (_, i) => i + 1),
    axisLabel: {
      textStyle: {
        color: 'white' // 将 y 轴标签文字颜色设置为白色
      }
    },
    axisLine: {
      lineStyle: {
        color: 'white' // 将 y 轴线的颜色设置为白色
      }
    }
  },
  textStyle: {
    color: 'white' // 将其他所有文字元素的颜色设置为白色
  },
  visualMap: {
    min: 0,
    max: 52,
    calculable: true,
    realtime: false,
    inRange: {
        color: [
          '#ffffff', '#0000ff', '#00ffff', '#00ff00', '#ffff00', '#ff0000'
        ]
      }
  },
  series: [
    {
      name: 'Heatmap',
      data: generateData(),
      type: 'heatmap',
      label: {
        show: true,
        position: 'inside',
        formatter: function (params) {
          return params.value[2];
        },
        fontSize: 10,
        color: 'black'
      }
    }
  ]
};

if (option && typeof option === 'object') {
  myChart.setOption(option);
}

// 监听窗口的 resize 事件，并在事件触发时调用 myChart.resize() 方法重新调整图表尺寸
window.addEventListener('resize', function() {
  myChart.resize();
});