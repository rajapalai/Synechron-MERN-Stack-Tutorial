use trainingdb;

db.createCollection("customers");

db.customers.insertOne({"firstName" : "Raja","lastName" : "Palai", "salary" : 20000});
db.customers.insertOne({"firstName" : "Smaranika","lastName" : "Pattanayak", "salary" : 23500});
db.customers.insertOne({"firstName" : "Manoj","lastName" : "Kumar", "salary" : 10000});
db.customers.insertOne({"firstName" : "Santosh","lastName" : "Sahoo", "salary" : 50000});
db.customers.insertOne({"firstName" : "Rakesh","lastName" : "Sahani", "salary" : 45000});
db.customers.insertOne({"firstName" : "Srikant","lastName" : "Swain", "salary" : 35000});