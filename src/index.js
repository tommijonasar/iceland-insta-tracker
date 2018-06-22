//import { GoogleCharts } from "google-charts";
import Chart from "chart.js";

//Load the charts library with a callback
//GoogleCharts.load(drawBarChart);
//GoogleCharts.load(drawLineChart);

function getPlayerData(player) {
  // Albert
  if (player === "albert") {
    return [20253, 22454, 24692, 26286, 26826, 27795];
  }
  // Alfreð
  else if (player === "alfred") {
    return [76753, 81485, 85919, 88550, 90022, 94554];
  }
  // Ari
  else if (player === "ari") {
    return [21628, 23612, 25529, 26645, 27372, 28848];
  }
  // Arnór
  else if (player === "arnor") {
    return [16976, 17355, 17586, 18156, 18291, 18520];
  }
  // Aron
  else if (player === "aron") {
    return [96394, 101688, 107104, 110352, 112367, 116365];
  }
  // Birkir Bjarna
  else if (player === "birkir_bjarna") {
    return [96515, 106054, 114103, 119749, 123467, 132198];
  }
  // Birkir Már
  else if (player === "birkir_mar") {
    return [7559, 7922, 8058, 8148, 8316, 8457];
  }
  // Björn
  else if (player === "bjorn") {
    return [5354, 5354, 5354, 5611, 6248, 6445];
  }
  // Emil
  else if (player === "emil") {
    return [14939, 15787, 17041, 17902, 18451, 19099];
  }
  // Frederik
  else if (player === "frederik") {
    return [6696, 7862, 9125, 11202, 12053, 13234];
  }
  // Gylfi
  else if (player === "gylfi") {
    return [180146, 184401, 187716, 189752, 191664, 193900];
  }
  // Hannes
  else if (player === "hannes") {
    return [44568, 47966, 50839, 52940, 54536, 56282];
  }
  // Hólmar
  else if (player === "holmar") {
    return [15207, 16176, 16731, 17557, 18175, 18996];
  }
  // Hörður
  else if (player === "hordur") {
    return [31407, 33751, 36159, 40189, 42068, 45647];
  }
  // Jóhann Berg
  else if (player === "johann") {
    return [36951, 39928, 42640, 44390, 45515, 47190];
  }
  // Jón Daði
  else if (player === "jon") {
    return [23314, 24732, 26013, 26848, 27552, 28905];
  }
  // Kári
  else if (player === "kari") {
    return [567, 567, 1495, 1768, 1890, 2145];
  }
  // Ragnar
  else if (player === "ragnar") {
    return [37182, 41012, 44148, 46087, 47364, 51086];
  }
  // Rúnar Alex
  else if (player === "runar") {
    return [6874, 7570, 8145, 8552, 8839, 9543];
  }
  // Rúrik
  else if (player === "rurik") {
    return [319994, 428081, 577867, 678632, 733783, 836923];
  }
  // Samúel
  else if (player === "samuel") {
    return [9970, 10366, 10636, 11262, 11460, 11952];
  }
  // Sverrir Ingi
  else if (player === "sverrir") {
    return [8257, 8833, 9380, 9767, 9998, 10325];
  }
  // Ólafur Skúlason
  else if (player === "olafur") {
    return [1501, 2588, 2874, 2998, 3113, 3277];
  }
}

function getDates() {
  return ["17.06", "18.06", "19.06", "20.06", "21.06", "22.06"];
}

var myChart;

function drawBarChart(playerId, playerName) {
  var ctx = document.getElementById("myChart");
  var playerNameElement = document.getElementById("player-name");
  playerNameElement.innerHTML = playerName;
  var playerFollowersElement = document.getElementById("follower-count");
  var playerPercentageElement = document.getElementById("percentage-jump");
  var data = [];
  data = getPlayerData(playerId);

  playerFollowersElement.innerHTML = data[data.length - 1];
  var increase = data[data.length - 1] - data[data.length - 2];
  var percentage = ((increase / data[data.length - 2]) * 100).toFixed(2);
  playerPercentageElement.innerHTML = "+" + percentage + "%";

  myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: getDates(),
      datasets: [
        {
          label: "# of Followers",
          data: data,
          backgroundColor: [
            "#02529C",
            "#E14044",
            "#CADAE9",
            "#02529C",
            "#E14044",
            "#CADAE9",
            "#02529C",
            "#E14044",
            "#CADAE9"
          ]
        }
      ]
    },
    options: {
      responsive: true,

      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ],
        xAxes: [
          {
            barPercentage: 0.2
          }
        ]
      }
    }
  });
}

// https://code.tutsplus.com/tutorials/getting-started-with-chartjs-line-and-bar-charts--cms-28384
// https://justfreetemplates.com/web-templates/view/4034-spark-free-bootstrap-4-web-template.html

document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    // document ready
    var playerSelect = document.getElementById("player-select");

    drawBarChart("albert", "Albert Guðmundsson");

    playerSelect.addEventListener("change", event => {
      myChart.destroy();
      drawBarChart(
        event.target.value,
        event.target.options[event.target.selectedIndex].text
      );
    });
  }
};
