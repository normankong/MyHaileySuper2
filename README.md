# MyHaileySuper2

My Hailey Super with Chromecast support

### Run on static httpd-server with CORS and HTTPS 

- Refer to the Google codelab sample
`https://codelabs.developers.google.com/codelabs/cast-videos-chrome/`
- Decouple the mediaList.js which contains your video with thumbnail
- Support m3u8 with HLS plugin
- Add Netflix style carousel (Generate the static media.json by preprocess.js, see Below)

### Installation
- Generate your own SSL Certificate pairs (Recommend let's encrypt)
- Create channel folder and put the video / thumbnails 
- Install http-server nodejs 
`npm i -g http-server`

# Start the Application
Assume the Certificate / Private Key file are located in 'cert' folder

`http-server -S -C cert/cert.pem --cors -K cert/key.pem`

If you are using letsencrypt to generate SSL cert and using pm2 with root, you may directly refer to the let's encrypt folder.
Prepare the 'start.sh' as 

`http-server -S -C /etc/letsencrypt/live/[YOUR_DOMAIN_NAME]/cert.pem -K /etc/letsencrypt/live/[YOUR_DOMAIN_NAME]/privkey.pem -d -p 443`

Then add to pm2 by using below script

`sudo pm2 start start.sh --name [YOUR_APP_NAME]`

Remember to save the configuration in pm2

`sudo pm2 save`

# Media Files preparation
The video files assume share the same server. For configuration you may refer to the mediaList.sample.json and update your setting to mediaList.json manually.

# Media Files preprocessor
Alternatively, you may refer to the preprocess script to generate the mediaList.json accordingly.
By default, preprocess will assume to scan all the subfolder under folder name 'channel'.
If the subfolder have the same mp4 and png file, then it will put into the queue and finally output a 'mediaList.json'

`npm install`
`node preprocess.js`
```
$ node preprocess.js 
===========================================
Input Folder            : channel
Generate File           : mediaList.json
===========================================
Aladdin              have beed added to the list
Cinderella           have beed added to the list
Frozen 1             have beed added to the list
Toy Story 1          have beed added to the list
Toy Story 2          have beed added to the list
Preprocess.sh have completed successfully.
$ 
```

Alternatively, you may override the setting with optional parameters

`node preprocess.js [YOUR_MEDIA_FOLDER_NAME] [YOUR_MEDIA_JSON_FILE]`

# Sample mediaList.json
```
{
  "data": [
    {
      "title": "Aladdin",
      "sources": "channel/aladdin/aladdin.mp4",
      "thumb": "channel/aladdin/aladdin.png",
      "type": "video/mp4"
    },
    {
      "title": "Cinderella",
      "sources": "channel/cinderella/cinderella.mp4",
      "thumb": "channel/cinderella/cinderella.png",
      "type": "video/mp4"
    },
    {
      "title": "Frozen 1",
      "sources": "channel/frozen1/frozen1.mp4",
      "thumb": "channel/frozen1/frozen1.png",
      "type": "video/mp4"
    },
    {
      "title": "Toy Story 1",
      "sources": "channel/toyStory1/toyStory1.mp4",
      "thumb": "channel/toyStory1/toyStory1.png",
      "type": "video/mp4"
    },
    {
      "title": "Toy Story 2",
      "sources": "channel/toyStory2/toyStory2.mp4",
      "thumb": "channel/toyStory2/toyStory2.png",
      "type": "video/mp4"
    }
  ]
}
```

Good luck and have fun !
