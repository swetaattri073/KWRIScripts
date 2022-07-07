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
                print("\nCollection: " + mdb.getCollection(coll));
                var cursor = mdb.getCollection(coll).aggregate([{ $indexStats: {} }]);
                while (cursor.hasNext()) {
                    printjson(cursor.next());
                }
            } catch (e) {
                console.log("Could not print!")
                return
            }
        });
    };
});
