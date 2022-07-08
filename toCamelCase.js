function toCamelCase(str) {
    let newStr = "";
    if (str) {
        if (!isCamelCase(str)) {
            print("Not Camel Case: " + str);
            let wordArr = str.split(/[-_ ]/g);
            let flag = false;
            for (let i in wordArr) {
                if (i > 0) {
                    newStr += wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1).toLowerCase();
                } else if (i == 0) {
                    newStr += wordArr[i].charAt(0).toLowerCase() + wordArr[i].slice(1).toLowerCase();
                } else {
                    newStr += wordArr[i];
                }

            }
        }else{
            return newStr;
        }
    } else {
        return newStr;
    }

    return newStr;
}

function isCamelCase(str) {
    return /^[a-z][A-Za-z]*$/.test(str)
}

function getAllFieldNames(db, collectionName) {
    print("\nExecuting for Collection: " + collectionName);
    
    return db.getCollection(collectionName).aggregate([
        { "$project": { "arrayofkeyvalue": { "$objectToArray": "$$ROOT" } } },
        { "$unwind": "$arrayofkeyvalue" },
        { "$group": { "_id": null, "allkeys": { "$addToSet": "$arrayofkeyvalue.k" } } }
    ]).next()["allkeys"];
}

function updateFieldName(db, collectionName, str, fieldCamelCase) {
    var rename_query = {'$rename': {}};
    rename_query['$rename'][str] = fieldCamelCase;
    db.getCollection(collectionName).updateMany( {}, rename_query , function (err, result) {});

}

function getDocumentNestedFields(
    document, fields, fieldName) {
    for (let [key, value] of Object.entries(document)) {
      if (
        value !== null &&
        typeof value === "object" &&
        Object.keys(value).length > 0
      ) {
        getDocumentNestedFields(
          value,
          fields,
          fieldName === "" ? key : `${fieldName}.${key}`
        );   
      } else if (!Array.isArray(value)) {
        fields.add(fieldName === "" ? key : `${fieldName}.${key}`);
      }
    }
    return fields;
  }

// async function getSampleDocuments(db,collectionName){
//     var docs =  await db.getCollection(collectionName).aggregate([
//         { $sample: { size: 10 } },
//         { $project: { _id: 0 } },
//       ]);
//     print("docs" + docs);
//     return docs;
// };

  

  async function getNestedFieldNames(db,collectionName) {
    print("getNestedFieldNames");
    const docs = await db.getCollection(collectionName).aggregate([
        { $sample: { size: 10 } },
        { $project: { _id: 0 } },
      ]);
      print("docs: " + JSON.stringify(docs));
      print("docs length: "+ docs._batch.length);
      let allFields ;
      for (let doc of docs._batch) {
        for (let [key, value] of Object.entries(doc)) {
          if (
            value !== null &&
            typeof value === "object" &&
            Object.keys(value).length > 0
          ) {
            let nestedFields = getDocumentNestedFields(value, new Set(), key);
            let allFields = new Set() < String > [nestedFields];
          }
        }
      }
      print("allFields: " + Array.from(allFields));
      return Array.from(allFields);
}

db.getMongo().getDBNames().forEach(async function (name) {
    if (name == "admin") {
        print("Skipping system DB admin...")
    } else if (name == "local") {
        print("Skipping system DB local...")
    } else if (name == "config") {
        print("Skipping system DB config...")
    } else {
        var mdb = db.getSiblingDB(name);
        print("\n\n\n======== DB: " + name + "========");
        mdb.getCollectionNames().forEach(async function (coll) {
            try {
                var collName = mdb.getCollection(coll);
                print("\n========Collection: " + collName + "==========");
                var collectionName = collName.toString().split('.')[1];
                print("Collection Name: " + collectionName);
                var keysList = getAllFieldNames(mdb, collectionName);
                var nestedFields = await getNestedFieldNames(mdb,collectionName);


                //to check of field is camelCase

                nestedFields.forEach(function (str){
                    if(str != "_id"){
                        print("\FieldName: " + str + " isCamelCase: " + isCamelCase(str));
                    }

                });

                keysList.forEach(function (str){
                    if(str != "_id"){
                        print("\FieldName: " + str + " isCamelCase: " + isCamelCase(str));
                    }

                });

                //to convert to camelCase FieldName
                // keysList.forEach(function (str) {
                //     if (str != "_id") {
                //         print("\FieldName: " + str);
                //         fieldCamelCase = toCamelCase(str);
                //         print("\n Updating to camelCase: " + fieldCamelCase);
                //         if (fieldCamelCase != "")
                //        try{
                //             updateFieldName(mdb, collectionName, str, fieldCamelCase);
                //        }catch(e){
                //         print("error during update: " + e);
                //         return;
                //        }
                //     }
                // });


            } catch (e) {
                print("Could not print!" + e)
                return
            }
        });
    }
});
