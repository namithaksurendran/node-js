const { MongoClient, ObjectID } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017';
const databaseName = 'namitha'; // Replace with your database name

// Create a new MongoClient
const client = new MongoClient(uri);

// Connect to the MongoDB server
client.connect(async (err) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  // Get the database
  const db = client.db(databaseName);

  // Example: Create (Insert) operation
  const userToInsert = {
    name: 'John Doe',
    age: 30,
    email: 'john@example.com'
  };

  const insertResult = await db.collection('person').insertOne(userToInsert);
  console.log('Inserted user:', insertResult.ops[0]);

  // Example: Read (Find) operation
  const users = await db.collection('person').find().toArray();
  console.log('All users:', users);

  // Example: Update operation
  const userToUpdate = { _id: new ObjectID(insertResult.ops[0]._id) };
  const updateResult = await db.collection('person').updateOne(
    userToUpdate,
    { $set: { age: 31 } }
  );
  console.log('Updated user:', updateResult.modifiedCount);

  // Example: Read (Find) operation after update
  const updatedUser = await db.collection('person').findOne(userToUpdate);
  console.log('Updated user details:', updatedUser);

  // Example: Delete operation
  const deleteResult = await db.collection('peron').deleteOne(userToUpdate);
  console.log('Deleted user:', deleteResult.deletedCount);

  // Close the connection when done
  client.close();
});
