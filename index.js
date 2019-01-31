const http = require("http");
const {routes}=require('./routes')
require('./router')
const {join,extname}=require('path')
const mime={
  '.png':'image/png',
  '.html':"text/html"
}
const handler = (request, response) => {
  const { headers, httpVersion, method, url } = request;
  const { pathname, searchParams } = new URL(url, "https://" + headers.host);
  console.log(searchParams.get("id"), searchParams.get("activate"));
  require('fs').readFile(join('.','public',pathname),'binary', (err, data) => {
    if (err) {
     return routes[method][url](request,response)
    }
    console.log(extname(pathname))
    response.setHeader('content-type', mime[extname(pathname)]);
    response.write(data,'binary');
    response.end();
  })
};
const server = http.createServer((request,response)=>{
  return handler(request,response)
});
server.listen(8000, () => {
  console.log("server start");
});
