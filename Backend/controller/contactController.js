const { saveContact } = require("../models/contactModel");
const db = require("../config/db");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Save Contact + Send Email
const createContact = (req, res) => {
  saveContact(req.body, async (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Failed to save contact",
      });
    }

    try {
      console.log("📨 Sending email...");

      // Email to StepWay
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: "stepwayelevators@gmail.com",
        replyTo: req.body.email,
        subject: `New Inquiry - ${req.body.subject || "Website Inquiry"}`,
        html: `
          <h2>New Inquiry Received</h2>

          <p><strong>Name:</strong> ${req.body.name}</p>
          <p><strong>Email:</strong> ${req.body.email}</p>
          <p><strong>Phone:</strong> ${req.body.phone}</p>
          <p><strong>Subject:</strong> ${req.body.subject}</p>

          <h3>Message</h3>
          <p>${req.body.message}</p>
        `,
      });

      // Auto Reply to Customer
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: req.body.email,
        subject: "Thank You for Contacting StepWay Elevators",
        html: `
          <h2>Thank You for Contacting StepWay Elevators</h2>

          <p>Dear ${req.body.name},</p>

          <p>
            We have received your inquiry and our team will contact you shortly.
          </p>

          <p>
            Thank you for choosing StepWay Elevators.
          </p>

          <br>

          <p>
            Regards,<br>
            StepWay Elevators Team
          </p>
        `,
      });

      console.log("✅ Emails sent successfully");

      return res.status(201).json({
        success: true,
        message: "Inquiry sent successfully",
      });

    } catch (emailError) {
      console.log("❌ Email Error:", emailError);

      // Contact already saved in DB
      return res.status(201).json({
        success: true,
        message: "Inquiry saved successfully",
      });
    }
  });
};

// Get All Contacts
const getContacts = (req, res) => {
  db.query(
    "SELECT * FROM contacts ORDER BY created_at DESC",
    (err, results) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Error fetching contacts",
        });
      }

      res.status(200).json(results);
    }
  );
};

// Delete Contact
const deleteContact = (req, res) => {
  const { id } = req.params;

  db.query(
    "DELETE FROM contacts WHERE id = ?",
    [id],
    (err) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Failed to delete contact",
        });
      }

      res.json({
        success: true,
        message: "Contact deleted successfully",
      });
    }
  );
};

module.exports = {
  createContact,
  getContacts,
  deleteContact,
};