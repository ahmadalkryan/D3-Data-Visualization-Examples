// ============================================
// Homework: Dynamic Teams Board
// ============================================

const leaderboard = d3.select("#leaderboard");

let teamsData = [
  { name: "Real Madrid", points: 15, goalsFor: 22, goalsAgainst: 5 },
  { name: "Manchester City", points: 13, goalsFor: 20, goalsAgainst: 8 },
  { name: "Bayern Munich", points: 12, goalsFor: 18, goalsAgainst: 7 },
  { name: "Barcelona", points: 10, goalsFor: 16, goalsAgainst: 9 },
  { name: "PSG", points: 9, goalsFor: 15, goalsAgainst: 10 },
  { name: "Liverpool", points: 8, goalsFor: 14, goalsAgainst: 11 },
];

const availableTeams = [
  "Chelsea",
  "Arsenal",
  "Dortmund",
  "Ajax",
  "Kadish",
  "Totnham",
  "Porto",
  "Milan",
  "Benfica",
  "Napoli",
  "Atletico Madrid",
  "Inter Milan",
];

function sortTeams(data) {
  return data.sort((a, b) => {
    if (b.points !== a.points) {
      return b.points - a.points;
    }

    return b.goalsFor - b.goalsAgainst - (a.goalsFor - a.goalsAgainst);
  });
}

function calculateRanks(data) {
  return data.map((team, index) => ({
    ...team,
    rank: index + 1,
    gd: team.goalsFor - team.goalsAgainst,
  }));
}

function createTeamHTML(team) {
  return `
    <div class="position">${team.rank}</div>
    <div class="name">${team.name}</div>
    <div class="points">${team.points}</div>
    <div class="gd">${team.gd}</div>
  `;
}

// function updateBoard(data) {
//   const sortedData = sortTeams([...data]);
//   const rankedData = calculateRanks(sortedData);

//   // ========== join() ==========
//   const teams = leaderboard
//     .selectAll(".team")
//     .data(rankedData, (d) => d.name)

//     .join(
//       // ENTER:

//       (enter) => {
//         const enterSelection = enter
//           .append("div")
//           .classed("team", true)
//           .classed("enter", true)
//           .style("opacity", 0)
//           .style("transform", "translateX(-100px)")
//           .html((d) => createTeamHTML(d));

//         enterSelection
//           .transition()
//           .duration(800)
//           .style("opacity", 1)
//           .style("transform", "translateX(0)")
//           .on("end", function () {
//             d3.select(this).classed("enter", false);
//           });

//         return enterSelection;
//       },

// //UPDATE :

//       (update) => {
//         const updateSelection = update
//           .classed("update", true)
//           .html((d) => createTeamHTML(d));

//         updateSelection
//           .transition()
//           .duration(800)
//           .style("transform", (d, i) => `translateY(${i * 60}px)`)
//           .on("end", function () {
//             d3.select(this).classed("update", false);
//           });

//         return updateSelection;
//       },

//       (exit) => {
//         const exitSelection = exit.classed("exit", true);

//         exitSelection
//           .transition()
//           .duration(800)
//           .style("opacity", 0)
//           .style("transform", "translateX(100px)")
//           .remove();

//         return exitSelection;
//       }
//     );

//   return teams;
// }

function updateBoard(data) {
  const sortedData = sortTeams([...data]);

  const teams = leaderboard.selectAll(".team").data(sortedData, (d) => d.name);

  // ========== ENTER ==========

  const enterTeams = teams
    .enter()
    .append("div")
    .classed("team", true)
    .classed("enter", true)
    .style("opacity", 0)
    .style("transform", "translateX(-100px)");

  enterTeams.html((d) => {
    const rank = sortedData.indexOf(d) + 1;
    // const rank = sortedData.forEach((team, index) => {
    //   team.rank = index + 1;
    // });

    return `
            <div class="position">${rank}</div>
            <div class="name">${d.name}</div>
            <div class="points">${d.points}</div>
            <div class="gd">${d.goalsFor - d.goalsAgainst}</div>
        `;
  });

  enterTeams
    .transition()
    .duration(800)
    .style("opacity", 1)
    .style("transform", "translateX(0)")
    .on("end", function () {
      d3.select(this).classed("enter", false);
    });

  // ========== UPDATE ==========

  const updateTeams = teams.classed("update", true);

  updateTeams.html((d) => {
    const rank = sortedData.indexOf(d) + 1;
    return `
            <div class="position">${rank}</div>
            <div class="name">${d.name}</div>
            <div class="points">${d.points}</div>
            <div class="gd">${d.goalsFor - d.goalsAgainst}</div>
        `;
  });

  updateTeams
    .transition()
    .duration(800)
    .style("transform", "translateY(0)")
    .on("end", function () {
      d3.select(this).classed("update", false);
    });

  // ========== EXIT ==========

  const exitTeams = teams.exit().classed("exit", true);

  exitTeams
    .transition()
    .duration(800)
    .style("opacity", 0)
    .style("transform", "translateX(100px)")
    .remove();
}

// Random UPdate Data

function updateData() {
  teamsData.forEach((team) => {
    if (Math.random() < 0.3) {
      const oldPoints = team.points;
      team.points += Math.floor(Math.random() * 3) + 1;
      team.goalsFor += Math.floor(Math.random() * 3);
      team.goalsAgainst += Math.floor(Math.random() * 2);
      console.log(`   ${team.name}: ${oldPoints} → ${team.points} `);
    }
  });

  if (Math.random() < 0.2 && teamsData.length < 10) {
    const unusedTeams = availableTeams.filter(
      (name) => !teamsData.some((team) => team.name === name)
    );

    if (unusedTeams.length > 0) {
      const newTeamName =
        unusedTeams[Math.floor(Math.random() * unusedTeams.length)];
      const newTeam = {
        name: newTeamName,
        points: Math.floor(Math.random() * 8) + 1,
        goalsFor: Math.floor(Math.random() * 15) + 5,
        goalsAgainst: Math.floor(Math.random() * 12) + 3,
      };
      teamsData.push(newTeam);
      console.log(`   NEW TEAM  ${newTeam.name}`);
    }
  }

  if (Math.random() < 0.15 && teamsData.length > 4) {
    const removeIndex = Math.floor(Math.random() * teamsData.length);
    const removedTeam = teamsData.splice(removeIndex, 1)[0];
    console.log(`   Remove Team: ${removedTeam.name}`);
  }

  return teamsData;
}

updateBoard(teamsData);

setInterval(() => {
  const newData = updateData();
  updateBoard(newData);
}, 2500);
