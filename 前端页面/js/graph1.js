// 获取一个具有指定 ID 的 DOM 元素
var dom = document.getElementById('graph1');

// 设置 DOM 元素的高度属性
dom.style.height = '200px';

// 初始化 ECharts 实例，并将其绑定到上面获取的 DOM 元素上
var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false
});

// 创建一个空对象 app（这个对象可能在其他地方使用）
var app = {};

// 设置图表的配置项
var option = {
  xAxis: {
    type: 'category',
    data: ['1', '2', '3', '4', '5', '6', '7'],
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
    type: 'value',
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
  legend: {
    data: ['1s', '2s', '3s', '4s', '5s', '6s', '7s', '8s', '9s', '10s'], // 图例数据
    textStyle: {
      color: 'white' // 将图例文字颜色设置为白色
    }
  },
  series: [
    {
      name: '1s', // 图例显示的名称
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: true
    },
    {
      name: '2s',
      data: [920, 1022, 1101, 1434, 1390, 1230, 1120],
      type: 'line',
      smooth: true
    },
    {
      name: '3s',
      data: [720, 832, 701, 734, 1090, 1430, 1220],
      type: 'line',
      smooth: true
    },
    {
      name: '4s',
      data: [920, 882, 981, 834, 1090, 1430, 1520],
      type: 'line',
      smooth: true
    },
    {
      name: '5s',
      data: [1020, 932, 801, 934, 1390, 1430, 1320],
      type: 'line',
      smooth: true
    },
    {
      name: '6s',
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: true
    },
    {
      name: '7s',
      data: [920, 1022, 1101, 1434, 1390, 1230, 1120],
      type: 'line',
      smooth: true
    },
    {
      name: '8s',
      data: [720, 832, 701, 734, 1090, 1430, 1220],
      type: 'line',
      smooth: true
    },
    {
      name: '9s',
      data: [920, 882, 981, 834, 1090, 1430, 1520],
      type: 'line',
      smooth: true
    },
    {
      name: '10s',
      data: [1020, 932, 801, 934, 1390, 1430, 1320],
      type: 'line',
      smooth: true
    }
  ]
};

// 如果 option 存在且类型为对象，则将配置项应用到图表上
if (option && typeof option === 'object') {
  myChart.setOption(option);
}

// 监听窗口的 resize 事件，并在事件触发时调用 myChart.resize() 方法重新调整图表尺寸
window.addEventListener('resize', myChart.resize);
