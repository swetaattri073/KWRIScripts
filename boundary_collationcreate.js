db.createCollection("boundary_collation", { collation: { locale: 'en', strength: 2 } } )

db.boundary.aggregate([
  {
    '$out': 'boundary_collation'
  }
]);