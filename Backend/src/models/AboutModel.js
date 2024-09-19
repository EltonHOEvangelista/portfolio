import mongoose from 'mongoose';

    // define Schema Class
    const Schema = mongoose.Schema;

    // Create a Schema object
    const aboutSchema = new Schema({
        Name: { type: String, required: true },
        Title: { type: String, required: true },
        Intro: { type: String, required: true },
        ProfileImg: { type: String },
        Biography: { type: String, required: true },
        Goal: { type: String, required: true },
        LinkedIn: { type: String },
        GitHub: { type: String },
        PageDescription: { type: String },
        Copyright: { type: String },
    });

    const about = mongoose.model("About", aboutSchema);

export default about;