import data_fin_date from "./date_fin_index_date2.json";


import React from "react";
import GridContainer from "../../../../@jumbo/components/GridContainer";
import PageContainer from "../../../../@jumbo/components/PageComponents/layouts/PageContainer";
import Box from "@material-ui/core/Box";
import IntlMessages from "../../../../@jumbo/utils/IntlMessages";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";


import * as AnnotationsModule from "highcharts/modules/annotations";

AnnotationsModule(Highcharts);


const breadcrumbs = [
  { label: "Home", link: "/" },
  { label: "Financial stability", link: "/" },
  { label: "Stress index", isActive: true }
];


const sdata = data_fin_date;


const label_annot1 = [
  {
    point: {
      xAxis: 0,
      yAxis: 0,
      x: 1221782400000,
      y: 0.0199758459818759
    },
    text: "Банкрутство Lehman Brothers"
  },
  {
    point: {
      xAxis: 0,
      yAxis: 0,
      x: 1236643200000,
      y: 0.898222944044433
    },
    text: "Прийняття антикризових законів за вимогою МВФ"
  },
  {
    point: {
      xAxis: 0,
      yAxis: 0,
      x: 1390176000000,
      y: 0.0159437235753208
    },
    text: "Заворушення на Грушевського"
  },
  {
    point: {
      xAxis: 0,
      yAxis: 0,
      x: 1392854400000,
      y: 0.250527144935715
    },
    x: -10,
    text: "<span style=\"color:red\">Початок тимчасової окупації <br>Криму і Севастополя росією</span>"
  },
  {
    point: {
      xAxis: 0,
      yAxis: 0,
      x: 1395619200000,
      y: 0.451656480610005
    },
    text: "Погодження вимог МВФ "
  },
  {
    point: {
      xAxis: 0,
      yAxis: 0,
      x: 1397433600000,
      y: 0.371653763277575
    },
    text: "<span style=\"color:red\">Вторгнення росії на сході України</span>"
  },
  {
    point: {
      xAxis: 0,
      yAxis: 0,
      x: 1406764800000,
      y: 0.186752138048395
    },
    y: -10,
    text: "<span style=\"color:red\">Загострення військового конфлікту з росією на сході країни</span>"
  },
  {
    point: {
      xAxis: 0,
      yAxis: 0,
      x: 1425254400000,
      y: 0.828007474107233
    },
    text: "Віднесення Дельта банку  до категорії неплатоспроможних"
  },
  {
    point: {
      xAxis: 0,
      yAxis: 0,
      x: 1426204800000,
      y: 0.785024720201774
    },
    text: "Початок переговорів про реструктуризацію зовнішнього боргу"
  },
  {
    point: {
      xAxis: 0,
      yAxis: 0,
      x: 1543190400000,
      y: 0.00526471803399592
    },
    text: "<span style=\"color:red\">Збройна агресія Росії <br>у Керченській протоці<br>"
  },
  {
    point: {
      xAxis: 0,
      yAxis: 0,
      x: 1584057600000,
      y: 0.0460149651285076
    },
    text: "Початок карантину через COVID-19"
  },
  {
    point: {
      xAxis: 0,
      yAxis: 0,
      x: 1645660800000,
      y: 0.210346508424689
    },
    text: "<span style=\"color:red\">Повномаштабне вторгнення росії<br>"
  }
];


const label_annot2 = [];


//const label_annot2 = []

const label_annot3 = [];

const options2 = {

  chart: {
    height: 700,
    type: "area"//,
    // dateFormat: ('%Y-%m-%d')
  },

  accessibility: {
    description: ".",
    landmarkVerbosity: "one"
  },
  xAxis: {
    type: "datetime",
    dateTimeLabelFormats: {
      day: "%e %b %Y"
    },
    labels: {
      format: "{value:%Y-%m-%d}",
      align: "centre"
    }
  },

  yAxis: {
    title: {
      text: null
    },
    labels: {
      align: "left",
      x: 24
    },
    steps: 0.2
  },

  legend: {
    enabled: false
  },

  series: [{
    data: sdata,
    type: "line",
    color: "#057D46",
    fillOpacity: 0.5,
    name: "",
    marker: {
      enabled: false
    },
    threshold: null
  }],

  annotations: [
    {
      draggable: "",
      labels: label_annot1
    },
    {
      draggable: "",

      labelOptions: {
        shape: "connector",
        align: "right",
        justify: false,
        crop: true,
        style: {
          fontSize: "0.8em",
          textOutline: "1px white"
        }
      },

      labels: label_annot2
    }

  ],
  rangeSelector: {
    inputDateFormat: "%d/%m/%Y",
    inputEditDateFormat: "%d/%m/%Y",
    inputEnabled: false
    //selected: 1
  }

};


const SamplePage = () => {
  return (
    <PageContainer heading={<IntlMessages id="sidebar.indexFinStab" />} breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item xs={12}>
          <Box>
            <IntlMessages id="sidebar.indexFinStab" />
          </Box>
          <Divider />
          <div style={{ marginTop: 24 }}>
            <h3>Financial</h3>

            <HighchartsReact highcharts={Highcharts} constructorType={"stockChart"} options={options2} />

          </div>
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default SamplePage;