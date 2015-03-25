--Get the list of matches
select a.venue, to_char(a.matchdate at time zone 'UTC', 'YYYY-MM-DD"T"HH24:MI:SS"Z"') as "Matchdate",
a.team1id,a.team2id,a.matchresult,a.winningteamid,a.matchid,b.imgurl as "Team1ImgUrl",c.imgurl as "Team2ImgUrl"
from Matches a inner join Teams b on a.Team1id = b.id 
inner join Teams c on a.Team2id = c.id

