// 获取一个具有指定 ID 的 DOM 元素
var dom = document.getElementById('graph1');

// 设置 DOM 元素的高度属性
dom.style.height = '250px';

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
        color: 'white' // 将文字颜色设置为白色
      }
    }
  },
  yAxis: {
    type: 'value'
  },
  axisLabel: {
    textStyle: {
      color: 'white' // 将文字颜色设置为白色
    }
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
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
