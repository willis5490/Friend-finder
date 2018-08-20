var friends = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    })

    app.post("/api/friends", function (req, res) {
        
     var user = req.body;

     var bestFriendIndex = 0;
     var minimumDifference = 40;
 
     // in this for-loop, start off with a zero difference and compare the user and the ith friend scores, one set at a time
     //  whatever the difference is, add to the total difference
     for(var i = 0; i < friends.length; i++) {
       var totalDifference = 0;
       for(var j = 0; j < friends[i].scores.length; j++) {
         var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
         totalDifference += difference;
       }
 
       // if there is a new minimum, change the best friend index and set the new minimum for next iteration comparisons
       if(totalDifference < minimumDifference) {
         bestFriendIndex = i;
         minimumDifference = totalDifference;
       }
     }
 
     // after finding match, add user to friend array
     friends.push(user);
 
     // send back to browser the best friend match
     res.json(friends[bestFriendIndex]);
    
    });
}