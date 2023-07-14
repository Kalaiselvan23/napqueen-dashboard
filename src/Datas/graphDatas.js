const graphDatas=[
    {
        type:"line",
        data:{
            labels:[23,24,25,26,27,28,29,30,1,2,3,4],
            datasets:[
              {
              label:"ACOS",
              backgroundColor:"blue",
              borderColor:"blue",
              data:[0,2,0.1,0.1,8,0.4,11,2,8,0.2,9,6]
              },
              {
                label:"CTR",
                backgroundColor:"red",
                borderColor:"red",
                data:[5,5,7,4,7,9,3.5,7.5,6.6,7.5,3,5,6]
                },
            ]
          },
          options:{
            scales: {
            x: {
              title: {
                display: true,
                text: 'Date September 23-4',
              },
            },
            y: {
              title: {
                display: true,
                text: 'Ads Revenue',
              },
              ticks: {
                callback: (value) => `$${value}k`,
              },
            },
          },
        },
          graphTitle:"Ads Spend & Revenue",
          subDivs:[
            {
                head:"Ads Spend",
                value:"$1000",
                percent:"9.9%",
                trend:"up"
            },
            {
                head:"Revenue",
                value:"$100",
                percent:"5.9%",
                trend:"down",
                
            },
            {
                head:"CPC",
                value:"$1000",
                percent:"9.9%",
                trend:"down"
            },{
                head:"ACOS",
                value:"$1000",
                percent:"9.9%",
                trend:"up"
            }
          ]
    },
    {
        type:"line",
        data:{
            labels:[23,24,25,26,27,28,29,30,1,2,3,4],
            datasets:[
              {
              label:"Date Sep 23-24",
              backgroundColor:"blue",
              borderColor:"blue",
              data:[5,5,7,4,7,9,3.5,7.5,6.6,7.5,3,5,6]
              },
              {
                label:"CTR",
                backgroundColor:"#32D0D0",
                borderColor:"#32D0D0",
                data:[25,2,0.9,8,0.1,0.12,10,2,8,0.3,9,7]
                },
            ]
          },
          options:{
            scales: {
            x: {
              title: {
                display: true,
                text: 'Date September 23-4',
              },
            },
            y: {
              title: {
                display: true,
                text: 'Clicks',
              },
              ticks: {
                callback: (value) => `$${value}k`,
              },
            },
          },
        },
          graphTitle:"Click Through Rate & Clicks",
          subDivs:[
            {
                head:"Impression",
                value:"$10.5M",
                percent:"9.9%",
                trend:"down"
            },
            {
                head:"Clicks",
                value:"10.5K",
                percent:"5.9%",
                trend:"up",
            },
            {
                head:"CTR",
                value:"0.16%",
                percent:"9.9%",
                trend:"down"
            }
          ]
    },
    {
        type:"bar",
        data:{
            labels:[23,24,25,26,27,28,29,30],
            datasets:[
              {
              label:"Date Sep 23-24",
              backgroundColor:"blue",
              borderColor:"blue",
              data:[5,5,7,4,7,9,3.5,7.5,6.6,7.5,3,5,6]
              },
            ]
          },
          options:{
            scales: {
            x: {
              title: {
                display: true,
                text: 'Date September 23-4',
              },
            },
            y: {
              title: {
                display: true,
                text: 'CVR',
              },
              ticks: {
                callback: (value) => `$${value}k`,
              },
            },
          },
        },
          graphTitle:"Conversation Rate & Order",
          subDivs:[
            {
                head:"CVR",
                value:"$10.5M",
                percent:"9.9%",
                trend:"down",
            },
            {
                head:"Orders",
                value:"10.5K",
                percent:"5.9%",
                trend:"up"
            },
          ]
    }
]
export default graphDatas