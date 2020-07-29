module.exports = whoami = (req, res) => {
  const ipaddress = req.header('x-forwarded-for') ||
    req.connection.remoteAddress;
  const language = req.get('Accept-language');
  const software = req.get('user-agent')
  res.json({ ipaddress, language, software })
}
