/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nmvevwh09x2qec6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ym12uesm",
    "name": "href",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nmvevwh09x2qec6")

  // remove
  collection.schema.removeField("ym12uesm")

  return dao.saveCollection(collection)
})
