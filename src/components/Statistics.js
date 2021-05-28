import { useState, useEffect } from 'react';

// import senate from '../pro-congress-117-senate.json';
import house from '../pro-congress-117-house.json';

var statistics = 
{
    "senate": {
        "numberOfDemocrats" : "",
        "numberOfRepublicans" : "",
        "numberOfIndependents" : "",
        "averageVotesWithPartyDem" : "",
        "averageVotesWithPartyRep" : "",
        "leastLoyal" : [],
        "mostLoyal" : [],
        "leastEngaged" : [],
        "mostEngaged" : []
    },
    "house": {
        "numberOfDemocrats" : "",
        "numberOfRepublicans" : "",
        "numberOfIndependents" : "",
        "averageVotesWithPartyDem" : "",
        "averageVotesWithPartyRep" : "",
        "leastLoyal" : [],
        "mostLoyal" : [],
        "leastEngaged" : [],
        "mostEngaged" : []
    }
};

var demsHouse, repsHouse, indsHouse, demsSenate, repsSenate, indsSenate, sumRep = 0, sumDem = 0, numSenate, numHouse;
var membersSenate, membersHouse;

const Statistics = () => {
    const [senate, setSenate] = useState({ "senate": {}, "house": {}});
    const url = 'https://api.propublica.org/congress/v1/117/senate/members.json';

    useEffect(() => {
        const fetchSenate = async () => {
            try {
                const response = await fetch(url, {
                    method: 'GET', // *GET, POST, PUT, DELETE, etc.
                    headers: {
                    'X-API-Key': 'vctcu5pNe2XTfQF7qVnf8rhPjJpze73auOv5nHn9'
                    }
                });
                if (!response.ok) throw response.statusText;
                const json = await response.json();
                alert(json);
                setSenate(json);
            } catch (e) {
                alert(e.message);
            }            
        };
        fetchSenate();
    }, [url]);
    
    membersHouse = house.results[0].members;
    membersSenate = senate.results[0].members;
    numSenate = membersSenate.length;
    numHouse = membersHouse.length;

    demsSenate = membersSenate.filter(member => member.party === 'D');
    repsSenate = membersSenate.filter(member => member.party === 'R');
    indsSenate = membersSenate.filter(member => member.party === 'I');
    demsHouse = membersHouse.filter(member => member.party === 'D');
    repsHouse = membersHouse.filter(member => member.party === 'R');
    indsHouse = membersHouse.filter(member => member.party === 'I');

    statistics.senate.numberOfDemocrats = demsSenate.length;
    statistics.senate.numberOfRepublicans = repsSenate.length;
    statistics.senate.numberOfIndependents = indsSenate.length;
    statistics.house.numberOfDemocrats = demsHouse.length;
    statistics.house.numberOfRepublicans = repsHouse.length;
    statistics.house.numberOfIndependents = indsHouse.length;

    demsSenate.forEach(member => sumDem += member.votes_with_party_pct);
    statistics.senate.averageVotesWithPartyDem = sumDem/demsSenate.length;
    repsSenate.forEach(member => sumRep += member.votes_with_party_pct);
    statistics.senate.averageVotesWithPartyRep = sumRep/repsSenate.length;

    sumDem = 0; sumRep = 0;
    demsHouse.forEach(member => sumDem += member.votes_with_party_pct);
    statistics.house.averageVotesWithPartyDem = sumDem/demsHouse.length;
    repsHouse.forEach(member => sumRep += member.votes_with_party_pct);
    statistics.house.averageVotesWithPartyRep = sumRep/repsHouse.length;

    function votesWithParty(type, members, num) {
        let n = Math.ceil(num/10) - 1;
        while(members[n].votes_with_party_pct === members[n+1].votes_with_party_pct)
            n++;
        members.reduce((acc, curr, idx) => idx > n ? acc : type.push(Object.assign({}, curr)) && type, []);
    }

    membersSenate.sort((a,b) => a.votes_with_party_pct - b.votes_with_party_pct);
    votesWithParty(statistics.senate.leastLoyal, membersSenate, numSenate);

    membersSenate.sort((a,b) => b.votes_with_party_pct - a.votes_with_party_pct);
    votesWithParty(statistics.senate.mostLoyal, membersSenate, numSenate);

    membersHouse.sort((a,b) => a.votes_with_party_pct - b.votes_with_party_pct);
    votesWithParty(statistics.house.leastLoyal, membersHouse, numHouse);  

    membersHouse.sort((a,b) => b.votes_with_party_pct - a.votes_with_party_pct);
    votesWithParty(statistics.house.mostLoyal, membersHouse, numHouse);

    function engagement(type, members, num) {
        let n = Math.ceil(num/10) - 1;
        while(members[n].missed_votes_pct === members[n+1].missed_votes_pct)
            n++;
        members.reduce((acc, curr, idx) => idx > n ? acc : type.push(Object.assign({}, curr)) && type, []);
    }

    membersSenate.sort((a,b) => b.missed_votes_pct - a.missed_votes_pct);
    engagement(statistics.senate.leastEngaged, membersSenate, numSenate);

    membersSenate.sort((a,b) => a.missed_votes_pct - b.missed_votes_pct);
    engagement(statistics.senate.mostEngaged, membersSenate, numSenate);

    membersSenate.sort((a,b) => b.missed_votes_pct - a.missed_votes_pct);
    engagement(statistics.house.leastEngaged, membersHouse, numHouse);  

    membersSenate.sort((a,b) => a.missed_votes_pct - b.missed_votes_pct);
    engagement(statistics.house.mostEngaged, membersHouse, numHouse);

    return <h1>{JSON.stringify(statistics)}</h1>;
};

export default Statistics;
