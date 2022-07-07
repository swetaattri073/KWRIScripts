//Agent Collection
db.agent.dropIndexes(["facet.CITY_1_facet.STATE_1", "facet.LEGACY_SLUG_1", "facet.LEGACY_PERSON_ID_1","facet.FULLNAME_1","facet.FULLNAME_text","facet.FULLNAME_1_extraction.lastName_1_extraction.firstName_1"])

//Profile Collection
db.profile.dropIndex("email_1")
