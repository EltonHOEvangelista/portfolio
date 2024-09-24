import { Router } from 'express';
import AboutModel from '../models/AboutModel.js';
import EducationModel from '../models/EducationModel.js';
import ExperienceModel from '../models/ExperienceModel.js';
import IndustryModel from '../models/IndustryModel.js';
import CertificateModel from '../models/CertificateModel.js';

// Import JSON files correctly (ensure file paths are accurate)
import jsonAbout from '../utils/json/about.json' assert { type: 'json' };
import jsonEducation from '../utils/json/education.json' assert { type: 'json' };
import jsonExperience from '../utils/json/experience.json' assert { type: 'json' };
import jsonIndustry from '../utils/json/industry.json' assert { type: 'json' };
import jsonCertificate from '../utils/json/certificate.json' assert { type: 'json' };

const router = Router();

// Get Method to load documents from the database
router.route("/")
    .get(async (req, res) => {
        try {
            const aboutModels = await AboutModel.find().sort({ _id: 1 });
            const result = {aboutModels};
            res.json(result);
        } catch (error) {
            res.status(400).json({ message: "Error fetching data", error: error.message });
        }
    });

router.route("/education")
    .get(async (req, res) => {
        try {
            const educationModels = await EducationModel.find().sort({ _id: 1 });
            const result = {educationModels};
            res.json(result);
        } catch (error) {
            res.status(400).json({ message: "Error fetching data", error: error.message });
        }
    });

router.route("/experience")
    .get(async (req, res) => {
        try {
            const experienceModels = await ExperienceModel.find().sort({ _id: 1 });
            const result = {experienceModels};
            res.json(result);
        } catch (error) {
            res.status(400).json({ message: "Error fetching data", error: error.message });
        }
    });

router.route("/industry")
    .get(async (req, res) => {
        try {
            const industryModels = await IndustryModel.find().sort({ _id: 1 });
            const result = {industryModels};
            res.json(result);
        } catch (error) {
            res.status(400).json({ message: "Error fetching data", error: error.message });
        }
    });

router.route("/certificate")
    .get(async (req, res) => {
        try {
            const certificateModels = await CertificateModel.find().sort({ _id: 1 });
            const result = {certificateModels};
            res.json(result);
        } catch (error) {
            res.status(400).json({ message: "Error fetching data", error: error.message });
        }
    });

// Post Method to add initial documents to the database
router.route("/load")
    .post(async (req, res) => {
        try {
            // Insert JSON data into the database
            await AboutModel.insertMany(jsonAbout, { ordered: false });
            await EducationModel.insertMany(jsonEducation, { ordered: false });
            await ExperienceModel.insertMany(jsonExperience, { ordered: false });
            await IndustryModel.insertMany(jsonIndustry, { ordered: false });
            await CertificateModel.insertMany(jsonCertificate, { ordered: false });

            res.json({ message: "Data loaded successfully" });
        } catch (error) {
            // Catch potential duplicate key errors or other database errors
            res.status(400).json({ message: "Error loading data", error: error.message });
        }
    });

export default router;