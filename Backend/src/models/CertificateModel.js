import mongoose from 'mongoose';

    // define Schema Class
    const Schema = mongoose.Schema;

    // Create a Schema object
    const certificateSchema = new Schema({
        Title: { type: String, required: true },
        Issuer: { type: String, required: true },
        Period: { type: String, required: true },
        IssuerURL: { type: String },
        CertificateImg: { type: String },
        Skills: { type: String }
    });

    const certificate = mongoose.model("Certificates", certificateSchema);

export default certificate;