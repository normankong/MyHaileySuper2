var MEDIA_SOURCE_ROOT = location.protocol + '//' + location.host + location.pathname + 'channel/';

var mediaJSON = {
    'categories': [{
        'name': 'Movies',
        'videos': [
            {
                'description': 'Tokyo 1 Desc',
                'sources': MEDIA_SOURCE_ROOT + '/tokyo/video1.mp4',
                'subtitle': 'Video 1 From Tokyo Subtitle',
                'thumb': MEDIA_SOURCE_ROOT +'/tokyo/video1.png',
                'title': 'Tokyo Video 1 Title',
                'type': 'video/mp4'
            },
            {
                'description': 'Tokyo 2 Desc',
                'sources': MEDIA_SOURCE_ROOT + '/tokyo/video2.mp4',
                'subtitle': 'Video 2 From Tokyo Subtitle',
                'thumb': MEDIA_SOURCE_ROOT + '/tokyo/video2.png',
                'title': 'Tokyo Video 2 Title',
                'type': 'video/mp4'
            },
            {
                'description': 'Frozen 2 Stream Desc',
                'sources': MEDIA_SOURCE_ROOT + 'frozen2/index.m3u8',
                'subtitle': 'Frozen 2 Stream Subtitle',
                'thumb': MEDIA_SOURCE_ROOT +'/frozen2/thumb.png',
                'title': 'Frozen 2 Stream Title',
                'type': 'application/vnd.apple.mpegURL'
            },
            {
                'description': 'Frozen 2 Video Desc' ,
                'sources': MEDIA_SOURCE_ROOT + 'frozen2/frozen2.mp4',
                'subtitle': 'Frozen 2 Video Subtitle',
                'thumb': MEDIA_SOURCE_ROOT +'/frozen2/thumb.png',
                'title': 'Frozen 2 Video Title',
                'type': 'video/mp4'
            }
        ]
    }]
};