$(function () {

  // Prepare demo data
  var chart,
    accidentsNumber,
    dataSequence = [
      {
        "name": "2020-01-21",
        "total": 282,
        "data": [
          {
            "date": "2020-01-21",
            "name": "China",
            "lat": 30.5928,
            "lon": 114.3055,
            "z": 278
          },
          {
            "date": "2020-01-21",
            "name": "Japão",
            "lat": 35.6804,
            "lon": 139.7690,
            "z": 1
          },
          {
            "date": "2020-01-21",
            "name": "Coreia do Sul",
            "lat": 37.5665,
            "lon": 126.9780,
            "z": 1
          },
          {
            "date": "2020-01-21",
            "name": "Tailândia",
            "lat": 13.7563,
            "lon": 100.5018,
            "z": 2
          }
        ]
      },{
        "name": "2020-01-22",
        "total": 314,
        "data": [
          {
            "date": "2020-01-22",
            "name": "China",
            "lat": 30.5928,
            "lon": 114.3055,
            "z": 309
          },
          {
            "date": "2020-01-22",
            "name": "Japão",
            "lat": 35.6804,
            "lon": 139.7690,
            "z": 1
          },
          {
            "date": "2020-01-22",
            "name": "Coreia do Sul",
            "lat": 37.5665,
            "lon": 126.9780,
            "z": 1
          },
          {
            "date": "2020-01-22",
            "name": "Tailândia",
            "lat": 13.7563,
            "lon": 100.5018,
            "z": 2
          }
        ]
      },{
        "name": "2020-01-23",
        "total": 581,
        "data": [
          {
            "date": "2020-01-23",
            "name": "China",
            "lat": 30.5928,
            "lon": 114.3055,
            "z": 571
          },
          {
            "date": "2020-01-23",
            "name": "Japão",
            "lat": 35.6804,
            "lon": 139.7690,
            "z": 1
          },
          {
            "date": "2020-01-23",
            "name": "Coreia do Sul",
            "lat": 37.5665,
            "lon": 126.9780,
            "z": 1
          },
          {
            "date": "2020-01-23",
            "name": "Tailândia",
            "lat": 13.7563,
            "lon": 100.5018,
            "z": 4
          },
          {
            "date": "2020-01-23",
            "name": "Estados Unidos",
            "lat": 38.9072,
            "lon": -77.0369,
            "z": 1
          }
        ]
      },{
        "name": "2020-01-24",
        "total": 846,
        "data": [
          {
            "date": "2020-01-24",
            "name": "China",
            "lat": 30.5928,
            "lon": 114.3055,
            "z": 830
          },
          {
            "date": "2020-01-24",
            "name": "Japão",
            "lat": 35.6804,
            "lon": 139.7690,
            "z": 1
          },
          {
            "date": "2020-01-24",
            "name": "Coreia do Sul",
            "lat": 37.5665,
            "lon": 126.9780,
            "z": 2
          },
          {
            "date": "2020-01-24",
            "name": "Vietname",
            "lat": 21.0278,
            "lon": 105.8342,
            "z": 2
          },{
            "date": "2020-01-24",
            "name": "Singapura",
            "lat": 1.3521,
            "lon": 103.8198,
            "z": 1
          },
          {
            "date": "2020-01-24",
            "name": "Tailândia",
            "lat": 13.7563,
            "lon": 100.5018,
            "z": 4
          },
          {
            "date": "2020-01-24",
            "name": "Estados Unidos",
            "lat": 38.9072,
            "lon": -77.0369,
            "z": 1
          }
        ]
      },{
        "name": "2020-01-25",
        "total": 1320,
        "data": [
          {
            "date": "2020-01-25",
            "name": "China",
            "lat": 30.5928,
            "lon": 114.3055,
            "z": 1297
          },
          {
            "date": "2020-01-25",
            "name": "Japão",
            "lat": 35.6804,
            "lon": 139.7690,
            "z": 3
          },
          {
            "date": "2020-01-25",
            "name": "Coreia do Sul",
            "lat": 37.5665,
            "lon": 126.9780,
            "z": 2
          },
          {
            "date": "2020-01-25",
            "name": "Vietname",
            "lat": 21.0278,
            "lon": 105.8342,
            "z": 2
          },{
            "date": "2020-01-25",
            "name": "Singapura",
            "lat": 1.3521,
            "lon": 103.8198,
            "z": 3
          },{
            "date": "2020-01-25",
            "name": "Australia",
            "lat": -33.8688,
            "lon": 151.2093,
            "z": 3
          },
          {
            "date": "2020-01-25",
            "name": "Tailândia",
            "lat": 13.7563,
            "lon": 100.5018,
            "z": 4
          },{
            "date": "2020-01-25",
            "name": "Nepal",
            "lat": 27.7172,
            "lon": 85.3240,
            "z": 1
          },
          {
            "date": "2020-01-25",
            "name": "Estados Unidos",
            "lat": 38.9072,
            "lon": -77.0369,
            "z": 2
          },
          {
            "date": "2020-01-25",
            "name": "França",
            "lat": 48.8566,
            "lon": 2.3522,
            "z": 3
          }
        ]
      },{
        "name": "2020-01-26",
        "total": 2014,
        "data": [
          {
            "date": "2020-01-26",
            "name": "China",
            "lat": 30.5928,
            "lon": 114.3055,
            "z": 1985
          },
          {
            "date": "2020-01-26",
            "name": "Japão",
            "lat": 35.6804,
            "lon": 139.7690,
            "z": 3
          },
          {
            "date": "2020-01-26",
            "name": "Coreia do Sul",
            "lat": 37.5665,
            "lon": 126.9780,
            "z": 2
          },
          {
            "date": "2020-01-26",
            "name": "Vietname",
            "lat": 21.0278,
            "lon": 105.8342,
            "z": 2
          },{
            "date": "2020-01-26",
            "name": "Singapura",
            "lat": 1.3521,
            "lon": 103.8198,
            "z": 4
          },{
            "date": "2020-01-26",
            "name": "Australia",
            "lat": -33.8688,
            "lon": 151.2093,
            "z": 4
          },{
            "date": "2020-01-26",
            "name": "Malásia",
            "lat": 3.1390,
            "lon": 101.6869,
            "z": 3
          },
          {
            "date": "2020-01-26",
            "name": "Tailândia",
            "lat": 13.7563,
            "lon": 100.5018,
            "z": 5
          },{
            "date": "2020-01-26",
            "name": "Nepal",
            "lat": 27.7172,
            "lon": 85.3240,
            "z": 1
          },
          {
            "date": "2020-01-26",
            "name": "Estados Unidos",
            "lat": 38.9072,
            "lon": -77.0369,
            "z": 2
          },
          {
            "date": "2020-01-26",
            "name": "França",
            "lat": 48.8566,
            "lon": 2.3522,
            "z": 3
          }
        ]
      },{
        "name": "2020-01-27",
        "total": 2798,
        "data": [
          {
            "date": "2020-01-27",
            "name": "China",
            "lat": 30.5928,
            "lon": 114.3055,
            "z": 2761
          },
          {
            "date": "2020-01-27",
            "name": "Japão",
            "lat": 35.6804,
            "lon": 139.7690,
            "z": 4
          },
          {
            "date": "2020-01-27",
            "name": "Coreia do Sul",
            "lat": 37.5665,
            "lon": 126.9780,
            "z": 4
          },
          {
            "date": "2020-01-27",
            "name": "Vietname",
            "lat": 21.0278,
            "lon": 105.8342,
            "z": 2
          },{
            "date": "2020-01-27",
            "name": "Singapura",
            "lat": 1.3521,
            "lon": 103.8198,
            "z": 4
          },{
            "date": "2020-01-27",
            "name": "Australia",
            "lat": -33.8688,
            "lon": 151.2093,
            "z": 4
          },{
            "date": "2020-01-27",
            "name": "Malásia",
            "lat": 3.1390,
            "lon": 101.6869,
            "z": 4
          },
          {
            "date": "2020-01-27",
            "name": "Tailândia",
            "lat": 13.7563,
            "lon": 100.5018,
            "z": 5
          },{
            "date": "2020-01-27",
            "name": "Nepal",
            "lat": 27.7172,
            "lon": 85.3240,
            "z": 1
          },
          {
            "date": "2020-01-27",
            "name": "Estados Unidos",
            "lat": 38.9072,
            "lon": -77.0369,
            "z": 5
          },
          {
            "date": "2020-01-27",
            "name": "França",
            "lat": 48.8566,
            "lon": 2.3522,
            "z": 3
          }
        ]
      },{
        "name": "2020-01-28",
        "total": 4593,
        "data": [
          {
            "date": "2020-01-28",
            "name": "China",
            "lat": 30.5928,
            "lon": 114.3055,
            "z": 4537
          },
          {
            "date": "2020-01-28",
            "name": "Japão",
            "lat": 35.6804,
            "lon": 139.7690,
            "z": 6
          },
          {
            "date": "2020-01-28",
            "name": "Coreia do Sul",
            "lat": 37.5665,
            "lon": 126.9780,
            "z": 4
          },
          {
            "date": "2020-01-28",
            "name": "Vietname",
            "lat": 21.0278,
            "lon": 105.8342,
            "z": 2
          },{
            "date": "2020-01-28",
            "name": "Singapura",
            "lat": 1.3521,
            "lon": 103.8198,
            "z": 7
          },{
            "date": "2020-01-28",
            "name": "Australia",
            "lat": -33.8688,
            "lon": 151.2093,
            "z": 5
          },{
            "date": "2020-01-28",
            "name": "Malásia",
            "lat": 3.1390,
            "lon": 101.6869,
            "z": 4
          },{
            "date": "2020-01-28",
            "name": "Camboja",
            "lat": 11.5564,
            "lon": 104.9282,
            "z": 1
          },
          {
            "date": "2020-01-28",
            "name": "Tailândia",
            "lat": 13.7563,
            "lon": 100.5018,
            "z": 14
          },{
            "date": "2020-01-28",
            "name": "Nepal",
            "lat": 27.7172,
            "lon": 85.3240,
            "z": 1
          },{
            "date": "2020-01-28",
            "name": "Sri Lanka",
            "lat": 6.9271,
            "lon": 79.8612,
            "z": 1
          },
          {
            "date": "2020-01-28",
            "name": "Estados Unidos",
            "lat": 38.9072,
            "lon": -77.0369,
            "z": 5
          },
          {
            "date": "2020-01-28",
            "name": "Canada",
            "lat": 45.4215296,
            "lon": -75.6971931,
            "z": 2
          },
          {
            "date": "2020-01-28",
            "name": "França",
            "lat": 48.8566,
            "lon": 2.3522,
            "z": 3
          },
          {
            "date": "2020-01-28",
            "name": "Alemanha",
            "lat": 52.5200,
            "lon": 13.4050,
            "z": 1
          }
        ]
      },{
        "name": "2020-01-29",
        "total": 6065,
        "data": [
          {
            "date": "2020-01-29",
            "name": "China",
            "lat": 30.5928,
            "lon": 114.3055,
            "z": 5997
          },
          {
            "date": "2020-01-29",
            "name": "Japão",
            "lat": 35.6804,
            "lon": 139.7690,
            "z": 7
          },
          {
            "date": "2020-01-29",
            "name": "Coreia do Sul",
            "lat": 37.5665,
            "lon": 126.9780,
            "z": 4
          },
          {
            "date": "2020-01-29",
            "name": "Vietname",
            "lat": 21.0278,
            "lon": 105.8342,
            "z": 2
          },{
            "date": "2020-01-29",
            "name": "Singapura",
            "lat": 1.3521,
            "lon": 103.8198,
            "z": 7
          },{
            "date": "2020-01-29",
            "name": "Australia",
            "lat": -33.8688,
            "lon": 151.2093,
            "z": 7
          },{
            "date": "2020-01-29",
            "name": "Malásia",
            "lat": 3.1390,
            "lon": 101.6869,
            "z": 4
          },{
            "date": "2020-01-29",
            "name": "Camboja",
            "lat": 11.5564,
            "lon": 104.9282,
            "z": 1
          },
          {
            "date": "2020-01-29",
            "name": "Tailândia",
            "lat": 13.7563,
            "lon": 100.5018,
            "z": 14
          },{
            "date": "2020-01-29",
            "name": "Nepal",
            "lat": 27.7172,
            "lon": 85.3240,
            "z": 1
          },{
            "date": "2020-01-29",
            "name": "Sri Lanka",
            "lat": 6.9271,
            "lon": 79.8612,
            "z": 1
          },
          {
            "date": "2020-01-29",
            "name": "Estados Unidos",
            "lat": 38.9072,
            "lon": -77.0369,
            "z": 5
          },
          {
            "date": "2020-01-29",
            "name": "Canada",
            "lat": 45.4215296,
            "lon": -75.6971931,
            "z": 3
          },
          {
            "date": "2020-01-29",
            "name": "França",
            "lat": 48.8566,
            "lon": 2.3522,
            "z": 4
          },
          {
            "date": "2020-01-29",
            "name": "Alemanha",
            "lat": 52.5200,
            "lon": 13.4050,
            "z": 4
          },
          {
            "date": "2020-01-29",
            "name": "Emirados Arabes Unidos",
            "lat": 25.2048,
            "lon": 55.2708,
            "z": 4
          }
        ]
      },{
        "name": "2020-01-30",
        "total": 7818,
        "data": [
          {
            "date": "2020-01-30",
            "name": "China",
            "lat": 30.5928,
            "lon": 114.3055,
            "z": 7736
          },
          {
            "date": "2020-01-30",
            "name": "Japão",
            "lat": 35.6804,
            "lon": 139.7690,
            "z": 11
          },
          {
            "date": "2020-01-30",
            "name": "Coreia do Sul",
            "lat": 37.5665,
            "lon": 126.9780,
            "z": 4
          },
          {
            "date": "2020-01-30",
            "name": "Vietname",
            "lat": 21.0278,
            "lon": 105.8342,
            "z": 2
          },{
            "date": "2020-01-30",
            "name": "Singapura",
            "lat": 1.3521,
            "lon": 103.8198,
            "z": 10
          },{
            "date": "2020-01-30",
            "name": "Australia",
            "lat": -33.8688,
            "lon": 151.2093,
            "z": 7
          },{
            "date": "2020-01-30",
            "name": "Malásia",
            "lat": 3.1390,
            "lon": 101.6869,
            "z": 7
          },{
            "date": "2020-01-30",
            "name": "Camboja",
            "lat": 11.5564,
            "lon": 104.9282,
            "z": 1
          },
          {
            "date": "2020-01-30",
            "name": "Tailândia",
            "lat": 13.7563,
            "lon": 100.5018,
            "z": 14
          },{
            "date": "2020-01-30",
            "name": "Nepal",
            "lat": 27.7172,
            "lon": 85.3240,
            "z": 1
          },{
            "date": "2020-01-30",
            "name": "Sri Lanka",
            "lat": 6.9271,
            "lon": 79.8612,
            "z": 1
          },{
            "date": "2020-01-30",
            "name": "India",
            "lat": 20.5937,
            "lon": 78.9629,
            "z": 1
          },
          {
            "date": "2020-01-30",
            "name": "Estados Unidos",
            "lat": 38.9072,
            "lon": -77.0369,
            "z": 5
          },
          {
            "date": "2020-01-30",
            "name": "Canada",
            "lat": 45.4215296,
            "lon": -75.6971931,
            "z": 3
          },
          {
            "date": "2020-01-29",
            "name": "França",
            "lat": 48.8566,
            "lon": 2.3522,
            "z": 5
          },
          {
            "date": "2020-01-30",
            "name": "Finlandia",
            "lat": 61.9241,
            "lon": 25.7482,
            "z": 1
          },
          {
            "date": "2020-01-30",
            "name": "Alemanha",
            "lat": 52.5200,
            "lon": 13.4050,
            "z": 4
          },
          {
            "date": "2020-01-30",
            "name": "Emirados Arabes Unidos",
            "lat": 25.2048,
            "lon": 55.2708,
            "z": 4
          }
        ]
      },{
        "name": "2020-01-31",
        "total": 7818,
        "data": [
          {
            "date": "2020-01-31",
            "name": "China",
            "lat": 30.5928,
            "lon": 114.3055,
            "z": 7736
          },
          {
            "date": "2020-01-31",
            "name": "Japão",
            "lat": 35.6804,
            "lon": 139.7690,
            "z": 11
          },
          {
            "date": "2020-01-31",
            "name": "Coreia do Sul",
            "lat": 37.5665,
            "lon": 126.9780,
            "z": 4
          },
          {
            "date": "2020-01-31",
            "name": "Vietname",
            "lat": 21.0278,
            "lon": 105.8342,
            "z": 2
          },{
            "date": "2020-01-31",
            "name": "Singapura",
            "lat": 1.3521,
            "lon": 103.8198,
            "z": 10
          },{
            "date": "2020-01-31",
            "name": "Australia",
            "lat": -33.8688,
            "lon": 151.2093,
            "z": 7
          },{
            "date": "2020-01-31",
            "name": "Malásia",
            "lat": 3.1390,
            "lon": 101.6869,
            "z": 7
          },{
            "date": "2020-01-31",
            "name": "Camboja",
            "lat": 11.5564,
            "lon": 104.9282,
            "z": 1
          },
          {
            "date": "2020-01-31",
            "name": "Tailândia",
            "lat": 13.7563,
            "lon": 100.5018,
            "z": 14
          },{
            "date": "2020-01-31",
            "name": "Nepal",
            "lat": 27.7172,
            "lon": 85.3240,
            "z": 1
          },{
            "date": "2020-01-31",
            "name": "Sri Lanka",
            "lat": 6.9271,
            "lon": 79.8612,
            "z": 1
          },{
            "date": "2020-01-31",
            "name": "India",
            "lat": 20.5937,
            "lon": 78.9629,
            "z": 1
          },
          {
            "date": "2020-01-31",
            "name": "Estados Unidos",
            "lat": 38.9072,
            "lon": -77.0369,
            "z": 5
          },
          {
            "date": "2020-01-31",
            "name": "Canada",
            "lat": 45.4215296,
            "lon": -75.6971931,
            "z": 3
          },
          {
            "date": "2020-01-31",
            "name": "França",
            "lat": 48.8566,
            "lon": 2.3522,
            "z": 5
          },
          {
            "date": "2020-01-31",
            "name": "Finlandia",
            "lat": 61.9241,
            "lon": 25.7482,
            "z": 1
          },
          {
            "date": "2020-01-29",
            "name": "Alemanha",
            "lat": 52.5200,
            "lon": 13.4050,
            "z": 4
          },{
            "date": "2020-01-31",
            "name": "Italia",
            "lat": 41.8719,
            "lon": 12.5674,
            "z": 2
          },
          {
            "date": "2020-01-31",
            "name": "Emirados Arabes Unidos",
            "lat": 25.2048,
            "lon": 55.2708,
            "z": 4
          }
        ]
      }
    ];

  // Initiate the chart
  $('#container').highcharts('Map', {

    title: {
      text: 'Coronavirus(2019-nCoV) Relatório de Situação '
    },

    subtitle: {
      text: 'Source: <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports/">WHO</a></a>'
    },

    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: 'bottom'
      }
    },

    tooltip: {
      headerFormat: '',
      pointFormat: '<b>País</b> {point.name} <br> <b>Casos</b> {point.z} <br> <b>Data</b> {point.date}'
    },

    series: [{
      mapData: Highcharts.maps['custom/world-highres'],
      name: 'Basemap',
      borderColor: '#A0A0A0',
      nullColor: 'rgba(200, 200, 200, 0.3)',
      showInLegend: false
    },{
      type: 'mapbubble',
      name: 'Accident',
      color: Highcharts.getOptions().colors[3],
      showInLegend: false,
      minSize: 11,
      maxSize: 55,
      data: dataSequence[0].data
    }]
  });


  Highcharts.chart('barchart', {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Somatório de casos de Coronavírus'
    },
    subtitle: {
      text: 'Fonte: who.int'
    },
    xAxis: {
      categories: [
        '2020-01-21',
        '2020-01-22',
        '2020-01-23',
        '2020-01-24',
        '2020-01-25',
        '2020-01-26',
        '2020-01-27',
        '2020-01-28',
        '2020-01-29',
        '2020-01-30',
        '2020-01-31',
      ],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Casos confirmados globalmente'
      }
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [{
      name: 'Casos confirmados globalmente por dia',
      data: [282, 314, 581, 846, 1320, 2014, 2798, 4593,6065,7818,9826]
    },{
      name: 'Somatório de fatalidades',
      data: [3, 6, 17, 25, 41, 56, 80, 106,132,170,213]
    }]
  });


  chart = $('#container').highcharts();
  accidentsNumber = $('#accidents-number')[0];
  accidentsNumber.innerHTML = dataSequence[0].total + " Casos confirmados globalmente";

  /**
   * Update the chart. This happens either on updating (moving) the range input,
   * or from a timer when the timeline is playing.
   */
  function update(increment) {
    var input = $('#play-range')[0],
      output = $('#play-output')[0];

    if (increment) {
      input.value = parseInt(input.value) + increment;
    }
    chart.series[1].setData(dataSequence[input.value].data); // Increment dataset (updates chart)
    output.innerHTML = dataSequence[input.value].name; // + " km/h"; // Output value
    accidentsNumber.innerHTML = dataSequence[input.value].total + " Casos confirmados globalmente"; // # of accidents
    /*if (input.value >= input.max) { // Auto-pause
      pause($('#play-pause-button')[0]);
    }*/
  }

  /**
   * Play the timeline.
   */
  function play(button) {
    button.title = 'pause';
    button.className = 'fa fa-pause';
    chart.sequenceTimer = setInterval(function () {
      update(1);
    }, 800);

  }

  /**
   * Pause the timeline, either when the range is ended, or when clicking the pause button.
   * Pausing stops the timer and resets the button to play mode.
   */
  function pause(button) {
    button.title = 'play';
    button.className = 'fa fa-play';
    clearTimeout(chart.sequenceTimer);
    chart.sequenceTimer = undefined;
  }

  /**
   * Toggle play and pause from the button
   */
  $('#play-pause-button').bind('click', function () {
    if (chart.sequenceTimer === undefined) {
      play(this);
    } else {
      pause(this);
    }
  });

  /**
   * Update the chart when the input is changed
   */
  $('#play-range').bind('input', function () {
    update();
  });
});
