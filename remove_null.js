/**
 * RETRIEVES A LIST OF ALL THE KEYS IN A DOCUMENT, WHERE THE VALUE IS 'NULL' OR 'UNDEFINED'
 *
 * @param doc
 * @param keyName
 * @param nullKeys
 */
 function getNullKeysRecursively(doc, keyName, nullKeys)
 {
  //  print("getNullKeysRecursively");
     for (var item_property in doc)
     {
         // SKIP BASE-CLASS STUFF
         if (!doc.hasOwnProperty(item_property))
             continue;
         // SKIP ID FIELD
         if (item_property === "_id")
             continue;
 
         // FULL KEY NAME (FOR SUB-DOCUMENTS)
         var fullKeyName;
         if (keyName)
             fullKeyName = keyName + "." + item_property;
         else
             fullKeyName = item_property;
 
         // DEBUGGING
      //    print("fullKeyName: " + fullKeyName);
 
         // NULL FIELDS - MODIFY THIS BLOCK TO ADD CONSTRAINTS
         if (doc[item_property] === null || doc[item_property] === undefined)
            {
         //       print(fullKeyName + "is null or undefined");
             nullKeys[fullKeyName] = 1;}
 
         // RECURSE OBJECTS / ARRAYS
         else if (doc[item_property] instanceof Object || doc[item_property] instanceof Array)
            { 
           //     print(fullKeyName + "is array or object")
             getNullKeysRecursively(doc[item_property], fullKeyName, nullKeys);}
     }
 }
 
 /**
  * REMOVES ALL PROPERTIES WITH A VALUE OF 'NULL' OR 'UNDEFINED'.
  * TUNE THE 'LIMIT' VARIABLE TO YOUR MEMORY AVAILABILITY.
  * ONLY CLEANS DOCUMENTS THAT REQUIRE CLEANING, FOR EFFICIENCY.
  * USES bulkWrite FOR EFFICIENCY.
  *
  * @param collectionName
  */
 function removeNulls(collectionName)
 {
    var i = 0;
     var coll = db.getCollection(collectionName);
     var lastId = 0;
     var LIMIT = 10000;
     print(coll);
     var countDocs = coll.find({}).count();
     print("Total number of Documents: " + countDocs);
     while (iteration <= countDocs)
     {
         // GET THE NEXT PAGE OF DOCUMENTS
         var page = coll.find({}).skip(iteration*LIMIT).limit(LIMIT);
       //  print(page);
       print("hasNext " + page.hasNext());
         if (!page.hasNext())
         {
            print("break");
             break;
         }
 
         // BUILD BULK OPERATION
         var arrBulkOps = [];

         page.forEach(function(item_doc)
         {
            print(i);
           //  print(item_doc);
             lastId = item_doc._id;
            // print(lastId);
             var nullKeys = {};
             getNullKeysRecursively(item_doc, null, nullKeys);
 
             // ONLY UPDATE MODIFIED DOCUMENTS
             if (Object.keys(nullKeys).length > 0)
             // UNSET INDIVIDUAL FIELDS, RATHER THAN REWRITE THE ENTIRE DOC
                 arrBulkOps.push(
                     { updateOne: {
                             "filter": { _id: item_doc._id },
                             "update": { $unset: nullKeys }
                         } }
                 );
                 i++;
         });
         print("Performing bulkUpdate" + ++iteration);
         coll.bulkWrite(arrBulkOps, { ordered: false } );
     }
 }
 
 // GO GO GO
 var iteration =0;
 removeNulls(collectionName);


