const React = require('react')

function Default(html) {
  return (
    <html>
    <head>
      <title>Default</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossOrigin="anonymous" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" integrity="sha512-EZLkOqwILORob+p0BXZc+Vm3RgJBOe1Iq/0fiI7r/wJgzOFZMlsqTa29UEl6v6U6gsV4uIpsNZoV32YZqrCRCQ==" crossOrigin="anonymous" />
    </head>
    <body>
      <div className="wrapper">
        <header>
          <h2><a href="/itinerary">Home</a></h2>
          <h2><a href="/itinerary/summary">Trip Summary</a></h2>
        </header>
        <div className="container">
          {html.children}
        </div>
      </div>
    </body>

    </html>
  )
}

module.exports = Default