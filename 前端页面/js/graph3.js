d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/api_docs/mt_bruno_elevation.csv', function(err, rows){
function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}

var z_data=[ ]
for(i=0;i<24;i++)
{
  z_data.push(unpack(rows,i));
}

var data = [{
           z: z_data,
           type: 'surface'
        }];

var layout = {
//   title: 'Mt Bruno Elevation',
  autosize: false,
  width: 320,
  height: 300,
//   margin: {
//     l: 65,
//     r: 50,
//     b: 65,
//     t: 90,
//   }
margin: {
    l: 10,
    r: 10,
    b: 10,
    t: 10,
  }
};
Plotly.newPlot('graph3', data, layout);
});
