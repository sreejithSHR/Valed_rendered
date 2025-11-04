(function(){
    var script = {
 "mouseWheelEnabled": true,
 "start": "this.playAudioList([this.audio_7C78285D_3BCA_792F_41BD_4CC248FD0BB1]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); this.playList_5C659476_4CC2_CA46_41C8_D3BCB8B2B665.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "visible",
 "width": "100%",
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
 "scrollBarMargin": 2,
 "class": "Player",
 "borderRadius": 0,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "minHeight": 20,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "verticalAlign": "top",
 "definitions": [{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Reflection area",
 "hfovMin": "120%",
 "id": "panorama_4019D266_4BA0_531F_41C5_68650E743136",
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
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_401C192A_4BA1_D117_418F_4A5C3301B321",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_5C74B47D_4CC2_CA4A_4189_AEFDD4CDE1DD",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_t.jpg",
 "hfovMax": 130
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_2_t.jpg",
 "id": "album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_2",
 "width": 3840,
 "label": "Enscape_2025-04-16-18-09-25",
 "image": {
  "levels": [
   {
    "url": "media/album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_2.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 2160
},
{
 "items": [
  {
   "media": "this.panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_camera"
  },
  {
   "media": "this.panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_camera"
  },
  {
   "media": "this.panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_camera"
  },
  {
   "media": "this.panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_camera"
  },
  {
   "media": "this.panorama_401C192A_4BA1_D117_418F_4A5C3301B321",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_401C192A_4BA1_D117_418F_4A5C3301B321_camera"
  },
  {
   "media": "this.panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_camera"
  },
  {
   "media": "this.panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_camera"
  },
  {
   "media": "this.panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_camera"
  },
  {
   "media": "this.panorama_4019D266_4BA0_531F_41C5_68650E743136",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4019D266_4BA0_531F_41C5_68650E743136_camera"
  },
  {
   "media": "this.album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 0)",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_8_t.jpg",
 "id": "album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_8",
 "width": 3840,
 "label": "Enscape_2025-04-21-17-51-48",
 "image": {
  "levels": [
   {
    "url": "media/album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_8.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 2160
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_camera",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_3_t.jpg",
 "id": "album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_3",
 "width": 3840,
 "label": "Enscape_2025-04-21-17-40-28",
 "image": {
  "levels": [
   {
    "url": "media/album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_3.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 2160
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Conflict Area",
 "hfovMin": "120%",
 "id": "panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869",
 "overlays": [
  "this.overlay_59AEA4A7_4BBF_D71C_41CD_5901058970EE"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_5C74B47D_4CC2_CA4A_4189_AEFDD4CDE1DD",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_t.jpg",
 "hfovMax": 130
},
{
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "thumbnailUrl": "media/map_5C2577AA_4BE0_7114_41A7_D43E0B8B3A0B_t.jpg",
 "id": "map_5C2577AA_4BE0_7114_41A7_D43E0B8B3A0B",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "width": 3840,
 "initialZoomFactor": 1,
 "fieldOfViewOverlayRadiusScale": 0.3,
 "image": {
  "levels": [
   {
    "url": "media/map_5C2577AA_4BE0_7114_41A7_D43E0B8B3A0B.jpeg",
    "width": 3200,
    "class": "ImageResourceLevel",
    "height": 1800
   },
   {
    "url": "media/map_5C2577AA_4BE0_7114_41A7_D43E0B8B3A0B_lq.jpeg",
    "width": 341,
    "tags": "preload",
    "class": "ImageResourceLevel",
    "height": 192
   }
  ],
  "class": "ImageResource"
 },
 "maximumZoomFactor": 1.2,
 "minimumZoomFactor": 0.5,
 "label": "plan omr",
 "class": "Map",
 "scaleMode": "fit_inside",
 "height": 2160
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_7_t.jpg",
 "id": "album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_7",
 "width": 3840,
 "label": "Enscape_2025-04-21-17-49-53",
 "image": {
  "levels": [
   {
    "url": "media/album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_7.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 2160
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Value Meter",
 "hfovMin": "120%",
 "id": "panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7",
 "overlays": [
  "this.overlay_58A85BC7_4BA0_711C_41CD_2A0B8E3F4264",
  "this.overlay_5FB712AE_4BA1_F36C_41C6_97F327ACF48E",
  "this.overlay_59ED33FE_4BA0_70EC_41C8_533633AAEB94",
  "this.overlay_5933ECA7_4BA0_F71D_41CD_11133C0B2B6D",
  "this.overlay_58AD5519_4BA0_7134_41CB_3F2BD92930D7",
  "this.overlay_5F80CD98_4BA3_F134_41BB_0A1E87D3FF9B",
  "this.overlay_50ABE6D7_4BA0_B33C_419C_46183994D961"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_4019D266_4BA0_531F_41C5_68650E743136",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_5C74B47D_4CC2_CA4A_4189_AEFDD4CDE1DD",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_t.jpg",
 "hfovMax": 130
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_5_t.jpg",
 "id": "album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_5",
 "width": 3840,
 "label": "Enscape_2025-04-21-17-46-56",
 "image": {
  "levels": [
   {
    "url": "media/album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_5.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 2160
},
{
 "initialPosition": {
  "yaw": -143.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5C2A0491_4CC2_CADA_41BD_9926EE826C60",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_10_t.jpg",
 "id": "album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_10",
 "width": 3840,
 "label": "Enscape_2025-04-28-14-54-20",
 "image": {
  "levels": [
   {
    "url": "media/album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_10.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 2160
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_9_t.jpg",
 "id": "album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_9",
 "width": 3840,
 "label": "Enscape_2025-04-28-14-49-03",
 "image": {
  "levels": [
   {
    "url": "media/album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_9.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 2160
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_5C2577AA_4BE0_7114_41A7_D43E0B8B3A0B",
   "class": "MapPlayListItem",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_5C659476_4CC2_CA46_41C8_D3BCB8B2B665",
 "class": "PlayList"
},
{
 "items": [
  {
   "media": "this.panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_camera"
  },
  {
   "media": "this.panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_camera"
  },
  {
   "media": "this.panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_camera"
  },
  {
   "media": "this.panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_camera"
  },
  {
   "media": "this.panorama_401C192A_4BA1_D117_418F_4A5C3301B321",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_401C192A_4BA1_D117_418F_4A5C3301B321_camera"
  },
  {
   "media": "this.panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_camera"
  },
  {
   "media": "this.panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_camera"
  },
  {
   "media": "this.panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_camera"
  },
  {
   "media": "this.panorama_4019D266_4BA0_531F_41C5_68650E743136",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4019D266_4BA0_531F_41C5_68650E743136_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 0)",
   "media": "this.album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Value Lab",
 "hfovMin": "120%",
 "id": "panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074",
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
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_4019D266_4BA0_531F_41C5_68650E743136",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_401C192A_4BA1_D117_418F_4A5C3301B321",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_5C74B47D_4CC2_CA4A_4189_AEFDD4CDE1DD",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Eco pillar",
 "hfovMin": "120%",
 "id": "panorama_401C192A_4BA1_D117_418F_4A5C3301B321",
 "overlays": [
  "this.overlay_59EC7653_4BA0_5334_41D0_93884DE34E97",
  "this.overlay_5952A3CC_4BA0_512C_41C3_6BD7586DB2F9",
  "this.overlay_585DD40A_4BA1_B714_4182_01318B5E4A25",
  "this.overlay_5952E93C_4BA0_B16C_41C2_B7715D231C56",
  "this.overlay_5906123B_4BAF_D374_41B3_74C6277CCDA8",
  "this.overlay_51B96FA5_4BE0_711D_41C7_80F381D915A4"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_5C74B47D_4CC2_CA4A_4189_AEFDD4CDE1DD",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_t.jpg",
 "hfovMax": 130
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_5C2577AA_4BE0_7114_41A7_D43E0B8B3A0B",
   "class": "MapPlayListItem",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_5C65B476_4CC2_CA46_41C4_7FF7A8A463D0",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Enterance",
 "hfovMin": "120%",
 "id": "panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07",
 "overlays": [
  "this.overlay_5B39BA49_4BA0_5314_41BD_50E0F9F4A1B1",
  "this.overlay_447C25F0_4BA3_B0F4_4193_A5E0B01E4318",
  "this.overlay_5B8C6547_4BA0_F11C_41CE_B9D06C8522F3",
  "this.overlay_5BD8434D_4BA0_B12D_41A1_F8DA65239937",
  "this.overlay_5B4F4ED1_4BA0_7334_41D0_6096A8C277E1",
  "this.overlay_5BF480CE_4BAF_EF2F_4190_AE5E1802B7BC",
  "this.overlay_5C2DEC47_4BE0_F71C_419A_228501E4A0D0",
  "this.overlay_53426F85_4BE1_B11D_41C3_36AEFC03610D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 36.36,
   "class": "AdjacentPanorama",
   "backwardYaw": -27.65,
   "panorama": "this.panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2",
   "distance": 1
  },
  {
   "panorama": "this.panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_5C74B47D_4CC2_CA4A_4189_AEFDD4CDE1DD",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_camera",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_6_t.jpg",
 "id": "album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_6",
 "width": 3840,
 "label": "Enscape_2025-04-21-17-48-31",
 "image": {
  "levels": [
   {
    "url": "media/album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_6.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 2160
},
{
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": "#000000",
 "children": [
  {
   "label": "Enterance",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  },
  {
   "label": "Meditation area",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  },
  {
   "label": "Value Lab",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  },
  {
   "label": "Conflict Area",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  },
  {
   "label": "Eco pillar",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  },
  {
   "label": "Self Affirmation",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  },
  {
   "label": "Value Meter",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  },
  {
   "label": "Eco wheel",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  },
  {
   "label": "Reflection area",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "label": "Media",
 "id": "Menu_5C74B47D_4CC2_CA4A_4189_AEFDD4CDE1DD",
 "opacity": 0.4,
 "fontFamily": "Arial",
 "selectedFontColor": "#FFFFFF",
 "rollOverOpacity": 0.8,
 "class": "Menu",
 "selectedBackgroundColor": "#202020",
 "backgroundColor": "#404040",
 "rollOverFontColor": "#FFFFFF"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Self Affirmation",
 "hfovMin": "120%",
 "id": "panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF",
 "overlays": [
  "this.overlay_5EE9E159_4BE0_F135_41C7_D5E18BEB56EA",
  "this.overlay_5ECB2360_4BE1_B113_41CA_AA436554251B",
  "this.overlay_5EB074CA_4BE0_7717_41B8_02EC2381CAC1",
  "this.overlay_5FD2E5EE_4BE0_50EC_41D2_41B00D6A9B52",
  "this.overlay_5F2D50A6_4BE1_AF1C_41C3_4AC8F2661889",
  "this.overlay_5DD19288_4BE0_B314_41D1_837AAED804F1",
  "this.overlay_5E479A7E_4BE0_73EC_4187_A82B3A1E8D10"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_401C192A_4BA1_D117_418F_4A5C3301B321",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_5C74B47D_4CC2_CA4A_4189_AEFDD4CDE1DD",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_t.jpg",
 "hfovMax": 130
},
{
 "viewerArea": "this.MainViewer",
 "buttonNext": [
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
 ],
 "id": "MainViewerPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer",
 "buttonPrevious": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482"
 ]
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_7C78285D_3BCA_792F_41BD_4CC248FD0BB1.ogg",
  "mp3Url": "media/audio_7C78285D_3BCA_792F_41BD_4CC248FD0BB1.mp3",
  "class": "AudioResource"
 },
 "id": "audio_7C78285D_3BCA_792F_41BD_4CC248FD0BB1",
 "data": {
  "label": "Hope (mp3cut.net)"
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_401C192A_4BA1_D117_418F_4A5C3301B321_camera",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_11_t.jpg",
 "id": "album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_11",
 "width": 3840,
 "label": "Enscape_2025-05-02-14-31-10",
 "image": {
  "levels": [
   {
    "url": "media/album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_11.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 2160
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_camera",
 "class": "PanoramaCamera"
},
{
 "viewerArea": "this.MapViewer",
 "id": "MapViewerMapPlayer",
 "class": "MapPlayer",
 "movementMode": "constrained"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 152.35,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5C256498_4CC2_CACA_41C9_14E4352CDFA2",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Meditation area",
 "hfovMin": "120%",
 "id": "panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0",
 "overlays": [
  "this.overlay_5ABB6423_4BA1_F714_41B3_CA2ED2AA1BB9",
  "this.overlay_5A64D5A4_4BA0_5113_41D2_A31D065E2371",
  "this.overlay_5A306C10_4BA0_5734_41CA_ED63579003C5",
  "this.overlay_5A637704_4BA1_B11C_41CB_772ABB5EE305",
  "this.overlay_590A28A2_4BA0_5F14_41BF_452686803B0C",
  "this.overlay_5A8CCEF1_4BA0_70F4_41B1_A59890A515EF"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_5C74B47D_4CC2_CA4A_4189_AEFDD4CDE1DD",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Eco wheel",
 "hfovMin": "120%",
 "id": "panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2",
 "overlays": [
  "this.overlay_5EF7160D_4BE1_D32D_41A3_DE6A413F77D4",
  "this.overlay_5E5B4B95_4BE1_B13C_41D0_15A867E4CF5D",
  "this.overlay_5E02A395_4BE0_D13C_41A8_E5CD4A7B5D7B",
  "this.overlay_5EDB5D34_4BE0_B17C_41CE_B2B738E8EF52",
  "this.overlay_5E001B74_4BE3_F1FC_41D2_518C58B6DBBF",
  "this.overlay_5DFE55F6_4BE1_D0FC_41D0_33630AADAE3E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_4019D266_4BA0_531F_41C5_68650E743136",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -27.65,
   "class": "AdjacentPanorama",
   "backwardYaw": 36.36,
   "panorama": "this.panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07",
   "distance": 1
  },
  {
   "panorama": "this.panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_5C74B47D_4CC2_CA4A_4189_AEFDD4CDE1DD",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_t.jpg",
 "hfovMax": 130
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_12_t.jpg",
 "id": "album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_12",
 "width": 3840,
 "label": "Enscape_2025-05-02-15-55-30",
 "image": {
  "levels": [
   {
    "url": "media/album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_12.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 2160
},
{
 "playList": "this.album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_AlbumPlayList",
 "thumbnailUrl": "media/album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_t.png",
 "id": "album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A",
 "label": "Photo Album Enscape_2025-04-16-17-57-36",
 "class": "PhotoAlbum"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4019D266_4BA0_531F_41C5_68650E743136_camera",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_1_t.jpg",
 "id": "album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_1",
 "width": 3840,
 "label": "Enscape_2025-04-16-18-02-00",
 "image": {
  "levels": [
   {
    "url": "media/album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_1.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 2160
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_4_t.jpg",
 "id": "album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_4",
 "width": 3840,
 "label": "Enscape_2025-04-21-17-44-20",
 "image": {
  "levels": [
   {
    "url": "media/album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_4.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 2160
},
{
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "class": "PanoramaPlayer",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "buttonCardboardView": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "mouseControlMode": "drag_acceleration"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_0_t.jpg",
 "id": "album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_0",
 "width": 3840,
 "label": "Enscape_2025-04-16-17-57-36",
 "image": {
  "levels": [
   {
    "url": "media/album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 2160
},
{
 "progressBarBorderSize": 6,
 "id": "MainViewer",
 "left": 0,
 "paddingLeft": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 0,
 "width": "100%",
 "class": "ViewerArea",
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Georgia",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "propagateClick": true,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#FFFFFF",
 "transitionDuration": 500,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "height": "100%",
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipBackgroundColor": "#FF9933",
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "shadow": false,
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "progressBottom": 55,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 10,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingRight": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowVerticalLength": 0,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 7,
 "paddingBottom": 0,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "13px",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "backgroundOpacity": 0,
 "width": 115.05,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "right": "0%",
 "paddingLeft": 0,
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "verticalAlign": "top",
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "0%",
 "minWidth": 1,
 "height": 641,
 "gap": 10,
 "paddingTop": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--SETTINGS"
 },
 "paddingBottom": 0,
 "layout": "absolute"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0DD1BF09_1744_0507_41B3_29434E440055",
 "left": 30,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "overflow": "visible",
 "width": 573,
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": 15,
 "minWidth": 1,
 "height": 133,
 "gap": 10,
 "paddingTop": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--STICKER"
 },
 "paddingBottom": 0,
 "layout": "absolute"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.22,
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0.04%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0.64,
 "right": "0.06%",
 "children": [
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "backgroundColorRatios": [],
 "propagateClick": true,
 "top": 25,
 "scrollBarWidth": 10,
 "backgroundColor": [],
 "verticalAlign": "top",
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "height": 59,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--MENU"
 },
 "layout": "absolute"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0.6,
 "right": "0%",
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--INFO photo"
 },
 "paddingBottom": 0,
 "visible": false,
 "gap": 10,
 "layout": "absolute"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0.6,
 "right": "0%",
 "children": [
  "this.Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
  "this.Container_23F097B8_0C0A_629D_4176_D87C90BA32B6"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--INFO photoalbum"
 },
 "paddingBottom": 0,
 "visible": false,
 "gap": 10,
 "layout": "absolute"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0.6,
 "right": "0%",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--PANORAMA LIST"
 },
 "paddingBottom": 0,
 "visible": false,
 "gap": 10,
 "layout": "absolute"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0.6,
 "right": "0%",
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--LOCATION"
 },
 "paddingBottom": 0,
 "visible": false,
 "gap": 10,
 "layout": "absolute"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0.6,
 "right": "0%",
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--FLOORPLAN"
 },
 "paddingBottom": 0,
 "visible": false,
 "gap": 10,
 "layout": "absolute"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0.6,
 "right": "0%",
 "children": [
  "this.Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, true, 0, null, null, false)",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--PHOTOALBUM + text"
 },
 "paddingBottom": 0,
 "visible": false,
 "gap": 10,
 "layout": "absolute"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0.6,
 "right": "0%",
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--PHOTOALBUM"
 },
 "paddingBottom": 0,
 "visible": false,
 "gap": 10,
 "layout": "absolute"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0.6,
 "right": "0%",
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "--REALTOR"
 },
 "paddingBottom": 0,
 "visible": false,
 "gap": 10,
 "layout": "absolute"
},
{
 "maxHeight": 1080,
 "horizontalAlign": "center",
 "id": "Image_222C05C8_394B_CB14_418C_C97785513D96",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "left": "0%",
 "width": "17.672%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_222C05C8_394B_CB14_418C_C97785513D96.png",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "top": "0%",
 "minWidth": 1,
 "height": "14.664%",
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image39868"
 },
 "maxWidth": 1080
},
{
 "maxHeight": 58,
 "horizontalAlign": "center",
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 58,
 "class": "IconButton",
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": true,
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "data": {
  "name": "IconButton MUTE"
 },
 "paddingBottom": 0,
 "cursor": "hand",
 "maxWidth": 58
},
{
 "maxHeight": 58,
 "horizontalAlign": "center",
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 58,
 "class": "IconButton",
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": true,
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "paddingBottom": 0,
 "cursor": "hand",
 "maxWidth": 58
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.83,
   "yaw": 79.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_1_HS_0_0_map.gif",
      "width": 67,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 11.23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_1_HS_0_0.png",
      "width": 506,
      "class": "ImageResourceLevel",
      "height": 120
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 11.23,
   "hfov": 21.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 79.12
  }
 ],
 "id": "overlay_5E4E5AFB_4BE1_D0F4_41C3_DBF968754D92",
 "data": {
  "label": "Meditation Area"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.06,
   "yaw": 78.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_1_HS_1_0_map.gif",
      "width": 67,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.64
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_1_HS_1_0.png",
      "width": 505,
      "class": "ImageResourceLevel",
      "height": 119
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.64,
   "hfov": 22.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 78.03
  }
 ],
 "id": "overlay_5DC36FE4_4BE0_711C_41BE_32FC24D35FC0",
 "data": {
  "label": "Patience Corner"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 31.49,
   "yaw": 2.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_1_HS_2_0_map.gif",
      "width": 77,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.78
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_1_HS_2_0.png",
      "width": 729,
      "class": "ImageResourceLevel",
      "height": 150
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.78,
   "hfov": 31.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 2.03
  }
 ],
 "id": "overlay_5D747D15_4BE0_B13C_41C8_808EFB6362C0",
 "data": {
  "label": "Reflection area"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.14,
   "yaw": -54.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_1_HS_3_0_map.gif",
      "width": 52,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_1_HS_3_0.png",
      "width": 326,
      "class": "ImageResourceLevel",
      "height": 100
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.18,
   "hfov": 14.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -54.76
  }
 ],
 "id": "overlay_5C9B7244_4BFF_D31C_41A8_8298477E11B0",
 "data": {
  "label": "eco wheel"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.76,
   "yaw": 131.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_52BE0CC9_4BE0_F714_41A9_5D47E6392DED",
   "pitch": -40.38,
   "hfov": 9.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 131.88
  }
 ],
 "id": "overlay_5EA5BBE2_4BE1_D114_4196_202E15F61E91",
 "data": {
  "label": "Circle 360 1"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.21,
   "yaw": 132.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.01
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_52BE5CC9_4BE0_F714_41B9_F6EBB39246CF",
   "pitch": -7.01,
   "hfov": 11.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 132.83
  }
 ],
 "id": "overlay_5E628964_4BE0_5113_4192_3DF963599090",
 "data": {
  "label": "Circle Point 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.78,
   "yaw": 133.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_1_HS_6_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_1_HS_6_0.png",
      "width": 427,
      "class": "ImageResourceLevel",
      "height": 118
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.32,
   "hfov": 18.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 133.24
  }
 ],
 "id": "overlay_5DC2891A_4BE0_D137_41B3_6266C7623EF7",
 "data": {
  "label": "Conflict area"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.29,
   "yaw": 76.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_1_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.79
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_52BFFCC9_4BE0_F714_41AE_FE5F6608EC66",
   "pitch": 1.79,
   "hfov": 11.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 76.3
  }
 ],
 "id": "overlay_5D8332EA_4BE3_D314_41C2_518A9839EAC0",
 "data": {
  "label": "Circle Point 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.27,
   "yaw": -56.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_1_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.8
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_52BF0CCA_4BE0_F714_41B9_3423148EB46C",
   "pitch": 3.8,
   "hfov": 11.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -56.34
  }
 ],
 "id": "overlay_5D8D290A_4BE0_B114_41C1_764AC3895CFD",
 "data": {
  "label": "Circle Point 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.36,
   "yaw": -171.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_1_HS_9_0_map.gif",
      "width": 62,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_1_HS_9_0.png",
      "width": 554,
      "class": "ImageResourceLevel",
      "height": 141
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.32,
   "hfov": 24.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -171.89
  }
 ],
 "id": "overlay_5D408AB9_4BE1_B374_41BE_FEF4641A62CC",
 "data": {
  "label": "Eco pillars"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.17,
   "yaw": -177.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_1_HS_10_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.51
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_52B8BCCA_4BE0_F714_418B_B5BFA63A5374",
   "pitch": -8.51,
   "hfov": 11.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -177.18
  }
 ],
 "id": "overlay_5EAB4C60_4BE0_D713_41D2_E6C6D33DDAC4",
 "data": {
  "label": "Circle Point 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.81,
   "yaw": -86.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_52829CC7_4BE0_F71C_41BC_70C034E74BBD",
   "pitch": 0.57,
   "hfov": 12.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -86.94
  }
 ],
 "id": "overlay_59AEA4A7_4BBF_D71C_41CD_5901058970EE",
 "data": {
  "label": "Circle 360 1"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.14,
   "yaw": -68.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.55
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_52BC5CC8_4BE0_F714_41D0_53D1A33F886D",
   "pitch": -7.55,
   "hfov": 13.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -68.43
  }
 ],
 "id": "overlay_58A85BC7_4BA0_711C_41CD_2A0B8E3F4264",
 "data": {
  "label": "Circle Point 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.54,
   "yaw": 72.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.82
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_52BD9CC8_4BE0_F714_41D1_1FDDB02EC22B",
   "pitch": 2.82,
   "hfov": 13.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 72.86
  }
 ],
 "id": "overlay_5FB712AE_4BA1_F36C_41C6_97F327ACF48E",
 "data": {
  "label": "Circle Point 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.53,
   "yaw": 141.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_52BDCCC8_4BE0_F714_41A7_3AF4AFB28E85",
   "pitch": 3.57,
   "hfov": 13.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 141.7
  }
 ],
 "id": "overlay_59ED33FE_4BA0_70EC_41C8_533633AAEB94",
 "data": {
  "label": "Circle Point 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.51,
   "yaw": -2.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_1_HS_3_0_map.gif",
      "width": 60,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 13.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_1_HS_3_0.png",
      "width": 478,
      "class": "ImageResourceLevel",
      "height": 126
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 13.07,
   "hfov": 20.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -2.55
  }
 ],
 "id": "overlay_5933ECA7_4BA0_F71D_41CD_11133C0B2B6D",
 "data": {
  "label": "Value Meter"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 27.04,
   "yaw": -68.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_1_HS_4_0_map.gif",
      "width": 86,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.24
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_1_HS_4_0.png",
      "width": 615,
      "class": "ImageResourceLevel",
      "height": 114
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.24,
   "hfov": 27.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -68.64
  }
 ],
 "id": "overlay_58AD5519_4BA0_7134_41CB_3F2BD92930D7",
 "data": {
  "label": "Self Affirmation"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.25,
   "yaw": 75.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_1_HS_5_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 15.11
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_1_HS_5_0.png",
      "width": 477,
      "class": "ImageResourceLevel",
      "height": 124
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 15.11,
   "hfov": 20.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 75.29
  }
 ],
 "id": "overlay_5F80CD98_4BA3_F134_41BB_0A1E87D3FF9B",
 "data": {
  "label": "Eco Meters"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.29,
   "yaw": 130.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_0_HS_6_0_map.gif",
      "width": 23,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.51
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_0_HS_6_0.png",
      "width": 372,
      "class": "ImageResourceLevel",
      "height": 257
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.51,
   "hfov": 16.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 130.05
  }
 ],
 "id": "overlay_50ABE6D7_4BA0_B33C_419C_46183994D961",
 "data": {
  "label": "Reflection &\u000dSeating Area"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 26.4,
   "yaw": -158.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_1_HS_0_0_map.gif",
      "width": 87,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.49
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_1_HS_0_0.png",
      "width": 612,
      "class": "ImageResourceLevel",
      "height": 112
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.49,
   "hfov": 26.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -158.63
  }
 ],
 "id": "overlay_58B2F874_4BA0_5FFC_4175_220CC8B42C50",
 "data": {
  "label": "Patience Corner"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 26.08,
   "yaw": -157.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_1_HS_1_0_map.gif",
      "width": 87,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 14.62
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_1_HS_1_0.png",
      "width": 613,
      "class": "ImageResourceLevel",
      "height": 112
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 14.62,
   "hfov": 26.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -157.36
  }
 ],
 "id": "overlay_58A0254D_4BDF_D12C_41BB_010528DE0E0D",
 "data": {
  "label": "Meditation Area"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.45,
   "yaw": 105.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0_HS_2_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0_HS_2_0.png",
      "width": 375,
      "class": "ImageResourceLevel",
      "height": 294
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.03,
   "hfov": 16.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 105.23
  }
 ],
 "id": "overlay_5803C74D_4BE0_D12D_41B5_7B17B7C761A9",
 "data": {
  "label": "Reflection &\u000dSeating area"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.16,
   "yaw": -93.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_1_HS_3_0_map.gif",
      "width": 66,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 21.62
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_1_HS_3_0.png",
      "width": 517,
      "class": "ImageResourceLevel",
      "height": 125
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 21.62,
   "hfov": 21.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -93.13
  }
 ],
 "id": "overlay_5F37D494_4BE0_773C_41C7_38852BA1D423",
 "data": {
  "label": "Conflict Area"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 31.82,
   "yaw": 7.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_1_HS_4_0_map.gif",
      "width": 101,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_1_HS_4_0.png",
      "width": 724,
      "class": "ImageResourceLevel",
      "height": 114
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.27,
   "hfov": 31.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 7.13
  }
 ],
 "id": "overlay_5EAB7A85_4BE0_D31C_41C3_CA3CF763949F",
 "data": {
  "label": "Storytelling area"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.47,
   "yaw": -30.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_1_HS_5_0_map.gif",
      "width": 62,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.71
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_1_HS_5_0.png",
      "width": 443,
      "class": "ImageResourceLevel",
      "height": 113
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.71,
   "hfov": 19.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -30.84
  }
 ],
 "id": "overlay_5D10D5DB_4BE0_5134_4193_1779C6F8F900",
 "data": {
  "label": "Eco Pillars"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.89,
   "yaw": -92.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 15.35
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5281BCC6_4BE0_F71C_41D2_5C463820B2D7",
   "pitch": 15.35,
   "hfov": 10.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -92.64
  }
 ],
 "id": "overlay_5F4D9E83_4BE1_D314_41CA_8C95D97E0233",
 "data": {
  "label": "Circle Point 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.16,
   "yaw": -30.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_1_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.02
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5281ECC7_4BE0_F71C_4183_DC22E0A6B6F6",
   "pitch": -9.02,
   "hfov": 11.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -30.34
  }
 ],
 "id": "overlay_5F87FECB_4BE0_5315_41C0_47EE418F9197",
 "data": {
  "label": "Circle Point 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.27,
   "yaw": 117.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.16
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5C6C0473_4CC2_CA5E_41D0_C3D7D408DBC0",
   "pitch": 4.16,
   "hfov": 11.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 117.13
  }
 ],
 "id": "overlay_5F467413_4BE0_5734_41B0_06CA9B2B4597",
 "data": {
  "label": "Circle Point 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.29,
   "yaw": -160.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_1_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.7
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_52814CC7_4BE0_F71C_41C7_92E5BC1CE541",
   "pitch": 1.7,
   "hfov": 9.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -160.04
  }
 ],
 "id": "overlay_5FC545AB_4BE0_B115_41D0_CC800270221B",
 "data": {
  "label": "Circle 360 1"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.6,
   "yaw": -1.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_1_HS_0_0_map.gif",
      "width": 53,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.16
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_1_HS_0_0.png",
      "width": 423,
      "class": "ImageResourceLevel",
      "height": 127
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.16,
   "hfov": 18.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -1.29
  }
 ],
 "id": "overlay_59EC7653_4BA0_5334_41D0_93884DE34E97",
 "data": {
  "label": "eco pillars"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.1,
   "yaw": -64.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_1_HS_1_0_map.gif",
      "width": 64,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 11.56
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_1_HS_1_0.png",
      "width": 513,
      "class": "ImageResourceLevel",
      "height": 127
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 11.56,
   "hfov": 22.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -64.65
  }
 ],
 "id": "overlay_5952A3CC_4BA0_512C_41C3_6BD7586DB2F9",
 "data": {
  "label": "Conflict area"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.8,
   "yaw": 49.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_1_HS_2_0_map.gif",
      "width": 65,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_1_HS_2_0.png",
      "width": 519,
      "class": "ImageResourceLevel",
      "height": 127
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.86,
   "hfov": 22.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 49.84
  }
 ],
 "id": "overlay_585DD40A_4BA1_B714_4182_01318B5E4A25",
 "data": {
  "label": "Self affirmation"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.71,
   "yaw": -59.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.93
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_52825CC8_4BE0_F714_41B6_D62DCF5B6D2F",
   "pitch": 7.93,
   "hfov": 5.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -59.47
  }
 ],
 "id": "overlay_5952E93C_4BA0_B16C_41C2_B7715D231C56",
 "data": {
  "label": "Circle Point 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.72,
   "yaw": 49.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.76
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_52839CC8_4BE0_F714_41C2_7B1A4D8DE1CD",
   "pitch": -7.76,
   "hfov": 5.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 49.17
  }
 ],
 "id": "overlay_5906123B_4BAF_D374_41B3_74C6277CCDA8",
 "data": {
  "label": "Circle Point 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.28,
   "yaw": -116.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.66
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_55BBE94C_4BE1_B113_41CA_7B0E930D1F24",
   "pitch": -19.66,
   "hfov": 8.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -116.32
  }
 ],
 "id": "overlay_51B96FA5_4BE0_711D_41C7_80F381D915A4",
 "data": {
  "label": "Circle 360 1"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.2,
   "yaw": -35.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_1_HS_0_1_0_map.gif",
      "width": 78,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.83
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.2,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_1_HS_0_0.png",
      "width": 164,
      "class": "ImageResourceLevel",
      "height": 421
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.83,
   "yaw": -35.83
  }
 ],
 "id": "overlay_5B39BA49_4BA0_5314_41BD_50E0F9F4A1B1",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.38,
   "yaw": 36.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_1_HS_1_1_0_map.gif",
      "width": 79,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.83
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.38,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_1_HS_1_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 422
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.83,
   "yaw": 36.02
  }
 ],
 "id": "overlay_447C25F0_4BA3_B0F4_4193_A5E0B01E4318",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.83,
   "yaw": -35.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.45
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_1_HS_2_0.png",
      "width": 132,
      "class": "ImageResourceLevel",
      "height": 130
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.45,
   "yaw": -35.81
  }
 ],
 "id": "overlay_5B8C6547_4BA0_F11C_41CE_B9D06C8522F3",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.83,
   "yaw": 36.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.02
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2, this.camera_5C256498_4CC2_CACA_41C9_14E4352CDFA2); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_1_HS_3_0.png",
      "width": 132,
      "class": "ImageResourceLevel",
      "height": 130
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.02,
   "yaw": 36.36
  }
 ],
 "id": "overlay_5BD8434D_4BA0_B12D_41A1_F8DA65239937",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.25,
   "yaw": -34.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_1_HS_4_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_1_HS_4_0.png",
      "width": 187,
      "class": "ImageResourceLevel",
      "height": 104
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.75,
   "hfov": 8.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -34.25
  }
 ],
 "id": "overlay_5B4F4ED1_4BA0_7334_41D0_6096A8C277E1",
 "data": {
  "label": "Enter\u000d"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.33,
   "yaw": -0.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_1_HS_5_0_map.gif",
      "width": 75,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.56
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_1_HS_5_0.png",
      "width": 486,
      "class": "ImageResourceLevel",
      "height": 103
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.56,
   "hfov": 21.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -0.88
  }
 ],
 "id": "overlay_5BF480CE_4BAF_EF2F_4190_AE5E1802B7BC",
 "data": {
  "label": "Feedback Area"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.41,
   "yaw": -0.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 20.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_1_HS_6_0.png",
      "width": 203,
      "class": "ImageResourceLevel",
      "height": 221
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 20.06,
   "yaw": -0.37
  }
 ],
 "id": "overlay_5C2DEC47_4BE0_F71C_419A_228501E4A0D0",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.2,
   "yaw": 0.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_1_HS_7_0_map.gif",
      "width": 106,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 13.49
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07_1_HS_7_0.png",
      "width": 519,
      "class": "ImageResourceLevel",
      "height": 78
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 13.49,
   "hfov": 22.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 0.81
  }
 ],
 "id": "overlay_53426F85_4BE1_B11D_41C3_36AEFC03610D",
 "data": {
  "label": "Saksham Values Lab"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 26.16,
   "yaw": -3.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_1_HS_0_0_map.gif",
      "width": 80,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_1_HS_0_0.png",
      "width": 602,
      "class": "ImageResourceLevel",
      "height": 119
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.38,
   "hfov": 26.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -3.39
  }
 ],
 "id": "overlay_5EE9E159_4BE0_F135_41C7_D5E18BEB56EA",
 "data": {
  "label": "Self Affirmation"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.59,
   "yaw": 73.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_1_HS_1_0_map.gif",
      "width": 70,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.96
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_1_HS_1_0.png",
      "width": 492,
      "class": "ImageResourceLevel",
      "height": 112
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.96,
   "hfov": 21.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 73.84
  }
 ],
 "id": "overlay_5ECB2360_4BE1_B113_41CA_AA436554251B",
 "data": {
  "label": "Value meter"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.38,
   "yaw": -59.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_0_HS_2_0_map.gif",
      "width": 65,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.89
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_0_HS_2_0.png",
      "width": 443,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.89,
   "hfov": 19.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -59.38
  }
 ],
 "id": "overlay_5EB074CA_4BE0_7717_41B8_02EC2381CAC1",
 "data": {
  "label": "Eco Pillars"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.11,
   "yaw": 150.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_1_HS_3_0_map.gif",
      "width": 63,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_1_HS_3_0.png",
      "width": 418,
      "class": "ImageResourceLevel",
      "height": 106
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.73,
   "hfov": 18.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 150.34
  }
 ],
 "id": "overlay_5FD2E5EE_4BE0_50EC_41D2_41B00D6A9B52",
 "data": {
  "label": "Eco wheel"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.06,
   "yaw": -61.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.78
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_52BCBCC8_4BE0_F714_41C7_EFAAA468A2DF",
   "pitch": -11.78,
   "hfov": 11.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -61.87
  }
 ],
 "id": "overlay_5F2D50A6_4BE1_AF1C_41C3_4AC8F2661889",
 "data": {
  "label": "Circle Point 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.04,
   "yaw": 73.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.28
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_52BCFCC8_4BE0_F714_41C8_EDAE40A133D2",
   "pitch": -12.28,
   "hfov": 11.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 73.04
  }
 ],
 "id": "overlay_5DD19288_4BE0_B314_41D1_837AAED804F1",
 "data": {
  "label": "Circle Point 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.29,
   "yaw": 148.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.04
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_52BC0CC8_4BE0_F714_41D2_3F05D89F01D7",
   "pitch": 2.04,
   "hfov": 11.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 148.66
  }
 ],
 "id": "overlay_5E479A7E_4BE0_73EC_4187_A82B3A1E8D10",
 "data": {
  "label": "Circle Point 01"
 }
},
{
 "maxHeight": 150,
 "horizontalAlign": "center",
 "id": "IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "12%",
 "class": "IconButton",
 "borderRadius": 0,
 "minHeight": 70,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_rollover.png",
 "propagateClick": false,
 "minWidth": 70,
 "mode": "push",
 "height": "8%",
 "pressedIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4.png",
 "data": {
  "name": "IconButton >"
 },
 "paddingBottom": 0,
 "cursor": "hand",
 "maxWidth": 150
},
{
 "maxHeight": 60,
 "horizontalAlign": "center",
 "id": "IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 10,
 "width": "14.22%",
 "class": "IconButton",
 "borderRadius": 0,
 "minHeight": 50,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_rollover.png",
 "propagateClick": false,
 "top": "20%",
 "bottom": "20%",
 "minWidth": 50,
 "mode": "push",
 "pressedIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_pressed.png",
 "transparencyActive": false,
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14.png",
 "data": {
  "name": "IconButton >"
 },
 "paddingBottom": 0,
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 60,
 "horizontalAlign": "center",
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 10,
 "width": "14.22%",
 "class": "IconButton",
 "borderRadius": 0,
 "minHeight": 50,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "propagateClick": false,
 "top": "20%",
 "bottom": "20%",
 "minWidth": 50,
 "mode": "push",
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "transparencyActive": false,
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "data": {
  "name": "IconButton >"
 },
 "paddingBottom": 0,
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 150,
 "horizontalAlign": "center",
 "id": "IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "12%",
 "class": "IconButton",
 "borderRadius": 0,
 "minHeight": 70,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_rollover.png",
 "propagateClick": false,
 "minWidth": 70,
 "mode": "push",
 "height": "8%",
 "pressedIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD.png",
 "data": {
  "name": "IconButton <"
 },
 "paddingBottom": 0,
 "cursor": "hand",
 "maxWidth": 150
},
{
 "maxHeight": 60,
 "horizontalAlign": "center",
 "id": "IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "left": 10,
 "width": "14.22%",
 "class": "IconButton",
 "borderRadius": 0,
 "minHeight": 50,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_rollover.png",
 "propagateClick": false,
 "top": "20%",
 "bottom": "20%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_pressed.png",
 "transparencyActive": false,
 "paddingTop": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D.png",
 "data": {
  "name": "IconButton <"
 },
 "paddingBottom": 0,
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 60,
 "horizontalAlign": "center",
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "left": 10,
 "width": "14.22%",
 "class": "IconButton",
 "borderRadius": 0,
 "minHeight": 50,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "propagateClick": false,
 "top": "20%",
 "bottom": "20%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "transparencyActive": false,
 "paddingTop": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "data": {
  "name": "IconButton <"
 },
 "paddingBottom": 0,
 "cursor": "hand",
 "maxWidth": 60
},
{
 "progressBarBorderSize": 6,
 "id": "MapViewer",
 "paddingLeft": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 0,
 "width": "100%",
 "class": "ViewerArea",
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "minHeight": 1,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Georgia",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "minWidth": 1,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#FFFFFF",
 "transitionDuration": 500,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "height": "100%",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#FF9933",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "shadow": false,
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 10,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingRight": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 7,
 "paddingBottom": 0,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "13px",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Floor Plan"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.58,
   "yaw": -149.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.87
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_52866CC6_4BE0_F71C_41D2_957D08CAAA90",
   "pitch": 10.87,
   "hfov": 12.58,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -149.73
  }
 ],
 "id": "overlay_5ABB6423_4BA1_F714_41B3_CA2ED2AA1BB9",
 "data": {
  "label": "Circle 360 1"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.21,
   "yaw": -43.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_1_HS_1_0_map.gif",
      "width": 76,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.02
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_1_HS_1_0.png",
      "width": 484,
      "class": "ImageResourceLevel",
      "height": 101
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.02,
   "hfov": 21.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -43.78
  }
 ],
 "id": "overlay_5A64D5A4_4BA0_5113_41D2_A31D065E2371",
 "data": {
  "label": "Meditation Area"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.76,
   "yaw": -41.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_1_HS_2_0_map.gif",
      "width": 76,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.8
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_1_HS_2_0.png",
      "width": 484,
      "class": "ImageResourceLevel",
      "height": 101
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.8,
   "hfov": 20.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -41.89
  }
 ],
 "id": "overlay_5A306C10_4BA0_5734_41CA_ED63579003C5",
 "data": {
  "label": "Patience Area"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.57,
   "yaw": 19.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_1_HS_3_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5287CCC6_4BE0_F71C_41D2_539E84763932",
   "pitch": -20.36,
   "hfov": 12.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 19.7
  }
 ],
 "id": "overlay_5A637704_4BA1_B11C_41CB_772ABB5EE305",
 "data": {
  "label": "Circle Arrow 01a Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.28,
   "yaw": -4.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_1_HS_4_0_map.gif",
      "width": 77,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_1_HS_4_0.png",
      "width": 484,
      "class": "ImageResourceLevel",
      "height": 100
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.61,
   "hfov": 21.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -4.62
  }
 ],
 "id": "overlay_590A28A2_4BA0_5F14_41BF_452686803B0C",
 "data": {
  "label": "Conflict Area"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.75,
   "yaw": -5.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_52877CC6_4BE0_F71C_41C7_B46B17ED89DA",
   "pitch": -4.23,
   "hfov": 5.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -5.82
  }
 ],
 "id": "overlay_5A8CCEF1_4BA0_70F4_41B1_A59890A515EF",
 "data": {
  "label": "Circle Point 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.2,
   "yaw": -127.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_52BE9CC9_4BE0_F714_41C9_A86515A0EDA4",
   "pitch": -7.38,
   "hfov": 13.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -127.94
  }
 ],
 "id": "overlay_5EF7160D_4BE1_D32D_41A3_DE6A413F77D4",
 "data": {
  "label": "Circle Point 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.29,
   "yaw": 66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_52BEDCC9_4BE0_F714_417C_798CBB2CEC0C",
   "pitch": -1.48,
   "hfov": 11.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 66
  }
 ],
 "id": "overlay_5E5B4B95_4BE1_B13C_41D0_15A867E4CF5D",
 "data": {
  "label": "Circle Point 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.6,
   "yaw": 62.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_0_HS_2_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_0_HS_2_0.png",
      "width": 403,
      "class": "ImageResourceLevel",
      "height": 294
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.57,
   "hfov": 17.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 62.3
  }
 ],
 "id": "overlay_5E02A395_4BE0_D13C_41A8_E5CD4A7B5D7B",
 "data": {
  "label": "Reflection &\u000dSeating Area"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.68,
   "yaw": -128.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_1_HS_3_0_map.gif",
      "width": 74,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.69
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_1_HS_3_0.png",
      "width": 493,
      "class": "ImageResourceLevel",
      "height": 106
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.69,
   "hfov": 21.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -128.08
  }
 ],
 "id": "overlay_5EDB5D34_4BE0_B17C_41CE_B2B738E8EF52",
 "data": {
  "label": "Value meter"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.71,
   "yaw": 5.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_1_HS_4_0_map.gif",
      "width": 54,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 22.23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_1_HS_4_0.png",
      "width": 410,
      "class": "ImageResourceLevel",
      "height": 120
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 22.23,
   "hfov": 16.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 5.81
  }
 ],
 "id": "overlay_5E001B74_4BE3_F1FC_41D2_518C58B6DBBF",
 "data": {
  "label": "Eco Wheel"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.68,
   "yaw": -27.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.1
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_401F5CC9_4BA1_F715_41CE_068E70E40C07, this.camera_5C2A0491_4CC2_CADA_41BD_9926EE826C60); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_52BD6CC9_4BE0_F714_41B6_CB2D5AF33960",
   "pitch": 8.1,
   "hfov": 12.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -27.65
  }
 ],
 "id": "overlay_5DFE55F6_4BE1_D0FC_41D0_33630AADAE3E",
 "data": {
  "label": "Circle 360 1"
 }
},
{
 "items": [
  {
   "media": "this.album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_0",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.40",
     "class": "PhotoCameraPosition",
     "y": "0.73",
     "zoomFactor": 1.1
    },
    "easing": "linear"
   }
  },
  {
   "media": "this.album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_1",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.72",
     "class": "PhotoCameraPosition",
     "y": "0.48",
     "zoomFactor": 1.1
    },
    "easing": "linear"
   }
  },
  {
   "media": "this.album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_2",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.73",
     "class": "PhotoCameraPosition",
     "y": "0.69",
     "zoomFactor": 1.1
    },
    "easing": "linear"
   }
  },
  {
   "media": "this.album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_3",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.27",
     "class": "PhotoCameraPosition",
     "y": "0.73",
     "zoomFactor": 1.1
    },
    "easing": "linear"
   }
  },
  {
   "media": "this.album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_4",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.42",
     "class": "PhotoCameraPosition",
     "y": "0.71",
     "zoomFactor": 1.1
    },
    "easing": "linear"
   }
  },
  {
   "media": "this.album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_5",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.69",
     "class": "PhotoCameraPosition",
     "y": "0.47",
     "zoomFactor": 1.1
    },
    "easing": "linear"
   }
  },
  {
   "media": "this.album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_6",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.48",
     "class": "PhotoCameraPosition",
     "y": "0.75",
     "zoomFactor": 1.1
    },
    "easing": "linear"
   }
  },
  {
   "media": "this.album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_7",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.40",
     "class": "PhotoCameraPosition",
     "y": "0.29",
     "zoomFactor": 1.1
    },
    "easing": "linear"
   }
  },
  {
   "media": "this.album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_8",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.45",
     "class": "PhotoCameraPosition",
     "y": "0.28",
     "zoomFactor": 1.1
    },
    "easing": "linear"
   }
  },
  {
   "media": "this.album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_9",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.25",
     "class": "PhotoCameraPosition",
     "y": "0.53",
     "zoomFactor": 1.1
    },
    "easing": "linear"
   }
  },
  {
   "media": "this.album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_10",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.56",
     "class": "PhotoCameraPosition",
     "y": "0.60",
     "zoomFactor": 1.1
    },
    "easing": "linear"
   }
  },
  {
   "media": "this.album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_11",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.39",
     "class": "PhotoCameraPosition",
     "y": "0.61",
     "zoomFactor": 1.1
    },
    "easing": "linear"
   }
  },
  {
   "media": "this.album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_12",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.57",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1.1
    },
    "easing": "linear"
   }
  }
 ],
 "id": "album_53473D96_4BE0_D13C_41D1_2C4B1E76C56A_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "maxHeight": 58,
 "horizontalAlign": "center",
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 58,
 "class": "IconButton",
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": true,
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "data": {
  "name": "IconButton HS "
 },
 "paddingBottom": 0,
 "cursor": "hand",
 "maxWidth": 58
},
{
 "maxHeight": 58,
 "horizontalAlign": "center",
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 58,
 "class": "IconButton",
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": true,
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "data": {
  "name": "IconButton GYRO"
 },
 "paddingBottom": 0,
 "cursor": "hand",
 "maxWidth": 58
},
{
 "maxHeight": 58,
 "horizontalAlign": "center",
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 58,
 "class": "IconButton",
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "propagateClick": true,
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "transparencyActive": true,
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "data": {
  "name": "IconButton VR"
 },
 "paddingBottom": 0,
 "visible": false,
 "cursor": "hand",
 "maxWidth": 58
},
{
 "maxHeight": 37,
 "horizontalAlign": "center",
 "id": "IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "backgroundOpacity": 0,
 "width": 100,
 "paddingRight": 0,
 "right": 137,
 "paddingLeft": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png",
 "propagateClick": true,
 "bottom": 7,
 "minWidth": 1,
 "mode": "push",
 "height": 75,
 "pressedIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270.png",
 "data": {
  "name": "IconButton VR"
 },
 "paddingBottom": 0,
 "cursor": "hand",
 "maxWidth": 49
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "backgroundOpacity": 0,
 "width": 110,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "right": "0%",
 "paddingLeft": 0,
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "verticalAlign": "middle",
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "0%",
 "minWidth": 1,
 "height": 110,
 "gap": 10,
 "paddingTop": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "button menu sup"
 },
 "paddingBottom": 0,
 "layout": "horizontal"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "right": "0%",
 "width": "91.304%",
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "verticalAlign": "top",
 "propagateClick": true,
 "bottom": "0%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "height": "85.959%",
 "paddingBottom": 0,
 "gap": 3,
 "borderSize": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set"
 },
 "paddingTop": 0,
 "visible": false,
 "layout": "vertical"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "backgroundOpacity": 0,
 "width": 574.16,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "right": "30.06%",
 "paddingLeft": 0,
 "children": [
  "this.Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
  "this.Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
  "this.Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "propagateClick": true,
 "scrollBarWidth": 10,
 "bottom": "0%",
 "minWidth": 1,
 "height": 51,
 "paddingBottom": 0,
 "gap": 3,
 "borderSize": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set container"
 },
 "paddingTop": 0,
 "layout": "horizontal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "right": "10%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "top": "5%",
 "shadowHorizontalLength": 0,
 "shadowColor": "#000000",
 "bottom": "5%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "shadowVerticalLength": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "contentOpaque": false,
 "shadow": true,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "layout": "horizontal"
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 20,
 "backgroundOpacity": 0,
 "right": "10%",
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "verticalAlign": "top",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "top": "5%",
 "bottom": "80%",
 "minWidth": 1,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "paddingTop": 20,
 "layout": "vertical"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "right": "10%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
  "this.Container_23F027B7_0C0A_6293_418E_075FCFAA8A19"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "top": "5%",
 "shadowHorizontalLength": 0,
 "shadowColor": "#000000",
 "bottom": "5%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "shadowVerticalLength": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "contentOpaque": false,
 "shadow": true,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "layout": "horizontal"
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_23F097B8_0C0A_629D_4176_D87C90BA32B6",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 20,
 "backgroundOpacity": 0,
 "right": "10%",
 "children": [
  "this.IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "verticalAlign": "top",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "top": "5%",
 "bottom": "80%",
 "minWidth": 1,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "paddingTop": 20,
 "layout": "vertical"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "top": "7%",
 "shadowHorizontalLength": 0,
 "shadowColor": "#000000",
 "bottom": "7%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "shadowVerticalLength": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "contentOpaque": false,
 "shadow": true,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "layout": "vertical"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "right": "10%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
  "this.Container_221C9648_0C06_E5FD_41A1_A79DE53B3031"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "top": "5%",
 "shadowHorizontalLength": 0,
 "shadowColor": "#000000",
 "bottom": "5%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "shadowVerticalLength": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "contentOpaque": false,
 "shadow": true,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "layout": "horizontal"
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 20,
 "backgroundOpacity": 0,
 "right": "10%",
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "verticalAlign": "top",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "top": "5%",
 "bottom": "80%",
 "minWidth": 1,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "paddingTop": 20,
 "layout": "vertical"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
  "this.MapViewer"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "top": "7%",
 "shadowHorizontalLength": 0,
 "shadowColor": "#000000",
 "bottom": "7%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "shadowVerticalLength": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "contentOpaque": false,
 "shadow": true,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "layout": "vertical"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Container_28214A13_0D5D_5B97_4193_B631E1496339",
  "this.Container_2B0BF61C_0D5B_2B90_4179_632488B1209E"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "top": "7%",
 "shadowHorizontalLength": 0,
 "shadowColor": "#000000",
 "bottom": "7%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "shadowVerticalLength": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "contentOpaque": false,
 "shadow": true,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "layout": "vertical"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "top": "7%",
 "shadowHorizontalLength": 0,
 "shadowColor": "#000000",
 "bottom": "7%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "shadowVerticalLength": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "contentOpaque": false,
 "shadow": true,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "layout": "vertical"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "right": "10%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "top": "5%",
 "shadowHorizontalLength": 0,
 "shadowColor": "#000000",
 "bottom": "5%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "shadowVerticalLength": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "contentOpaque": false,
 "shadow": true,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "layout": "horizontal"
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 20,
 "backgroundOpacity": 0,
 "right": "10%",
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "verticalAlign": "top",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "top": "5%",
 "bottom": "80%",
 "minWidth": 1,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "paddingTop": 20,
 "layout": "vertical"
},
{
 "levels": [
  {
   "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_1_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_52BE0CC9_4BE0_F714_41A9_5D47E6392DED",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_1_HS_5_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_52BE5CC9_4BE0_F714_41B9_F6EBB39246CF",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_1_HS_7_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_52BFFCC9_4BE0_F714_41AE_FE5F6608EC66",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_1_HS_8_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_52BF0CCA_4BE0_F714_41B9_3423148EB46C",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4019D266_4BA0_531F_41C5_68650E743136_1_HS_10_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_52B8BCCA_4BE0_F714_418B_B5BFA63A5374",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_40618FA4_4BA1_B11D_41CE_93BBE6CC0869_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_52829CC7_4BE0_F71C_41BC_70C034E74BBD",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_1_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_52BC5CC8_4BE0_F714_41D0_53D1A33F886D",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_1_HS_1_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_52BD9CC8_4BE0_F714_41D1_1FDDB02EC22B",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_401F15C6_4BA1_B11C_41D1_336AC8CAC0B7_1_HS_2_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_52BDCCC8_4BE0_F714_41A7_3AF4AFB28E85",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_1_HS_6_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_5281BCC6_4BE0_F71C_41D2_5C463820B2D7",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_1_HS_7_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_5281ECC7_4BE0_F71C_4183_DC22E0A6B6F6",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_0_HS_8_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_5C6C0473_4CC2_CA5E_41D0_C3D7D408DBC0",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_5FAF6348_4BA0_D113_41A1_2D7E8FFA0074_1_HS_9_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_52814CC7_4BE0_F71C_41C7_92E5BC1CE541",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_1_HS_3_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_52825CC8_4BE0_F714_41B6_D62DCF5B6D2F",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_1_HS_4_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_52839CC8_4BE0_F714_41C2_7B1A4D8DE1CD",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_401C192A_4BA1_D117_418F_4A5C3301B321_0_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_55BBE94C_4BE1_B113_41CA_7B0E930D1F24",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_1_HS_4_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_52BCBCC8_4BE0_F714_41C7_EFAAA468A2DF",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_1_HS_5_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_52BCFCC8_4BE0_F714_41C8_EDAE40A133D2",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_5D4604D0_4BE0_5734_41C3_0118E4282FBF_1_HS_6_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_52BC0CC8_4BE0_F714_41D2_3F05D89F01D7",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_52866CC6_4BE0_F71C_41D2_957D08CAAA90",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_1_HS_3_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_5287CCC6_4BE0_F71C_41D2_539E84763932",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_40191619_4BA1_D334_41C7_4CDD7EE0A8A0_1_HS_5_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_52877CC6_4BE0_F71C_41C7_B46B17ED89DA",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_1_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_52BE9CC9_4BE0_F714_41C9_A86515A0EDA4",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_1_HS_1_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_52BEDCC9_4BE0_F714_417C_798CBB2CEC0C",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_401E7C0D_4BA0_572C_41D2_E52EAF756BD2_1_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_52BD6CC9_4BE0_F714_41B6_CB2D5AF33960",
 "rowCount": 6,
 "colCount": 4
},
{
 "maxHeight": 60,
 "horizontalAlign": "center",
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 60,
 "class": "IconButton",
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": true,
 "minWidth": 1,
 "mode": "toggle",
 "height": 60,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "borderSize": 0,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "shadow": false,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "data": {
  "name": "image button menu"
 },
 "paddingBottom": 0,
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 58,
 "horizontalAlign": "center",
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 58,
 "class": "IconButton",
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "propagateClick": true,
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "transparencyActive": true,
 "paddingTop": 0,
 "borderSize": 0,
 "click": "this.shareTwitter(window.location.href)",
 "shadow": false,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "data": {
  "name": "IconButton TWITTER"
 },
 "paddingBottom": 0,
 "cursor": "hand",
 "maxWidth": 58
},
{
 "maxHeight": 58,
 "horizontalAlign": "center",
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 58,
 "class": "IconButton",
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "propagateClick": true,
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "transparencyActive": true,
 "paddingTop": 0,
 "borderSize": 0,
 "click": "this.shareFacebook(window.location.href)",
 "shadow": false,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "data": {
  "name": "IconButton FB"
 },
 "paddingBottom": 0,
 "cursor": "hand",
 "maxWidth": 58
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "horizontalAlign": "center",
 "id": "Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "gap": 5,
 "width": 140,
 "class": "Button",
 "borderRadius": 0,
 "iconHeight": 32,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "mode": "push",
 "height": 40,
 "fontSize": "15px",
 "backgroundColorDirection": "vertical",
 "fontStyle": "normal",
 "paddingTop": 0,
 "borderSize": 4,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "ELEMENTS LIST",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "iconWidth": 32,
 "data": {
  "name": "Button panorama list"
 },
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold",
 "layout": "horizontal"
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "horizontalAlign": "center",
 "id": "Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "gap": 5,
 "width": 172,
 "class": "Button",
 "borderRadius": 0,
 "iconHeight": 32,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "verticalAlign": "middle",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "mode": "push",
 "height": 40,
 "fontSize": "15px",
 "backgroundColorDirection": "vertical",
 "fontStyle": "normal",
 "paddingTop": 0,
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "FLOORPLAN",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "iconWidth": 32,
 "data": {
  "name": "Button floorplan"
 },
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold",
 "layout": "horizontal"
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "horizontalAlign": "center",
 "id": "Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "gap": 5,
 "width": 81,
 "class": "Button",
 "borderRadius": 0,
 "iconHeight": 32,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "verticalAlign": "middle",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "mode": "push",
 "height": 40,
 "fontSize": "15px",
 "backgroundColorDirection": "vertical",
 "fontStyle": "normal",
 "paddingTop": 0,
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "RENDERS",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "iconWidth": 32,
 "data": {
  "name": "Button photoalbum"
 },
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold",
 "layout": "horizontal"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "85%",
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "verticalAlign": "middle",
 "minWidth": 1,
 "backgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "layout": "absolute"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "backgroundOpacity": 1,
 "paddingLeft": 50,
 "scrollBarVisible": "rollOver",
 "paddingRight": 50,
 "overflow": "visible",
 "width": "50%",
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "minWidth": 460,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingBottom": 20,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "layout": "vertical"
},
{
 "maxHeight": 60,
 "horizontalAlign": "center",
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "25%",
 "class": "IconButton",
 "borderRadius": 0,
 "minHeight": 50,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "propagateClick": false,
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "transparencyActive": false,
 "paddingTop": 0,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "shadow": false,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "data": {
  "name": "X"
 },
 "paddingBottom": 0,
 "cursor": "hand",
 "maxWidth": 60
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "85%",
 "children": [
  "this.ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
  "this.Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "verticalAlign": "middle",
 "minWidth": 1,
 "backgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "layout": "absolute"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "id": "Container_23F027B7_0C0A_6293_418E_075FCFAA8A19",
 "backgroundOpacity": 1,
 "paddingLeft": 50,
 "scrollBarVisible": "rollOver",
 "paddingRight": 50,
 "overflow": "visible",
 "width": "50%",
 "children": [
  "this.Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
  "this.Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
  "this.Container_23F047B8_0C0A_629D_415D_F05EF8619564"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "minWidth": 460,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingBottom": 20,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "layout": "vertical"
},
{
 "maxHeight": 60,
 "horizontalAlign": "center",
 "id": "IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "25%",
 "class": "IconButton",
 "borderRadius": 0,
 "minHeight": 50,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_rollover.jpg",
 "propagateClick": false,
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "pressedIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_pressed.jpg",
 "transparencyActive": false,
 "paddingTop": 0,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "shadow": false,
 "iconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA.jpg",
 "data": {
  "name": "X"
 },
 "paddingBottom": 0,
 "cursor": "hand",
 "maxWidth": 60
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": 140,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "layout": "absolute"
},
{
 "horizontalAlign": "center",
 "itemLabelPosition": "bottom",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "backgroundOpacity": 0.05,
 "paddingLeft": 70,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "width": "100%",
 "itemMinHeight": 50,
 "scrollBarMargin": 2,
 "class": "ThumbnailGrid",
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemVerticalAlign": "top",
 "minHeight": 1,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemPaddingLeft": 3,
 "verticalAlign": "middle",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemOpacity": 1,
 "minWidth": 1,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "itemThumbnailOpacity": 1,
 "itemMinWidth": 50,
 "backgroundColor": [
  "#000000"
 ],
 "itemBackgroundColor": [],
 "itemPaddingTop": 3,
 "height": "100%",
 "itemBackgroundColorRatios": [],
 "borderSize": 0,
 "itemPaddingRight": 3,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarColor": "#04A3E1",
 "itemHeight": 156,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "itemLabelFontWeight": "normal",
 "itemThumbnailHeight": 125,
 "scrollBarVisible": "rollOver",
 "itemThumbnailScaleMode": "fit_outside",
 "paddingRight": 70,
 "rollOverItemThumbnailShadow": true,
 "itemLabelFontSize": 14,
 "borderRadius": 5,
 "itemLabelGap": 7,
 "backgroundColorRatios": [
  0
 ],
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailShadow": false,
 "selectedItemThumbnailShadow": true,
 "itemThumbnailWidth": 220,
 "itemLabelFontColor": "#666666",
 "itemHorizontalAlign": "center",
 "gap": 26,
 "itemMaxHeight": 1000,
 "selectedItemLabelFontWeight": "bold",
 "itemWidth": 220,
 "itemPaddingBottom": 3,
 "itemMaxWidth": 1000,
 "paddingTop": 10,
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "normal",
 "itemMode": "normal",
 "paddingBottom": 70,
 "data": {
  "name": "ThumbnailList"
 },
 "itemThumbnailBorderRadius": 0,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemLabelFontFamily": "Montserrat"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "85%",
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "verticalAlign": "middle",
 "minWidth": 1,
 "backgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "layout": "absolute"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "id": "Container_221C9648_0C06_E5FD_41A1_A79DE53B3031",
 "backgroundOpacity": 1,
 "paddingLeft": 50,
 "scrollBarVisible": "rollOver",
 "paddingRight": 50,
 "overflow": "visible",
 "width": "15%",
 "children": [
  "this.Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
  "this.Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
  "this.Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "minWidth": 400,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingBottom": 20,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "layout": "vertical"
},
{
 "maxHeight": 60,
 "horizontalAlign": "center",
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "25%",
 "class": "IconButton",
 "borderRadius": 0,
 "minHeight": 50,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "propagateClick": false,
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "transparencyActive": false,
 "paddingTop": 0,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "shadow": false,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "data": {
  "name": "X"
 },
 "paddingBottom": 0,
 "cursor": "hand",
 "maxWidth": 60
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": 140,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "layout": "absolute"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_28214A13_0D5D_5B97_4193_B631E1496339",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
  "this.IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": 140,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "layout": "absolute"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2B0BF61C_0D5B_2B90_4179_632488B1209E",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "visible",
 "width": "100%",
 "children": [
  "this.ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container photo"
 },
 "layout": "absolute"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "visible",
 "width": "100%",
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container photo"
 },
 "layout": "absolute"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "55%",
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "verticalAlign": "middle",
 "minWidth": 1,
 "backgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "layout": "absolute"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "backgroundOpacity": 1,
 "paddingLeft": 60,
 "scrollBarVisible": "rollOver",
 "paddingRight": 60,
 "overflow": "visible",
 "width": "45%",
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "minWidth": 460,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingBottom": 20,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "layout": "vertical"
},
{
 "maxHeight": 60,
 "horizontalAlign": "center",
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "25%",
 "class": "IconButton",
 "borderRadius": 0,
 "minHeight": 50,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "propagateClick": false,
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "transparencyActive": false,
 "paddingTop": 0,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "shadow": false,
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "data": {
  "name": "X"
 },
 "paddingBottom": 0,
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 1000,
 "horizontalAlign": "center",
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "left": "0%",
 "width": "100%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "top": "0%",
 "minWidth": 1,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image"
 },
 "maxWidth": 2000
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": 60,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "layout": "horizontal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 520,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 30,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "layout": "vertical"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": 370,
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": 40,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "layout": "horizontal"
},
{
 "progressBarBorderSize": 6,
 "id": "ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
 "left": 0,
 "paddingLeft": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 0,
 "right": 0,
 "class": "ViewerArea",
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "minHeight": 1,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Georgia",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "progressLeft": 0,
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "minWidth": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#FFFFFF",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipBackgroundColor": "#FF9933",
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "shadow": false,
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 10,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingRight": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowVerticalLength": 0,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "bottom": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontSize": "13px",
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 7,
 "paddingTop": 0,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Viewer info 1"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "top": "0%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "height": "100%",
 "gap": 10,
 "paddingTop": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container arrows"
 },
 "paddingBottom": 0,
 "layout": "horizontal"
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": 60,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "layout": "horizontal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "id": "Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
  "this.Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 520,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 30,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "layout": "vertical"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_23F047B8_0C0A_629D_415D_F05EF8619564",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": 370,
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": 40,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "layout": "horizontal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "left": "0%",
 "paddingLeft": 80,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "width": "77.115%",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "minHeight": 100,
 "propagateClick": false,
 "top": "0%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:4.3vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.3vh;font-family:'Bebas Neue Bold';\">Panorama list:</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText54192"
 },
 "paddingBottom": 0
},
{
 "maxHeight": 60,
 "horizontalAlign": "right",
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 20,
 "width": "100%",
 "class": "IconButton",
 "borderRadius": 0,
 "minHeight": 50,
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "propagateClick": false,
 "top": 20,
 "minWidth": 50,
 "mode": "push",
 "height": "36.14%",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "transparencyActive": false,
 "paddingBottom": 0,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "shadow": false,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand",
 "maxWidth": 60
},
{
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "right": "0%",
 "class": "WebFrame",
 "borderRadius": 0,
 "insetBorder": false,
 "minHeight": 1,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "scrollEnabled": true,
 "shadow": false,
 "data": {
  "name": "WebFrame48191"
 },
 "paddingBottom": 0
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": 60,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "layout": "horizontal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "id": "Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
  "this.Button_221B5648_0C06_E5FD_4198_40C786948FF0"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 520,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 30,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "layout": "vertical"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": 370,
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": 40,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "layout": "horizontal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
 "left": "0%",
 "paddingLeft": 80,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "width": "77.115%",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "minHeight": 100,
 "propagateClick": false,
 "top": "0%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:4.3vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.3vh;font-family:'Bebas Neue Bold';\">FLOORPLAN:</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText54192"
 },
 "paddingBottom": 0
},
{
 "maxHeight": 60,
 "horizontalAlign": "right",
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 20,
 "width": "100%",
 "class": "IconButton",
 "borderRadius": 0,
 "minHeight": 50,
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "propagateClick": false,
 "top": 20,
 "minWidth": 50,
 "mode": "push",
 "height": "36.14%",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "transparencyActive": false,
 "paddingBottom": 0,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "shadow": false,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand",
 "maxWidth": 60
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
 "left": "0%",
 "paddingLeft": 80,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "width": "77.115%",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "minHeight": 100,
 "propagateClick": false,
 "top": "0%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:4.3vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.3vh;font-family:'Bebas Neue Bold';\">PHOTOALBUM:</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText54192"
 },
 "paddingBottom": 0
},
{
 "maxHeight": 60,
 "horizontalAlign": "right",
 "id": "IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 20,
 "width": "100%",
 "class": "IconButton",
 "borderRadius": 0,
 "minHeight": 50,
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_rollover.jpg",
 "propagateClick": false,
 "top": 20,
 "minWidth": 50,
 "mode": "push",
 "height": "36.14%",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_pressed.jpg",
 "transparencyActive": false,
 "paddingBottom": 0,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, false, 0, null, null, false)",
 "shadow": false,
 "iconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3.jpg",
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand",
 "maxWidth": 60
},
{
 "progressBarBorderSize": 6,
 "id": "ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
 "left": "0%",
 "paddingLeft": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 0,
 "width": "100%",
 "class": "ViewerArea",
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "minHeight": 1,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Georgia",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "minWidth": 1,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#FFFFFF",
 "transitionDuration": 500,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "height": "100%",
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipBackgroundColor": "#FF9933",
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "shadow": false,
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 10,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingRight": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowVerticalLength": 0,
 "top": "0%",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 7,
 "paddingBottom": 0,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "13px",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Viewer photoalbum + text 1"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "progressBarBorderSize": 6,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "paddingLeft": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 0,
 "width": "100%",
 "class": "ViewerArea",
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "minHeight": 1,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Georgia",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "minWidth": 1,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#FFFFFF",
 "transitionDuration": 500,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "height": "100%",
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipBackgroundColor": "#FF9933",
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "shadow": false,
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 10,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingRight": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowVerticalLength": 0,
 "top": "0%",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 7,
 "paddingBottom": 0,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "13px",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "maxHeight": 60,
 "horizontalAlign": "right",
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 20,
 "width": "10%",
 "class": "IconButton",
 "borderRadius": 0,
 "minHeight": 50,
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "propagateClick": false,
 "top": 20,
 "minWidth": 50,
 "mode": "push",
 "height": "10%",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "transparencyActive": false,
 "paddingBottom": 0,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "shadow": false,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 1000,
 "horizontalAlign": "center",
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "left": "0%",
 "width": "100%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "minHeight": 1,
 "verticalAlign": "bottom",
 "propagateClick": false,
 "top": "0%",
 "minWidth": 1,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image"
 },
 "maxWidth": 2000
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": 60,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "layout": "horizontal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 520,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 30,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "layout": "vertical"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": 370,
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": 40,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "layout": "horizontal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "scrollBarVisible": "rollOver",
 "paddingRight": 10,
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.73vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.73vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.42vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.42vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.65vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.65vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.65vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.65vh;font-family:'Bebas Neue Bold';\"><B>lorem ipsum:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.64vh;font-family:'Bebas Neue Bold';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText"
 },
 "paddingBottom": 20
},
{
 "textDecoration": "none",
 "fontFamily": "Bebas Neue Bold",
 "horizontalAlign": "center",
 "height": "9%",
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "backgroundOpacity": 0.7,
 "paddingLeft": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "minHeight": 1,
 "width": "46%",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#04A3E1"
 ],
 "fontSize": "3vh",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "label": "lorem ipsum",
 "fontStyle": "normal",
 "paddingBottom": 0,
 "borderSize": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "data": {
  "name": "Button"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "layout": "horizontal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "80%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "propagateClick": false,
 "minWidth": 1,
 "height": "30%",
 "gap": 10,
 "paddingTop": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container separator"
 },
 "paddingBottom": 0,
 "layout": "absolute"
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "scrollBarVisible": "rollOver",
 "paddingRight": 10,
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.73vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.73vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.42vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.42vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.65vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.65vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText"
 },
 "paddingBottom": 20
},
{
 "textDecoration": "none",
 "fontFamily": "Bebas Neue Bold",
 "horizontalAlign": "center",
 "height": "9%",
 "id": "Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145",
 "backgroundOpacity": 0.7,
 "paddingLeft": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "minHeight": 1,
 "width": "46%",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#04A3E1"
 ],
 "fontSize": "3vh",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "label": "lorem ipsum",
 "fontStyle": "normal",
 "paddingBottom": 0,
 "borderSize": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "data": {
  "name": "Button"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "layout": "horizontal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "scrollBarVisible": "rollOver",
 "paddingRight": 10,
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.73vh;font-family:'Bebas Neue Bold';\">location</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.33vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.42vh;font-family:'Bebas Neue Bold';\">address line 1</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.42vh;font-family:'Bebas Neue Bold';\">address line 2</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.3vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac.</SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText"
 },
 "paddingBottom": 20
},
{
 "textDecoration": "none",
 "fontFamily": "Bebas Neue Bold",
 "horizontalAlign": "center",
 "id": "Button_221B5648_0C06_E5FD_4198_40C786948FF0",
 "backgroundOpacity": 0.7,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 207,
 "class": "Button",
 "borderRadius": 0,
 "iconHeight": 32,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#04A3E1"
 ],
 "mode": "push",
 "minWidth": 1,
 "fontSize": 34,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "label": "lorem ipsum",
 "fontStyle": "normal",
 "paddingBottom": 0,
 "borderSize": 0,
 "height": 59,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "iconWidth": 32,
 "visible": false,
 "data": {
  "name": "Button"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "layout": "horizontal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "minWidth": 1,
 "height": "45%",
 "paddingTop": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.52vh;font-family:'Bebas Neue Bold';\">real estate agent</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText18899"
 },
 "paddingBottom": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "80%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- content"
 },
 "layout": "horizontal"
},
{
 "maxHeight": 200,
 "horizontalAlign": "left",
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "25%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "minHeight": 1,
 "verticalAlign": "top",
 "propagateClick": false,
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "agent photo"
 },
 "paddingBottom": 0,
 "maxWidth": 200
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "scrollBarVisible": "rollOver",
 "paddingRight": 10,
 "width": "75%",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.42vh;font-family:'Bebas Neue Bold';\">john doe</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.44vh;font-family:'Bebas Neue Bold';\">licensed real estate salesperson</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.33vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:0.33vh;font-family:'Bebas Neue Bold';\">Tlf.: +11 111 111 111</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:0.33vh;font-family:'Bebas Neue Bold';\">jhondoe@realestate.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:0.33vh;font-family:'Bebas Neue Bold';\">www.loremipsum.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText19460"
 },
 "paddingBottom": 10
}],
 "minWidth": 20,
 "vrPolyfillScale": 0.5,
 "mobileMipmappingEnabled": false,
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player468"
 },
 "scripts": {
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "existsKey": function(key){  return key in window; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getKey": function(key){  return window[key]; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "unregisterKey": function(key){  delete window[key]; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "registerKey": function(key, value){  window[key] = value; }
 },
 "downloadEnabled": false,
 "defaultVRPointer": "laser",
 "gap": 10,
 "layout": "absolute"
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
