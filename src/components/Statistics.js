import React from 'react';
import senate from '../pro-congress-117-senate.json';
import house from '../pro-congress-117-house.json';

var statistics = 
{
    "senate": {
        "numberOfDemocrats" : "",
        "numberOfRepublicans" : "",
        "numberOfIndependents" : "",
        "averageVotesWithPartyDem" : "",
        "averageVotesWithPartyRep" : "",
        "lowestVotesParty" : [],
        "highestVotesParty" : [],
    },
    "house": {
        "numberOfDemocrats" : "",
        "numberOfRepublicans" : "",
        "numberOfIndependents" : "",
        "averageVotesWithPartyDem" : "",
        "averageVotesWithPartyRep" : "",
        "lowestVotesParty" : [],
        "highestVotesParty" : [],
    }
};

var demsHouse, repsHouse, indsHouse, demsSenate, repsSenate, indsSenate, sumRep = 0, sumDem = 0, numSenate, numHouse;
var membersSenate, membersHouse;

const Statistics = () => {
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

    // console.log(membersSenate.length);

    function VWPBottom10(branch, members, num) {
        if (branch.lowestVotesParty.length/num < 0.1) {
            let i = 0;
            while(members[0].votes_with_party_pct === members[i].votes_with_party_pct)
                i++;
            branch.lowestVotesParty = branch.lowestVotesParty.concat(members.splice(0, i));
            VWPBottom10(branch, members, num);
        }
    }

    function VWPTop10(branch, members, num) {
        if (branch.highestVotesParty.length/num < 0.1) {
            let i = 0;
            while(members[0].votes_with_party_pct === members[i].votes_with_party_pct)
                i++;
            branch.highestVotesParty = branch.highestVotesParty.concat(members.splice(0, i));
            VWPTop10(branch, members, num);
        }
    }
    membersSenate.sort((a,b) => a.votes_with_party_pct - b.votes_with_party_pct);
    VWPBottom10(statistics.senate, membersSenate, numSenate);

    membersSenate.sort((a,b) => b.votes_with_party_pct - a.votes_with_party_pct);
    VWPTop10(statistics.senate, membersSenate, numSenate);

    membersHouse.sort((a,b) => a.votes_with_party_pct - b.votes_with_party_pct);
    VWPBottom10(statistics.house, membersHouse, numHouse);  

    membersHouse.sort((a,b) => b.votes_with_party_pct - a.votes_with_party_pct);
    VWPTop10(statistics.house, membersHouse, numHouse);

    return (<h1>{JSON.stringify(numHouse)}</h1>);
};

export default Statistics;
