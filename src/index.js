//import { GoogleCharts } from "google-charts";
import Chart from "chart.js";

//Load the charts library with a callback
//GoogleCharts.load(drawBarChart);
//GoogleCharts.load(drawLineChart);

function getPlayerData(player) {
  // Albert
  if (player === "albert") {
    return [20253, 22454, 24692, 26286, 26826];
  }
  // Alfreð
  else if (player === "alfred") {
    return [76753, 81485, 85919, 88550, 90022];
  }
  // Ari
  else if (player === "ari") {
    return [21628, 23612, 25529, 26645, 27372];
  }
  // Arnór
  else if (player === "arnor") {
    return [16976, 17355, 17586, 18156, 18291];
  }
  // Aron
  else if (player === "aron") {
    return [96394, 101688, 107104, 110352, 112367];
  }
  // Birkir Bjarna
  else if (player === "birkir_bjarna") {
    return [96515, 106054, 114103, 119749, 123467];
  }
  // Birkir Már
  else if (player === "birkir_mar") {
    return [7559, 7922, 8058, 8148, 8316];
  }
  // Björn
  else if (player === "bjorn") {
    return [5354, 5354, 5354, 5611, 6248];
  }
  // Emil
  else if (player === "emil") {
    return [14939, 15787, 17041, 17902, 18451];
  }
  // Frederik
  else if (player === "frederik") {
    return [6696, 7862, 9125, 11202, 12053];
  }
  // Gylfi
  else if (player === "gylfi") {
    return [180146, 184401, 187716, 189752, 191664];
  }
  // Hannes
  else if (player === "hannes") {
    return [44568, 47966, 50839, 52940, 54536];
  }
  // Hólmar
  else if (player === "holmar") {
    return [15207, 16176, 16731, 17557, 18175];
  }
  // Hörður
  else if (player === "hordur") {
    return [31407, 33751, 36159, 40189, 42068];
  }
  // Jóhann Berg
  else if (player === "johann") {
    return [36951, 39928, 42640, 44390, 45515];
  }
  // Jón Daði
  else if (player === "jon") {
    return [23314, 24732, 26013, 26848, 27552];
  }
  // Kári
  else if (player === "kari") {
    return [567, 567, 1495, 1768, 1890];
  }
  // Ragnar
  else if (player === "ragnar") {
    return [37182, 41012, 44148, 46087, 47364];
  }
  // Rúnar Alex
  else if (player === "runar") {
    return [6874, 7570, 8145, 8552, 8839];
  }
  // Rúrik
  else if (player === "rurik") {
    return [319994, 428081, 577867, 678632, 733783];
  }
  // Samúel
  else if (player === "samuel") {
    return [9970, 10366, 10636, 11262, 11460];
  }
  // Sverrir Ingi
  else if (player === "sverrir") {
    return [8257, 8833, 9380, 9767, 9998];
  }
  // Ólafur Skúlason
  else if (player === "olafur") {
    return [1501, 2588, 2874, 2998, 3113];
  }
}

function getDates() {
  return ["17.06", "18.06", "19.06", "20.06", "21.06"];
}

var myChart;

function drawBarChart(playerId, playerName) {
  var ctx = document.getElementById("myChart");
  var playerNameElement = document.getElementById("player-name");
  playerNameElement.innerHTML = playerName;
  var data = [];
  data = getPlayerData(playerId);

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
