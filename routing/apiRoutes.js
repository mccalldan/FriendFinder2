

var friends = require("./app/friends.js");

app.get("/api/friends", function(req, res) {
  res.json(friends);
});

app.post("/api/friends", function(req, res) {

	var	friendScores = [];

		var newFriend 	= req.body;
		var userName 	= newFriend.name;
		var userPhoto 	= newFriend.photo;
		var userScores 	= newFriend.scores;

		var totalDifference = [];

		function add(a, b) {
    	return a + b;
		}
	
		for  (var i=0; i< friends.length; i++) {

			console.log(friends[i].name);
			var difference = [];

			// Loop through all the scores of each friend
			for (var x=0; x< friends[i].scores[x]; x++){
					console.log(friends.scores[x]);
				// Calculate the difference between the scores and sum them into the totalDifference
				difference[x] += Math.abs(parseInt(userScores[x]) - parseInt(friends[i].scores[x]));
					console.log(totalDifference);
			
				
				}
				var sum = difference.reduce(add,0);
				totalDifference.push(sum);
				console.log(totalDifference);
			}

		}

		
		friends.push(newFriend);

		
		res.json(totalDifference);
		
	});

}

