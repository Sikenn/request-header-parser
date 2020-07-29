module.exports = whoami = (req, res) => {
  const ip = req.get('host');
  const languages = req.get('Accept-language');
  const agent = req.get('user-agent')
  res.json({ip, languages, agent})
}
