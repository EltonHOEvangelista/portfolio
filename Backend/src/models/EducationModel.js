import mongoose from 'mongoose';

    // define Schema Class
    const Schema = mongoose.Schema;

    //Key Projects schema. Sub-item of education schema
    const projectSchema = new Schema({
        Title: { type: String, required: true },
        Skills: { type: Array  },
        Description: { type: String, required: true },
        ProjectUrl: { type: String },
        ProjectImg: { type: String }
    });

    // Create a Schema object
    const educationSchema = new Schema({
        Title: { type: String, required: true },
        Period: { type: String, required: true },
        Institution: { type: String, required: true },
        InstitutionURL: { type: String, required: true },
        Description: { type: String, required: true },
        Skills: { type: String, required: true },
        KeyProjects: [projectSchema]
    });

    const education = mongoose.model("Education", educationSchema);

export default education;