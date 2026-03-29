function calculateFootballPoints() {
  const clubs = [
    { name: "Manchester United", wins: 20, draws: 10, losses: 8 },
    { name: "Liverpool", wins: 18, draws: 12, losses: 8 },
    { name: "Chelsea", wins: 25, draws: 13, losses: 5 },
    { name: "Arsenal", wins: 17, draws: 11, losses: 10 },
    { name: "Manchester City", wins: 22, draws: 8, losses: 8 }
  ];

  let highestPoints = 0;
  let topClub = "";

  console.log("Club Points:")
  for (let i = 0; i < clubs.length; i++) {
    const club = clubs[i];
    const points = (club.wins * 3) + (club.draws * 1);
    console.log(`${club.name}: ${points} points`);
    
    if (points > highestPoints) {
      highestPoints = points;
      topClub = club.name;
    }
}
console.log(`Top Club: ${topClub} with ${highestPoints} points`); 
}
calculateFootballPoints();