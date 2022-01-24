const generateMessage = (username, text) => {
  return {
    username,
    text,
    createdAt: new Date().getTime()
  }
}

const generateLocationMessage = (username, { lat, long }) => {
  const locationMessage = `https://google.com/maps?q=${lat},${long}`
  return {
    username,
    location: locationMessage,
    createdAt: new Date().getTime()
  }
}


module.exports = {
  generateMessage,
  generateLocationMessage
}