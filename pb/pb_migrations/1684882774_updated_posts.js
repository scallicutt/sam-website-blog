migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3w3ji891o4kie79")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "w0ezlfo6",
    "name": "field",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3w3ji891o4kie79")

  // remove
  collection.schema.removeField("w0ezlfo6")

  return dao.saveCollection(collection)
})
