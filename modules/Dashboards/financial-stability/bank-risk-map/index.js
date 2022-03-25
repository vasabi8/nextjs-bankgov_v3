import data_fin_date from "./date_fin_index_date2.json";
import data_fin_date_p1 from "./date_fin_index_p1.json";
import data_fin_date_p2 from "./date_fin_index_p2.json";
import data_fin_date_p3 from "./date_fin_index_p3.json";
import data_fin_date_p4 from "./date_fin_index_p4.json";
import data_fin_date_p5 from "./date_fin_index_p5.json";
import data_fin_date_p6 from "./date_fin_index_p6.json";

import React from "react";
import GridContainer from "../../../../@jumbo/components/GridContainer";
import PageContainer from "../../../../@jumbo/components/PageComponents/layouts/PageContainer";
import Box from "@material-ui/core/Box";
import IntlMessages from "../../../../@jumbo/utils/IntlMessages";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { disable } from "@amcharts/amcharts4/.internal/core/utils/Debug";


const breadcrumbs = [
  { label: "Home", link: "/" },
  { label: "Financial stability", link: "/" },
  { label: "Bank risk map", isActive: true }
];


const sdata = data_fin_date_p1;

const options2 = {

  ignoreHiddenSeries: false,
  chart: {

    height: 700
    // dateFormat: ('%Y-%m-%d')
  },

  title: {
    text: ""
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
    // maxWeight: 400,

    width: "90%",
    margin: 250,
    itemStyle: {
      color: "#333333",
      cursor: "pointer",
      fontSize: "10px",
      fontWeight: "normal"
    },
    //  itemDistance: 1,
    enabled: true,
    floating: true,
    align: "left",
    verticalAlign: "top",
    x: 250,
    y: -37
  },

  plotOptions: {
    series: {
      showInLegend: true
    },
    area: {
      stacking: "normal"
    }
  },

  series: [
    {
      name: "Субіндекс валютного ринку",
      type: "area",
      data: data_fin_date_p2,
      color: "#005591"
    },
    {
      name: "Субіндекс корпоративних цінних паперів",
      type: "area",
      data: data_fin_date_p3,
      color: "#DC4B64"
    },
    {
      name: "Субіндекс державних цінних паперів",
      type: "area",
      data: data_fin_date_p4,
      color: "#7D0532"
    },
    {
      name: "Субіндекс поведінки домогосподарств",
      type: "area",
      data: data_fin_date_p5,
      color: "#91C864"
    },
    {
      name: "Субіндекс банківського сектору ",
      type: "area",
      data: data_fin_date_p6,
      color: "#057D46"
    },

    {
      name: "Ефект кореляції*",
      type: "area",
      data: data_fin_date_p1,
      color: "#46AFE6"
    },
    {
      name: "Індекс фінансового стресу (ІФС)",
      type: "line",
      data: data_fin_date,
      color: "#057D46"
    }
  ],

  rangeSelector: {
    // inputDateFormat: '%d/%m/%Y',
    // inputEditDateFormat: '%d/%m/%Y',
    inputEnabled: false,
    buttons: [{
      type: "month",
      count: 1,
      text: "1m",
      events: {
        click: function() {
          alert("Clicked button");
        }
      }
    }, {
      type: "month",
      count: 3,
      text: "3m"
    }, {
      type: "month",
      count: 6,
      text: "6m"
    }, {
      type: "ytd",
      text: "YTD"
    }, {
      type: "year",
      count: 1,
      text: "1y"
    }, {
      type: "all",
      text: "All"
    }]


    //selected: 1
  },
  tooltip: {
    headerFormat: "<table>",

    pointFormat: "<tr><td style=\"color: {series.color}\"><b>{series.name}: </b></td>" +
      "<td style=\"text-align: right\"><b>{point.y}</b></td></tr>",

    footerFormat: "</table>",
    split: false,
    shared: true,
    valueDecimals: 2,
    useHTML: true
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