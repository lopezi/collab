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
            "name": "Japan",
            "lat": 35.6804,
            "lon": 139.7690,
            "z": 1
          },
          {
            "date": "2020-01-21",
            "name": "Republic of Korea",
            "lat": 37.5665,
            "lon": 126.9780,
            "z": 1
          },
          {
            "date": "2020-01-21",
            "name": "Thailand",
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
            "name": "Japan",
            "lat": 35.6804,
            "lon": 139.7690,
            "z": 1
          },
          {
            "date": "2020-01-22",
            "name": "Republic of Korea",
            "lat": 37.5665,
            "lon": 126.9780,
            "z": 1
          },
          {
            "date": "2020-01-22",
            "name": "Thailand",
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
            "name": "Japan",
            "lat": 35.6804,
            "lon": 139.7690,
            "z": 1
          },
          {
            "date": "2020-01-23",
            "name": "Republic of Korea",
            "lat": 37.5665,
            "lon": 126.9780,
            "z": 1
          },
          {
            "date": "2020-01-23",
            "name": "Thailand",
            "lat": 13.7563,
            "lon": 100.5018,
            "z": 4
          },
          {
            "date": "2020-01-23",
            "name": "USA",
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
            "name": "Japan",
            "lat": 35.6804,
            "lon": 139.7690,
            "z": 1
          },
          {
            "date": "2020-01-24",
            "name": "Republic of Korea",
            "lat": 37.5665,
            "lon": 126.9780,
            "z": 2
          },
          {
            "date": "2020-01-24",
            "name": "Vietnam",
            "lat": 21.0278,
            "lon": 105.8342,
            "z": 2
          },{
            "date": "2020-01-24",
            "name": "Singapore",
            "lat": 1.3521,
            "lon": 103.8198,
            "z": 1
          },
          {
            "date": "2020-01-24",
            "name": "Thailand",
            "lat": 13.7563,
            "lon": 100.5018,
            "z": 4
          },
          {
            "date": "2020-01-24",
            "name": "USA",
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
            "name": "Japan",
            "lat": 35.6804,
            "lon": 139.7690,
            "z": 3
          },
          {
            "date": "2020-01-25",
            "name": "Republic of Korea",
            "lat": 37.5665,
            "lon": 126.9780,
            "z": 2
          },
          {
            "date": "2020-01-25",
            "name": "Vietnam",
            "lat": 21.0278,
            "lon": 105.8342,
            "z": 2
          },{
            "date": "2020-01-25",
            "name": "Singapore",
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
            "name": "Thailand",
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
            "name": "USA",
            "lat": 38.9072,
            "lon": -77.0369,
            "z": 2
          },
          {
            "date": "2020-01-25",
            "name": "France",
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
            "name": "Japan",
            "lat": 35.6804,
            "lon": 139.7690,
            "z": 3
          },
          {
            "date": "2020-01-26",
            "name": "Republic of Korea",
            "lat": 37.5665,
            "lon": 126.9780,
            "z": 2
          },
          {
            "date": "2020-01-26",
            "name": "Vietnam",
            "lat": 21.0278,
            "lon": 105.8342,
            "z": 2
          },{
            "date": "2020-01-26",
            "name": "Singapore",
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
            "name": "Malaysia",
            "lat": 3.1390,
            "lon": 101.6869,
            "z": 3
          },
          {
            "date": "2020-01-26",
            "name": "Thailand",
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
            "name": "USA",
            "lat": 38.9072,
            "lon": -77.0369,
            "z": 2
          },
          {
            "date": "2020-01-26",
            "name": "France",
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
            "name": "Japan",
            "lat": 35.6804,
            "lon": 139.7690,
            "z": 4
          },
          {
            "date": "2020-01-27",
            "name": "Republic of Korea",
            "lat": 37.5665,
            "lon": 126.9780,
            "z": 4
          },
          {
            "date": "2020-01-27",
            "name": "Vietnam",
            "lat": 21.0278,
            "lon": 105.8342,
            "z": 2
          },{
            "date": "2020-01-27",
            "name": "Singapore",
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
            "name": "Malaysia",
            "lat": 3.1390,
            "lon": 101.6869,
            "z": 4
          },
          {
            "date": "2020-01-27",
            "name": "Thailand",
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
            "name": "USA",
            "lat": 38.9072,
            "lon": -77.0369,
            "z": 5
          },
          {
            "date": "2020-01-27",
            "name": "France",
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
            "name": "Japan",
            "lat": 35.6804,
            "lon": 139.7690,
            "z": 6
          },
          {
            "date": "2020-01-28",
            "name": "Republic of Korea",
            "lat": 37.5665,
            "lon": 126.9780,
            "z": 4
          },
          {
            "date": "2020-01-28",
            "name": "Vietnam",
            "lat": 21.0278,
            "lon": 105.8342,
            "z": 2
          },{
            "date": "2020-01-28",
            "name": "Singapore",
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
            "name": "Malaysia",
            "lat": 3.1390,
            "lon": 101.6869,
            "z": 4
          },{
            "date": "2020-01-28",
            "name": "Cambodia",
            "lat": 11.5564,
            "lon": 104.9282,
            "z": 1
          },
          {
            "date": "2020-01-28",
            "name": "Thailand",
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
            "name": "USA",
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
            "name": "France",
            "lat": 48.8566,
            "lon": 2.3522,
            "z": 3
          },
          {
            "date": "2020-01-28",
            "name": "Germany",
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
            "name": "Japan",
            "lat": 35.6804,
            "lon": 139.7690,
            "z": 7
          },
          {
            "date": "2020-01-29",
            "name": "Republic of Korea",
            "lat": 37.5665,
            "lon": 126.9780,
            "z": 4
          },
          {
            "date": "2020-01-29",
            "name": "Vietnam",
            "lat": 21.0278,
            "lon": 105.8342,
            "z": 2
          },{
            "date": "2020-01-29",
            "name": "Singapore",
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
            "name": "Malaysia",
            "lat": 3.1390,
            "lon": 101.6869,
            "z": 4
          },{
            "date": "2020-01-29",
            "name": "Cambodia",
            "lat": 11.5564,
            "lon": 104.9282,
            "z": 1
          },
          {
            "date": "2020-01-29",
            "name": "Thailand",
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
            "name": "USA",
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
            "name": "France",
            "lat": 48.8566,
            "lon": 2.3522,
            "z": 4
          },
          {
            "date": "2020-01-29",
            "name": "Germany",
            "lat": 52.5200,
            "lon": 13.4050,
            "z": 1
          },
          {
            "date": "2020-01-29",
            "name": "United Arab Emirates",
            "lat": 25.2048,
            "lon": 55.2708,
            "z": 4
          }
      ]}, {
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
                "name": "Japan",
                "lat": 35.6804,
                "lon": 139.7690,
                "z": 11
              },
              {
                "date": "2020-01-30",
                "name": "Republic of Korea",
                "lat": 37.5665,
                "lon": 126.9780,
                "z": 4
              },
              {
                "date": "2020-01-30",
                "name": "Vietnam",
                "lat": 21.0278,
                "lon": 105.8342,
                "z": 2
              }, {
                "date": "2020-01-30",
                "name": "Singapore",
                "lat": 1.3521,
                "lon": 103.8198,
                "z": 10
              }, {
                "date": "2020-01-30",
                "name": "Australia",
                "lat": -33.8688,
                "lon": 151.2093,
                "z": 7
              }, {
                "date": "2020-01-30",
                "name": "Malaysia",
                "lat": 3.1390,
                "lon": 101.6869,
                "z": 4
              }, {
                "date": "2020-01-30",
                "name": "Cambodia",
                "lat": 11.5564,
                "lon": 104.9282,
                "z": 1
              },
              {
                "date": "2020-01-30",
                "name": "Thailand",
                "lat": 13.7563,
                "lon": 100.5018,
                "z": 14
              }, {
                "date": "2020-01-30",
                "name": "Nepal",
                "lat": 27.7172,
                "lon": 85.3240,
                "z": 1
              }, {
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
                "name": "USA",
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
                "date": "2020-01-30",
                "name": "France",
                "lat": 48.8566,
                "lon": 2.3522,
                "z": 5
              },{
                "date": "2020-01-30",
                "name": "Finland",
                "lat": 61.9241,
                "lon": 25.7482,
                "z": 1
              },
              {
                "date": "2020-01-30",
                "name": "Germany",
                "lat": 52.5200,
                "lon": 13.4050,
                "z": 4
              },
              {
                "date": "2020-01-30",
                "name": "United Arab Emirates",
                "lat": 25.2048,
                "lon": 55.2708,
                "z": 4
              }
            ]
        },{
            "name": "2020-01-31",
            "total": 9826,
            "data": [
              {
                "date": "2020-01-31",
                "name": "China",
                "lat": 30.5928,
                "lon": 114.3055,
                "z": 9720
              },
              {
                "date": "2020-01-31",
                "name": "Japan",
                "lat": 35.6804,
                "lon": 139.7690,
                "z": 14
              },
              {
                "date": "2020-01-31",
                "name": "Republic of Korea",
                "lat": 37.5665,
                "lon": 126.9780,
                "z": 11
              },
              {
                "date": "2020-01-31",
                "name": "Vietnam",
                "lat": 21.0278,
                "lon": 105.8342,
                "z": 5
              }, {
                "date": "2020-01-31",
                "name": "Singapore",
                "lat": 1.3521,
                "lon": 103.8198,
                "z": 13
              }, {
                "date": "2020-01-31",
                "name": "Australia",
                "lat": -33.8688,
                "lon": 151.2093,
                "z": 9
              }, {
                "date": "2020-01-31",
                "name": "Malaysia",
                "lat": 3.1390,
                "lon": 101.6869,
                "z": 8
              }, {
                "date": "2020-01-31",
                "name": "Cambodia",
                "lat": 11.5564,
                "lon": 104.9282,
                "z": 1
              },{
                "date": "2020-01-31",
                "name": "Philippines",
                "lat": 12.8797,
                "lon": 121.7740,
                "z": 1
              },
              {
                "date": "2020-01-31",
                "name": "Thailand",
                "lat": 13.7563,
                "lon": 100.5018,
                "z": 14
              }, {
                "date": "2020-01-31",
                "name": "Nepal",
                "lat": 27.7172,
                "lon": 85.3240,
                "z": 1
              }, {
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
                "name": "USA",
                "lat": 38.9072,
                "lon": -77.0369,
                "z": 6
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
                "name": "France",
                "lat": 48.8566,
                "lon": 2.3522,
                "z": 6
              },{
                "date": "2020-01-31",
                "name": "Finland",
                "lat": 61.9241,
                "lon": 25.7482,
                "z": 1
              },
              {
                "date": "2020-01-31",
                "name": "Germany",
                "lat": 52.5200,
                "lon": 13.4050,
                "z": 5
              },
              {
                "date": "2020-01-31",
                "name": "Italy",
                "lat": 41.8719,
                "lon": 12.5674,
                "z": 2
              },
              {
                "date": "2020-01-31",
                "name": "United Arab Emirates",
                "lat": 25.2048,
                "lon": 55.2708,
                "z": 4
              }
            ]
      },{
            "name": "2020-02-01",
            "total": 11953,
            "data": [
              {
                "date": "2020-02-01",
                "name": "China",
                "lat": 30.5928,
                "lon": 114.3055,
                "z": 11821
              },
              {
                "date": "2020-02-01",
                "name": "Japan",
                "lat": 35.6804,
                "lon": 139.7690,
                "z": 17
              },
              {
                "date": "2020-02-01",
                "name": "Republic of Korea",
                "lat": 37.5665,
                "lon": 126.9780,
                "z": 12
              },
              {
                "date": "2020-02-01",
                "name": "Vietnam",
                "lat": 21.0278,
                "lon": 105.8342,
                "z": 6
              }, {
                "date": "2020-02-01",
                "name": "Singapore",
                "lat": 1.3521,
                "lon": 103.8198,
                "z": 16
              }, {
                "date": "2020-02-01",
                "name": "Australia",
                "lat": -33.8688,
                "lon": 151.2093,
                "z": 12
              }, {
                "date": "2020-02-01",
                "name": "Malaysia",
                "lat": 3.1390,
                "lon": 101.6869,
                "z": 8
              }, {
                "date": "2020-02-01",
                "name": "Cambodia",
                "lat": 11.5564,
                "lon": 104.9282,
                "z": 1
              },{
                "date": "2020-02-01",
                "name": "Philippines",
                "lat": 12.8797,
                "lon": 121.7740,
                "z": 1
              },
              {
                "date": "2020-02-01",
                "name": "Thailand",
                "lat": 13.7563,
                "lon": 100.5018,
                "z": 19
              }, {
                "date": "2020-02-01",
                "name": "Nepal",
                "lat": 27.7172,
                "lon": 85.3240,
                "z": 1
              }, {
                "date": "2020-02-01",
                "name": "Sri Lanka",
                "lat": 6.9271,
                "lon": 79.8612,
                "z": 1
              },{
                "date": "2020-02-01",
                "name": "India",
                "lat": 20.5937,
                "lon": 78.9629,
                "z": 1
              },
              {
                "date": "2020-02-01",
                "name": "USA",
                "lat": 38.9072,
                "lon": -77.0369,
                "z": 7
              },
              {
                "date": "2020-02-01",
                "name": "Canada",
                "lat": 45.4215296,
                "lon": -75.6971931,
                "z": 4
              },
              {
                "date": "2020-02-01",
                "name": "France",
                "lat": 48.8566,
                "lon": 2.3522,
                "z": 6
              },{
                "date": "2020-02-01",
                "name": "Finland",
                "lat": 61.9241,
                "lon": 25.7482,
                "z": 1
              },
              {
                "date": "2020-02-01",
                "name": "Germany",
                "lat": 52.5200,
                "lon": 13.4050,
                "z": 7
              },
              {
                "date": "2020-02-01",
                "name": "Italy",
                "lat": 41.8719,
                "lon": 12.5674,
                "z": 2
              },{
                "date": "2020-02-01",
                "name": "Russia",
                "lat": 61.5240,
                "lon": 105.3188,
                "z": 2
              },{
                "date": "2020-02-01",
                "name": "Spain",
                "lat": 40.4168,
                "lon": 3.7038,
                "z": 1
              },{
                "date": "2020-02-01",
                "name": "Sweden",
                "lat": 60.1282,
                "lon": 18.6435,
                "z": 1
              },{
                "date": "2020-02-01",
                "name": "United Kingmon",
                "lat": 55.3781,
                "lon": 3.4360,
                "z": 2
              },
              {
                "date": "2020-02-01",
                "name": "United Arab Emirates",
                "lat": 25.2048,
                "lon": 55.2708,
                "z": 4
              }
            ]
        },{
            "name": "2020-02-02",
            "total": 14557,
            "data": [
              {
                "date": "2020-02-02",
                "name": "China",
                "lat": 30.5928,
                "lon": 114.3055,
                "z": 14411
              },
              {
                "date": "2020-02-02",
                "name": "Japan",
                "lat": 35.6804,
                "lon": 139.7690,
                "z": 20
              },
              {
                "date": "2020-02-02",
                "name": "Republic of Korea",
                "lat": 37.5665,
                "lon": 126.9780,
                "z": 15
              },
              {
                "date": "2020-02-02",
                "name": "Vietnam",
                "lat": 21.0278,
                "lon": 105.8342,
                "z": 7
              }, {
                "date": "2020-02-02",
                "name": "Singapore",
                "lat": 1.3521,
                "lon": 103.8198,
                "z": 18
              }, {
                "date": "2020-02-02",
                "name": "Australia",
                "lat": -33.8688,
                "lon": 151.2093,
                "z": 12
              }, {
                "date": "2020-02-02",
                "name": "Malaysia",
                "lat": 3.1390,
                "lon": 101.6869,
                "z": 8
              }, {
                "date": "2020-02-02",
                "name": "Cambodia",
                "lat": 11.5564,
                "lon": 104.9282,
                "z": 1
              },{
                "date": "2020-02-02",
                "name": "Philippines",
                "lat": 12.8797,
                "lon": 121.7740,
                "z": 2
              },
              {
                "date": "2020-02-02",
                "name": "Thailand",
                "lat": 13.7563,
                "lon": 100.5018,
                "z": 19
              }, {
                "date": "2020-02-02",
                "name": "Nepal",
                "lat": 27.7172,
                "lon": 85.3240,
                "z": 1
              }, {
                "date": "2020-02-02",
                "name": "Sri Lanka",
                "lat": 6.9271,
                "lon": 79.8612,
                "z": 1
              },{
                "date": "2020-02-02",
                "name": "India",
                "lat": 20.5937,
                "lon": 78.9629,
                "z": 2
              },
              {
                "date": "2020-02-02",
                "name": "USA",
                "lat": 38.9072,
                "lon": -77.0369,
                "z": 8
              },
              {
                "date": "2020-02-02",
                "name": "Canada",
                "lat": 45.4215296,
                "lon": -75.6971931,
                "z": 4
              },
              {
                "date": "2020-02-02",
                "name": "France",
                "lat": 48.8566,
                "lon": 2.3522,
                "z": 6
              },{
                "date": "2020-02-02",
                "name": "Finland",
                "lat": 61.9241,
                "lon": 25.7482,
                "z": 1
              },
              {
                "date": "2020-02-02",
                "name": "Germany",
                "lat": 52.5200,
                "lon": 13.4050,
                "z": 8
              },
              {
                "date": "2020-02-02",
                "name": "Italy",
                "lat": 41.8719,
                "lon": 12.5674,
                "z": 2
              },{
                "date": "2020-02-02",
                "name": "Russia",
                "lat": 61.5240,
                "lon": 105.3188,
                "z": 2
              },{
                "date": "2020-02-02",
                "name": "Spain",
                "lat": 40.4168,
                "lon": 3.7038,
                "z": 1
              },{
                "date": "2020-02-01",
                "name": "Sweden",
                "lat": 60.1282,
                "lon": 18.6435,
                "z": 1
              },{
                "date": "2020-02-02",
                "name": "United Kingdom",
                "lat": 55.3781,
                "lon": 3.4360,
                "z": 2
              },
              {
                "date": "2020-02-02",
                "name": "United Arab Emirates",
                "lat": 25.2048,
                "lon": 55.2708,
                "z": 5
              }
            ]
        },{
            "name": "2020-02-03",
            "total": 17391,
            "data": [
              {
                "date": "2020-02-03",
                "name": "China",
                "lat": 30.5928,
                "lon": 114.3055,
                "z": 17238
              },
              {
                "date": "2020-02-03",
                "name": "Japan",
                "lat": 35.6804,
                "lon": 139.7690,
                "z": 20
              },
              {
                "date": "2020-02-03",
                "name": "Republic of Korea",
                "lat": 37.5665,
                "lon": 126.9780,
                "z": 15
              },
              {
                "date": "2020-02-03",
                "name": "Vietnam",
                "lat": 21.0278,
                "lon": 105.8342,
                "z": 8
              }, {
                "date": "2020-02-03",
                "name": "Singapore",
                "lat": 1.3521,
                "lon": 103.8198,
                "z": 18
              }, {
                "date": "2020-02-03",
                "name": "Australia",
                "lat": -33.8688,
                "lon": 151.2093,
                "z": 12
              }, {
                "date": "2020-02-03",
                "name": "Malaysia",
                "lat": 3.1390,
                "lon": 101.6869,
                "z": 8
              }, {
                "date": "2020-02-03",
                "name": "Cambodia",
                "lat": 11.5564,
                "lon": 104.9282,
                "z": 1
              },{
                "date": "2020-02-03",
                "name": "Philippines",
                "lat": 12.8797,
                "lon": 121.7740,
                "z": 2
              },
              {
                "date": "2020-02-03",
                "name": "Thailand",
                "lat": 13.7563,
                "lon": 100.5018,
                "z": 19
              }, {
                "date": "2020-02-03",
                "name": "Nepal",
                "lat": 27.7172,
                "lon": 85.3240,
                "z": 1
              }, {
                "date": "2020-02-03",
                "name": "Sri Lanka",
                "lat": 6.9271,
                "lon": 79.8612,
                "z": 1
              },{
                "date": "2020-02-03",
                "name": "India",
                "lat": 20.5937,
                "lon": 78.9629,
                "z": 3
              },
              {
                "date": "2020-02-03",
                "name": "USA",
                "lat": 38.9072,
                "lon": -77.0369,
                "z": 11
              },
              {
                "date": "2020-02-03",
                "name": "Canada",
                "lat": 45.4215296,
                "lon": -75.6971931,
                "z": 4
              },
              {
                "date": "2020-02-03",
                "name": "France",
                "lat": 48.8566,
                "lon": 2.3522,
                "z": 6
              },{
                "date": "2020-02-03",
                "name": "Finland",
                "lat": 61.9241,
                "lon": 25.7482,
                "z": 1
              },
              {
                "date": "2020-02-03",
                "name": "Germany",
                "lat": 52.5200,
                "lon": 13.4050,
                "z": 10
              },
              {
                "date": "2020-02-03",
                "name": "Italy",
                "lat": 41.8719,
                "lon": 12.5674,
                "z": 2
              },{
                "date": "2020-02-03",
                "name": "Russia",
                "lat": 61.5240,
                "lon": 105.3188,
                "z": 2
              },{
                "date": "2020-02-03",
                "name": "Spain",
                "lat": 40.4168,
                "lon": 3.7038,
                "z": 1
              },{
                "date": "2020-02-03",
                "name": "Sweden",
                "lat": 60.1282,
                "lon": 18.6435,
                "z": 1
              },{
                "date": "2020-02-03",
                "name": "United Kingdom",
                "lat": 55.3781,
                "lon": 3.4360,
                "z": 2
              },
              {
                "date": "2020-02-03",
                "name": "United Arab Emirates",
                "lat": 25.2048,
                "lon": 55.2708,
                "z": 5
              }
            ]
        },{
            "name": "2020-02-06",
            "total": 24554,
            "data": [
              {
                "date": "2020-02-06",
                "name": "China",
                "lat": 30.5928,
                "lon": 114.3055,
                "z": 24363
              },
              {
                "date": "2020-02-06",
                "name": "Japan",
                "lat": 35.6804,
                "lon": 139.7690,
                "z": 33
              },
              {
                "date": "2020-02-06",
                "name": "Republic of Korea",
                "lat": 37.5665,
                "lon": 126.9780,
                "z": 18
              },
              {
                "date": "2020-02-06",
                "name": "Vietnam",
                "lat": 21.0278,
                "lon": 105.8342,
                "z": 10
              }, {
                "date": "2020-02-06",
                "name": "Singapore",
                "lat": 1.3521,
                "lon": 103.8198,
                "z": 24
              }, {
                "date": "2020-02-06",
                "name": "Australia",
                "lat": -33.8688,
                "lon": 151.2093,
                "z": 13
              }, {
                "date": "2020-02-06",
                "name": "Malaysia",
                "lat": 3.1390,
                "lon": 101.6869,
                "z": 10
              }, {
                "date": "2020-02-06",
                "name": "Cambodia",
                "lat": 11.5564,
                "lon": 104.9282,
                "z": 1
              },{
                "date": "2020-02-06",
                "name": "Philippines",
                "lat": 12.8797,
                "lon": 121.7740,
                "z": 3
              },
              {
                "date": "2020-02-06",
                "name": "Thailand",
                "lat": 13.7563,
                "lon": 100.5018,
                "z": 25
              }, {
                "date": "2020-02-06",
                "name": "Nepal",
                "lat": 27.7172,
                "lon": 85.3240,
                "z": 1
              }, {
                "date": "2020-02-06",
                "name": "Sri Lanka",
                "lat": 6.9271,
                "lon": 79.8612,
                "z": 1
              },{
                "date": "2020-02-06",
                "name": "India",
                "lat": 20.5937,
                "lon": 78.9629,
                "z": 3
              },
              {
                "date": "2020-02-06",
                "name": "USA",
                "lat": 38.9072,
                "lon": -77.0369,
                "z": 11
              },
              {
                "date": "2020-02-06",
                "name": "Canada",
                "lat": 45.4215296,
                "lon": -75.6971931,
                "z": 5
              },
              {
                "date": "2020-02-06",
                "name": "France",
                "lat": 48.8566,
                "lon": 2.3522,
                "z": 6
              },{
                "date": "2020-02-06",
                "name": "Finland",
                "lat": 61.9241,
                "lon": 25.7482,
                "z": 1
              },
              {
                "date": "2020-02-06",
                "name": "Germany",
                "lat": 52.5200,
                "lon": 13.4050,
                "z": 12
              },
              {
                "date": "2020-02-06",
                "name": "Italy",
                "lat": 41.8719,
                "lon": 12.5674,
                "z": 2
              },{
                "date": "2020-02-06",
                "name": "Russia",
                "lat": 61.5240,
                "lon": 105.3188,
                "z": 2
              },{
                "date": "2020-02-06",
                "name": "Spain",
                "lat": 40.4168,
                "lon": 3.7038,
                "z": 1
              },{
                "date": "2020-02-06",
                "name": "Sweden",
                "lat": 60.1282,
                "lon": 18.6435,
                "z": 1
              },{
                "date": "2020-02-06",
                "name": "United Kingdom",
                "lat": 55.3781,
                "lon": 3.4360,
                "z": 2
              },
              {
                "date": "2020-02-06",
                "name": "United Arab Emirates",
                "lat": 25.2048,
                "lon": 55.2708,
                "z": 5
              }
            ]
        },{
            "name": "2020-02-10",
            "total": 40554,
            "data": [
              {
                "date": "2020-02-10",
                "name": "China",
                "lat": 30.5928,
                "lon": 114.3055,
                "z": 40235
              },
              {
                "date": "2020-02-10",
                "name": "Japan",
                "lat": 35.6804,
                "lon": 139.7690,
                "z": 26
              },
              {
                "date": "2020-02-10",
                "name": "Republic of Korea",
                "lat": 37.5665,
                "lon": 126.9780,
                "z": 27
              },
              {
                "date": "2020-02-10",
                "name": "Vietnam",
                "lat": 21.0278,
                "lon": 105.8342,
                "z": 14
              }, {
                "date": "2020-02-10",
                "name": "Singapore",
                "lat": 1.3521,
                "lon": 103.8198,
                "z": 43
              }, {
                "date": "2020-02-10",
                "name": "Australia",
                "lat": -33.8688,
                "lon": 151.2093,
                "z": 15
              }, {
                "date": "2020-02-10",
                "name": "Malaysia",
                "lat": 3.1390,
                "lon": 101.6869,
                "z": 18
              }, {
                "date": "2020-02-10",
                "name": "Cambodia",
                "lat": 11.5564,
                "lon": 104.9282,
                "z": 1
              },{
                "date": "2020-02-10",
                "name": "Philippines",
                "lat": 12.8797,
                "lon": 121.7740,
                "z": 3
              },
              {
                "date": "2020-02-10",
                "name": "Thailand",
                "lat": 13.7563,
                "lon": 100.5018,
                "z": 32
              }, {
                "date": "2020-02-10",
                "name": "Nepal",
                "lat": 27.7172,
                "lon": 85.3240,
                "z": 1
              }, {
                "date": "2020-02-10",
                "name": "Sri Lanka",
                "lat": 6.9271,
                "lon": 79.8612,
                "z": 1
              },{
                "date": "2020-02-10",
                "name": "India",
                "lat": 20.5937,
                "lon": 78.9629,
                "z": 3
              },
              {
                "date": "2020-02-10",
                "name": "USA",
                "lat": 38.9072,
                "lon": -77.0369,
                "z": 12
              },
              {
                "date": "2020-02-10",
                "name": "Canada",
                "lat": 45.4215296,
                "lon": -75.6971931,
                "z": 7
              },
              {
                "date": "2020-02-10",
                "name": "France",
                "lat": 48.8566,
                "lon": 2.3522,
                "z": 11
              },{
                "date": "2020-02-10",
                "name": "Finland",
                "lat": 61.9241,
                "lon": 25.7482,
                "z": 1
              },
              {
                "date": "2020-02-10",
                "name": "Germany",
                "lat": 52.5200,
                "lon": 13.4050,
                "z": 14
              },
              {
                "date": "2020-02-10",
                "name": "Italy",
                "lat": 41.8719,
                "lon": 12.5674,
                "z": 3
              },{
                "date": "2020-02-10",
                "name": "Russia",
                "lat": 61.5240,
                "lon": 105.3188,
                "z": 2
              },{
                "date": "2020-02-10",
                "name": "Spain",
                "lat": 40.4168,
                "lon": 3.7038,
                "z": 2
              },{
                "date": "2020-02-10",
                "name": "Sweden",
                "lat": 60.1282,
                "lon": 18.6435,
                "z": 1
              },{
                "date": "2020-02-10",
                "name": "United Kingdom",
                "lat": 55.3781,
                "lon": 3.4360,
                "z": 4
              },
              {
                "date": "2020-02-10",
                "name": "United Arab Emirates",
                "lat": 25.2048,
                "lon": 55.2708,
                "z": 7
              }
            ]
        },{
            "name": "2020-02-18",
            "total": 71429,
            "data": [
              {
                "date": "2020-02-18",
                "name": "China",
                "lat": 30.5928,
                "lon": 114.3055,
                "z": 70635
              },
              {
                "date": "2020-02-18",
                "name": "Japan",
                "lat": 35.6804,
                "lon": 139.7690,
                "z": 59
              },
              {
                "date": "2020-02-18",
                "name": "Republic of Korea",
                "lat": 37.5665,
                "lon": 126.9780,
                "z": 30
              },
              {
                "date": "2020-02-18",
                "name": "Vietnam",
                "lat": 21.0278,
                "lon": 105.8342,
                "z": 16
              }, {
                "date": "2020-02-18",
                "name": "Singapore",
                "lat": 1.3521,
                "lon": 103.8198,
                "z": 75
              }, {
                "date": "2020-02-18",
                "name": "Australia",
                "lat": -33.8688,
                "lon": 151.2093,
                "z": 15
              }, {
                "date": "2020-02-18",
                "name": "Malaysia",
                "lat": 3.1390,
                "lon": 101.6869,
                "z": 22
              }, {
                "date": "2020-02-18",
                "name": "Cambodia",
                "lat": 11.5564,
                "lon": 104.9282,
                "z": 1
              },{
                "date": "2020-02-18",
                "name": "Philippines",
                "lat": 12.8797,
                "lon": 121.7740,
                "z": 3
              },
              {
                "date": "2020-02-18",
                "name": "Thailand",
                "lat": 13.7563,
                "lon": 100.5018,
                "z": 35
              }, {
                "date": "2020-02-18",
                "name": "Nepal",
                "lat": 27.7172,
                "lon": 85.3240,
                "z": 1
              }, {
                "date": "2020-02-18",
                "name": "Sri Lanka",
                "lat": 6.9271,
                "lon": 79.8612,
                "z": 1
              },{
                "date": "2020-02-18",
                "name": "India",
                "lat": 20.5937,
                "lon": 78.9629,
                "z": 3
              },
              {
                "date": "2020-02-18",
                "name": "USA",
                "lat": 38.9072,
                "lon": -77.0369,
                "z": 15
              },
              {
                "date": "2020-02-18",
                "name": "Canada",
                "lat": 45.4215296,
                "lon": -75.6971931,
                "z": 7
              },
              {
                "date": "2020-02-18",
                "name": "France",
                "lat": 48.8566,
                "lon": 2.3522,
                "z": 12
              },{
                "date": "2020-02-18",
                "name": "Finland",
                "lat": 61.9241,
                "lon": 25.7482,
                "z": 1
              },
              {
                "date": "2020-02-18",
                "name": "Germany",
                "lat": 52.5200,
                "lon": 13.4050,
                "z": 16
              },
              {
                "date": "2020-02-18",
                "name": "Italy",
                "lat": 41.8719,
                "lon": 12.5674,
                "z": 3
              },{
                "date": "2020-02-18",
                "name": "Russia",
                "lat": 61.5240,
                "lon": 105.3188,
                "z": 2
              },{
                "date": "2020-02-18",
                "name": "Spain",
                "lat": 40.4168,
                "lon": 3.7038,
                "z": 2
              },{
                "date": "2020-02-18",
                "name": "Sweden",
                "lat": 60.1282,
                "lon": 18.6435,
                "z": 1
              },{
                "date": "2020-02-18",
                "name": "United Kingdom",
                "lat": 55.3781,
                "lon": 3.4360,
                "z": 9
              },
              {
                "date": "2020-02-18",
                "name": "United Arab Emirates",
                "lat": 25.2048,
                "lon": 55.2708,
                "z": 9
              }
            ]
        }
    ];

  // Initiate the chart
  $('#container').highcharts('Map', {

    title: {
      text: 'Novel Coronavirus(2019-nCoV) Situation Report '
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
      pointFormat: '<b>Country</b> {point.name} <br> <b>Cases</b> {point.z} <br> <b>Date</b> {point.date}'
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
      text: 'Total cases of 2019-nCoV'
    },
    subtitle: {
      text: 'Source: who.int'
    },
    xAxis: {
      categories: [
        '2020-01-25',
        '2020-01-26',
        '2020-01-27',
        '2020-01-28',
        '2020-01-29',
        '2020-01-30',
        '2020-01-31',
        '2020-02-01',
        '2020-02-02',
        '2020-02-03',
        '2020-02-06',
        '2020-02-10',
        '2020-02-18',
      ],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Globally confirmed cases'
      }
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [{
      name: 'Total number of cases',
      data: [1320, 2014, 2798, 4593,6065,7818,9826,11953,14557,17391,24554,40554,71429]
    },{
      name: 'Number of deaths',
      data: [41, 56, 80, 106,132,170,213,259,305,362,492,910,1775]
    }]
  });


  chart = $('#container').highcharts();
  accidentsNumber = $('#accidents-number')[0];
  accidentsNumber.innerHTML = dataSequence[0].total + " Globally confirmed cases";

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
    accidentsNumber.innerHTML = dataSequence[input.value].total + " Globally confirmed cases"; // # of accidents
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
