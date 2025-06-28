db = db.getSiblingDB('initDB');
db.createUser({
  user: "usuario",
  pwd: "clave123",
  roles: [{ role: "readWrite", db: "midb" }]
});

db.testCollection.insertOne({
  message: "¡Hola Mundo!"
})