var MEDIA_SOURCE_ROOT = location.protocol + '//' + location.host + location.pathname + 'channel/';
// var MEDIA_SOURCE_ROOT = location.protocol + '//' + location.host + '/channel/';

var mediaJSON = {
    'categories': [{
        'name': 'Movies',
        'videos': [{
                'description': 'Frozen 2',
                'sources': MEDIA_SOURCE_ROOT + 'frozen2/frozen2.mp4',
                'subtitle': 'Frozen 2',
                'thumb': MEDIA_SOURCE_ROOT + '/frozen2/thumb.png',
                'title': 'Frozen 2',
                'type': 'video/mp4'
            },{
                'description': 'Aladdin',
                'sources': MEDIA_SOURCE_ROOT + 'aladdin/aladdin.mp4',
                'subtitle': 'Aladdin',
                'thumb': MEDIA_SOURCE_ROOT + '/aladdin/thumb.png',
                'title': 'Aladdin',
                'type': 'video/mp4'
            },{
                'description': 'Toy Story 1',
                'sources': MEDIA_SOURCE_ROOT + 'toyStory1/toyStory1.mp4',
                'subtitle': 'Toy Story 1',
                'thumb': MEDIA_SOURCE_ROOT + '/toyStory1/toyStory1.jpg',
                'title': 'Toy Story 1',
                'type': 'video/mp4'
            },{
                'description': 'Toy Story 2',
                'sources': MEDIA_SOURCE_ROOT + 'toyStory2/toyStory2.mp4',
                'subtitle': 'Toy Story 2',
                'thumb': MEDIA_SOURCE_ROOT + '/toyStory2/toyStory2.jpg',
                'title': 'Toy Story 2',
                'type': 'video/mp4'
            },{
                'description': 'Toy Story 3',
                'sources': MEDIA_SOURCE_ROOT + 'toyStory3/toyStory3.mp4',
                'subtitle': 'Toy Story 3',
                'thumb': MEDIA_SOURCE_ROOT + '/toyStory3/toyStory3.jpg',
                'title': 'Toy Story 3',
                'type': 'video/mp4'
            },{
                'description': 'Toy Story 4',
                'sources': MEDIA_SOURCE_ROOT + 'toyStory4/toyStory4.mp4',
                'subtitle': 'Toy Story 4',
                'thumb': MEDIA_SOURCE_ROOT + '/toyStory4/toyStory4.jpg',
                'title': 'Toy Story 4',
                'type': 'video/mp4'
            },
        ]
    }]
};