module.exports = whoami = (req, res) => {
  const ip = req.ip;
  const languages = req.get('Accept-language');
  const agent = req.get('user-agent')
  res.json({ip, languages, agent})
}
