const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://127.0.0.1:27017/';
const dbName = 'mydb';

async function connectToDatabase() {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 5000, heartbeatFrequencyMS: 10000 });
  await client.connect();
  console.log('Connected successfully to server');
  return client;
}

async function insertDocuments(client) {
    let collection;
    try {
      const db = client.db(dbName);
      collection = db.collection('my_collection');
      const result = await collection.insertMany([
        { rollNo: 1, stNm: 'Aditya', course: 'BCA', grade: 'A', marksPercent: 80 },
        { rollNo: 2, stNm: 'Venti', course: 'BBA', grade: 'C', marksPercent: 45 },
        { rollNo: 3, stNm: 'Navia', course: 'BCA', grade: 'B', marksPercent: 70 },
        { rollNo: 4, stNm: 'Diluc', course: 'BSC', grade: 'A', marksPercent: 85 },
        { rollNo: 5, stNm: 'Razor', course: 'BSC', grade: 'D', marksPercent: 40 }
      ]);
      console.log("Inserted documents successfully");
      return result;
    } catch (err) {
      console.error("Error occurred while inserting documents:", err);
      throw err;
    }
  }

  async function main() {
    let client;
    try {
      client = await connectToDatabase();
      const result = await insertDocuments(client);
      const collection = client.db(dbName).collection('my_collection');
  
      // (i) get all students with Grade A or B
      const studentsWithGradeAB = await collection.find({ grade: { $in: ['A', 'B'] } }).toArray();
      console.log("Students with Grade A or B:");
      studentsWithGradeAB.forEach(student => {
        console.log("Roll No:", student.rollNo);
        console.log("Name:", student.stNm);
        console.log("Course:", student.course);
        console.log("Grade:", student.grade);
        console.log("---------------------------");
      });
  
      // (ii) get all students with marks percent less than 50 or greater than 75
      const studentsWithMarksLessThan50 = await collection.find({ marksPercent: { $lt: 50 } }).toArray();
      console.log("Students with marks percent less than 50:");
      studentsWithMarksLessThan50.forEach(student => {
        console.log("Roll No:", student.rollNo);
        console.log("Name:", student.stNm);
        console.log("Course:", student.course);
        console.log("Grade:", student.grade);
        console.log("---------------------------");
      });
  
      const studentsWithMarksGreaterThan75 = await collection.find({ marksPercent: { $gt: 75 } }).toArray();
      console.log("Students with marks percent greater than 75:");
      studentsWithMarksGreaterThan75.forEach(student => {
        console.log("Roll No:", student.rollNo);
        console.log("Name:", student.stNm);
        console.log("Course:", student.course);
        console.log("Grade:", student.grade);
        console.log("---------------------------");
      });
  
      // (iii) get all students with marks percent greater than 75 and less than 80
      const studentsWithMarksBetween75And80 = await collection.find({ marksPercent: { $gt: 75, $lt: 80 } }).toArray();
      console.log("Students with marks percent between 75 and 80:");
      studentsWithMarksBetween75And80.forEach(student => {
        console.log("Roll No:", student.rollNo);
        console.log("Name:", student.stNm);
        console.log("Course:", student.course);
        console.log("Grade:", student.grade);
        console.log("---------------------------");
      });
  
      // (iv) add an address and phone number field to every document
      await collection.updateMany({}, { $set: { address: "Some Address", phoneNumber: "1234567890" } });
      console.log("Added address and phone number to all documents");
  
      // (v) change stNm from ‘Aditya’ to ‘Akash’
      await collection.updateOne({ stNm: "Aditya" }, { $set: { stNm: "Akash" } });
      console.log("Changed name from 'Aditya' to 'Akash'");
  
      // (vi) List all the Students enrolled for ‘BCA’ and have grade ‘A’
      const BCAStudentsWithGradeA = await collection.find({ course: "BCA", grade: "A" }).toArray();
      console.log("Students enrolled for BCA and have grade A:");
      BCAStudentsWithGradeA.forEach(student => {
        console.log("Roll No:", student.rollNo);
        console.log("Name:", student.stNm);
        console.log("Course:", student.course);
        console.log("Grade:", student.grade);
        console.log("---------------------------");
      });
  
      // (vii) Find the number of students enrolled in each course
      const studentsPerCourse = await collection.aggregate([
        { $group: { _id: "$course", count: { $sum: 1 } } }
      ]).toArray();
      console.log("Number of students enrolled in each course:");
      studentsPerCourse.forEach(course => {
        console.log("Course:", course._id);
        console.log("Number of Students:", course.count);
        console.log("---------------------------");
      });
    } catch (err) {
      console.error('Error: ', err);
    } finally {
      if (client) {
        await client.close();
        console.log('Connection closed successfully');
      }
    }
  }
  main().catch(console.error);  
