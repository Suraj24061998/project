const express = require("express");
const router = express.Router();
const user = require("./customer/customerschema");
const users = require("./prodctaddschema");
const userss = require("./adminnew");
const customer = require("./customer/customerController");
const acc = require("./accountschema");
const carts = require("./cartschema");
const cart=require("./cart/cartmodel")
const check=require("./checkschema")
const fs = require("fs");
const path = require("path");

const multer = require("multer");
const { log } = require("console");


// var images = Date.now() + ".png";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uplods");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage }).single("image");

router.post("/newacc", customer.addData);

router.post("/login", customer.login);




router.post("/add", upload, function (req, res) {
    console.log("file ",req.file)
  let data = users({
    name: req.body.name,
    categorey: req.body.categorey,
    description: req.body.description,
    price: req.body.price,
    image: req.file
  });
  data
    .save()
    .then((data) => {
      res.json({
        status: 200,
        msg: "product add",
        data: data
      });
      console.log("Data saved");
    })
    .catch((err) => {
      res.json({
        status: 500,
        msg: "product add fail",
        Error:err,
      });
    });
});

router.post("/viewproduct", function (req, res) {
  users
    .find()
    .exec()
    .then((data) => {
      console.log(data);
      res.json({
        status: 200,
        msg: "view product",
        data: data,
      });
    })
    .catch((err) => {
      res.json({
        status: 500,
        msg: "faild",
      });
    });
});

router.post("/adminnew", function (req, res) {
  let data = userss({
    email: req.body.email,
    password: req.body.password,
  });
  data
    .save()
    .then((data) => {
      res.json({
        status: 200,
        msg: " adminaccount created",
        data: data,
      });
      console.log("Data saved");
    })
    .catch((err) => {
      res.json({
        status: 500,
        msg: "account not created",
      });
    });
});
router.post("/adminlog", function (req, res) {
  userss
    .findOne({ email: req.body.email })
    .exec()
    .then((data) => {
      // console.log(data);
      if (data.password == req.body.password) {
        res.json({
          status: 200,
          msg: "login sucessfully",
          data: data,
        });
      } else {
        res.json({
          status: 500,
          msg: "password mismatch",
        });
      }
    })
    .catch((err) => {
      res.json({
        status: 500,
        msg: "login faild",
      });
    });
});

router.post("/account", function (req, res) {
  let data = acc({
    name: req.body.name,
    mobile: req.body.mobile,
    address: req.body.address,
    email: req.body.email,
    pincode: req.body.pincode,
    country: req.body.country,
    state: req.body.state,
  });
  data
    .save()
    .then((data) => {
      res.json({
        status: 200,
        msg: "create account",
        data: data,
      });
      console.log("account sucessfully");
    })
    .catch((err) => {
      res.json({
        status: 500,
        msg: "account  fail",
      });
    });
});

router.post("/check", function (req, res) {
  let data = check({
    name: req.body.name,
    mobile: req.body.mobile,
    address: req.body.address,
    email: req.body.email,
    pincode: req.body.pincode,
    state: req.body.state,
    userid: req.body.userid,
    productid: req.body.productid,
  });
  data
    .save()
    .then((data) => {
      res.json({
        status: 200,
        msg: "billing adress sucssfully",
        data: data,
      });
      console.log("billing sucessfully");
    })
    .catch((err) => {
      res.json({
        status: 500,
        msg: "billing  fail",
      });
    });
});


router.post("/viewbill", function (req, res) {
  check
    .find()
    .exec()
    .then((data) => {
      console.log(data);
      res.json({
        status: 200,
        msg: "bill adress",
        data: data,
      });
    })
    .catch((err) => {
      res.json({
        status: 500,
        msg: "faild",
      });
    });
});




router.post("/viewaccount", function (req, res) {
  acc
    .find()
    .exec()
    .then((data) => {
      console.log(data);
      res.json({
        status: 200,
        msg: "view account",
        data: data,
      });
    })
    .catch((err) => {
      res.json({
        status: 500,
        msg: "faild",
      });
    });
});

router.post("/delete/:id", function (req, res) {
  
    users.findOneAndDelete({ _id:req.params.id })
    .exec()
    .then((data) => {
      console.log(data);
      res.json({
        status: 200,
        msg: "delete sucessfully",
        data: data,
      });
    })
    .catch((err) => {
      res.json({
        status: 500,
        msg: " delete faild",
      });
    });
});

router.post("/update", function (req, res) {
  console.log(req.body)
  users.findByIdAndUpdate({ _id: req.body.id },
    {name: req.body.name,price:req.body.price})
    .exec()
    .then((data) => {
      console.log(data);
      res.json({
        status: 200,
        msg: "update sucessfully",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({
        status: 500,
        msg: " update faild",
      });
    });
});




router.post("/cart", function (req, res) {
  let data = carts({
    userid: req.body.userid,
    productid: req.body.productid,
   
  });
  data
    .save()
    .then((data) => {
      res.json({
        status: 200,
        msg: "cart suessfull",
        data: data,
      });
      console.log("Data saved");
    })
    .catch((err) => {
      res.json({
        status: 500,
        msg: "cart faild",
      });
    });
});

router.post("/viewuser", function (req, res) {
  user
    .find()
    .exec()
    .then((data) => {
      console.log(data);
      res.json({
        status: 200,
        msg: "user found",
        data: data,
      });
    })
    .catch((err) => {
      res.json({
        status: 500,
        msg: "user not found",
      });
    });
});


router.post("/viewcart", function (req, res) {
  carts
    .find()
    .exec()
    .then((data) => {
      console.log(data);
      res.json({
        status: 200,
        msg: "view cart",
        data: data,
      });
    })
    .catch((err) => {
      res.json({
        status: 500,
        msg: "faild",
      });
    });
});





console.log("ok");
module.exports = router;
