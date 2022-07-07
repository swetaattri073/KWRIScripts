db.boundary_nocollation.dropIndexes([ "category_1_displayLowerCase_1","label.lowercaseName_1","geo.centroid.geometry_2dsphere",
"geo.attendance.geo.boundary.geometry_2dsphere","idx_category_geo_boundary_2ds" ])

db.boundary_nocollation.dropIndexes(["thumbnail_1","businessmodel_1","state_1","city_1","cityLowerCase_1","walkabilityIndex_1","whatLocalsSay_1","idx_updated_at","category_1_area_-1"])
db.boundary_nocollation.dropIndexes(["idx_category_geometry_2dsphere","idx_businessmodel_attendance_geo_boundary_2ds"])

db.boundary_nocollation.createIndex({"geo.centroid.geometry" : "2dsphere", category : 1})
db.boundary_nocollation.createIndex({"geo.attendance.geo.boundary.geometry" : "2dsphere", businessmodel : 1})

//Copy all the required indexes from boundary to boundary_collation
var indexes = db.boundary_nocollation.getIndexes();

indexes.forEach(function(index){
    delete index.v;
    delete index.ns;
    var key = index.key;
    delete index.key
    var options = {};
    for (var option in index) {
        options[option] = index[option]
    }
   db.boundary_collation.createIndex(key, options.to);
});

db.boundary_collation.dropIndexes(["category_1_cityLowerCase_1_stateShortLowerCase_1","hasDuplicates_1_category_1_displayLowerCase_1","label.lowercaseName_1_cityLowerCase_1_stateShortLowerCase_1"])

db.boundary_collation.createIndex({category: 1, city: 1, stateShort: 1})


db.boundary_collation.createIndex({category: 1, display:1, hasDuplicates: 1})

db.boundary_collation.createIndex({"label.name" : 1, city:1, state: 1})
