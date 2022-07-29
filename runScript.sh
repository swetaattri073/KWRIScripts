# Run Index Scripts for all staging clusters
# Modify the URI to run for other clusters

#Script to fetch Index Usage for all the below clusters
time mongo mongodb+srv://username:password@boundary.tllcr.mongodb.net/boundary listUnusedIndexes.js
time mongo mongodb+srv://username:password@master-data-set.tllcr.mongodb.net/data listUnusedIndexes.js
time mongo mongodb+srv://username:password@profile.tllcr.mongodb.net/profile listUnusedIndexes.js
time mongo mongodb+srv://username:password@collection.tllcr.mongodb.net/collection listUnusedIndexes.js
time mongodb+srv://username:password@notify.tllcr.mongodb.net/notify listUnusedIndexes.js

#Script to create boundary_collation collection with default collation
time mongo mongodb+srv://username:password@boundary.tllcr.mongodb.net/boundary boundary_collationcreate.js

#Script to update Indexes for all the below clusters
 time mongo mongodb+srv://username:password@boundary.tllcr.mongodb.net/boundary boundaryIndex.js
 time mongo mongodb+srv://username:password@master-data-set.tllcr.mongodb.net/data masterDataSetIndex.js
 time mongo mongodb+srv://username:password@profile.tllcr.mongodb.net/profile profileIndex.js
 time mongo mongodb+srv://username:password@collection.tllcr.mongodb.net/collection collectionIndex.js


#Script to convert String to Date for the below clusters
time mongo mongodb+srv://username:password@boundary.tllcr.mongodb.net/boundary convertIdtoDate.js
time mongo mongodb+srv://username:password@master-data-set.tllcr.mongodb.net/data convertIdtoDate.js
 time mongo mongodb+srv://username:password@profile.tllcr.mongodb.net/profile convertIdtoDate.js
time mongo mongodb+srv://username:password@collection.tllcr.mongodb.net/collection convertIdtoDate.js
time mongodb+srv://username:password@notify.tllcr.mongodb.net/notify convertIdtoDate.js

#Script to convert all field names to camelCase
time mongo mongodb+srv://username:password@boundary.tllcr.mongodb.net/boundary toCamelCase.js
time mongo mongodb+srv://username:password@master-data-set.tllcr.mongodb.net/data toCamelCase.js
time mongo mongodb+srv://username:password@profile.tllcr.mongodb.net/profile toCamelCase.js
time mongo mongodb+srv://username:password@collection.tllcr.mongodb.net/collection toCamelCase.js
time mongodb+srv://username:password@notify.tllcr.mongodb.net/notify toCamelCase.js

#Script to convert Remove null and undefined values for the below clusters -- parameter to be passed "CollectionName"
time mongo mongodb+srv://username:password@boundary.tllcr.mongodb.net/boundary --eval'"var collectionName="boundary"' remove_null.js 
time mongo mongodb+srv://username:password@boundary.tllcr.mongodb.net/boundary --eval 'var collectionName="affordability_stats"' remove_null.js 

time mongo mongodb+srv://username:password@master-data-set.tllcr.mongodb.net/data --eval 'var collectionName="compliance"' remove_null.js
time mongo mongodb+srv://username:password@master-data-set.tllcr.mongodb.net/data --eval 'var collectionName="listing"' remove_null.js
time mongo mongodb+srv://username:password@master-data-set.tllcr.mongodb.net/data --eval 'var collectionName="listingSearch"' remove_null.js


time mongo mongodb+srv://username:password@profile.tllcr.mongodb.net/profile --eval 'var collectionName="agent"' remove_null.js
time mongo mongodb+srv://username:password@profile.tllcr.mongodb.net/profile --eval 'var collectionName="profile"' remove_null.js

time mongo mongodb+srv://username:password@collection.tllcr.mongodb.net/collection --eval 'var collectionName="collection"' remove_null.js

time mongodb+srv://username:password@notify.tllcr.mongodb.net/notify --eval 'var collectionName="aggregator_events"' remove_null.js
time mongodb+srv://username:password@notify.tllcr.mongodb.net/notify --eval 'var collectionName="feed"' remove_null.js