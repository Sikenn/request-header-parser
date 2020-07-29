module.exports = whoami = (req, res) => {
  const ipadress = req.header('x-forwarded-for') ||
    req.connection.remoteAddress;
  const language = req.get('Accept-language');
  const software = req.get('user-agent')
  res.json({ ipadress, language, software })
}
