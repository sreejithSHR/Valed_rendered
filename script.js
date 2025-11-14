(function(){
    var script = {
 "mouseWheelEnabled": true,
 "definitions": [{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_401C192A_4BA1_D117_418F_4A5C3301B321_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "Meditation area",
 "id": "panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0",
 "thumbnailUrl": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_t.jpg",
 "pitch": 0,
 "partial": false,
 "cardboardMenu": "this.Menu_911D69F3_8340_54B3_41D0_26C6705E51D0",
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5ABB6423_4BA1_F714_41B3_CA2ED2AA1BB9",
  "this.overlay_5A64D5A4_4BA0_5113_41D2_A31D065E2371",
  "this.overlay_5A306C10_4BA0_5734_41CA_ED63579003C5",
  "this.overlay_5A637704_4BA1_B11C_41CB_772ABB5EE305",
  "this.overlay_590A28A2_4BA0_5F14_41BF_452686803B0C",
  "this.overlay_5A8CCEF1_4BA0_70F4_41B1_A59890A515EF"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaPlayer",
 "buttonCardboardView": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "viewerArea": "this.MainViewer",
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "mouseControlMode": "drag_acceleration"
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_1",
 "thumbnailUrl": "media/album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_1_t.jpg",
 "width": 3840,
 "label": "Enscape_2025-04-16-18-02-00",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_1.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 2160
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_401C192A_4BA1_D117_418F_4A5C3301B321_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_401C192A_4BA1_D117_418F_4A5C3301B321",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "media": "this.panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4019D266_4BA0_531F_41C5_68650E743136_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "media": "this.panorama_4019D266_4BA0_531F_41C5_68650E743136",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PhotoAlbumPlayListItem",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 0)",
   "media": "this.album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ],
 "id": "mainPlayList"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_4019D266_4BA0_531F_41C5_68650E743136_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_7",
 "thumbnailUrl": "media/album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_7_t.jpg",
 "width": 3840,
 "label": "Enscape_2025-04-21-17-49-53",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_7.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 2160
},
{
 "class": "MediaAudio",
 "audio": {
  "class": "AudioResource",
  "mp3Url": "media/audio_7C78285D_3BCA_792F_41BD_4CC248FD0BB1.mp3",
  "oggUrl": "media/audio_7C78285D_3BCA_792F_41BD_4CC248FD0BB1.ogg"
 },
 "autoplay": true,
 "id": "audio_7C78285D_3BCA_792F_41BD_4CC248FD0BB1",
 "data": {
  "label": "Hope (mp3cut.net)"
 }
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_5",
 "thumbnailUrl": "media/album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_5_t.jpg",
 "width": 3840,
 "label": "Enscape_2025-04-21-17-46-56",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_5.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 2160
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_401C192A_4BA1_D117_418F_4A5C3301B321"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "Reflection area",
 "id": "panorama_4019D266_4BA0_531F_41C5_68650E743136",
 "thumbnailUrl": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_t.jpg",
 "pitch": 0,
 "partial": false,
 "cardboardMenu": "this.Menu_911D69F3_8340_54B3_41D0_26C6705E51D0",
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5E4E5AFB_4BE1_D0F4_41C3_DBF968754D92",
  "this.overlay_5DC36FE4_4BE0_711C_41BE_32FC24D35FC0",
  "this.overlay_5D747D15_4BE0_B13C_41C8_808EFB6362C0",
  "this.overlay_5C9B7244_4BFF_D31C_41A8_8298477E11B0",
  "this.overlay_5EA5BBE2_4BE1_D114_4196_202E15F61E91",
  "this.overlay_5E628964_4BE0_5113_4192_3DF963599090",
  "this.overlay_5DC2891A_4BE0_D137_41B3_6266C7623EF7",
  "this.overlay_5D8332EA_4BE3_D314_41C2_518A9839EAC0",
  "this.overlay_5D8D290A_4BE0_B114_41C1_764AC3895CFD",
  "this.overlay_5D408AB9_4BE1_B374_41BE_FEF4641A62CC",
  "this.overlay_5EAB4C60_4BE0_D713_41D2_E6C6D33DDAC4"
 ]
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_11",
 "thumbnailUrl": "media/album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_11_t.jpg",
 "width": 3840,
 "label": "Enscape_2025-05-02-14-31-10",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_11.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 2160
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "class": "MapPlayListItem",
   "media": "this.map_5C2577AA_4BE0_7114_41A7_D43E0B8B3A0B",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_911779F0_8340_54CD_41D0_634720076589"
},
{
 "class": "PhotoAlbum",
 "label": "Photo Album Enscape_2025-04-16-17-57-36",
 "thumbnailUrl": "media/album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_t.png",
 "playList": "this.album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_AlbumPlayList",
 "id": "album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A"
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_0",
 "thumbnailUrl": "media/album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_0_t.jpg",
 "width": 3840,
 "label": "Enscape_2025-04-16-17-57-36",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_0.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 2160
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "Eco pillar",
 "id": "panorama_401C192A_4BA1_D117_418F_4A5C3301B321",
 "thumbnailUrl": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_t.jpg",
 "pitch": 0,
 "partial": false,
 "cardboardMenu": "this.Menu_911D69F3_8340_54B3_41D0_26C6705E51D0",
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_59EC7653_4BA0_5334_41D0_93884DE34E97",
  "this.overlay_5952A3CC_4BA0_512C_41C3_6BD7586DB2F9",
  "this.overlay_585DD40A_4BA1_B714_4182_01318B5E4A25",
  "this.overlay_5952E93C_4BA0_B16C_41C2_B7715D231C56",
  "this.overlay_5906123B_4BAF_D374_41B3_74C6277CCDA8",
  "this.overlay_51B96FA5_4BE0_711D_41C7_80F381D915A4"
 ]
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_10",
 "thumbnailUrl": "media/album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_10_t.jpg",
 "width": 3840,
 "label": "Enscape_2025-04-28-14-54-20",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_10.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 2160
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_3",
 "thumbnailUrl": "media/album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_3_t.jpg",
 "width": 3840,
 "label": "Enscape_2025-04-21-17-40-28",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_3.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 2160
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_8",
 "thumbnailUrl": "media/album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_8_t.jpg",
 "width": 3840,
 "label": "Enscape_2025-04-21-17-51-48",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_8.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 2160
},
{
 "class": "Map",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "id": "map_5C2577AA_4BE0_7114_41A7_D43E0B8B3A0B",
 "thumbnailUrl": "media/map_5C2577AA_4BE0_7114_41A7_D43E0B8B3A0B_t.jpg",
 "width": 3840,
 "label": "plan omr",
 "initialZoomFactor": 1,
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_5C2577AA_4BE0_7114_41A7_D43E0B8B3A0B.jpeg",
    "class": "ImageResourceLevel",
    "width": 3200,
    "height": 1800
   },
   {
    "url": "media/map_5C2577AA_4BE0_7114_41A7_D43E0B8B3A0B_lq.jpeg",
    "class": "ImageResourceLevel",
    "width": 341,
    "height": 192,
    "tags": "preload"
   }
  ]
 },
 "fieldOfViewOverlayRadiusScale": 0.3,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "maximumZoomFactor": 1.2,
 "minimumZoomFactor": 0.5,
 "height": 2160,
 "fieldOfViewOverlayOutsideOpacity": 0
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -143.64,
  "pitch": 0
 },
 "id": "camera_913779FE_8340_54B2_41D1_F6CD417D77D9",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 152.35,
  "pitch": 0
 },
 "id": "camera_9138DA06_8340_5755_41C1_34CA4F12AD68",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "media": "this.panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "media": "this.panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "media": "this.panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "media": "this.panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_401C192A_4BA1_D117_418F_4A5C3301B321_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "media": "this.panorama_401C192A_4BA1_D117_418F_4A5C3301B321",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "media": "this.panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "media": "this.panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "media": "this.panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4019D266_4BA0_531F_41C5_68650E743136_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "media": "this.panorama_4019D266_4BA0_531F_41C5_68650E743136",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 0)",
   "class": "PhotoAlbumPlayListItem",
   "media": "this.album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist"
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "class": "MapPlayListItem",
   "media": "this.map_5C2577AA_4BE0_7114_41A7_D43E0B8B3A0B",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_911769F0_8340_54CD_41C0_9D577758497D"
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_2",
 "thumbnailUrl": "media/album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_2_t.jpg",
 "width": 3840,
 "label": "Enscape_2025-04-16-18-09-25",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_2.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 2160
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_12",
 "thumbnailUrl": "media/album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_12_t.jpg",
 "width": 3840,
 "label": "Enscape_2025-05-02-15-55-30",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_12.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 2160
},
{
 "class": "Menu",
 "fontFamily": "Arial",
 "rollOverFontColor": "#FFFFFF",
 "selectedFontColor": "#FFFFFF",
 "children": [
  {
   "class": "MenuItem",
   "label": "Enterance",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  },
  {
   "class": "MenuItem",
   "label": "Meditation area",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  },
  {
   "class": "MenuItem",
   "label": "Value Lab",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  },
  {
   "class": "MenuItem",
   "label": "Conflict Area",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  },
  {
   "class": "MenuItem",
   "label": "Eco pillar",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  },
  {
   "class": "MenuItem",
   "label": "Self Affirmation",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  },
  {
   "class": "MenuItem",
   "label": "Value Meter",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  },
  {
   "class": "MenuItem",
   "label": "Eco wheel",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  },
  {
   "class": "MenuItem",
   "label": "Reflection area",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "label": "Media",
 "id": "Menu_911D69F3_8340_54B3_41D0_26C6705E51D0",
 "backgroundColor": "#404040",
 "opacity": 0.4,
 "rollOverBackgroundColor": "#000000",
 "rollOverOpacity": 0.8,
 "selectedBackgroundColor": "#202020",
 "fontColor": "#FFFFFF"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4019D266_4BA0_531F_41C5_68650E743136"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "Value Meter",
 "id": "panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7",
 "thumbnailUrl": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_t.jpg",
 "pitch": 0,
 "partial": false,
 "cardboardMenu": "this.Menu_911D69F3_8340_54B3_41D0_26C6705E51D0",
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_58A85BC7_4BA0_711C_41CD_2A0B8E3F4264",
  "this.overlay_5FB712AE_4BA1_F36C_41C6_97F327ACF48E",
  "this.overlay_59ED33FE_4BA0_70EC_41C8_533633AAEB94",
  "this.overlay_5933ECA7_4BA0_F71D_41CD_11133C0B2B6D",
  "this.overlay_58AD5519_4BA0_7134_41CB_3F2BD92930D7",
  "this.overlay_5F80CD98_4BA3_F134_41BB_0A1E87D3FF9B",
  "this.overlay_50ABE6D7_4BA0_B33C_419C_46183994D961"
 ]
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_4",
 "thumbnailUrl": "media/album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_4_t.jpg",
 "width": 3840,
 "label": "Enscape_2025-04-21-17-44-20",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_4.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 2160
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "Conflict Area",
 "id": "panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869",
 "thumbnailUrl": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_t.jpg",
 "pitch": 0,
 "partial": false,
 "cardboardMenu": "this.Menu_911D69F3_8340_54B3_41D0_26C6705E51D0",
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_59AEA4A7_4BBF_D71C_41CD_5901058970EE"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_9",
 "thumbnailUrl": "media/album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_9_t.jpg",
 "width": 3840,
 "label": "Enscape_2025-04-28-14-49-03",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_9.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 2160
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 36.36,
   "backwardYaw": -27.65,
   "distance": 1,
   "panorama": "this.panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "Enterance",
 "id": "panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07",
 "thumbnailUrl": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_t.jpg",
 "pitch": 0,
 "partial": false,
 "cardboardMenu": "this.Menu_911D69F3_8340_54B3_41D0_26C6705E51D0",
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5B39BA49_4BA0_5314_41BD_50E0F9F4A1B1",
  "this.overlay_447C25F0_4BA3_B0F4_4193_A5E0B01E4318",
  "this.overlay_5B8C6547_4BA0_F11C_41CE_B9D06C8522F3",
  "this.overlay_5BD8434D_4BA0_B12D_41A1_F8DA65239937",
  "this.overlay_5B4F4ED1_4BA0_7334_41D0_6096A8C277E1",
  "this.overlay_5BF480CE_4BAF_EF2F_4190_AE5E1802B7BC",
  "this.overlay_5C2DEC47_4BE0_F71C_419A_228501E4A0D0",
  "this.overlay_53426F85_4BE1_B11D_41C3_36AEFC03610D"
 ]
},
{
 "class": "MapPlayer",
 "viewerArea": "this.MapViewer",
 "id": "MapViewerMapPlayer",
 "movementMode": "constrained"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_401C192A_4BA1_D117_418F_4A5C3301B321"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "Self Affirmation",
 "id": "panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF",
 "thumbnailUrl": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_t.jpg",
 "pitch": 0,
 "partial": false,
 "cardboardMenu": "this.Menu_911D69F3_8340_54B3_41D0_26C6705E51D0",
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5EE9E159_4BE0_F135_41C7_D5E18BEB56EA",
  "this.overlay_5ECB2360_4BE1_B113_41CA_AA436554251B",
  "this.overlay_5EB074CA_4BE0_7717_41B8_02EC2381CAC1",
  "this.overlay_5FD2E5EE_4BE0_50EC_41D2_41B00D6A9B52",
  "this.overlay_5F2D50A6_4BE1_AF1C_41C3_4AC8F2661889",
  "this.overlay_5DD19288_4BE0_B314_41D1_837AAED804F1",
  "this.overlay_5E479A7E_4BE0_73EC_4187_A82B3A1E8D10"
 ]
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_6",
 "thumbnailUrl": "media/album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_6_t.jpg",
 "width": 3840,
 "label": "Enscape_2025-04-21-17-48-31",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_6.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 2160
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PhotoAlbumPlayer",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer",
 "buttonPrevious": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482"
 ],
 "buttonNext": [
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4019D266_4BA0_531F_41C5_68650E743136"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -27.65,
   "backwardYaw": 36.36,
   "distance": 1,
   "panorama": "this.panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "Eco wheel",
 "id": "panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2",
 "thumbnailUrl": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_t.jpg",
 "pitch": 0,
 "partial": false,
 "cardboardMenu": "this.Menu_911D69F3_8340_54B3_41D0_26C6705E51D0",
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5EF7160D_4BE1_D32D_41A3_DE6A413F77D4",
  "this.overlay_5E5B4B95_4BE1_B13C_41D0_15A867E4CF5D",
  "this.overlay_5E02A395_4BE0_D13C_41A8_E5CD4A7B5D7B",
  "this.overlay_5EDB5D34_4BE0_B17C_41CE_B2B738E8EF52",
  "this.overlay_5E001B74_4BE3_F1FC_41D2_518C58B6DBBF",
  "this.overlay_5DFE55F6_4BE1_D0FC_41D0_33630AADAE3E"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4019D266_4BA0_531F_41C5_68650E743136"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_401C192A_4BA1_D117_418F_4A5C3301B321"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "Value Lab",
 "id": "panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074",
 "thumbnailUrl": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_t.jpg",
 "pitch": 0,
 "partial": false,
 "cardboardMenu": "this.Menu_911D69F3_8340_54B3_41D0_26C6705E51D0",
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_58B2F874_4BA0_5FFC_4175_220CC8B42C50",
  "this.overlay_58A0254D_4BDF_D12C_41BB_010528DE0E0D",
  "this.overlay_5803C74D_4BE0_D12D_41B5_7B17B7C761A9",
  "this.overlay_5F37D494_4BE0_773C_41C7_38852BA1D423",
  "this.overlay_5EAB7A85_4BE0_D31C_41C3_CA3CF763949F",
  "this.overlay_5D10D5DB_4BE0_5134_4193_1779C6F8F900",
  "this.overlay_5F4D9E83_4BE1_D314_41CA_8C95D97E0233",
  "this.overlay_5F87FECB_4BE0_5315_41C0_47EE418F9197",
  "this.overlay_5F467413_4BE0_5734_41B0_06CA9B2B4597",
  "this.overlay_5FC545AB_4BE0_B115_41D0_CC800270221B"
 ]
},
{
 "transitionDuration": 500,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "MainViewer",
 "left": 0,
 "paddingLeft": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 0.5,
 "toolTipFontSize": "13px",
 "width": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 50,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 7,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "minWidth": 100,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "toolTipShadowOpacity": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "shadow": false,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "paddingRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 55,
 "toolTipBackgroundColor": "#FF9933",
 "toolTipFontColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 6,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingBottom": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadOpacity": 1,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "data": {
  "name": "--SETTINGS"
 },
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": 115.05,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "top": "0%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": 641,
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "--STICKER"
 },
 "left": 30,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_0DD1BF09_1744_0507_41B3_29434E440055",
 "scrollBarVisible": "rollOver",
 "width": 573,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "top": 15,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": 133,
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible"
},
{
 "backgroundColorRatios": [],
 "data": {
  "name": "--MENU"
 },
 "children": [
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0.04%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "0.06%",
 "scrollBarOpacity": 0.22,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [],
 "verticalAlign": "top",
 "minWidth": 1,
 "top": 25,
 "layout": "absolute",
 "height": 59,
 "backgroundOpacity": 0.64,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--INFO photo"
 },
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--INFO photoalbum"
 },
 "children": [
  "this.Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
  "this.Container_23F097B8_0C0A_629D_4176_D87C90BA32B6"
 ],
 "id": "Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--PANORAMA LIST"
 },
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--LOCATION"
 },
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--FLOORPLAN"
 },
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--PHOTOALBUM + text"
 },
 "children": [
  "this.Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A"
 ],
 "id": "Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, true, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--PHOTOALBUM"
 },
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--REALTOR"
 },
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "maxHeight": 1080,
 "maxWidth": 1080,
 "id": "Image_222C05C8_394B_CB14_418C_C97785513D96",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "17.672%",
 "borderSize": 0,
 "url": "skin/Image_222C05C8_394B_CB14_418C_C97785513D96.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "top": "0%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "height": "14.664%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "propagateClick": false,
 "data": {
  "name": "Image39868"
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "paddingLeft": 0,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "transparencyActive": true,
 "width": 58,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "paddingBottom": 0,
 "cursor": "hand",
 "propagateClick": true
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "data": {
  "name": "IconButton MUTE"
 },
 "paddingLeft": 0,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "transparencyActive": true,
 "width": 58,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "paddingBottom": 0,
 "cursor": "hand",
 "propagateClick": true
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.58,
   "image": "this.AnimatedImageResource_52866CC6_4BE0_F71C_41D2_957D08CAAA90",
   "pitch": 10.87,
   "yaw": -149.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_5ABB6423_4BA1_F714_41B3_CA2ED2AA1BB9",
 "data": {
  "label": "Circle 360 1"
 },
 "maps": [
  {
   "hfov": 12.58,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -149.73,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 10.87
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 21.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_1_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 484,
      "height": 101
     }
    ]
   },
   "pitch": 5.02,
   "yaw": -43.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_5A64D5A4_4BA0_5113_41D2_A31D065E2371",
 "data": {
  "label": "Meditation Area"
 },
 "maps": [
  {
   "hfov": 21.21,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -43.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_1_HS_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 76,
      "height": 16
     }
    ]
   },
   "pitch": 5.02
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 20.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 483,
      "height": 101
     }
    ]
   },
   "pitch": -12.8,
   "yaw": -41.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_5A306C10_4BA0_5734_41CA_ED63579003C5",
 "data": {
  "label": "Patience Corner"
 },
 "maps": [
  {
   "hfov": 20.76,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -41.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_0_HS_2_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 76,
      "height": 16
     }
    ]
   },
   "pitch": -12.8
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.57,
   "image": "this.AnimatedImageResource_5287CCC6_4BE0_F71C_41D2_539E84763932",
   "pitch": -20.36,
   "yaw": 19.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_5A637704_4BA1_B11C_41CB_772ABB5EE305",
 "maps": [
  {
   "hfov": 12.57,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 19.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -20.36
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 32.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_0_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 738,
      "height": 103
     }
    ]
   },
   "pitch": -0.67,
   "yaw": 0.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_590A28A2_4BA0_5F14_41BF_452686803B0C",
 "data": {
  "label": "Conflict resolution Area"
 },
 "maps": [
  {
   "hfov": 32.46,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_0_HS_4_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 114,
      "height": 15
     }
    ]
   },
   "pitch": -0.67
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Circle Point 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.75,
   "image": "this.AnimatedImageResource_52877CC6_4BE0_F71C_41C7_B46B17ED89DA",
   "pitch": -4.23,
   "yaw": -5.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5A8CCEF1_4BA0_70F4_41B1_A59890A515EF",
 "maps": [
  {
   "hfov": 5.75,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -5.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_1_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.23
  }
 ]
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "data": {
  "name": "IconButton VR"
 },
 "paddingLeft": 0,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "transparencyActive": true,
 "width": 58,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "shadow": false,
 "visible": false,
 "paddingBottom": 0,
 "cursor": "hand",
 "propagateClick": true
},
{
 "cursor": "hand",
 "maxHeight": 37,
 "maxWidth": 49,
 "id": "IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "paddingLeft": 0,
 "paddingRight": 0,
 "transparencyActive": true,
 "right": 137,
 "width": 100,
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270.png",
 "horizontalAlign": "center",
 "bottom": 7,
 "minWidth": 1,
 "mode": "push",
 "height": 75,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png",
 "paddingBottom": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed.png",
 "propagateClick": true,
 "data": {
  "name": "IconButton VR"
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "data": {
  "name": "IconButton HS "
 },
 "paddingLeft": 0,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "transparencyActive": true,
 "width": 58,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "paddingBottom": 0,
 "cursor": "hand",
 "propagateClick": true
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "data": {
  "name": "IconButton GYRO"
 },
 "paddingLeft": 0,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "transparencyActive": true,
 "width": 58,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "paddingBottom": 0,
 "cursor": "hand",
 "propagateClick": true
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 21.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_1_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 506,
      "height": 120
     }
    ]
   },
   "pitch": 11.23,
   "yaw": 79.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_5E4E5AFB_4BE1_D0F4_41C3_DBF968754D92",
 "data": {
  "label": "Meditation Area"
 },
 "maps": [
  {
   "hfov": 21.83,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 79.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_1_HS_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 67,
      "height": 16
     }
    ]
   },
   "pitch": 11.23
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 22.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_1_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 505,
      "height": 119
     }
    ]
   },
   "pitch": -7.64,
   "yaw": 78.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_5DC36FE4_4BE0_711C_41BE_32FC24D35FC0",
 "data": {
  "label": "Patience Corner"
 },
 "maps": [
  {
   "hfov": 22.06,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 78.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_1_HS_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 67,
      "height": 16
     }
    ]
   },
   "pitch": -7.64
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 31.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_1_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 729,
      "height": 150
     }
    ]
   },
   "pitch": 10.78,
   "yaw": 2.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_5D747D15_4BE0_B13C_41C8_808EFB6362C0",
 "data": {
  "label": "Reflection area"
 },
 "maps": [
  {
   "hfov": 31.49,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_1_HS_2_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 77,
      "height": 16
     }
    ]
   },
   "pitch": 10.78
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 14.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_1_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 326,
      "height": 100
     }
    ]
   },
   "pitch": 10.18,
   "yaw": -54.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_5C9B7244_4BFF_D31C_41A8_8298477E11B0",
 "data": {
  "label": "eco wheel"
 },
 "maps": [
  {
   "hfov": 14.14,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -54.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_1_HS_3_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 52,
      "height": 16
     }
    ]
   },
   "pitch": 10.18
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Circle 360 1"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.76,
   "image": "this.AnimatedImageResource_52BE0CC9_4BE0_F714_41A9_5D47E6392DED",
   "pitch": -40.38,
   "yaw": 131.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5EA5BBE2_4BE1_D114_4196_202E15F61E91",
 "maps": [
  {
   "hfov": 9.76,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 131.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_1_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -40.38
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Circle Point 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.21,
   "image": "this.AnimatedImageResource_52BE5CC9_4BE0_F714_41B9_F6EBB39246CF",
   "pitch": -7.01,
   "yaw": 132.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5E628964_4BE0_5113_4192_3DF963599090",
 "maps": [
  {
   "hfov": 11.21,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 132.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_1_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -7.01
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 18.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_1_HS_6_0.png",
      "class": "ImageResourceLevel",
      "width": 427,
      "height": 118
     }
    ]
   },
   "pitch": -2.32,
   "yaw": 133.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_5DC2891A_4BE0_D137_41B3_6266C7623EF7",
 "data": {
  "label": "Conflict area"
 },
 "maps": [
  {
   "hfov": 18.78,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 133.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_1_HS_6_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -2.32
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Circle Point 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.29,
   "image": "this.AnimatedImageResource_52BFFCC9_4BE0_F714_41AE_FE5F6608EC66",
   "pitch": 1.79,
   "yaw": 76.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5D8332EA_4BE3_D314_41C2_518A9839EAC0",
 "maps": [
  {
   "hfov": 11.29,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 76.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_1_HS_7_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 1.79
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Circle Point 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.27,
   "image": "this.AnimatedImageResource_52BF0CCA_4BE0_F714_41B9_3423148EB46C",
   "pitch": 3.8,
   "yaw": -56.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5D8D290A_4BE0_B114_41C1_764AC3895CFD",
 "maps": [
  {
   "hfov": 11.27,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -56.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_1_HS_8_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 3.8
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 24.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_1_HS_9_0.png",
      "class": "ImageResourceLevel",
      "width": 554,
      "height": 141
     }
    ]
   },
   "pitch": -0.32,
   "yaw": -171.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_5D408AB9_4BE1_B374_41BE_FEF4641A62CC",
 "data": {
  "label": "Eco pillars"
 },
 "maps": [
  {
   "hfov": 24.36,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -171.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_1_HS_9_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 62,
      "height": 16
     }
    ]
   },
   "pitch": -0.32
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Circle Point 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.17,
   "image": "this.AnimatedImageResource_52B8BCCA_4BE0_F714_418B_B5BFA63A5374",
   "pitch": -8.51,
   "yaw": -177.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5EAB4C60_4BE0_D713_41D2_E6C6D33DDAC4",
 "maps": [
  {
   "hfov": 11.17,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -177.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_1_HS_10_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -8.51
  }
 ]
},
{
 "class": "PhotoPlayList",
 "items": [
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.40",
     "zoomFactor": 1.1,
     "y": "0.73"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 5000,
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_0"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.72",
     "zoomFactor": 1.1,
     "y": "0.48"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 5000,
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_1"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.73",
     "zoomFactor": 1.1,
     "y": "0.69"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 5000,
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_2"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.27",
     "zoomFactor": 1.1,
     "y": "0.73"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 5000,
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_3"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.42",
     "zoomFactor": 1.1,
     "y": "0.71"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 5000,
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_4"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.69",
     "zoomFactor": 1.1,
     "y": "0.47"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 5000,
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_5"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.48",
     "zoomFactor": 1.1,
     "y": "0.75"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 5000,
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_6"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.40",
     "zoomFactor": 1.1,
     "y": "0.29"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 5000,
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_7"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.45",
     "zoomFactor": 1.1,
     "y": "0.28"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 5000,
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_8"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.25",
     "zoomFactor": 1.1,
     "y": "0.53"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 5000,
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_9"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.56",
     "zoomFactor": 1.1,
     "y": "0.60"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 5000,
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_10"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.39",
     "zoomFactor": 1.1,
     "y": "0.61"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 5000,
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_11"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.57",
     "zoomFactor": 1.1,
     "y": "0.50"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 5000,
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_12"
  }
 ],
 "id": "album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_AlbumPlayList"
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 18.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_1_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 423,
      "height": 127
     }
    ]
   },
   "pitch": -2.16,
   "yaw": -1.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_59EC7653_4BA0_5334_41D0_93884DE34E97",
 "data": {
  "label": "eco pillars"
 },
 "maps": [
  {
   "hfov": 18.6,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_1_HS_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 53,
      "height": 16
     }
    ]
   },
   "pitch": -2.16
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 39.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 927,
      "height": 135
     }
    ]
   },
   "pitch": 11.39,
   "yaw": -68.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_5952A3CC_4BA0_512C_41C3_6BD7586DB2F9",
 "data": {
  "label": "Conflict Resolution area"
 },
 "maps": [
  {
   "hfov": 39.95,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -68.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_0_HS_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 109,
      "height": 16
     }
    ]
   },
   "pitch": 11.39
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 22.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_1_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 519,
      "height": 127
     }
    ]
   },
   "pitch": -2.86,
   "yaw": 49.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_585DD40A_4BA1_B714_4182_01318B5E4A25",
 "data": {
  "label": "Self affirmation"
 },
 "maps": [
  {
   "hfov": 22.8,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 49.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_1_HS_2_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 65,
      "height": 16
     }
    ]
   },
   "pitch": -2.86
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Circle Point 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.71,
   "image": "this.AnimatedImageResource_52825CC8_4BE0_F714_41B6_D62DCF5B6D2F",
   "pitch": 7.93,
   "yaw": -59.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5952E93C_4BA0_B16C_41C2_B7715D231C56",
 "maps": [
  {
   "hfov": 5.71,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -59.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 7.93
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "data": {
  "label": "Circle Point 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.72,
   "image": "this.AnimatedImageResource_52839CC8_4BE0_F714_41C2_7B1A4D8DE1CD",
   "pitch": -7.76,
   "yaw": 49.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5906123B_4BAF_D374_41B3_74C6277CCDA8",
 "maps": [
  {
   "hfov": 5.72,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 49.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_1_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -7.76
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Circle 360 1"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.28,
   "image": "this.AnimatedImageResource_55BBE94C_4BE1_B113_41CA_7B0E930D1F24",
   "pitch": -19.66,
   "yaw": -116.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_51B96FA5_4BE0_711D_41C7_80F381D915A4",
 "maps": [
  {
   "hfov": 8.28,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -116.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -19.66
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 13.14,
   "image": "this.AnimatedImageResource_52BC5CC8_4BE0_F714_41D0_53D1A33F886D",
   "pitch": -7.55,
   "yaw": -68.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_58A85BC7_4BA0_711C_41CD_2A0B8E3F4264",
 "data": {
  "label": "Circle Point 01"
 },
 "maps": [
  {
   "hfov": 13.14,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -68.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -7.55
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Circle Point 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.54,
   "image": "this.AnimatedImageResource_52BD9CC8_4BE0_F714_41D1_1FDDB02EC22B",
   "pitch": 2.82,
   "yaw": 72.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5FB712AE_4BA1_F36C_41C6_97F327ACF48E",
 "maps": [
  {
   "hfov": 13.54,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 72.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 2.82
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Circle Point 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.53,
   "image": "this.AnimatedImageResource_52BDCCC8_4BE0_F714_41A7_3AF4AFB28E85",
   "pitch": 3.57,
   "yaw": 141.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_59ED33FE_4BA0_70EC_41C8_533633AAEB94",
 "maps": [
  {
   "hfov": 13.53,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 141.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 3.57
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 20.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_1_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 478,
      "height": 126
     }
    ]
   },
   "pitch": 13.07,
   "yaw": -2.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_5933ECA7_4BA0_F71D_41CD_11133C0B2B6D",
 "data": {
  "label": "Value Meter"
 },
 "maps": [
  {
   "hfov": 20.51,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_1_HS_3_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 60,
      "height": 16
     }
    ]
   },
   "pitch": 13.07
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 27.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_1_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 615,
      "height": 114
     }
    ]
   },
   "pitch": -1.24,
   "yaw": -68.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_58AD5519_4BA0_7134_41CB_3F2BD92930D7",
 "data": {
  "label": "Self Affirmation"
 },
 "maps": [
  {
   "hfov": 27.04,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -68.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_1_HS_4_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 86,
      "height": 16
     }
    ]
   },
   "pitch": -1.24
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 20.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_1_HS_5_0.png",
      "class": "ImageResourceLevel",
      "width": 477,
      "height": 124
     }
    ]
   },
   "pitch": 15.11,
   "yaw": 75.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_5F80CD98_4BA3_F134_41BB_0A1E87D3FF9B",
 "data": {
  "label": "Eco Meters"
 },
 "maps": [
  {
   "hfov": 20.25,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 75.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_1_HS_5_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": 15.11
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 25.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_0_HS_6_0.png",
      "class": "ImageResourceLevel",
      "width": 595,
      "height": 117
     }
    ]
   },
   "pitch": 9.48,
   "yaw": 139.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_50ABE6D7_4BA0_B33C_419C_46183994D961",
 "data": {
  "label": "Reflection Area"
 },
 "maps": [
  {
   "hfov": 25.82,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 139.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_0_HS_6_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 81,
      "height": 16
     }
    ]
   },
   "pitch": 9.48
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Circle 360 1"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.81,
   "image": "this.AnimatedImageResource_52829CC7_4BE0_F71C_41BC_70C034E74BBD",
   "pitch": 0.57,
   "yaw": -86.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_59AEA4A7_4BBF_D71C_41CD_5901058970EE",
 "maps": [
  {
   "hfov": 12.81,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -86.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 0.57
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "hfov": 7.2,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_1_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 164,
      "height": 421
     }
    ]
   },
   "pitch": -1.83,
   "yaw": -35.83
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_5B39BA49_4BA0_5314_41BD_50E0F9F4A1B1",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 7.2,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -35.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_1_HS_0_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 78,
      "height": 200
     }
    ]
   },
   "pitch": -1.83
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "hfov": 7.38,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_1_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 168,
      "height": 422
     }
    ]
   },
   "pitch": -1.83,
   "yaw": 36.02
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_447C25F0_4BA3_B0F4_4193_A5E0B01E4318",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 7.38,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 36.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_1_HS_1_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 79,
      "height": 200
     }
    ]
   },
   "pitch": -1.83
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.83,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_1_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 132,
      "height": 130
     }
    ]
   },
   "pitch": -2.45,
   "yaw": -35.81
  }
 ],
 "id": "overlay_5B8C6547_4BA0_F11C_41CE_B9D06C8522F3",
 "maps": [
  {
   "hfov": 5.83,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -35.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.45
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2, this.camera_9138DA06_8340_5755_41C1_34CA4F12AD68); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.83,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_1_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 132,
      "height": 130
     }
    ]
   },
   "pitch": -3.02,
   "yaw": 36.36
  }
 ],
 "id": "overlay_5BD8434D_4BA0_B12D_41A1_F8DA65239937",
 "maps": [
  {
   "hfov": 5.83,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 36.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.02
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_1_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 187,
      "height": 104
     }
    ]
   },
   "pitch": 0.75,
   "yaw": -34.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_5B4F4ED1_4BA0_7334_41D0_6096A8C277E1",
 "data": {
  "label": "Enter\u000d"
 },
 "maps": [
  {
   "hfov": 8.25,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -34.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_1_HS_4_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": 0.75
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 21.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_1_HS_5_0.png",
      "class": "ImageResourceLevel",
      "width": 486,
      "height": 103
     }
    ]
   },
   "pitch": 3.56,
   "yaw": -0.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_5BF480CE_4BAF_EF2F_4190_AE5E1802B7BC",
 "data": {
  "label": "Feedback Area"
 },
 "maps": [
  {
   "hfov": 21.33,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_1_HS_5_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 75,
      "height": 15
     }
    ]
   },
   "pitch": 3.56
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.41,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_1_HS_6_0.png",
      "class": "ImageResourceLevel",
      "width": 203,
      "height": 221
     }
    ]
   },
   "pitch": 20.06,
   "yaw": -0.37
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_5C2DEC47_4BE0_F71C_419A_228501E4A0D0",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 8.41,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_1_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": 20.06
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 22.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_1_HS_7_0.png",
      "class": "ImageResourceLevel",
      "width": 519,
      "height": 78
     }
    ]
   },
   "pitch": 13.49,
   "yaw": 0.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_53426F85_4BE1_B11D_41C3_36AEFC03610D",
 "data": {
  "label": "Saksham Values Lab"
 },
 "maps": [
  {
   "hfov": 22.2,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_1_HS_7_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 106,
      "height": 16
     }
    ]
   },
   "pitch": 13.49
  }
 ]
},
{
 "transitionDuration": 500,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "MapViewer",
 "paddingLeft": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 0.5,
 "toolTipFontSize": "13px",
 "width": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 1,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 7,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "minWidth": 1,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "shadow": false,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "paddingRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#FF9933",
 "toolTipFontColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 6,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingBottom": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadOpacity": 1,
 "data": {
  "name": "Floor Plan"
 },
 "playbackBarProgressBackgroundColorRatios": [
  0
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 26.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_1_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 602,
      "height": 119
     }
    ]
   },
   "pitch": -9.38,
   "yaw": -3.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_5EE9E159_4BE0_F135_41C7_D5E18BEB56EA",
 "data": {
  "label": "Self Affirmation"
 },
 "maps": [
  {
   "hfov": 26.16,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -3.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_1_HS_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 80,
      "height": 16
     }
    ]
   },
   "pitch": -9.38
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 21.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_1_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 492,
      "height": 112
     }
    ]
   },
   "pitch": -4.96,
   "yaw": 73.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_5ECB2360_4BE1_B113_41CA_AA436554251B",
 "data": {
  "label": "Value meter"
 },
 "maps": [
  {
   "hfov": 21.59,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 73.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_1_HS_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 70,
      "height": 16
     }
    ]
   },
   "pitch": -4.96
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 19.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_1_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 443,
      "height": 108
     }
    ]
   },
   "pitch": -5.89,
   "yaw": -59.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_5EB074CA_4BE0_7717_41B8_02EC2381CAC1",
 "data": {
  "label": "Eco Meter"
 },
 "maps": [
  {
   "hfov": 19.38,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -59.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_1_HS_2_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 65,
      "height": 16
     }
    ]
   },
   "pitch": -5.89
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 18.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_1_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 418,
      "height": 106
     }
    ]
   },
   "pitch": 9.73,
   "yaw": 150.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_5FD2E5EE_4BE0_50EC_41D2_41B00D6A9B52",
 "data": {
  "label": "Eco wheel"
 },
 "maps": [
  {
   "hfov": 18.11,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 150.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_1_HS_3_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 63,
      "height": 16
     }
    ]
   },
   "pitch": 9.73
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Circle Point 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.06,
   "image": "this.AnimatedImageResource_52BCBCC8_4BE0_F714_41C7_EFAAA468A2DF",
   "pitch": -11.78,
   "yaw": -61.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5F2D50A6_4BE1_AF1C_41C3_4AC8F2661889",
 "maps": [
  {
   "hfov": 11.06,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -61.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_1_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -11.78
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Circle Point 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.04,
   "image": "this.AnimatedImageResource_52BCFCC8_4BE0_F714_41C8_EDAE40A133D2",
   "pitch": -12.28,
   "yaw": 73.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5DD19288_4BE0_B314_41D1_837AAED804F1",
 "maps": [
  {
   "hfov": 11.04,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 73.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_1_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -12.28
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Circle Point 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.29,
   "image": "this.AnimatedImageResource_52BC0CC8_4BE0_F714_41D2_3F05D89F01D7",
   "pitch": 2.04,
   "yaw": 148.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5E479A7E_4BE0_73EC_4187_A82B3A1E8D10",
 "maps": [
  {
   "hfov": 11.29,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 148.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_1_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 2.04
  }
 ]
},
{
 "cursor": "hand",
 "maxHeight": 150,
 "maxWidth": 150,
 "data": {
  "name": "IconButton <"
 },
 "id": "IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
 "paddingLeft": 0,
 "paddingRight": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD.png",
 "minHeight": 70,
 "horizontalAlign": "center",
 "width": "12%",
 "borderSize": 0,
 "verticalAlign": "middle",
 "minWidth": 70,
 "mode": "push",
 "height": "8%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_rollover.png",
 "pressedIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_pressed.png",
 "paddingBottom": 0,
 "propagateClick": false
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "left": 10,
 "paddingLeft": 0,
 "id": "IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
 "transparencyActive": false,
 "iconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D.png",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 50,
 "width": "14.22%",
 "verticalAlign": "middle",
 "bottom": "20%",
 "top": "20%",
 "mode": "push",
 "minWidth": 50,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_rollover.png",
 "paddingBottom": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_pressed.png",
 "horizontalAlign": "center",
 "propagateClick": false,
 "data": {
  "name": "IconButton <"
 }
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "left": 10,
 "paddingLeft": 0,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "transparencyActive": false,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 50,
 "width": "14.22%",
 "verticalAlign": "middle",
 "bottom": "20%",
 "top": "20%",
 "mode": "push",
 "minWidth": 50,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "paddingBottom": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "horizontalAlign": "center",
 "propagateClick": false,
 "data": {
  "name": "IconButton <"
 }
},
{
 "cursor": "hand",
 "maxHeight": 150,
 "maxWidth": 150,
 "data": {
  "name": "IconButton >"
 },
 "id": "IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
 "paddingLeft": 0,
 "paddingRight": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4.png",
 "minHeight": 70,
 "horizontalAlign": "center",
 "width": "12%",
 "borderSize": 0,
 "verticalAlign": "middle",
 "minWidth": 70,
 "mode": "push",
 "height": "8%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_rollover.png",
 "pressedIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_pressed.png",
 "paddingBottom": 0,
 "propagateClick": false
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "paddingLeft": 0,
 "id": "IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
 "transparencyActive": false,
 "right": 10,
 "iconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14.png",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 50,
 "width": "14.22%",
 "verticalAlign": "middle",
 "bottom": "20%",
 "top": "20%",
 "mode": "push",
 "minWidth": 50,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_rollover.png",
 "paddingBottom": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_pressed.png",
 "horizontalAlign": "center",
 "propagateClick": false,
 "data": {
  "name": "IconButton >"
 }
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "paddingLeft": 0,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "transparencyActive": false,
 "right": 10,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 50,
 "width": "14.22%",
 "verticalAlign": "middle",
 "bottom": "20%",
 "top": "20%",
 "mode": "push",
 "minWidth": 50,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "paddingBottom": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "horizontalAlign": "center",
 "propagateClick": false,
 "data": {
  "name": "IconButton >"
 }
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Circle Point 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.2,
   "image": "this.AnimatedImageResource_52BE9CC9_4BE0_F714_41C9_A86515A0EDA4",
   "pitch": -7.38,
   "yaw": -127.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5EF7160D_4BE1_D32D_41A3_DE6A413F77D4",
 "maps": [
  {
   "hfov": 13.2,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -127.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -7.38
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Circle Point 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.29,
   "image": "this.AnimatedImageResource_52BEDCC9_4BE0_F714_417C_798CBB2CEC0C",
   "pitch": -1.48,
   "yaw": 66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5E5B4B95_4BE1_B13C_41D0_15A867E4CF5D",
 "maps": [
  {
   "hfov": 11.29,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.48
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 32.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_1_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 751,
      "height": 145
     }
    ]
   },
   "pitch": 5.34,
   "yaw": 62.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_5E02A395_4BE0_D13C_41A8_E5CD4A7B5D7B",
 "data": {
  "label": "Reflection area"
 },
 "maps": [
  {
   "hfov": 32.87,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 62.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_1_HS_2_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 82,
      "height": 16
     }
    ]
   },
   "pitch": 5.34
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 21.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_1_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 493,
      "height": 106
     }
    ]
   },
   "pitch": 1.69,
   "yaw": -128.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_5EDB5D34_4BE0_B17C_41CE_B2B738E8EF52",
 "data": {
  "label": "Value meter"
 },
 "maps": [
  {
   "hfov": 21.68,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -128.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_1_HS_3_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 74,
      "height": 16
     }
    ]
   },
   "pitch": 1.69
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 16.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_1_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 410,
      "height": 120
     }
    ]
   },
   "pitch": 22.23,
   "yaw": 5.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_5E001B74_4BE3_F1FC_41D2_518C58B6DBBF",
 "data": {
  "label": "Eco Wheel"
 },
 "maps": [
  {
   "hfov": 16.71,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 5.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_1_HS_4_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 54,
      "height": 16
     }
    ]
   },
   "pitch": 22.23
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07, this.camera_913779FE_8340_54B2_41D1_F6CD417D77D9); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "data": {
  "label": "Circle 360 1"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.68,
   "image": "this.AnimatedImageResource_52BD6CC9_4BE0_F714_41B6_CB2D5AF33960",
   "pitch": 8.1,
   "yaw": -27.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5DFE55F6_4BE1_D0FC_41D0_33630AADAE3E",
 "maps": [
  {
   "hfov": 12.68,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -27.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_1_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 8.1
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 26.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_1_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 612,
      "height": 112
     }
    ]
   },
   "pitch": -11.49,
   "yaw": -158.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_58B2F874_4BA0_5FFC_4175_220CC8B42C50",
 "data": {
  "label": "Patience Corner"
 },
 "maps": [
  {
   "hfov": 26.4,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -158.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_1_HS_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 87,
      "height": 16
     }
    ]
   },
   "pitch": -11.49
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 26.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_1_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 613,
      "height": 112
     }
    ]
   },
   "pitch": 14.62,
   "yaw": -157.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_58A0254D_4BDF_D12C_41BB_010528DE0E0D",
 "data": {
  "label": "Meditation Area"
 },
 "maps": [
  {
   "hfov": 26.08,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -157.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_1_HS_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 87,
      "height": 16
     }
    ]
   },
   "pitch": 14.62
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 28.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_1_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 650,
      "height": 120
     }
    ]
   },
   "pitch": 5.89,
   "yaw": 102.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_5803C74D_4BE0_D12D_41B5_7B17B7C761A9",
 "data": {
  "label": "Reflection area"
 },
 "maps": [
  {
   "hfov": 28.44,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 102.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_1_HS_2_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 86,
      "height": 16
     }
    ]
   },
   "pitch": 5.89
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 26.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 638,
      "height": 338
     }
    ]
   },
   "pitch": 16.95,
   "yaw": -90.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_5F37D494_4BE0_773C_41C7_38852BA1D423",
 "data": {
  "label": "Conflict Resolution Area"
 },
 "maps": [
  {
   "hfov": 26.85,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0_HS_3_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": 16.95
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 31.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_1_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 724,
      "height": 114
     }
    ]
   },
   "pitch": -1.27,
   "yaw": 7.13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_5EAB7A85_4BE0_D31C_41C3_CA3CF763949F",
 "data": {
  "label": "Storytelling area"
 },
 "maps": [
  {
   "hfov": 31.82,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 7.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_1_HS_4_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 101,
      "height": 16
     }
    ]
   },
   "pitch": -1.27
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 19.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_1_HS_5_0.png",
      "class": "ImageResourceLevel",
      "width": 443,
      "height": 113
     }
    ]
   },
   "pitch": -3.71,
   "yaw": -30.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_5D10D5DB_4BE0_5134_4193_1779C6F8F900",
 "data": {
  "label": "Eco Pillars"
 },
 "maps": [
  {
   "hfov": 19.47,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -30.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_1_HS_5_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 62,
      "height": 16
     }
    ]
   },
   "pitch": -3.71
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Circle Point 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.18,
   "image": "this.AnimatedImageResource_92211CEE_8340_4CD5_417F_3E427BDBABBA",
   "pitch": 8.07,
   "yaw": -92.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5F4D9E83_4BE1_D314_41CA_8C95D97E0233",
 "maps": [
  {
   "hfov": 11.18,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -92.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 8.07
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Circle Point 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.16,
   "image": "this.AnimatedImageResource_5281ECC7_4BE0_F71C_4183_DC22E0A6B6F6",
   "pitch": -9.02,
   "yaw": -30.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5F87FECB_4BE0_5315_41C0_47EE418F9197",
 "maps": [
  {
   "hfov": 11.16,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -30.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_1_HS_7_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -9.02
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Circle Point 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.3,
   "image": "this.AnimatedImageResource_52813CC7_4BE0_F71C_41B0_82DD03C70808",
   "pitch": 0.03,
   "yaw": 101.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5F467413_4BE0_5734_41B0_06CA9B2B4597",
 "maps": [
  {
   "hfov": 11.3,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 101.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_1_HS_8_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 0.03
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Circle 360 1"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.29,
   "image": "this.AnimatedImageResource_52814CC7_4BE0_F71C_41C7_92E5BC1CE541",
   "pitch": 1.7,
   "yaw": -160.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5FC545AB_4BE0_B115_41D0_CC800270221B",
 "maps": [
  {
   "hfov": 9.29,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -160.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_1_HS_9_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 1.7
  }
 ]
},
{
 "data": {
  "name": "button menu sup"
 },
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": 110,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "scrollBarOpacity": 0.5,
 "top": "0%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": 110,
 "layout": "horizontal",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible"
},
{
 "data": {
  "name": "-button set"
 },
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "width": "91.304%",
 "verticalAlign": "top",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "height": "85.959%",
 "layout": "vertical",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 3,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "-button set container"
 },
 "children": [
  "this.Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
  "this.Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
  "this.Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4"
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "scrollBarVisible": "rollOver",
 "right": "30.06%",
 "width": 574.16,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "scrollBarOpacity": 0.5,
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "height": 51,
 "layout": "horizontal",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 3,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "10%",
 "scrollBarOpacity": 0.5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "horizontalAlign": "left",
 "bottom": "5%",
 "contentOpaque": false,
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "top": "5%",
 "layout": "horizontal",
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "scroll",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": true,
 "paddingBottom": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 20,
 "scrollBarVisible": "rollOver",
 "right": "10%",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "horizontalAlign": "right",
 "verticalAlign": "top",
 "borderSize": 0,
 "bottom": "80%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "top": "5%",
 "layout": "vertical",
 "paddingTop": 20,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "children": [
  "this.Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
  "this.Container_23F027B7_0C0A_6293_418E_075FCFAA8A19"
 ],
 "id": "Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "10%",
 "scrollBarOpacity": 0.5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "horizontalAlign": "left",
 "bottom": "5%",
 "contentOpaque": false,
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "top": "5%",
 "layout": "horizontal",
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "scroll",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": true,
 "paddingBottom": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA"
 ],
 "id": "Container_23F097B8_0C0A_629D_4176_D87C90BA32B6",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 20,
 "scrollBarVisible": "rollOver",
 "right": "10%",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "horizontalAlign": "right",
 "verticalAlign": "top",
 "borderSize": 0,
 "bottom": "80%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "top": "5%",
 "layout": "vertical",
 "paddingTop": 20,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "horizontalAlign": "center",
 "bottom": "7%",
 "contentOpaque": false,
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "top": "7%",
 "layout": "vertical",
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "visible",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": true,
 "paddingBottom": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "children": [
  "this.Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
  "this.Container_221C9648_0C06_E5FD_41A1_A79DE53B3031"
 ],
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "10%",
 "scrollBarOpacity": 0.5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "horizontalAlign": "left",
 "bottom": "5%",
 "contentOpaque": false,
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "top": "5%",
 "layout": "horizontal",
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "scroll",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": true,
 "paddingBottom": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 20,
 "scrollBarVisible": "rollOver",
 "right": "10%",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "horizontalAlign": "right",
 "verticalAlign": "top",
 "borderSize": 0,
 "bottom": "80%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "top": "5%",
 "layout": "vertical",
 "paddingTop": 20,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "children": [
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
  "this.MapViewer"
 ],
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "horizontalAlign": "center",
 "bottom": "7%",
 "contentOpaque": false,
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "top": "7%",
 "layout": "vertical",
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "visible",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": true,
 "paddingBottom": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "children": [
  "this.Container_28214A13_0D5D_5B97_4193_B631E1496339",
  "this.Container_2B0BF61C_0D5B_2B90_4179_632488B1209E"
 ],
 "id": "Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "horizontalAlign": "center",
 "bottom": "7%",
 "contentOpaque": false,
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "top": "7%",
 "layout": "vertical",
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "visible",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": true,
 "paddingBottom": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "horizontalAlign": "center",
 "bottom": "7%",
 "contentOpaque": false,
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "top": "7%",
 "layout": "vertical",
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "visible",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": true,
 "paddingBottom": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "10%",
 "scrollBarOpacity": 0.5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "horizontalAlign": "left",
 "bottom": "5%",
 "contentOpaque": false,
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "top": "5%",
 "layout": "horizontal",
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "scroll",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": true,
 "paddingBottom": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 20,
 "scrollBarVisible": "rollOver",
 "right": "10%",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "horizontalAlign": "right",
 "verticalAlign": "top",
 "borderSize": 0,
 "bottom": "80%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "top": "5%",
 "layout": "vertical",
 "paddingTop": 20,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_52866CC6_4BE0_F71C_41D2_957D08CAAA90",
 "levels": [
  {
   "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_5287CCC6_4BE0_F71C_41D2_539E84763932",
 "levels": [
  {
   "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_52877CC6_4BE0_F71C_41C7_B46B17ED89DA",
 "levels": [
  {
   "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_1_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 1800
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_52BE0CC9_4BE0_F714_41A9_5D47E6392DED",
 "levels": [
  {
   "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_1_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_52BE5CC9_4BE0_F714_41B9_F6EBB39246CF",
 "levels": [
  {
   "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_1_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 1800
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_52BFFCC9_4BE0_F714_41AE_FE5F6608EC66",
 "levels": [
  {
   "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_1_HS_7_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 1800
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_52BF0CCA_4BE0_F714_41B9_3423148EB46C",
 "levels": [
  {
   "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_1_HS_8_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 1800
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_52B8BCCA_4BE0_F714_418B_B5BFA63A5374",
 "levels": [
  {
   "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_1_HS_10_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 1800
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_52825CC8_4BE0_F714_41B6_D62DCF5B6D2F",
 "levels": [
  {
   "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 1800
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_52839CC8_4BE0_F714_41C2_7B1A4D8DE1CD",
 "levels": [
  {
   "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_1_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 1800
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_55BBE94C_4BE1_B113_41CA_7B0E930D1F24",
 "levels": [
  {
   "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_0_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_52BC5CC8_4BE0_F714_41D0_53D1A33F886D",
 "levels": [
  {
   "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 1800
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_52BD9CC8_4BE0_F714_41D1_1FDDB02EC22B",
 "levels": [
  {
   "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 1800
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_52BDCCC8_4BE0_F714_41A7_3AF4AFB28E85",
 "levels": [
  {
   "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 1800
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_52829CC7_4BE0_F71C_41BC_70C034E74BBD",
 "levels": [
  {
   "url": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_52BCBCC8_4BE0_F714_41C7_EFAAA468A2DF",
 "levels": [
  {
   "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_1_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 1800
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_52BCFCC8_4BE0_F714_41C8_EDAE40A133D2",
 "levels": [
  {
   "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_1_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 1800
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_52BC0CC8_4BE0_F714_41D2_3F05D89F01D7",
 "levels": [
  {
   "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_1_HS_6_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 1800
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_52BE9CC9_4BE0_F714_41C9_A86515A0EDA4",
 "levels": [
  {
   "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 1800
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_52BEDCC9_4BE0_F714_417C_798CBB2CEC0C",
 "levels": [
  {
   "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 1800
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_52BD6CC9_4BE0_F714_41B6_CB2D5AF33960",
 "levels": [
  {
   "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_1_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_92211CEE_8340_4CD5_417F_3E427BDBABBA",
 "levels": [
  {
   "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0_HS_6_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 1800
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_5281ECC7_4BE0_F71C_4183_DC22E0A6B6F6",
 "levels": [
  {
   "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_1_HS_7_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 1800
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_52813CC7_4BE0_F71C_41B0_82DD03C70808",
 "levels": [
  {
   "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_1_HS_8_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 1800
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_52814CC7_4BE0_F71C_41C7_92E5BC1CE541",
 "levels": [
  {
   "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_1_HS_9_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "data": {
  "name": "image button menu"
 },
 "paddingLeft": 0,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "transparencyActive": true,
 "width": 60,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "minWidth": 1,
 "mode": "toggle",
 "height": 60,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "paddingBottom": 0,
 "cursor": "hand",
 "propagateClick": true
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "data": {
  "name": "IconButton TWITTER"
 },
 "paddingLeft": 0,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "transparencyActive": true,
 "width": 58,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "click": "this.shareTwitter(window.location.href)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "shadow": false,
 "paddingBottom": 0,
 "cursor": "hand",
 "propagateClick": true
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "data": {
  "name": "IconButton FB"
 },
 "paddingLeft": 0,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "transparencyActive": true,
 "width": 58,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "click": "this.shareFacebook(window.location.href)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "shadow": false,
 "paddingBottom": 0,
 "cursor": "hand",
 "propagateClick": true
},
{
 "fontFamily": "Montserrat",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "normal",
 "iconBeforeLabel": true,
 "paddingLeft": 0,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "data": {
  "name": "Button panorama list"
 },
 "id": "Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
 "fontSize": "15px",
 "width": 140,
 "paddingRight": 0,
 "borderSize": 4,
 "minHeight": 1,
 "horizontalAlign": "center",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "fontWeight": "bold",
 "mode": "push",
 "height": 40,
 "label": "ELEMENTS LIST",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Montserrat",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "normal",
 "iconBeforeLabel": true,
 "paddingLeft": 0,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "data": {
  "name": "Button floorplan"
 },
 "id": "Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
 "fontSize": "15px",
 "width": 172,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "fontWeight": "bold",
 "mode": "push",
 "height": 40,
 "label": "FLOORPLAN",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Montserrat",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "normal",
 "iconBeforeLabel": true,
 "paddingLeft": 0,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "data": {
  "name": "Button photoalbum"
 },
 "id": "Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
 "fontSize": "15px",
 "width": 81,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "fontWeight": "bold",
 "mode": "push",
 "height": 40,
 "label": "RENDERS",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "-left"
 },
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "85%",
 "borderSize": 0,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000"
 ],
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "paddingLeft": 50,
 "scrollBarColor": "#0069A3",
 "paddingRight": 50,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.51,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "50%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 20,
 "backgroundOpacity": 1,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "shadow": false,
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "data": {
  "name": "X"
 },
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "paddingLeft": 0,
 "paddingRight": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "minHeight": 50,
 "horizontalAlign": "center",
 "width": "25%",
 "borderSize": 0,
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "paddingBottom": 0,
 "propagateClick": false
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "-left"
 },
 "children": [
  "this.ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
  "this.Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0"
 ],
 "id": "Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "85%",
 "borderSize": 0,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000"
 ],
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
  "this.Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
  "this.Container_23F047B8_0C0A_629D_415D_F05EF8619564"
 ],
 "id": "Container_23F027B7_0C0A_6293_418E_075FCFAA8A19",
 "paddingLeft": 50,
 "scrollBarColor": "#0069A3",
 "paddingRight": 50,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.51,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "50%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 20,
 "backgroundOpacity": 1,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "shadow": false,
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "data": {
  "name": "X"
 },
 "id": "IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA",
 "paddingLeft": 0,
 "paddingRight": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA.jpg",
 "minHeight": 50,
 "horizontalAlign": "center",
 "width": "25%",
 "borderSize": 0,
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_rollover.jpg",
 "pressedIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_pressed.jpg",
 "paddingBottom": 0,
 "propagateClick": false
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "header"
 },
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 140,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "horizontalAlign": "center",
 "itemLabelFontStyle": "normal",
 "selectedItemThumbnailShadowVerticalLength": 0,
 "paddingLeft": 70,
 "scrollBarColor": "#04A3E1",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "itemLabelHorizontalAlign": "center",
 "itemThumbnailOpacity": 1,
 "itemPaddingRight": 3,
 "itemMode": "normal",
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "width": "100%",
 "minHeight": 1,
 "itemMaxHeight": 1000,
 "verticalAlign": "middle",
 "itemLabelFontFamily": "Montserrat",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#000000"
 ],
 "itemPaddingLeft": 3,
 "itemMaxWidth": 1000,
 "itemHorizontalAlign": "center",
 "height": "100%",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#04A3E1",
 "itemLabelPosition": "bottom",
 "backgroundOpacity": 0.05,
 "itemOpacity": 1,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "class": "ThumbnailGrid",
 "shadow": false,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemThumbnailBorderRadius": 0,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "propagateClick": false,
 "itemBackgroundColorRatios": [],
 "itemWidth": 220,
 "selectedItemThumbnailShadow": true,
 "paddingRight": 70,
 "itemMinHeight": 50,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "selectedItemLabelFontWeight": "bold",
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "rollOverItemLabelFontColor": "#04A3E1",
 "rollOverItemThumbnailShadow": true,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "scrollBarMargin": 2,
 "itemLabelFontSize": 14,
 "itemVerticalAlign": "top",
 "itemMinWidth": 50,
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontColor": "#666666",
 "itemHeight": 156,
 "itemThumbnailHeight": 125,
 "paddingTop": 10,
 "itemBackgroundColorDirection": "vertical",
 "paddingBottom": 70,
 "borderRadius": 5,
 "gap": 26,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemLabelGap": 7,
 "itemThumbnailShadow": false,
 "itemThumbnailWidth": 220,
 "itemPaddingBottom": 3,
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "ThumbnailList"
 },
 "scrollBarWidth": 10
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "-left"
 },
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "id": "Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "85%",
 "borderSize": 0,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000"
 ],
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
  "this.Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
  "this.Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6"
 ],
 "id": "Container_221C9648_0C06_E5FD_41A1_A79DE53B3031",
 "paddingLeft": 50,
 "scrollBarColor": "#0069A3",
 "paddingRight": 50,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.51,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "15%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 400,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 20,
 "backgroundOpacity": 1,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "shadow": false,
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "data": {
  "name": "X"
 },
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "paddingLeft": 0,
 "paddingRight": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "minHeight": 50,
 "horizontalAlign": "center",
 "width": "25%",
 "borderSize": 0,
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "paddingBottom": 0,
 "propagateClick": false
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "header"
 },
 "children": [
  "this.HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 140,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "header"
 },
 "children": [
  "this.HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
  "this.IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3"
 ],
 "id": "Container_28214A13_0D5D_5B97_4193_B631E1496339",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 140,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container photo"
 },
 "children": [
  "this.ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14"
 ],
 "id": "Container_2B0BF61C_0D5B_2B90_4179_632488B1209E",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container photo"
 },
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "-left"
 },
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "55%",
 "borderSize": 0,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000"
 ],
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "paddingLeft": 60,
 "scrollBarColor": "#0069A3",
 "paddingRight": 60,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.51,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "45%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 20,
 "backgroundOpacity": 1,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "shadow": false,
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "data": {
  "name": "X"
 },
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "paddingLeft": 0,
 "paddingRight": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "minHeight": 50,
 "horizontalAlign": "center",
 "width": "25%",
 "borderSize": 0,
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "paddingBottom": 0,
 "propagateClick": false
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "100%",
 "borderSize": 0,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "minHeight": 1,
 "horizontalAlign": "center",
 "top": "0%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_outside",
 "shadow": false,
 "propagateClick": false,
 "data": {
  "name": "Image"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 0,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "height": 60,
 "backgroundOpacity": 0.3,
 "paddingTop": 20,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container text"
 },
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.79,
 "backgroundColorDirection": "vertical",
 "minHeight": 520,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 30,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "width": 370,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 40,
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "transitionDuration": 500,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
 "left": 0,
 "paddingLeft": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipBorderColor": "#767676",
 "right": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 0.5,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "13px",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 1,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 7,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "minWidth": 1,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "shadow": false,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "paddingRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#FF9933",
 "toolTipFontColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 6,
 "vrPointerColor": "#FFFFFF",
 "bottom": 0,
 "progressBarOpacity": 1,
 "top": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingBottom": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadOpacity": 1,
 "data": {
  "name": "Viewer info 1"
 }
},
{
 "data": {
  "name": "Container arrows"
 },
 "children": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4"
 ],
 "id": "Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "borderSize": 0,
 "verticalAlign": "middle",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": "100%",
 "top": "0%",
 "layout": "horizontal",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 0,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "height": 60,
 "backgroundOpacity": 0.3,
 "paddingTop": 20,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container text"
 },
 "children": [
  "this.HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
  "this.Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145"
 ],
 "id": "Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.79,
 "backgroundColorDirection": "vertical",
 "minHeight": 520,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 30,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_23F047B8_0C0A_629D_415D_F05EF8619564",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "width": 370,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 40,
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "left": "0%",
 "paddingLeft": 80,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 100,
 "width": "77.115%",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": "100%",
 "top": "0%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "borderRadius": 0,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:4.3vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.3vh;font-family:'Bebas Neue Bold';\">Panorama list:</SPAN></SPAN></DIV></div>",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText54192"
 }
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "paddingLeft": 0,
 "paddingRight": 0,
 "transparencyActive": false,
 "right": 20,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "borderSize": 0,
 "minHeight": 50,
 "width": "100%",
 "verticalAlign": "top",
 "top": 20,
 "minWidth": 50,
 "mode": "push",
 "height": "36.14%",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "paddingBottom": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "horizontalAlign": "right",
 "propagateClick": false,
 "data": {
  "name": "IconButton X"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "backgroundColorDirection": "vertical",
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "minHeight": 1,
 "scrollEnabled": true,
 "borderSize": 0,
 "bottom": "0%",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "top": "0%",
 "insetBorder": false,
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "class": "WebFrame",
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "WebFrame48191"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 0,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "height": 60,
 "backgroundOpacity": 0.3,
 "paddingTop": 20,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container text"
 },
 "children": [
  "this.HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
  "this.Button_221B5648_0C06_E5FD_4198_40C786948FF0"
 ],
 "id": "Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.79,
 "backgroundColorDirection": "vertical",
 "minHeight": 520,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 30,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "width": 370,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 40,
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "id": "HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
 "left": "0%",
 "paddingLeft": 80,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 100,
 "width": "77.115%",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": "100%",
 "top": "0%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "borderRadius": 0,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:4.3vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.3vh;font-family:'Bebas Neue Bold';\">FLOORPLAN:</SPAN></SPAN></DIV></div>",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText54192"
 }
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "paddingLeft": 0,
 "paddingRight": 0,
 "transparencyActive": false,
 "right": 20,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "borderSize": 0,
 "minHeight": 50,
 "width": "100%",
 "verticalAlign": "top",
 "top": 20,
 "minWidth": 50,
 "mode": "push",
 "height": "36.14%",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "paddingBottom": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "horizontalAlign": "right",
 "propagateClick": false,
 "data": {
  "name": "IconButton X"
 }
},
{
 "id": "HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
 "left": "0%",
 "paddingLeft": 80,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 100,
 "width": "77.115%",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": "100%",
 "top": "0%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "borderRadius": 0,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:4.3vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.3vh;font-family:'Bebas Neue Bold';\">PHOTOALBUM:</SPAN></SPAN></DIV></div>",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText54192"
 }
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3",
 "paddingLeft": 0,
 "paddingRight": 0,
 "transparencyActive": false,
 "right": 20,
 "iconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3.jpg",
 "borderSize": 0,
 "minHeight": 50,
 "width": "100%",
 "verticalAlign": "top",
 "top": 20,
 "minWidth": 50,
 "mode": "push",
 "height": "36.14%",
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_rollover.jpg",
 "paddingBottom": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_pressed.jpg",
 "horizontalAlign": "right",
 "propagateClick": false,
 "data": {
  "name": "IconButton X"
 }
},
{
 "transitionDuration": 500,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
 "left": "0%",
 "paddingLeft": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 0.5,
 "toolTipFontSize": "13px",
 "width": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 1,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 7,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "minWidth": 1,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "toolTipShadowOpacity": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "shadow": false,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "paddingRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#FF9933",
 "toolTipFontColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 6,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": "0%",
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingBottom": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadOpacity": 1,
 "data": {
  "name": "Viewer photoalbum + text 1"
 }
},
{
 "transitionDuration": 500,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "paddingLeft": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 0.5,
 "toolTipFontSize": "13px",
 "width": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 1,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 7,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "minWidth": 1,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "toolTipShadowOpacity": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "shadow": false,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "paddingRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#FF9933",
 "toolTipFontColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 6,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": "0%",
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingBottom": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadOpacity": 1,
 "data": {
  "name": "Viewer photoalbum 1"
 }
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "paddingLeft": 0,
 "paddingRight": 0,
 "transparencyActive": false,
 "right": 20,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "borderSize": 0,
 "minHeight": 50,
 "width": "10%",
 "verticalAlign": "top",
 "top": 20,
 "minWidth": 50,
 "mode": "push",
 "height": "10%",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "paddingBottom": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "horizontalAlign": "right",
 "propagateClick": false,
 "data": {
  "name": "IconButton X"
 }
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "100%",
 "borderSize": 0,
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "minHeight": 1,
 "horizontalAlign": "center",
 "top": "0%",
 "verticalAlign": "bottom",
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_outside",
 "shadow": false,
 "propagateClick": false,
 "data": {
  "name": "Image"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 0,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "height": 60,
 "backgroundOpacity": 0.3,
 "paddingTop": 20,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container text"
 },
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.79,
 "backgroundColorDirection": "vertical",
 "minHeight": 520,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 30,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "width": 370,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 40,
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 10,
 "borderSize": 0,
 "minHeight": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.73vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.73vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.42vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.42vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.65vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.65vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.65vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.65vh;font-family:'Bebas Neue Bold';\"><B>lorem ipsum:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.64vh;font-family:'Bebas Neue Bold';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "paddingBottom": 20,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText"
 }
},
{
 "cursor": "hand",
 "fontFamily": "Bebas Neue Bold",
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Button"
 },
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "fontStyle": "normal",
 "paddingLeft": 0,
 "paddingRight": 0,
 "fontSize": "3vh",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "width": "46%",
 "borderSize": 0,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "pressedBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#04A3E1"
 ],
 "label": "lorem ipsum",
 "height": "9%",
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0.7,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "textDecoration": "none",
 "horizontalAlign": "center",
 "shadowSpread": 1,
 "pressedBackgroundOpacity": 1,
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 1
},
{
 "data": {
  "name": "Container separator"
 },
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "width": "80%",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": "30%",
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "id": "HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 10,
 "borderSize": 0,
 "minHeight": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.73vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.73vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.42vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.42vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.65vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.65vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV></div>",
 "paddingBottom": 20,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText"
 }
},
{
 "cursor": "hand",
 "fontFamily": "Bebas Neue Bold",
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Button"
 },
 "id": "Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145",
 "fontStyle": "normal",
 "paddingLeft": 0,
 "paddingRight": 0,
 "fontSize": "3vh",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "width": "46%",
 "borderSize": 0,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "pressedBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#04A3E1"
 ],
 "label": "lorem ipsum",
 "height": "9%",
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0.7,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "textDecoration": "none",
 "horizontalAlign": "center",
 "shadowSpread": 1,
 "pressedBackgroundOpacity": 1,
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 1
},
{
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "id": "HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 10,
 "borderSize": 0,
 "minHeight": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.73vh;font-family:'Bebas Neue Bold';\">location</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.33vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.42vh;font-family:'Bebas Neue Bold';\">address line 1</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.42vh;font-family:'Bebas Neue Bold';\">address line 2</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.3vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac.</SPAN></DIV></div>",
 "paddingBottom": 20,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText"
 }
},
{
 "fontFamily": "Bebas Neue Bold",
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Button"
 },
 "id": "Button_221B5648_0C06_E5FD_4198_40C786948FF0",
 "fontStyle": "normal",
 "iconBeforeLabel": true,
 "paddingLeft": 0,
 "paddingRight": 0,
 "fontSize": 34,
 "width": 207,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderSize": 0,
 "borderColor": "#000000",
 "horizontalAlign": "center",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "pressedBackgroundColorRatios": [
  0
 ],
 "height": 59,
 "mode": "push",
 "minWidth": 1,
 "label": "lorem ipsum",
 "backgroundColor": [
  "#04A3E1"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.7,
 "paddingTop": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "textDecoration": "none",
 "visible": false,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 1
},
{
 "paddingLeft": 0,
 "scrollBarColor": "#04A3E1",
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": "45%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.52vh;font-family:'Bebas Neue Bold';\">real estate agent</SPAN></SPAN></DIV></div>",
 "paddingBottom": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText18899"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "- content"
 },
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "height": "80%",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "maxHeight": 200,
 "maxWidth": 200,
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "25%",
 "horizontalAlign": "left",
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "propagateClick": false,
 "data": {
  "name": "agent photo"
 }
},
{
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 10,
 "borderSize": 0,
 "minHeight": 1,
 "width": "75%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.42vh;font-family:'Bebas Neue Bold';\">john doe</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.44vh;font-family:'Bebas Neue Bold';\">licensed real estate salesperson</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.33vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:0.33vh;font-family:'Bebas Neue Bold';\">Tlf.: +11 111 111 111</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:0.33vh;font-family:'Bebas Neue Bold';\">jhondoe@realestate.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:0.33vh;font-family:'Bebas Neue Bold';\">www.loremipsum.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "paddingBottom": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText19460"
 }
}],
 "start": "this.playAudioList([this.audio_7C78285D_3BCA_792F_41BD_4CC248FD0BB1]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); this.playList_911779F0_8340_54CD_41D0_634720076589.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "data": {
  "name": "Player468"
 },
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_0DD1BF09_1744_0507_41B3_29434E440055",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
  "this.Image_222C05C8_394B_CB14_418C_C97785513D96"
 ],
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "backgroundPreloadEnabled": true,
 "width": "100%",
 "borderSize": 0,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "unregisterKey": function(key){  delete window[key]; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "registerKey": function(key, value){  window[key] = value; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "existsKey": function(key){  return key in window; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getKey": function(key){  return window[key]; }
 },
 "horizontalAlign": "left",
 "defaultVRPointer": "laser",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 20,
 "downloadEnabled": false,
 "verticalAlign": "top",
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "class": "Player",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible",
 "desktopMipmappingEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
