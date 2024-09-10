import mongoose from 'mongoose';

    // define Schema Class
    const Schema = mongoose.Schema;

    // Create a Schema object
    const industrySchema = new Schema({
        Title: { type: String, required: true },
        Description: { type: String, required: true },
        IndustryImg: { type: String }
    });

    const industry = mongoose.model("Industry", industrySchema);

export default industry;