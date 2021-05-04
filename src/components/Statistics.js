import React from 'react';
import senate from '../pro-congress-117-senate.json';

var statistics = {
    "numberOfDemocrats" : "",
    "numberOfRepublicans" : "",
    "numberOfIndependents" : "",
    "averageVotesWithPartyDem" : "",
    "averageVotesWithPartyRep" : ""
};

var dem, rep, ind, members, sumRep = 0, sumDem = 0, arr = [], temp, count = 0;

const Statistics = () => {
    members = senate.results[0].members;
    dem = members.filter(member => member.party == 'D');
    rep = members.filter(member => member.party == 'R');
    ind = members.filter(member => member.party == 'I');
    statistics.numberOfDemocrats = dem.length;
    statistics.numberOfRepublicans = rep.length;
    statistics.numberOfIndependents = ind.length;
    dem.forEach(member => sumDem += member.votes_with_party_pct);
    statistics.averageVotesWithPartyDem = sumDem/dem.length;
    rep.forEach(member => sumRep += member.votes_with_party_pct);
    statistics.averageVotesWithPartyRep = sumRep/rep.length;
    members.sort((a,b) => a.votes_with_party_pct - b.votes_with_party_pct);
    function getSmallest10 () {
        if (arr.length/members.length < 0.1) {
            let i = 0;
            while(members[0].votes_with_party_pct == members[i].votes_with_party_pct)
                i++
            arr = arr.concat(members.splice(0, i));
            getSmallest10();
        }
    }
    getSmallest10 ();
    return (<h1>{JSON.stringify(arr.length)}</h1>);
};

export default Statistics;
