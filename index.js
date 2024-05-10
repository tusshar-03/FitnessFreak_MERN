// const express = require("express");
// const cors = require("cors");
// require("./db/config");
// const { body, validationResult } = require("express-validator");
// const User = require("./db/User");
// const app = express();
// app.use(express.json());
// app.use(cors());

// app.post(
//   "/contact",
//   [
//     body("email", "Not a valid email format").isEmail(),
//     body("phone")
//       .isMobilePhone("any", { strictMode: false })
//       .withMessage("Please enter a valid mobile number"),
//     body("name", "Minimum 3 length").isLength({ min: 3 }),
//   ],
//   async (req, resp) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return resp.status(400).json({
//         message: "Validations Failed",
//         success,
//         errors: errors.array(),
//       });
//     }
//     let user = new User(req.body);
//     let result = await user.save();
//     resp.status(200).send(req.body, { message: "Data saved" });
//   }
// );

// app.listen(5000);
// // 5000 is a safe port
const express = require("express");
const cors = require("cors");
require("./db/config");
const { body, validationResult } = require("express-validator");
const User = require("./db/User");
const app = express();

app.use(express.json());
app.use(cors());

app.post(
  "/contact",
  [
    body("email").isEmail().withMessage("Not a valid email format"),
    body("phone")
      .isMobilePhone("any", { strictMode: false })
      .withMessage("Please enter a valid mobile number"),
    body("name").isLength({ min: 3 }).withMessage("Minimum 3 characters required for name"),
  ],
  async (req, resp) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return resp.status(400).json({
        success: false,
        message: "Validation failed",
        errors: errors.array(),
      });
    }

    try {
      const user = new User(req.body);
      await user.save();
      resp.status(200).json({ success: true, message: "Data saved" });
    } catch (error) {
      resp.status(500).json({ success: false, message: "Internal server error" });
    }
  }
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

