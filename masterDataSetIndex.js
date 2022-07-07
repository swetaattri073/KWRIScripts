//Listing Collection
db.listing.dropIndex("listing.kww_region_1")
db.listing.dropIndex("listing.is_kww_listing_1_listing.kww_region_1")
db.listing.createIndex({"listing.kww_region" : 1, "listing.is_kww_listing" : 1})

//For ListingSearch the recommendation is to move the queries to Atlas Search and then remove the index no longer needed.