import mongoose from 'mongoose';

    // define Schema Class
    const Schema = mongoose.Schema;

    //Job Position schema. Sub-item of experience schema
    const positionSchema = new Schema({
        Title: { type: String, required: true },
        Period: { type: String, required: true },
        Skills: { type: String, required: true },
        Duties: { type: Array, required: true }
    });

    // Create a Schema object
    const experienceSchema = new Schema({
        Company: { type: String, required: true },
        Website: { type: String, required: true },
        Description: { type: String, required: true },
        Shareholders: { type: String },
        Location: { type: String },
        Size: { type: String },
        Period: { type: String },
        JobPosition: [positionSchema]
    });

    const experience = mongoose.model("Experience", experienceSchema);

export default experience;