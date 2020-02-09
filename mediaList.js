var MEDIA_SOURCE_ROOT = location.protocol + '//' + location.host + location.pathname + 'channel/';
// var MEDIA_SOURCE_ROOT = location.protocol + '//' + location.host + '/channel/';

var mediaJSON = {
    'categories': [{
        'name': 'Movies',
        'videos': [{
                'title': 'Frozen 2',
                'sources': MEDIA_SOURCE_ROOT + 'frozen2/frozen2.mp4',
                'thumb': MEDIA_SOURCE_ROOT + '/frozen2/thumb.png',
                'type': 'video/mp4'
            },{
                'title': 'Aladdin',
                'sources': MEDIA_SOURCE_ROOT + 'aladdin/aladdin.mp4',
                'thumb': MEDIA_SOURCE_ROOT + '/aladdin/thumb.png',
                'type': 'video/mp4'
            },{
                'title': 'Toy Story 1',
                'sources': MEDIA_SOURCE_ROOT + 'toyStory1/toyStory1.mp4',
                'thumb': MEDIA_SOURCE_ROOT + '/toyStory1/toyStory1.jpg',
                'type': 'video/mp4'
            },{
                'title': 'Toy Story 2',
                'sources': MEDIA_SOURCE_ROOT + 'toyStory2/toyStory2.mp4',
                'thumb': MEDIA_SOURCE_ROOT + '/toyStory2/toyStory2.jpg',
                'type': 'video/mp4'
            },{
                'title': 'Toy Story 3',
                'sources': MEDIA_SOURCE_ROOT + 'toyStory3/toyStory3.mp4',
                'thumb': MEDIA_SOURCE_ROOT + '/toyStory3/toyStory3.jpg',
                'type': 'video/mp4'
            },{
                'title': 'Toy Story 4',
                'sources': MEDIA_SOURCE_ROOT + 'toyStory4/toyStory4.mp4',
                'thumb': MEDIA_SOURCE_ROOT + '/toyStory4/toyStory4.jpg',
                'type': 'video/mp4'
            },
        ]
    }]
};