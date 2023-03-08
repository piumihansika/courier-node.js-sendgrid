const express = require("express");
const router = express.Router();
const courier =  require("@trycourier/courier");

const courierClient = courier.CourierClient({ authorizationToken: "<your-Courier-AUTH-TOKEN>" });

router.post("/notification", (req, res) => {
    const { email, name } = req.body;

    res = courierClient.send({
        message: {
            to: {
            email: email,
            },
            template: "<your-Template-ID>",
            data: {
                userName: name,
                userEmail: email,
            },
        },
    });
    console.log(res)
});

module.exports = router;