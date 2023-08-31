const express = require('express');
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const port = process.env.PORT || 6000;
const swaggerOptions = {
    swaggerDefinition: {
        info:{
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
    apis: ["path-to-your-api-routes-file.js"], // Update this with the correct file path
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

// Setup Swagger UI route
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get('/customer', (req, res) => {
    res.send("customer results");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
