class UserController {
  static convertNumberToWaLink(req, res, next) {
    try {
      const phoneno = /^\d*$/;
      const { number } = req.body;

      if (!number) {
        res.status(400).json({ errorMsg: "Input number not found" });
      } else if (!number.trim().match(phoneno) || number[0] === "0") {
        res.status(400).json({
          errorMsg:
            "Invalid number format, please insert number only or country code first"
        });
      } else {
        res
          .status(200)
          .json({ link: `https://api.whatsapp.com/send?phone=${number}` });
      }
    } catch (error) {
      res.status(400).json({ errorMsg: "Input number not found" });
    }
  }
}

module.exports = UserController;
