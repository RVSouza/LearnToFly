const { defineConfig } = require("cypress")

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    env: {
      learnToFly: "https://hml-app.learntofly.global/login",
      usuario: "testeqa@mailinator.com",
      senha: "123456"
    }
  }
}) 