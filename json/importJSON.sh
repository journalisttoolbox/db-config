# import the JSON into mongo, useful when new tools have been added etc

# Function to import toollists
function importToolLists {
  mongoimport --db jt-dev --collection toollists --jsonArray --file audit/$1.json;
}

# import the latest tools
mongoimport --db jt-dev --collection tools --jsonArray --file tools.json;

importToolLists bbcTools;
importToolLists dataJournalism;
importToolLists dataVis;
importToolLists photoTools;
importToolLists theTimes;
importToolLists videoTools;
importToolLists writingTools;
importToolLists uxTools
