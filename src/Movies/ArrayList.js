import breakingBad from '../images/breaking-bad.jpg';
import batman from '../images/batman.jpg';
import freshprince  from '../images/freshprince.jpg';
import godfather from '../images/godfather.jpg';
import mywifeandkids from '../images/mywifeandkids.jpg';
import onlyfoolsandhorses from '../images/onlyfoolsandhorses.jpeg';
import React from 'react';

function getShowsAndMovies() {
    return [
        {
	         id: 'breakingBad', 
	         name: 'Breaking bad', 
	         img: breakingBad, 
	         details: "A terminally ill chemistry teacher teams with a former student to manufacture crystal meth to secure his family's future."
        },
        { 
	        id: 'batman', 
	        name: 'Batman', 
	        img: batman,
	        details: " The young Bruce Wayne (Gus Lewis) leads a privileged life as the son of wealthy, philanthropist parents, both of whom stress their commitment to improving the lives of the citizens of crime-ridden Gotham City. After his mother and father are murdered by a mugger, however, Wayne grows into an impudent young man (Christian Bale), full of rage and bent on retribution until encouraged by his childhood "
        },
        { 
        	id: 'freshprince',
        	name: 'P.s. I Love You',
        	img: freshprince, 
        	details : "The Fresh Prince of Bel-Air is an American sitcom television series created by Quincy Jones, Andy and Susan Borowitz, that originally aired on NBC from September 10, 1990 to May 20, 1996. The show stars Will Smith as a fictionalized version of himself, a street-smart teenager from West Philadelphia who is sent to move in with his wealthy uncle and aunt in their Bel Air mansion after getting into a fight in his hometown. In the series, his lifestyle often clashes with the lifestyle of his relatives in Bel Air. The series ran for six seasons and aired 148 episodes"
        },
        { 
        	id: 'godfather', 
        	name: 'Godfather', 
        	img: godfather,
        	details: "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate."
        },
        { 
        	id: 'mywifeandkids', 
        	name: 'My wife and kids',
        	img: mywifeandkids, 
        	details: "My Wife and Kids is an American sitcom that ran on ABC from March 28, 2001 to May 17, 2005. The series was produced by Touchstone Television. It starred Damon Wayans as Michael Kyle, the patriarch of a semi-dysfunctional upper middle class African-American family who rules his household with a unique and distinct parenting style. As he teaches his three children some of life's lessons, he does so with his own brand of humor. Wayans and veteran television writer/producer Don Reo co-created and co-produced the series."
        	},
        { 
        	id: 'onlyfoolsandhorses', 
        	name: 'Only fools and horses', 
        	img: onlyfoolsandhorses, 
        	details: "Set in Peckham in south-east London, it stars David Jason as ambitious market trader Derek  Trotter, Nicholas Lyndhurst as his younger brother Rodney Trotter, and Lennard Pearce as their elderly Grandad as their sidekick. Backed by a strong supporting cast, the series follows the Trotters' highs and lows in life, in particular their attempts to get rich."
        }
    ];
}

export default getShowsAndMovies; 