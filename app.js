const express = require("express");
const app = express();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const port = process.env.PORT || 8000;
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Customer API",
      description: "Customer API documentation",
      contact: {
        name: "Amazing Developer",
      },
    },
    servers: [
      {
        url: `http://localhost:${port}`,
      },
    ],
  },
  // ['.routes/*.js'],
  apis: ["app.js"], // Update this with the correct file path
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

// Setup Swagger UI route
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get("/customer", (req, res) => {
  res.send("customer results");
});

// routes
/**
 * @swagger
 * /customer:
 *  get:
 *   description: use to request all customers
 *   responses:
 *     '200':
 *       description: a successful response
 */
app.put("/customer", (req, res) => {
    res.send(" customer updated successfully");
  });
  
  // routes
  /**
   * @swagger
   * /customer:
   *  put:
   *   description: use to update customers
   *   responses:
   *     '200':
   *       description: a successful response
   */
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
