var fs = require('fs');

function servePage(req, res)
{
	var page = (req.query && req.query.page) ? req.query.page : 'index';
	fs.readFile('views/'+page+'.html', 'utf8', function (err,data) {
		if (err) {
			return console.log(err);
		}
		res.send(data);
	});	
}



function executeCommand(req, res)
{

}





exports.buntweb = function bunt(req, res) {
	
	switch (req.method) {
	    case 'GET':
	    	servePage(req, res);
	      /*if (req.headers && req.headers['accept'] && req.headers['accept'].includes('html'))
	      {
	      	
	      }*/
	      /*else
	      {
			apiLoadTweets(req, res); //show all tweets	
	      }*/
	      break;
	    /*case 'PUT':
	      updateTweet(req, res); //expect checked=true to tweet & delete, otherwise do nothing
	      break;
	      */
	    case 'POST':
	      executeCommand(req, res); //add new tweet, not yet sent to twitter
	      break;
	    /*case 'DELETE':
	      deleteTweet(req, res); //remove a tweet
	      break;	      
	    default:
	      res.status(500).send({ error: 'Unable to handle ' + req.method + ' requests.' });
	      break;
	      */
  }  
};




