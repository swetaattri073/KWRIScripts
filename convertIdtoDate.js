
function  idToDateConvert(db,collectionName) {
print("Executing for : " + collectionName);
db.getCollection(collectionName).updateMany({}, [{ "$addFields": {
    "created_at": {
        "$toDate": "$_id"
    }
} }]);
}

db.getMongo().getDBNames().forEach(function (name) {
    if (name == "admin") {
        print("Skipping system DB admin...")
    } else if (name == "local") {
        print("Skipping system DB local...")
    } else if (name == "config") {
        print("Skipping system DB config...")
    } else {
        var mdb = db.getSiblingDB(name);
        print("\n\n\n======== DB: " + name + "========");
        mdb.getCollectionNames().forEach(function (coll) {
            try {
                var collName = mdb.getCollection(coll);
                print("\nCollection: " + collName);
                collName = collName.split('.')[1];
                print("\nCollection: " + collName);
                if (collName == "profile.instagramm"){
                    idToDateConvert(mdb, collName);
                }else if (collName == "profile.profile"){
                    idToDateConvert(mdb, collName);
                }else if (collName == "collection.collection"){
                    idToDateConvert(mdb, collName);
                }else if (collName == "collection.userWithNotificationOn"){
                    idToDateConvert(mdb, collName);
                }else if (collName == "collection.usersFavorite"){
                    idToDateConvert(mdb, collName);
                }else if (collName == "data.listing"){
                    listingConvert(mdb, collName);
                }else if (collName == "data.listingSearch"){
                    listingSearchConvert(mdb, collName);
                }
            } catch (e) {
                print("Could not print!")
                return
            }
        });
    }
});
