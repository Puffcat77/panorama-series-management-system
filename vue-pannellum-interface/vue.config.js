module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    headers: {
    'Access-Control-Allow-Origin': '*'            
    },
    proxy: 'http://localhost:8080'
  }
}