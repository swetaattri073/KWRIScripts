# Run Index Scripts for all staging clusters
# Modify the URI to run for other clusters

#Script to fetch Index Usage for all the below clusters
time mongo mongodb+srv://mongoconsultant:qY3Atu49RHTUY1b9@boundary.tllcr.mongodb.net/boundary listUnusedIndexes.js
time mongo mongodb+srv://mongoconsultant:qY3Atu49RHTUY1b9@master-data-set.tllcr.mongodb.net/data listUnusedIndexes.js
time mongo mongodb+srv://mongoconsultant:qY3Atu49RHTUY1b9@profile.tllcr.mongodb.net/profile listUnusedIndexes.js
time mongo mongodb+srv://mongoconsultant:qY3Atu49RHTUY1b9@collection.tllcr.mongodb.net/collection listUnusedIndexes.js
time mongodb+srv://mongoconsultant:qY3Atu49RHTUY1b9@notify.tllcr.mongodb.net/notify listUnusedIndexes.js

#Script to update Indexes for all the below clusters
 time mongo mongodb+srv://mongoconsultant:qY3Atu49RHTUY1b9@boundary.tllcr.mongodb.net/boundary boundaryIndex.js
 time mongo mongodb+srv://mongoconsultant:qY3Atu49RHTUY1b9@master-data-set.tllcr.mongodb.net/data masterDataSetIndex.js
 time mongo mongodb+srv://mongoconsultant:qY3Atu49RHTUY1b9@profile.tllcr.mongodb.net/profile profileIndex.js
 time mongo mongodb+srv://mongoconsultant:qY3Atu49RHTUY1b9@collection.tllcr.mongodb.net/collection collectionIndex.js


#Script to convert String to Date for the below clusters
time mongo mongodb+srv://mongoconsultant:qY3Atu49RHTUY1b9@boundary.tllcr.mongodb.net/boundary convertStringtoDate.js
time mongo mongodb+srv://mongoconsultant:qY3Atu49RHTUY1b9@master-data-set.tllcr.mongodb.net/data convertStringtoDate.js
 time mongo mongodb+srv://mongoconsultant:qY3Atu49RHTUY1b9@profile.tllcr.mongodb.net/profile convertStringtoDate.js
time mongo mongodb+srv://mongoconsultant:qY3Atu49RHTUY1b9@collection.tllcr.mongodb.net/collection convertStringtoDate.js
time mongodb+srv://mongoconsultant:qY3Atu49RHTUY1b9@notify.tllcr.mongodb.net/notify convertStringtoDate.js

#Script to convert Remove null and undefined values for the below clusters -- parameter to be passed "CollectionName"
time mongo mongodb+srv://mongoconsultant:qY3Atu49RHTUY1b9@boundary.tllcr.mongodb.net/boundary --eval'"var collectionName="boundary"' remove_null.js 
time mongo mongodb+srv://mongoconsultant:qY3Atu49RHTUY1b9@boundary.tllcr.mongodb.net/boundary --eval 'var collectionName="affordability_stats"' remove_null.js 

time mongo mongodb+srv://mongoconsultant:qY3Atu49RHTUY1b9@master-data-set.tllcr.mongodb.net/data --eval 'var collectionName="compliance"' remove_null.js
time mongo mongodb+srv://mongoconsultant:qY3Atu49RHTUY1b9@master-data-set.tllcr.mongodb.net/data --eval 'var collectionName="listing"' remove_null.js
time mongo mongodb+srv://mongoconsultant:qY3Atu49RHTUY1b9@master-data-set.tllcr.mongodb.net/data --eval 'var collectionName="listingSearch"' remove_null.js


time mongo mongodb+srv://mongoconsultant:qY3Atu49RHTUY1b9@profile.tllcr.mongodb.net/profile --eval 'var collectionName="agent"' remove_null.js
time mongo mongodb+srv://mongoconsultant:qY3Atu49RHTUY1b9@profile.tllcr.mongodb.net/profile --eval 'var collectionName="profile"' remove_null.js

time mongo mongodb+srv://mongoconsultant:qY3Atu49RHTUY1b9@collection.tllcr.mongodb.net/collection --eval 'var collectionName="collection"' remove_null.js

time mongodb+srv://mongoconsultant:qY3Atu49RHTUY1b9@notify.tllcr.mongodb.net/notify --eval 'var collectionName="aggregator_events"' remove_null.js
time mongodb+srv://mongoconsultant:qY3Atu49RHTUY1b9@notify.tllcr.mongodb.net/notify --eval 'var collectionName="feed"' remove_null.js