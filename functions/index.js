// const serverless = require('serverless-http');
// const express = require('express');
// const cors = require('cors');
// const helmet = require('helmet');
// const createDOMPurify = require('dompurify');
// const { JSDOM } = require('jsdom');
// const aws = require('@aws-sdk/client-ses');

// const app = express();
// const window = new JSDOM('').window;
// const DOMPurify = createDOMPurify(window);

// const ses = new aws.SES({
//   region: 'us-east-1',
// });

// const ORIGINS = ['https://hamishw.com', 'https://www.hamishw.com'];
// const MAX_EMAIL_LENGTH = 512;
// const MAX_MESSAGE_LENGTH = 4096;
// const EMAIL = 'hello@hamishw.com';
// const FROM_EMAIL = 'mailbot@hamishw.com';
// const EMAIL_PATTERN = /(.+)@(.+){2,}\.(.+){2,}/;

// app.use(helmet());
// app.use(express.json());
// app.use(
//   cors({
//     origin: (origin, callback) => {
//       if (!ORIGINS.includes(origin)) {
//         return callback(
//           new Error(`Not allowed by CORS. Origin must be: ${ORIGINS.join(' or ')}`)
//         );
//       }

//       return callback(null, true);
//     },
//   })
// );
// app.options('*', cors());

// app.post('/message', async (req, res) => {
//   try {
//     const email = DOMPurify.sanitize(req.body.email);
//     const message = DOMPurify.sanitize(req.body.message);

//     // Validate email request
//     if (!email || !EMAIL_PATTERN.test(email)) {
//       return res.status(400).json({ error: 'Please enter a valid email address' });
//     }

//     if (!message) {
//       return res.status(400).json({ error: 'Please enter a message' });
//     }

//     if (email.length > MAX_EMAIL_LENGTH) {
//       return res.status(400).json({
//         error: `Please enter an email fewer than ${MAX_EMAIL_LENGTH} characters`,
//       });
//     }

//     if (message.length > MAX_MESSAGE_LENGTH) {
//       return res.status(400).json({
//         error: `Please enter a message fewer than ${MAX_MESSAGE_LENGTH} characters`,
//       });
//     }

//     // Send email using AWS SES
//     await ses.sendEmail({
//       Source: `Portfolio <${FROM_EMAIL}>`,
//       Destination: {
//         ToAddresses: [EMAIL],
//       },
//       Message: {
//         Subject: { Data: `New message from ${email}` },
//         Body: {
//           Text: { Data: `From: ${email}\n\n${message}` },
//         },
//       },
//     });

//     return res.status(200).json({ message: 'Message sent successfully' });
//   } catch (error) {
//     console.error('Rejected', error);
//     return res.status(500).json({ error: 'Message rejected' });
//   }
// });

// module.exports.handler = serverless(app);

// const serverless = require('serverless-http');
// const express = require('express');
// const cors = require('cors');
// const helmet = require('helmet');
// const createDOMPurify = require('dompurify');
// const { JSDOM } = require('jsdom');
// const nodemailer = require('nodemailer');

// const app = express();
// const window = new JSDOM('').window;
// const DOMPurify = createDOMPurify(window);

// const transporter = nodemailer.createTransport({
//   // Configure your email transport settings here
//   // For example, if using Gmail SMTP:
//   service: 'Gmail',
//   auth: {
//     user: 'your-email@gmail.com',
//     pass: 'your-email-password',
//   },
// });

// const ORIGINS = ['https://hamishw.com', 'https://www.hamishw.com'];
// const MAX_EMAIL_LENGTH = 512;
// const MAX_MESSAGE_LENGTH = 4096;
// const EMAIL = 'hello@hamishw.com';
// const FROM_EMAIL = 'mailbot@hamishw.com';
// const EMAIL_PATTERN = /(.+)@(.+){2,}\.(.+){2,}/;

// app.use(helmet());
// app.use(express.json());
// app.use(
//   cors({
//     origin: (origin, callback) => {
//       if (!ORIGINS.includes(origin)) {
//         return callback(
//           new Error(`Not allowed by CORS. Origin must be: ${ORIGINS.join(' or ')}`)
//         );
//       }

//       return callback(null, true);
//     },
//   })
// );
// app.options('*', cors());

// app.post('/message', async (req, res) => {
//   try {
//     const email = DOMPurify.sanitize(req.body.email);
//     const message = DOMPurify.sanitize(req.body.message);

//     // Validate email request
//     if (!email || !EMAIL_PATTERN.test(email)) {
//       return res.status(400).json({ error: 'Please enter a valid email address' });
//     }

//     if (!message) {
//       return res.status(400).json({ error: 'Please enter a message' });
//     }

//     if (email.length > MAX_EMAIL_LENGTH) {
//       return res.status(400).json({
//         error: `Please enter an email fewer than ${MAX_EMAIL_LENGTH} characters`,
//       });
//     }

//     if (message.length > MAX_MESSAGE_LENGTH) {
//       return res.status(400).json({
//         error: `Please enter a message fewer than ${MAX_MESSAGE_LENGTH} characters`,
//       });
//     }

//     // Send email using Nodemailer
//     await transporter.sendMail({
//       from: `Portfolio <${FROM_EMAIL}>`,
//       to: EMAIL,
//       subject: `New message from ${email}`,
//       text: `From: ${email}\n\n${message}`,
//     });

//     return res.status(200).json({ message: 'Message sent successfully' });
//   } catch (error) {
//     console.error('Rejected', error);
//     return res.status(500).json({ error: 'Message rejected' });
//   }
// });

// module.exports.handler = serverless(app);

const serverless = require('serverless-http');
const nodemailer = require('nodemailer');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');

const app = express();
const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);
const { smtpHost, smtpUser, smtpPass } = process.env;

const mailTransport = nodemailer.createTransport({
  host: smtpHost,
  port: 465,
  secure: true,
  auth: {
    user: smtpUser,
    pass: smtpPass,
  },
});

const ORIGIN = 'https://hamishw.com';
const MAX_EMAIL_LENGTH = 512;
const MAX_MESSAGE_LENGTH = 4096;

app.use(helmet());
app.use(express.json());
app.use(cors({ origin: ORIGIN }));

app.post('/message', async (req, res) => {
  try {
    const email = DOMPurify.sanitize(req.body.email);
    const message = DOMPurify.sanitize(req.body.message);

    // Reject unsupported origins
    if (req.headers.origin !== ORIGIN) {
      throw new Error(`Unsupported origin: ${req.headers.origin}`);
    }

    // Validate email request
    if (!email || !/(.+)@(.+){2,}\.(.+){2,}/.test(email)) {
      return res.status(400).json({ error: 'Please enter a valid email address' });
    } else if (!message) {
      return res.status(400).json({ error: 'Please enter a message' });
    } else if (email.length > MAX_EMAIL_LENGTH) {
      return res.status(400).json({
        error: `Please enter an email fewer than ${MAX_EMAIL_LENGTH} characters`,
      });
    } else if (message.length > MAX_MESSAGE_LENGTH) {
      return res.status(400).json({
        error: `Please enter a message fewer than ${MAX_MESSAGE_LENGTH} characters`,
      });
    }

    // Send email
    const mailOptions = {
      from: `Portfolio <mailbot@hamishw.com>`,
      to: 'hello@hamishw.com',
      subject: `New message from ${email}`,
      text: `From: ${email}\n\n${message}`,
    };

    await mailTransport.sendMail(mailOptions);

    return res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Rejected', error);
    return res.status(500).json({ error: 'Message rejected' });
  }
});

module.exports.handler = serverless(app);