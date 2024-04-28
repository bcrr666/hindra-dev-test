const json = (message = '', data = {}, state = 200) => {
  return {
    statusCode: state,
    body: JSON.stringify(
      {
        message: message,
        data: data
      }
    ),
  };
}

module.exports = { json }