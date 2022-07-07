//Boundary collection

function  affordabilityStatsConvert(db,collectionName) {
print("Executing for : " + collectionName);
db.affordability_stats.updateMany({}, [{ "$addFields": {
    "updated_at": {
        "$toDate": "$updated_at"
    }
} }]);
}

function  boundaryConvert(db, collectionName) {
    print("Executing for : " + collectionName);
    db.boundary.updateMany({}, [{ "$addFields": {
        "updated_at": {
            "$toDate": "$updated_at"
        }
    } }]);
}

function  agentConvert(db, collectionName) {
    print("Executing for : " + collectionName);
    db.agent.updateMany({}, [{ "$addFields": {
        "startDate": {
            "$toDate": "$startDate"
        }
    } },{ "$addFields": {
        "updated_at": {
            "$toDate": "$updated_at"
        }
    } }]);
}

function  profileConvert(db, collectionName) {
    print("Executing for : " + collectionName);
    db.profile.updateMany({}, [{ "$addFields": {
        "disclosureAcknowledgment.lastModified": {
            "$toDate": "$startDate"
        }
    } },{ "$addFields": {
        "scheduledTours.availability.date": {
            "$toDate": "$startDate"
        }
    } }]);
}

function  aggregatorEventsConvert(db, collectionName) {
    print("Executing for : " + collectionName);
    db.aggregator_events.updateMany({}, [{ "$addFields": {
        "eventData.endAt": {
            "$toDate": "$eventData.endAt"
        }
    } },{ "$addFields": {
        "eventData.startAt": {
            "$toDate": "$eventData.startAt"
        }
    } },{ "$addFields": {
        "sourceEvent.open_house.DISPLAY_TIME": {
            "$toDate": "$sourceEvent.open_house.DISPLAY_TIME"
        }
    } },{ "$addFields": {
        "sourceEvent.open_house.START_DATE_TIME": {
            "$toDate": "$sourceEvent.open_house.START_DATE_TIME"
        }
    } },{ "$addFields": {
        "sourceEvent.open_house.END_DATE_TIME": {
            "$toDate": "$sourceEvent.open_house.END_DATE_TIME"
        }
    } }]);
}

function  collectionConvert(db, collectionName) {
    print("Executing for : " + collectionName);
    db.collection.updateMany({}, [{ "$addFields": {
        "listings.dateAdded": {
            "$toDate": "$listings.dateAdded"
        }
    } }]);
}

function  complianceConvert(db, collectionName) {
    print("Executing for : " + collectionName);
    db.compliance.updateMany({}, [{ "$addFields": {
        "con_last_updated": {
            "$toDate": "$con_last_updated"
        }
    } },{ "$addFields": {
        "kw_updated_at": {
            "$toDate": "$kw_updated_at"
        }
    } }]);
}

function  listingConvert(db, collectionName) {
    print("Executing for : " + collectionName);
    db.compliance.updateMany({}, [{ "$addFields": {
        "changeLog.openHouseChangeDate": {
            "$toDate": "$changeLog.openHouseChangeDate"
        }
    } },{ "$addFields": {
        "changeLog.statusChangeDate": {
            "$toDate": "$changeLog.statusChangeDate"
        }
    } },{ "$addFields": {
        "extraction.detail.listingDate": {
            "$toDate": "$extraction.detail.listingDate"
        }
    } },{ "$addFields": {
        "pricing.rent.priceVariance.variancePriceDate": {
            "$toDate": "$pricing.rent.priceVariance.variancePriceDate"
        }
    } },{ "$addFields": {
        "pricing.rent.priceVariance.variancePriceDate": {
            "$toDate": "$pricing.rent.priceVariance.variancePriceDate"
        }
    } },{ "$addFields": {
        "pricing.sale.priceVariance.variancePriceDate": {
            "$toDate": "$pricing.sale.priceVariance.variancePriceDate"
        }
    } },{ "$addFields": {
        "pricing.sold.priceVariance.variancePriceDate": {
            "$toDate": "$pricing.sold.priceVariance.variancePriceDate"
        }
    } },{ "$addFields": {
        "extraction.openHouses.endDateTime": {
            "$toDate": "$extraction.openHouses.endDateTime"
        }
    } },{ "$addFields": {
        "extraction.openHouses.startDateTime": {
            "$toDate": "$extraction.openHouses.startDateTime"
        }
    } },{ "$addFields": {
        "extraction.virtualTours.vt_updated_at": {
            "$toDate": "$extraction.virtualTours.vt_updated_at"
        }
    } },{ "$addFields": {
        "facet.FUTURE_SALE_DATE": {
            "$toDate": "$facet.FUTURE_SALE_DATE"
        }
    } },{ "$addFields": {
        "facet.LISTING_DATE": {
            "$toDate": "$facet.LISTING_DATE"
        }
    } },{ "$addFields": {
        "facet.LISTING_UPDATE_DATE": {
            "$toDate": "$facet.LISTING_UPDATE_DATE"
        }
    } },{ "$addFields": {
        "facet.OPEN_HOME_END_DATE": {
            "$toDate": "$facet.OPEN_HOME_END_DATE"
        }
    } },{ "$addFields": {
        "listing.close_dt": {
            "$toDate": "$listing.close_dt"
        }
    } },{ "$addFields": {
        "listing.contract_expiry_dt": {
            "$toDate": "$listing.contract_expiry_d"
        }
    } },{ "$addFields": {
        "open_houses.oh_end_dt": {
            "$toDate": "$open_houses.oh_end_dt"
        }
    } },{ "$addFields": {
        "open_houses.oh_start_dt": {
            "$toDate": "$open_houses.oh_start_dt"
        }
    } },{ "$addFields": {
        "open_houses.oh_updated_at": {
            "$toDate": "$open_houses.oh_updated_at"
        }
    } },{ "$addFields": {
        "raw.lambda_updated_at": {
            "$toDate": "$raw.lambda_updated_at"
        }
    } },{ "$addFields": {
        "recordUpdates.price_updated_at": {
            "$toDate": "$recordUpdates.price_updated_at"
        }
    } }]);
}

function  listingSearchConvert(db, collectionName) {
    print("Executing for : " + collectionName);
    db.compliance.updateMany({}, [{ "$addFields": {
        "changeLog.openHouseChangeDate": {
            "$toDate": "$changeLog.openHouseChangeDate"
        }
    } },{ "$addFields": {
        "changeLog.statusChangeDate": {
            "$toDate": "$changeLog.statusChangeDate"
        }
    } },{ "$addFields": {
        "extraction.listingDate": {
            "$toDate": "$extraction.listingDate"
        }
    } },{ "$addFields": {
        "extraction.listingDate": {
            "$toDate": "$extraction.listingDate"
        }
    } },{ "$addFields": {
        "extraction.listingDate": {
            "$toDate": "$extraction.listingDate"
        }
    } },{ "$addFields": {
        "extraction.detail.pricing.rent.priceVariance.variancePriceDate": {
            "$toDate": "$extraction.detail.pricing.rent.priceVariance.variancePriceDate"
        }
    } },{ "$addFields": {
        "extraction.detail.pricing.sale.priceVariance.variancePriceDate": {
            "$toDate": "$extraction.detail.pricing.sale.priceVariance.variancePriceDate"
        }
    } },{ "$addFields": {
        "extraction.detail.pricing.sold.priceVariance.variancePriceDate": {
            "$toDate": "$extraction.detail.pricing.sold.priceVariance.variancePriceDate"
        }
    } },{ "$addFields": {
        "extraction.openHouses.endDateTime": {
            "$toDate": "$extraction.openHouses.endDateTime"
        }
    } },{ "$addFields": {
        "extraction.openHouses.startDateTime": {
            "$toDate": "$extraction.openHouses.startDateTime"
        }
    } },{ "$addFields": {
        "facet.LISTING_DATE": {
            "$toDate": "$facet.LISTING_DATE"
        }
    } },{ "$addFields": {
        "facet.LISTING_UPDATE_DATE": {
            "$toDate": "$facet.LISTING_UPDATE_DATE"
        }
    } },{ "$addFields": {
        "facet.OPEN_HOME_END_DATE": {
            "$toDate": "$facet.OPEN_HOME_END_DATE"
        }
    } },{ "$addFields": {
        "openHouses.endDateTime": {
            "$toDate": "$openHouses.endDateTime"
        }
    } },{ "$addFields": {
        "openHouses.startDateTime": {
            "$toDate": "$openHouses.startDateTime"
        }
    } },{ "$addFields": {
        "priceVarianceDate.sale": {
            "$toDate": "$priceVarianceDate.sale"
        }
    } },{ "$addFields": {
        "priceVarianceDate.rent": {
            "$toDate": "$priceVarianceDate.rent"
        }
    } },{ "$addFields": {
        "priceVarianceDate.sold": {
            "$toDate": "$priceVarianceDate.sold"
        }
    } },{ "$addFields": {
        "searchFacets.OPEN_HOME_END_DATE": {
            "$toDate": "$searchFacets.OPEN_HOME_END_DATE"
        }
    } },{ "$addFields": {
        "searchFacets.LISTING_UPDATE_DATE": {
            "$toDate": "$searchFacets.LISTING_UPDATE_DATE"
        }
    } },{ "$addFields": {
        "searchFacets.LISTING_DATE": {
            "$toDate": "$searchFacets.LISTING_DATE"
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
                if(collName == "boundary.affordability_stats"){
                    affordabilityStatsConvert(mdb, collName);
                }else if (collName == "boundary.boundary"){
                    boundaryConvert(mdb, collName);
                }else if (collName == "profile.agent"){
                    agentConvert(mdb, collName);
                }else if (collName == "profile.profile"){
                    profileConvert(mdb, collName);
                }else if (collName == "notify.aggregator_events"){
                    aggregatorEventsConvert(mdb, collName);
                }else if (collName == "notify.feed"){
                    feedConvert(mdb, collName);
                }else if (collName == "collection.collection"){
                    collectionConvert(mdb, collName);
                }else if (collName == "data.compliance"){
                    complianceConvert(mdb, collName);
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
