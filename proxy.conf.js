const PROXY_CONFIG = [
    {
        context: [
            "/actors",      ],
        target: "http://localhost:3050",
        secure: false
    }
  ]
  
  module.exports = PROXY_CONFIG;