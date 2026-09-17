function helloHandler(req, res) {
  res.status(200).json({
    message: "Hello from API"
  });
}

export default helloHandler;