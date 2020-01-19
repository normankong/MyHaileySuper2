# MyHaileySuper2

My Hailey Super with Chromecast support

### Run on static httpd-server with CORS and HTTPS 

- Refer to the Google codelab sample
`https://codelabs.developers.google.com/codelabs/cast-videos-chrome/`
- Decouple the mediaList.js which contains your video with thumbnail
- Support m3u8 with HLS plugin

### Installation
- Generate your own SSL Certificate pairs and put into root folder or cert folders
- Create channel folder and put the video / thumbnails 
- Install http-server nodejs 
`npm i -g http-server`

# Start the Application
`http-server -S -C cert/cert.pem --cors -K cert/key.pem`


Good luck and have fun !
