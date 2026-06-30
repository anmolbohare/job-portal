import mongoose from "mongoose";
import "dotenv/config";

import connectDB from "./config/db.js";
import Job from "./models/Job.js";
import { jobsData } from "./data/jobsData.js"; // assets.js wali jobs yahan paste karna

const COMPANY_ID = "6a43a5d237b930aea75a9d98";

const seedJobs = async () => {
  try {
    await connectDB();

    console.log("Database Connected");

    // Optional: Purani jobs delete karni ho to uncomment kar dena
    // await Job.deleteMany({});

    const jobs = jobsData.map((job) => ({
      title: job.title,
      description: job.description,
      location: job.location,
      category: job.category,
      level: job.level,
      salary: job.salary,
      date: Date.now(),
      visible: true,
      companyId: new mongoose.Types.ObjectId(COMPANY_ID),
    }));

    await Job.insertMany(jobs);

    console.log(`${jobs.length} Jobs Imported Successfully 🎉`);

    process.exit();

  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

seedJobs();