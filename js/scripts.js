var html = '';
var tableContent = document.getElementById('table-content'); //get the empty table content area
var players = [
  {
    first:'Angela',
    last: 'Smith',
    position: 'Guard',
    year: 'Junior'
  },
    {
    first:'Ashley',
    last: 'Roberts',
    position: 'Guard',
    year: 'Senior'
  },
    {
    first:'Sarah',
    last: 'Spangler',
    position: 'Forward',
    year: 'Freshman'
  },
   {
    first:'Catherine',
    last: 'McAllister',
    position: 'Forward',
    year: 'Senior'
  },
   {
    first:'Haley',
    last: 'Bishop',
    position: 'Center',
    year: 'Sophomore'
  },
  {
   first:'Renee',
   last: 'Williams',
   position: 'Guard',
   year: 'Senior'
 },
 {
  first:'Jennifer',
  last: 'Olsen',
  position: 'Forward',
  year: 'Junior'
  }
];

function buildTable(array) {
  // add table headers
  html += '<tr><th>First Name</th><th>Last Name</th><th>Position</th><th>Year</th></tr>';

  // populate the table with player data
  for (i=0; i<array.length; i++) {
    if(array[i].year === 'Senior') { // make the player's information bold if the player is a senior
      html += '<tr>';
      html += '<td><strong>' + array[i].first + '</strong></td>';
      html += '<td><strong>' + array[i].last + '</strong></td>';
      html += '<td><strong>' + array[i].position + '</strong></td>';
      html += '<td><strong>' + array[i].year + '</strong></td>';
      html += '</tr>';
    }
    else {
      html += '<tr>';
      html += '<td>' + array[i].first + '</td>';
      html += '<td>' + array[i].last + '</td>';
      html += '<td>' + array[i].position + '</td>';
      html += '<td>' + array[i].year + '</td>';
      html += '</tr>';
    }
  }
  // Display the results in the empty tableArea
  tableContent.innerHTML = html;
}

buildTable(players);

/* EXTRA CREDIT CHALLENGE (5 POINTS):
      Compare the list above with the list below,
      find the players that made the All-State team,
      and display a message with the results.
      Display the message in a div below the table. */

var allStars = [
  {
    first:'Melanie',
    last: 'Akers',
    position: 'Forward',
    school:'Johnson High School'
  },
    {
    first:'Olivia',
    last: 'Carter',
    position: 'Foward',
    school:'Providence Day School'
  },
    {
    first:'Sarah',
    last: 'Spangler',
    position: 'Forward',
    school:' Springfield High School'
  },
   {
    first:'Ursula',
    last: 'Jones',
    position: 'Guard',
    school: 'Chatham Senior High School'
  },
   {
    first:'Theresa',
    last: 'Hollinger',
    position: 'Guard',
    school: 'St. Joseph Academy'
  },
  {
   first:'Darleen',
   last: 'Lawrence',
   position: 'Guard',
   school: 'Everton High School'
 },
 {
  first:'Jennifer',
  last: 'Olsen',
  position: 'Forward',
  school: 'Springfield High School'
  }
];
var confirmedStars = '';
var allStarsArea = document.getElementById('all-stars'); //get the empty div area
var allStarsTxt = '';

function findAllStars(starsList, potentialStars) {
  for (i=0; i<potentialStars.length; i++) {
    for (j=0; j<starsList.length; j++) {
      if (potentialStars[i].first === starsList[j].first
          && potentialStars[i].last === starsList[j].last
          && potentialStars[i].position === starsList[j].position) {
            confirmedStars += potentialStars[i].first + ' ' + potentialStars[i].last + '<br>';
      }
    }
  }
  allStarsTxt += '<strong>Congratulations to Springfield\'s 2018 North Carolina All-State honorees: </strong>' + '<br>' + confirmedStars;
  allStarsArea.innerHTML = allStarsTxt;
}

findAllStars(allStars, players);
