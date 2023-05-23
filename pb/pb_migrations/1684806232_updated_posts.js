migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3w3ji891o4kie79")

  collection.createRule = ""
  collection.updateRule = ""
  collection.deleteRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3w3ji891o4kie79")

  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
