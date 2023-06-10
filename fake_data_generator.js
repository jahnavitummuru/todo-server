import { faker } from "@faker-js/faker";
import { MongoClient, ObjectId } from "mongodb";

const uri =
  "mongodb+srv://jahnavi:0VyaJ14XmXIiYbN2@cluster0.28ve347.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function generateAndInsertFakeData() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("jahnavi");
    const collection = db.collection("todos");

    const records = [];
    const numRecords = 15;

    for (let i = 0; i < numRecords; i++) {
      const dish = {
        _id: new ObjectId(),
        title: faker.commerce.productName(),
        status: faker.datatype.boolean(),
        dueDate: faker.date.future(),
      };

      records.push(dish);
    }
    await collection.insertMany(records);
    console.log(`Inserted ${numRecords} records into the collection`);
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await client.close();
    console.log("Disconnected from MongoDB");
  }
}

generateAndInsertFakeData();
