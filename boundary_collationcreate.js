db.createCollection("boundary_collation", { collation: { locale: 'en_US', strength: 2 } } )
{ ok: 1 }

db.boundary.aggregate([
  {
    '$out': 'boundary_collation'
  }
]);