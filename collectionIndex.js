//Collection Index
db.collection.dropIndexes(["collection.@type_1_ownership.secondary_1_ownership.primary_1","collection.@type_1_ownership.primary_1_deleted_1","getCollectionsQuery"])
db.collection.dropIndexes(["collection.@type_1_deleted_1_notificationSettings.emailFrequency_1_changes.modified.ms_-1","collection.@type_1_deleted_1_notificationSettings.triggers.newListing.pushEnabled_1_collection.listings_1_changes.modified.ms_-1"])
db.collection.createIndex({"collection.@type" : 1, "ownership.secondary" : 1, "ownership.primary" : 1, deleted_1 : 1})
