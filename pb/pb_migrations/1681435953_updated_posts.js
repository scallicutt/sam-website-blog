migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3w3ji891o4kie79")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3w3ji891o4kie79")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
