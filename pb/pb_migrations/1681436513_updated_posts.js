migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3w3ji891o4kie79")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bmsbv604",
    "name": "body2",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3w3ji891o4kie79")

  // remove
  collection.schema.removeField("bmsbv604")

  return dao.saveCollection(collection)
})
