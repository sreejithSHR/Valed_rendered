(function(){
    var script = {
 "start": "this.playAudioList([this.audio_7C78285D_3BCA_792F_41BD_4CC248FD0BB1]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); this.playList_5B55AE2D_4A0A_C7DA_41D0_A24BFE04F718.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "height": "100%",
 "id": "rootPlayer",
 "downloadEnabled": false,
 "overflow": "visible",
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
  "this.Image_222C05C8_394B_CB14_418C_C97785513D96",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "width": "100%",
 "paddingLeft": 0,
 "layout": "absolute",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "desktopMipmappingEnabled": false,
 "definitions": [{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_489B342A_4361_EA51_418B_B588D37897E0_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4D6E6F7D_4361_36B0_41CD_C332C4967DA6_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "items": [
  {
   "media": "this.panorama_489CCF56_4361_56F1_41C8_24FFC3E25BCF",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_489CCF56_4361_56F1_41C8_24FFC3E25BCF_camera"
  },
  {
   "media": "this.panorama_489CB79D_4361_5673_41CD_B9E678C66801",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_489CB79D_4361_5673_41CD_B9E678C66801_camera"
  },
  {
   "media": "this.panorama_489BD04A_4361_2AD1_41B7_B4D4072B24BA",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_489BD04A_4361_2AD1_41B7_B4D4072B24BA_camera"
  },
  {
   "media": "this.panorama_489D192A_4361_3A51_41CE_383C6D3D0E87",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_489D192A_4361_3A51_41CE_383C6D3D0E87_camera"
  },
  {
   "media": "this.panorama_489EC19E_4361_2A71_41D0_70B3186B5DD4",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_489EC19E_4361_2A71_41D0_70B3186B5DD4_camera"
  },
  {
   "media": "this.panorama_4D6E6F7D_4361_36B0_41CD_C332C4967DA6",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4D6E6F7D_4361_36B0_41CD_C332C4967DA6_camera"
  },
  {
   "media": "this.panorama_489B7B81_4361_FE53_41C2_C4DD383A3F5D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_489B7B81_4361_FE53_41C2_C4DD383A3F5D_camera"
  },
  {
   "media": "this.panorama_489B342A_4361_EA51_418B_B588D37897E0",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_489B342A_4361_EA51_418B_B588D37897E0_camera"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -2.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5B8D8E58_4A0A_C479_41C6_38D1140F6D08",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 140.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5BA6EE3C_4A0A_C43A_41B5_AB6A9A2D8EA7",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489D192A_4361_3A51_41CE_383C6D3D0E87_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_489D192A_4361_3A51_41CE_383C6D3D0E87_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_489D192A_4361_3A51_41CE_383C6D3D0E87_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489D192A_4361_3A51_41CE_383C6D3D0E87_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_489D192A_4361_3A51_41CE_383C6D3D0E87_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_489D192A_4361_3A51_41CE_383C6D3D0E87_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489D192A_4361_3A51_41CE_383C6D3D0E87_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_489D192A_4361_3A51_41CE_383C6D3D0E87_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_489D192A_4361_3A51_41CE_383C6D3D0E87_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489D192A_4361_3A51_41CE_383C6D3D0E87_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_489D192A_4361_3A51_41CE_383C6D3D0E87_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_489D192A_4361_3A51_41CE_383C6D3D0E87_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489D192A_4361_3A51_41CE_383C6D3D0E87_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_489D192A_4361_3A51_41CE_383C6D3D0E87_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_489D192A_4361_3A51_41CE_383C6D3D0E87_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_489D192A_4361_3A51_41CE_383C6D3D0E87_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489D192A_4361_3A51_41CE_383C6D3D0E87_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_489D192A_4361_3A51_41CE_383C6D3D0E87_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_489D192A_4361_3A51_41CE_383C6D3D0E87_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Panorama4",
 "hfovMin": "135%",
 "id": "panorama_489D192A_4361_3A51_41CE_383C6D3D0E87",
 "overlays": [
  "this.overlay_512A0B16_4361_DE70_41B2_432FE29F19EC",
  "this.overlay_5133DDF2_4361_35B1_41C6_72B29AFD6F90",
  "this.popup_5B385F68_4361_76DF_41CB_7ED79F306E67"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -175.65,
   "class": "AdjacentPanorama",
   "backwardYaw": -86.26,
   "panorama": "this.panorama_489BD04A_4361_2AD1_41B7_B4D4072B24BA",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_5B50BE30_4A0A_C7CA_4183_B259FA828DA5",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_489D192A_4361_3A51_41CE_383C6D3D0E87_t.jpg",
 "hfovMax": 130
},
{
 "levels": [
  {
   "url": "media/popup_5820D0FB_43A1_2BB1_41C2_795760F4DC83_0_0.jpg",
   "width": 3840,
   "class": "ImageResourceLevel",
   "height": 2160
  },
  {
   "url": "media/popup_5820D0FB_43A1_2BB1_41C2_795760F4DC83_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_5820D0FB_43A1_2BB1_41C2_795760F4DC83_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_5820D0FB_43A1_2BB1_41C2_795760F4DC83_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_5E67CA2A_4A0A_4FDE_41D1_6AEF079D70D6",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": 57.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5BFB0E7A_4A0A_C439_41D2_7AF343C2E81C",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 71.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5BEF7E6C_4A0A_C459_41CD_907F97975F70",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "levels": [
  {
   "url": "media/popup_5B385F68_4361_76DF_41CB_7ED79F306E67_0_0.jpg",
   "width": 3840,
   "class": "ImageResourceLevel",
   "height": 2160
  },
  {
   "url": "media/popup_5B385F68_4361_76DF_41CB_7ED79F306E67_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_5B385F68_4361_76DF_41CB_7ED79F306E67_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_5B385F68_4361_76DF_41CB_7ED79F306E67_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_5E66BA29_4A0A_4FDA_41C3_CBECA601DA47",
 "class": "ImageResource"
},
{
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": "#000000",
 "class": "Menu",
 "children": [
  {
   "label": "Enterance",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  },
  {
   "label": "Saksham Lab",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  },
  {
   "label": "Panorama3",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  },
  {
   "label": "Panorama4",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  },
  {
   "label": "Panorama5",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  },
  {
   "label": "Panorama7_001",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  },
  {
   "label": "Panorama8",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  },
  {
   "label": "Panorama9",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "label": "Media",
 "id": "Menu_5B50BE30_4A0A_C7CA_4183_B259FA828DA5",
 "opacity": 0.4,
 "fontFamily": "Arial",
 "selectedFontColor": "#FFFFFF",
 "rollOverOpacity": 0.8,
 "selectedBackgroundColor": "#202020",
 "backgroundColor": "#404040",
 "rollOverFontColor": "#FFFFFF"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -3.39,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_5820D0FB_43A1_2BB1_41C2_795760F4DC83",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_5820D0FB_43A1_2BB1_41C2_795760F4DC83_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "pitch": -7.98,
 "hideEasing": "cubic_out",
 "hfov": 7.46,
 "class": "PopupPanoramaOverlay"
},
{
 "initialPosition": {
  "yaw": -102.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5BBCCE4A_4A0A_C45E_41D1_7053B894F152",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -142.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5BC52E88_4A0A_C4D9_41CB_3B66BFA1E792",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 141.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5B84BE5F_4A0A_C477_4191_F1F558FB4A33",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 4.35,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5B99EE66_4A0A_C449_41D2_16B904FEE30C",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 72.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5BB46E50_4A0A_C44A_41CA_9160C0D57B3D",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 93.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5BA12E43_4A0A_C44E_41B8_F558D739AF0A",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "viewerArea": "this.MapViewer",
 "id": "MapViewerMapPlayer",
 "class": "MapPlayer",
 "movementMode": "constrained"
},
{
 "initialPosition": {
  "yaw": -87.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5BF0CE81_4A0A_C4CB_41D1_A3BC63D61B91",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 136.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5BE58E73_4A0A_C44F_41C7_EDACFB33C3D6",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489CB79D_4361_5673_41CD_B9E678C66801_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_489CB79D_4361_5673_41CD_B9E678C66801_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_489CB79D_4361_5673_41CD_B9E678C66801_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489CB79D_4361_5673_41CD_B9E678C66801_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_489CB79D_4361_5673_41CD_B9E678C66801_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_489CB79D_4361_5673_41CD_B9E678C66801_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489CB79D_4361_5673_41CD_B9E678C66801_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_489CB79D_4361_5673_41CD_B9E678C66801_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_489CB79D_4361_5673_41CD_B9E678C66801_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489CB79D_4361_5673_41CD_B9E678C66801_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_489CB79D_4361_5673_41CD_B9E678C66801_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_489CB79D_4361_5673_41CD_B9E678C66801_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489CB79D_4361_5673_41CD_B9E678C66801_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_489CB79D_4361_5673_41CD_B9E678C66801_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_489CB79D_4361_5673_41CD_B9E678C66801_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_489CB79D_4361_5673_41CD_B9E678C66801_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489CB79D_4361_5673_41CD_B9E678C66801_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_489CB79D_4361_5673_41CD_B9E678C66801_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_489CB79D_4361_5673_41CD_B9E678C66801_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Saksham Lab",
 "hfovMin": "135%",
 "id": "panorama_489CB79D_4361_5673_41CD_B9E678C66801",
 "overlays": [
  "this.overlay_52FC2325_4363_2E53_41AF_8A16BC5AB088",
  "this.overlay_52F9973B_4361_36B0_41A5_5BA77F46EDC9",
  "this.overlay_528D9BA7_4361_7E50_41CF_1198AC252643",
  "this.overlay_5BBBB3C2_4363_2DD3_41CE_086D8154B0E5",
  "this.overlay_5AFA8B77_43A3_5EB0_41C1_CF73D2BEF1EF"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_489BD04A_4361_2AD1_41B7_B4D4072B24BA"
  },
  {
   "yaw": 177.61,
   "class": "AdjacentPanorama",
   "backwardYaw": -39.94,
   "panorama": "this.panorama_489CCF56_4361_56F1_41C8_24FFC3E25BCF",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_5B50BE30_4A0A_C7CA_4183_B259FA828DA5",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_489CB79D_4361_5673_41CD_B9E678C66801_t.jpg",
 "hfovMax": 130
},
{
 "autoplay": true,
 "audio": {
  "oggUrl": "media/audio_7C78285D_3BCA_792F_41BD_4CC248FD0BB1.ogg",
  "mp3Url": "media/audio_7C78285D_3BCA_792F_41BD_4CC248FD0BB1.mp3",
  "class": "AudioResource"
 },
 "id": "audio_7C78285D_3BCA_792F_41BD_4CC248FD0BB1",
 "class": "MediaAudio",
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
 "automaticZoomSpeed": 10,
 "id": "panorama_489BD04A_4361_2AD1_41B7_B4D4072B24BA_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "buttonCardboardView": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_446BC7D5_4A0E_C44B_41C1_C69C7229E7AD",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "touchControlMode": "drag_rotation",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer",
 "mouseControlMode": "drag_acceleration",
 "displayPlaybackBar": true
},
{
 "levels": [
  {
   "url": "media/popup_5A9AAE70_435F_D6CF_41CD_F3EF59EF4C73_0_0.jpg",
   "width": 3840,
   "class": "ImageResourceLevel",
   "height": 2160
  },
  {
   "url": "media/popup_5A9AAE70_435F_D6CF_41CD_F3EF59EF4C73_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_5A9AAE70_435F_D6CF_41CD_F3EF59EF4C73_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_5A9AAE70_435F_D6CF_41CD_F3EF59EF4C73_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_5E6D8A26_4A0A_4FD6_41CE_767DF37EE94A",
 "class": "ImageResource"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -33.04,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_5B385F68_4361_76DF_41CB_7ED79F306E67",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_5B385F68_4361_76DF_41CB_7ED79F306E67_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "pitch": -2.7,
 "hideEasing": "cubic_out",
 "hfov": 7.53,
 "class": "PopupPanoramaOverlay"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_489B7B81_4361_FE53_41C2_C4DD383A3F5D_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489B342A_4361_EA51_418B_B588D37897E0_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_489B342A_4361_EA51_418B_B588D37897E0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_489B342A_4361_EA51_418B_B588D37897E0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489B342A_4361_EA51_418B_B588D37897E0_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_489B342A_4361_EA51_418B_B588D37897E0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_489B342A_4361_EA51_418B_B588D37897E0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489B342A_4361_EA51_418B_B588D37897E0_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_489B342A_4361_EA51_418B_B588D37897E0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_489B342A_4361_EA51_418B_B588D37897E0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489B342A_4361_EA51_418B_B588D37897E0_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_489B342A_4361_EA51_418B_B588D37897E0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_489B342A_4361_EA51_418B_B588D37897E0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489B342A_4361_EA51_418B_B588D37897E0_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_489B342A_4361_EA51_418B_B588D37897E0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_489B342A_4361_EA51_418B_B588D37897E0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_489B342A_4361_EA51_418B_B588D37897E0_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489B342A_4361_EA51_418B_B588D37897E0_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_489B342A_4361_EA51_418B_B588D37897E0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_489B342A_4361_EA51_418B_B588D37897E0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Panorama9",
 "hfovMin": "135%",
 "id": "panorama_489B342A_4361_EA51_418B_B588D37897E0",
 "overlays": [
  "this.overlay_5659A183_4361_2A50_41B2_C556B17016EC",
  "this.overlay_57880FB3_4361_55B0_41CD_A48C0A54959D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_489B7B81_4361_FE53_41C2_C4DD383A3F5D"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_5B50BE30_4A0A_C7CA_4183_B259FA828DA5",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_489B342A_4361_EA51_418B_B588D37897E0_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489B7B81_4361_FE53_41C2_C4DD383A3F5D_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_489B7B81_4361_FE53_41C2_C4DD383A3F5D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_489B7B81_4361_FE53_41C2_C4DD383A3F5D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489B7B81_4361_FE53_41C2_C4DD383A3F5D_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_489B7B81_4361_FE53_41C2_C4DD383A3F5D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_489B7B81_4361_FE53_41C2_C4DD383A3F5D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489B7B81_4361_FE53_41C2_C4DD383A3F5D_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_489B7B81_4361_FE53_41C2_C4DD383A3F5D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_489B7B81_4361_FE53_41C2_C4DD383A3F5D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489B7B81_4361_FE53_41C2_C4DD383A3F5D_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_489B7B81_4361_FE53_41C2_C4DD383A3F5D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_489B7B81_4361_FE53_41C2_C4DD383A3F5D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489B7B81_4361_FE53_41C2_C4DD383A3F5D_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_489B7B81_4361_FE53_41C2_C4DD383A3F5D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_489B7B81_4361_FE53_41C2_C4DD383A3F5D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_489B7B81_4361_FE53_41C2_C4DD383A3F5D_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489B7B81_4361_FE53_41C2_C4DD383A3F5D_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_489B7B81_4361_FE53_41C2_C4DD383A3F5D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_489B7B81_4361_FE53_41C2_C4DD383A3F5D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Panorama8",
 "hfovMin": "135%",
 "id": "panorama_489B7B81_4361_FE53_41C2_C4DD383A3F5D",
 "overlays": [
  "this.overlay_50D51EE6_4361_D7D0_41C2_0578196840D2",
  "this.overlay_509B04B5_4361_EBB0_4197_3772720BCFA2",
  "this.overlay_573E9E5D_4367_36F1_41C1_8584A6DBD05A",
  "this.overlay_57E79A31_4367_3EB0_41CA_8EC4F020F7B7",
  "this.overlay_5B43A63B_43A1_56B1_41C3_7542E0C6B62D",
  "this.overlay_5A678CF3_43A1_3BB1_41BC_11AFCFA8A9DE"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_489B342A_4361_EA51_418B_B588D37897E0"
  },
  {
   "yaw": -107.68,
   "class": "AdjacentPanorama",
   "backwardYaw": 92.04,
   "panorama": "this.panorama_4D6E6F7D_4361_36B0_41CD_C332C4967DA6",
   "distance": 1
  },
  {
   "yaw": -38.16,
   "class": "AdjacentPanorama",
   "backwardYaw": 37.23,
   "panorama": "this.panorama_489CCF56_4361_56F1_41C8_24FFC3E25BCF",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_5B50BE30_4A0A_C7CA_4183_B259FA828DA5",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_489B7B81_4361_FE53_41C2_C4DD383A3F5D_t.jpg",
 "hfovMax": 130
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -3.89,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_5A9AAE70_435F_D6CF_41CD_F3EF59EF4C73",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_5A9AAE70_435F_D6CF_41CD_F3EF59EF4C73_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "pitch": -9.48,
 "hideEasing": "cubic_out",
 "hfov": 7.43,
 "class": "PopupPanoramaOverlay"
},
{
 "displayOriginPosition": {
  "yaw": 0,
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "stereographicFactor": 0.18,
  "pitch": -90
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_489CCF56_4361_56F1_41C8_24FFC3E25BCF_camera",
 "class": "PanoramaCamera",
 "displayMovements": [
  {
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear"
  },
  {
   "duration": 3000,
   "targetStereographicFactor": 0,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "cubic_in_out",
   "targetPitch": 0
  }
 ],
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489EC19E_4361_2A71_41D0_70B3186B5DD4_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_489EC19E_4361_2A71_41D0_70B3186B5DD4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_489EC19E_4361_2A71_41D0_70B3186B5DD4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489EC19E_4361_2A71_41D0_70B3186B5DD4_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_489EC19E_4361_2A71_41D0_70B3186B5DD4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_489EC19E_4361_2A71_41D0_70B3186B5DD4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489EC19E_4361_2A71_41D0_70B3186B5DD4_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_489EC19E_4361_2A71_41D0_70B3186B5DD4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_489EC19E_4361_2A71_41D0_70B3186B5DD4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489EC19E_4361_2A71_41D0_70B3186B5DD4_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_489EC19E_4361_2A71_41D0_70B3186B5DD4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_489EC19E_4361_2A71_41D0_70B3186B5DD4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_489EC19E_4361_2A71_41D0_70B3186B5DD4_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489EC19E_4361_2A71_41D0_70B3186B5DD4_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_489EC19E_4361_2A71_41D0_70B3186B5DD4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_489EC19E_4361_2A71_41D0_70B3186B5DD4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489EC19E_4361_2A71_41D0_70B3186B5DD4_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_489EC19E_4361_2A71_41D0_70B3186B5DD4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_489EC19E_4361_2A71_41D0_70B3186B5DD4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Panorama5",
 "hfovMin": "135%",
 "id": "panorama_489EC19E_4361_2A71_41D0_70B3186B5DD4",
 "overlays": [
  "this.overlay_51AF26E3_4363_D7D0_41C1_DCFE64504E86",
  "this.overlay_51D23EB7_4361_37B0_41B3_37F2DD658E52",
  "this.overlay_50D8F8B1_4361_5BB0_41B8_44E531D18FD0",
  "this.overlay_5A14F317_435E_EE71_41C2_AD598EDA4308",
  "this.popup_5820D0FB_43A1_2BB1_41C2_795760F4DC83"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -108.51,
   "class": "AdjacentPanorama",
   "backwardYaw": -43.3,
   "panorama": "this.panorama_489BD04A_4361_2AD1_41B7_B4D4072B24BA",
   "distance": 1
  },
  {
   "yaw": 77.04,
   "class": "AdjacentPanorama",
   "backwardYaw": -122.25,
   "panorama": "this.panorama_4D6E6F7D_4361_36B0_41CD_C332C4967DA6",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_5B50BE30_4A0A_C7CA_4183_B259FA828DA5",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_489EC19E_4361_2A71_41D0_70B3186B5DD4_t.jpg",
 "hfovMax": 130
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_18C25D0C_395A_DB2C_41B6_D5FF13191C1D",
   "class": "MapPlayListItem",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_5B545E2D_4A0A_C7DA_4172_E77C16CA1E37",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489CCF56_4361_56F1_41C8_24FFC3E25BCF_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_489CCF56_4361_56F1_41C8_24FFC3E25BCF_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_489CCF56_4361_56F1_41C8_24FFC3E25BCF_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489CCF56_4361_56F1_41C8_24FFC3E25BCF_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_489CCF56_4361_56F1_41C8_24FFC3E25BCF_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_489CCF56_4361_56F1_41C8_24FFC3E25BCF_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489CCF56_4361_56F1_41C8_24FFC3E25BCF_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_489CCF56_4361_56F1_41C8_24FFC3E25BCF_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_489CCF56_4361_56F1_41C8_24FFC3E25BCF_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489CCF56_4361_56F1_41C8_24FFC3E25BCF_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_489CCF56_4361_56F1_41C8_24FFC3E25BCF_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_489CCF56_4361_56F1_41C8_24FFC3E25BCF_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489CCF56_4361_56F1_41C8_24FFC3E25BCF_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_489CCF56_4361_56F1_41C8_24FFC3E25BCF_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_489CCF56_4361_56F1_41C8_24FFC3E25BCF_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_489CCF56_4361_56F1_41C8_24FFC3E25BCF_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489CCF56_4361_56F1_41C8_24FFC3E25BCF_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_489CCF56_4361_56F1_41C8_24FFC3E25BCF_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_489CCF56_4361_56F1_41C8_24FFC3E25BCF_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Enterance",
 "hfovMin": "135%",
 "id": "panorama_489CCF56_4361_56F1_41C8_24FFC3E25BCF",
 "overlays": [
  "this.overlay_4C0B9C4E_4363_3AD1_41CA_175B62D1552B",
  "this.overlay_4CDEB5F3_4361_75B0_41C5_F599DA3CD646",
  "this.overlay_527D8EFB_4361_D7B0_41CF_D4BB53308FE3",
  "this.overlay_537ADA7E_4367_DEB1_41D0_B7FD39362495",
  "this.overlay_5280CCE0_4361_3BD0_419E_0D42A716C6E7",
  "this.overlay_5335663F_4361_D6AF_41C3_F187D2EC4647",
  "this.overlay_563C1432_436F_EAB0_41A3_DD580464FDE5"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -39.94,
   "class": "AdjacentPanorama",
   "backwardYaw": 177.61,
   "panorama": "this.panorama_489CB79D_4361_5673_41CD_B9E678C66801",
   "distance": 1
  },
  {
   "yaw": 37.23,
   "class": "AdjacentPanorama",
   "backwardYaw": -38.16,
   "panorama": "this.panorama_489B7B81_4361_FE53_41C2_C4DD383A3F5D",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_5B50BE30_4A0A_C7CA_4183_B259FA828DA5",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_489CCF56_4361_56F1_41C8_24FFC3E25BCF_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_489D192A_4361_3A51_41CE_383C6D3D0E87_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489BD04A_4361_2AD1_41B7_B4D4072B24BA_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_489BD04A_4361_2AD1_41B7_B4D4072B24BA_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_489BD04A_4361_2AD1_41B7_B4D4072B24BA_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489BD04A_4361_2AD1_41B7_B4D4072B24BA_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_489BD04A_4361_2AD1_41B7_B4D4072B24BA_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_489BD04A_4361_2AD1_41B7_B4D4072B24BA_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489BD04A_4361_2AD1_41B7_B4D4072B24BA_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_489BD04A_4361_2AD1_41B7_B4D4072B24BA_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_489BD04A_4361_2AD1_41B7_B4D4072B24BA_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489BD04A_4361_2AD1_41B7_B4D4072B24BA_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_489BD04A_4361_2AD1_41B7_B4D4072B24BA_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_489BD04A_4361_2AD1_41B7_B4D4072B24BA_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489BD04A_4361_2AD1_41B7_B4D4072B24BA_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_489BD04A_4361_2AD1_41B7_B4D4072B24BA_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_489BD04A_4361_2AD1_41B7_B4D4072B24BA_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_489BD04A_4361_2AD1_41B7_B4D4072B24BA_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489BD04A_4361_2AD1_41B7_B4D4072B24BA_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_489BD04A_4361_2AD1_41B7_B4D4072B24BA_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_489BD04A_4361_2AD1_41B7_B4D4072B24BA_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Panorama3",
 "hfovMin": "135%",
 "id": "panorama_489BD04A_4361_2AD1_41B7_B4D4072B24BA",
 "overlays": [
  "this.overlay_527E8D47_4362_DAD0_41D0_51FC1D2C6954",
  "this.overlay_53B22056_4361_6AF0_41AB_6E947E41B8C8",
  "this.overlay_5252E793_4361_7677_41CE_DF1F692120CB",
  "this.overlay_53B00CA4_4361_3A50_41D0_86C7C4A8D252",
  "this.overlay_52998059_4363_EAF3_41C1_6855774BFBF5",
  "this.overlay_51A5FF46_4361_36D0_41C3_A25611C9C0E1",
  "this.overlay_5505552C_4367_2A57_41CF_7D7A0CE4A7C3",
  "this.overlay_56B63E8E_4361_3650_41B6_D33FD5ACCDAB",
  "this.overlay_545FB13B_4361_2AB1_41A7_DF1A10EA8CBB",
  "this.overlay_5687C0B6_4361_2BB0_41A9_6ED82199EAFF",
  "this.popup_5A9AAE70_435F_D6CF_41CD_F3EF59EF4C73",
  "this.overlay_4B77988D_45C9_64DC_41B8_605F871FC4DB"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_489B342A_4361_EA51_418B_B588D37897E0"
  },
  {
   "yaw": -86.26,
   "class": "AdjacentPanorama",
   "backwardYaw": -175.65,
   "panorama": "this.panorama_489D192A_4361_3A51_41CE_383C6D3D0E87",
   "distance": 1
  },
  {
   "yaw": -43.3,
   "class": "AdjacentPanorama",
   "backwardYaw": -108.51,
   "panorama": "this.panorama_489EC19E_4361_2A71_41D0_70B3186B5DD4",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_489B7B81_4361_FE53_41C2_C4DD383A3F5D"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_5B50BE30_4A0A_C7CA_4183_B259FA828DA5",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_489BD04A_4361_2AD1_41B7_B4D4072B24BA_t.jpg",
 "hfovMax": 130
},
{
 "items": [
  {
   "media": "this.panorama_489CCF56_4361_56F1_41C8_24FFC3E25BCF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_489CCF56_4361_56F1_41C8_24FFC3E25BCF_camera"
  },
  {
   "media": "this.panorama_489CB79D_4361_5673_41CD_B9E678C66801",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_489CB79D_4361_5673_41CD_B9E678C66801_camera"
  },
  {
   "media": "this.panorama_489BD04A_4361_2AD1_41B7_B4D4072B24BA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_489BD04A_4361_2AD1_41B7_B4D4072B24BA_camera"
  },
  {
   "media": "this.panorama_489D192A_4361_3A51_41CE_383C6D3D0E87",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_489D192A_4361_3A51_41CE_383C6D3D0E87_camera"
  },
  {
   "media": "this.panorama_489EC19E_4361_2A71_41D0_70B3186B5DD4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_489EC19E_4361_2A71_41D0_70B3186B5DD4_camera"
  },
  {
   "media": "this.panorama_4D6E6F7D_4361_36B0_41CD_C332C4967DA6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4D6E6F7D_4361_36B0_41CD_C332C4967DA6_camera"
  },
  {
   "media": "this.panorama_489B7B81_4361_FE53_41C2_C4DD383A3F5D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_489B7B81_4361_FE53_41C2_C4DD383A3F5D_camera"
  },
  {
   "media": "this.panorama_489B342A_4361_EA51_418B_B588D37897E0",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_489B342A_4361_EA51_418B_B588D37897E0_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4D6E6F7D_4361_36B0_41CD_C332C4967DA6_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_4D6E6F7D_4361_36B0_41CD_C332C4967DA6_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4D6E6F7D_4361_36B0_41CD_C332C4967DA6_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4D6E6F7D_4361_36B0_41CD_C332C4967DA6_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4D6E6F7D_4361_36B0_41CD_C332C4967DA6_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_4D6E6F7D_4361_36B0_41CD_C332C4967DA6_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4D6E6F7D_4361_36B0_41CD_C332C4967DA6_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4D6E6F7D_4361_36B0_41CD_C332C4967DA6_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4D6E6F7D_4361_36B0_41CD_C332C4967DA6_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_4D6E6F7D_4361_36B0_41CD_C332C4967DA6_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4D6E6F7D_4361_36B0_41CD_C332C4967DA6_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4D6E6F7D_4361_36B0_41CD_C332C4967DA6_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4D6E6F7D_4361_36B0_41CD_C332C4967DA6_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_4D6E6F7D_4361_36B0_41CD_C332C4967DA6_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4D6E6F7D_4361_36B0_41CD_C332C4967DA6_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4D6E6F7D_4361_36B0_41CD_C332C4967DA6_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4D6E6F7D_4361_36B0_41CD_C332C4967DA6_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_4D6E6F7D_4361_36B0_41CD_C332C4967DA6_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4D6E6F7D_4361_36B0_41CD_C332C4967DA6_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4D6E6F7D_4361_36B0_41CD_C332C4967DA6_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4D6E6F7D_4361_36B0_41CD_C332C4967DA6_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4D6E6F7D_4361_36B0_41CD_C332C4967DA6_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_4D6E6F7D_4361_36B0_41CD_C332C4967DA6_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4D6E6F7D_4361_36B0_41CD_C332C4967DA6_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4D6E6F7D_4361_36B0_41CD_C332C4967DA6_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Panorama7_001",
 "hfovMin": "120%",
 "id": "panorama_4D6E6F7D_4361_36B0_41CD_C332C4967DA6",
 "overlays": [
  "this.overlay_505DB0F8_437F_EBB0_41A2_8781299E2C5F",
  "this.overlay_50110903_437F_DA50_41CD_6E4CDEB68068",
  "this.overlay_505660EC_4361_2BD0_41A4_0EBA2F2EE990",
  "this.overlay_5B460413_43A3_2A71_41C7_DA015FA04D28",
  "this.overlay_5AD36CCC_43A3_7BD7_41C7_5AB39BBB099C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -122.25,
   "class": "AdjacentPanorama",
   "backwardYaw": 77.04,
   "panorama": "this.panorama_489EC19E_4361_2A71_41D0_70B3186B5DD4",
   "distance": 1
  },
  {
   "yaw": 92.04,
   "class": "AdjacentPanorama",
   "backwardYaw": -107.68,
   "panorama": "this.panorama_489B7B81_4361_FE53_41C2_C4DD383A3F5D",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_5B50BE30_4A0A_C7CA_4183_B259FA828DA5",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4D6E6F7D_4361_36B0_41CD_C332C4967DA6_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_489EC19E_4361_2A71_41D0_70B3186B5DD4_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "id": "map_18C25D0C_395A_DB2C_41B6_D5FF13191C1D",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "width": 1600,
 "label": "WhatsApp Image 2025-10-27 at 2.28.11 PM",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_18C25D0C_395A_DB2C_41B6_D5FF13191C1D.jpeg",
    "width": 1600,
    "class": "ImageResourceLevel",
    "height": 1497
   },
   {
    "url": "media/map_18C25D0C_395A_DB2C_41B6_D5FF13191C1D_lq.jpeg",
    "width": 264,
    "tags": "preload",
    "class": "ImageResourceLevel",
    "height": 248
   }
  ]
 },
 "minimumZoomFactor": 0.5,
 "overlays": [
  "this.overlay_1948E7BC_3959_D76C_41A1_32EFB2D159B9"
 ],
 "class": "Map",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "thumbnailUrl": "media/map_18C25D0C_395A_DB2C_41B6_D5FF13191C1D_t.jpg",
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "initialZoomFactor": 1,
 "fieldOfViewOverlayRadiusScale": 0.3,
 "maximumZoomFactor": 1.2,
 "height": 1497
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_18C25D0C_395A_DB2C_41B6_D5FF13191C1D",
   "class": "MapPlayListItem",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_5B55AE2D_4A0A_C7DA_41D0_A24BFE04F718",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_489CB79D_4361_5673_41CD_B9E678C66801_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "toolTipTextShadowOpacity": 0,
 "toolTipPaddingRight": 10,
 "toolTipFontSize": "13px",
 "playbackBarBackgroundColorDirection": "vertical",
 "id": "MainViewer",
 "left": 0,
 "playbackBarRight": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowSpread": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "width": "100%",
 "toolTipBorderColor": "#767676",
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "transitionDuration": 500,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipBackgroundColor": "#FF9933",
 "toolTipPaddingBottom": 7,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "minWidth": 100,
 "borderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontWeight": "normal",
 "toolTipFontStyle": "normal",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipOpacity": 0.5,
 "class": "ViewerArea",
 "progressRight": 0,
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBottom": 55,
 "progressBarBackgroundColorDirection": "vertical",
 "toolTipBorderRadius": 3,
 "shadow": false,
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "toolTipFontColor": "#FFFFFF",
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 10,
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingTop": 7,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingRight": 0,
 "transitionMode": "blending",
 "toolTipTextShadowColor": "#000000",
 "progressBorderSize": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderRadius": 0,
 "toolTipBorderSize": 1,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "top": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipShadowOpacity": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "paddingBottom": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipShadowColor": "#333333",
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "borderRadius": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontFamily": "Georgia",
 "playbackBarHeadWidth": 6,
 "propagateClick": true
},
{
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "width": 115.05,
 "right": "0%",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "layout": "absolute",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "top": "0%",
 "height": 641,
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "--SETTINGS"
 },
 "shadow": false,
 "borderRadius": 0,
 "propagateClick": true,
 "horizontalAlign": "left"
},
{
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "Container_0DD1BF09_1744_0507_41B3_29434E440055",
 "left": 30,
 "width": 573,
 "overflow": "visible",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "layout": "absolute",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "top": 15,
 "height": 133,
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "--STICKER"
 },
 "shadow": false,
 "borderRadius": 0,
 "propagateClick": true,
 "horizontalAlign": "left"
},
{
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.22,
 "scrollBarVisible": "rollOver",
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0.04%",
 "right": "0.06%",
 "children": [
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "layout": "absolute",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "backgroundColorRatios": [],
 "top": 25,
 "minWidth": 1,
 "height": 59,
 "gap": 10,
 "borderSize": 0,
 "backgroundOpacity": 0.64,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [],
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "--MENU"
 },
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "propagateClick": true,
 "horizontalAlign": "left"
},
{
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "right": "0%",
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "layout": "absolute",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0.6,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "--INFO photo"
 },
 "shadow": false,
 "visible": false,
 "backgroundColorDirection": "vertical",
 "propagateClick": true,
 "horizontalAlign": "left"
},
{
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
 "left": "0%",
 "right": "0%",
 "children": [
  "this.Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
  "this.Container_23F097B8_0C0A_629D_4176_D87C90BA32B6"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "layout": "absolute",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0.6,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "--INFO photoalbum"
 },
 "shadow": false,
 "visible": false,
 "backgroundColorDirection": "vertical",
 "propagateClick": true,
 "horizontalAlign": "left"
},
{
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "right": "0%",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "layout": "absolute",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0.6,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "shadow": false,
 "visible": false,
 "backgroundColorDirection": "vertical",
 "propagateClick": true,
 "horizontalAlign": "left"
},
{
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "right": "0%",
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "layout": "absolute",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0.6,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "--LOCATION"
 },
 "shadow": false,
 "visible": false,
 "backgroundColorDirection": "vertical",
 "propagateClick": true,
 "horizontalAlign": "left"
},
{
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "right": "0%",
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "layout": "absolute",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0.6,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "--FLOORPLAN"
 },
 "shadow": false,
 "visible": false,
 "backgroundColorDirection": "vertical",
 "propagateClick": true,
 "horizontalAlign": "left"
},
{
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
 "left": "0%",
 "right": "0%",
 "children": [
  "this.Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "layout": "absolute",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0.6,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, true, 0, null, null, false)",
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "--PHOTOALBUM + text"
 },
 "shadow": false,
 "visible": false,
 "backgroundColorDirection": "vertical",
 "propagateClick": true,
 "horizontalAlign": "left"
},
{
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "right": "0%",
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "layout": "absolute",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0.6,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "--PHOTOALBUM"
 },
 "shadow": false,
 "visible": false,
 "backgroundColorDirection": "vertical",
 "propagateClick": true,
 "horizontalAlign": "left"
},
{
 "borderRadius": 0,
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "right": "0%",
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "layout": "absolute",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0.6,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "--REALTOR"
 },
 "shadow": false,
 "visible": false,
 "backgroundColorDirection": "vertical",
 "propagateClick": true,
 "horizontalAlign": "left"
},
{
 "maxHeight": 1080,
 "maxWidth": 1080,
 "id": "Image_222C05C8_394B_CB14_418C_C97785513D96",
 "left": "0%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "width": "17.672%",
 "paddingLeft": 0,
 "url": "skin/Image_222C05C8_394B_CB14_418C_C97785513D96.png",
 "minHeight": 1,
 "top": "0%",
 "minWidth": 1,
 "height": "14.664%",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "data": {
  "name": "Image39868"
 },
 "shadow": false,
 "borderRadius": 0,
 "scaleMode": "fit_inside",
 "propagateClick": false,
 "horizontalAlign": "center"
},
{
 "borderRadius": 0,
 "id": "veilPopupPanorama",
 "left": 0,
 "right": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "backgroundColorRatios": [
  0
 ],
 "top": 0,
 "bottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 0,
 "borderSize": 0,
 "backgroundOpacity": 0.55,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "UIComponent",
 "data": {
  "name": "UIComponent4687"
 },
 "shadow": false,
 "visible": false,
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 }
},
{
 "borderRadius": 0,
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "right": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "backgroundColorRatios": [],
 "top": 0,
 "bottom": 0,
 "backgroundColor": [],
 "minWidth": 0,
 "borderSize": 0,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "ZoomImage",
 "data": {
  "name": "ZoomImage4688"
 },
 "shadow": false,
 "visible": false,
 "scaleMode": "custom",
 "backgroundColorDirection": "vertical",
 "propagateClick": false
},
{
 "textDecoration": "none",
 "borderRadius": 0,
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "pressedIconColor": "#888888",
 "data": {
  "name": "CloseButton4689"
 },
 "shadowBlurRadius": 6,
 "id": "closeButtonPopupPanorama",
 "fontColor": "#FFFFFF",
 "fontFamily": "Arial",
 "right": 10,
 "verticalAlign": "middle",
 "paddingRight": 5,
 "shadowSpread": 1,
 "paddingLeft": 5,
 "layout": "horizontal",
 "minHeight": 0,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "iconHeight": 20,
 "top": 10,
 "rollOverIconColor": "#666666",
 "shadowColor": "#000000",
 "iconColor": "#000000",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "minWidth": 0,
 "mode": "push",
 "label": "",
 "borderSize": 0,
 "backgroundOpacity": 0.3,
 "paddingBottom": 5,
 "gap": 5,
 "paddingTop": 5,
 "fontSize": "1.29vmin",
 "class": "CloseButton",
 "iconLineWidth": 5,
 "fontStyle": "normal",
 "shadow": false,
 "iconWidth": 20,
 "visible": false,
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "cursor": "hand",
 "horizontalAlign": "center",
 "fontWeight": "normal"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "width": 58,
 "pressedRollOverIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed_rollover.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "class": "IconButton",
 "data": {
  "name": "IconButton MUTE"
 },
 "shadow": false,
 "borderRadius": 0,
 "propagateClick": true,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "width": 58,
 "pressedRollOverIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed_rollover.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "class": "IconButton",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "shadow": false,
 "borderRadius": 0,
 "propagateClick": true,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.65,
   "yaw": -175.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489D192A_4361_3A51_41CE_383C6D3D0E87_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.05
  }
 ],
 "data": {
  "label": "Circle 360 1"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_489BD04A_4361_2AD1_41B7_B4D4072B24BA, this.camera_5BA12E43_4A0A_C44E_41B8_F558D739AF0A); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_5E4CDA19_4A0A_4FFA_41BF_CAEC31226606",
   "pitch": -6.05,
   "hfov": 11.65,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -175.65
  }
 ],
 "id": "overlay_512A0B16_4361_DE70_41B2_432FE29F19EC",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.53,
   "yaw": -33.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489D192A_4361_3A51_41CE_383C6D3D0E87_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.7
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_5B385F68_4361_76DF_41CB_7ED79F306E67, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'iconWidth':20,'borderSize':0,'backgroundOpacity':0.3,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverIconWidth':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'rollOverIconColor':'#666666','backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_5E66BA29_4A0A_4FDA_41C3_CBECA601DA47, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_5E4C6A19_4A0A_4FFA_41BA_F6AFE8F71C68",
   "pitch": -2.7,
   "hfov": 7.53,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -33.04
  }
 ],
 "id": "overlay_5133DDF2_4361_35B1_41C6_72B29AFD6F90",
 "class": "HotspotPanoramaOverlay"
},
{
 "toolTipPaddingRight": 10,
 "toolTipFontSize": "13px",
 "playbackBarBackgroundColorDirection": "vertical",
 "id": "MapViewer",
 "playbackBarRight": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowSpread": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "width": "100%",
 "toolTipBorderColor": "#767676",
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "transitionDuration": 500,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipBackgroundColor": "#FF9933",
 "toolTipPaddingBottom": 7,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "minWidth": 1,
 "borderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontWeight": "normal",
 "toolTipFontStyle": "normal",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipOpacity": 0.5,
 "class": "ViewerArea",
 "progressRight": 0,
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBottom": 2,
 "progressBarBackgroundColorDirection": "vertical",
 "toolTipBorderRadius": 3,
 "shadow": false,
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "toolTipFontColor": "#FFFFFF",
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 10,
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingTop": 7,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingRight": 0,
 "transitionMode": "blending",
 "toolTipTextShadowColor": "#000000",
 "progressBorderSize": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderRadius": 0,
 "toolTipBorderSize": 1,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipShadowOpacity": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "paddingBottom": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipShadowColor": "#333333",
 "data": {
  "name": "Floor Plan"
 },
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeight": 10,
 "borderRadius": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontFamily": "Georgia",
 "playbackBarHeadWidth": 6,
 "propagateClick": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 26.33,
   "yaw": 39.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489CB79D_4361_5673_41CD_B9E678C66801_1_HS_0_0_0_map.gif",
      "width": 60,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.29
  }
 ],
 "data": {
  "label": "Circle Arrow 04c"
 },
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
   "distance": 100,
   "image": "this.AnimatedImageResource_5E308A18_4A0A_4FFA_41A4_89D62D995F82",
   "pitch": -21.29,
   "hfov": 26.33,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 39.63
  }
 ],
 "id": "overlay_52FC2325_4363_2E53_41AF_8A16BC5AB088",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.31,
   "yaw": 177.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489CB79D_4361_5673_41CD_B9E678C66801_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ]
   },
   "pitch": 1.04
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_489CCF56_4361_56F1_41C8_24FFC3E25BCF, this.camera_5BA6EE3C_4A0A_C43A_41B5_AB6A9A2D8EA7); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 13.31,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489CB79D_4361_5673_41CD_B9E678C66801_1_HS_1_0.png",
      "width": 227,
      "class": "ImageResourceLevel",
      "height": 275
     }
    ]
   },
   "pitch": 1.04,
   "yaw": 177.61,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_52F9973B_4361_36B0_41A5_5BA77F46EDC9",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.54,
   "yaw": -29.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489CB79D_4361_5673_41CD_B9E678C66801_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.19
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_5E307A18_4A0A_4FFA_41CE_BABBD67D0B3E",
   "pitch": -0.19,
   "hfov": 7.54,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -29.77
  }
 ],
 "id": "overlay_528D9BA7_4361_7E50_41CF_1198AC252643",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 31.14,
   "yaw": -30.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489CB79D_4361_5673_41CD_B9E678C66801_1_HS_3_0_map.gif",
      "width": 74,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.35
  }
 ],
 "data": {
  "label": "Meditation area"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489CB79D_4361_5673_41CD_B9E678C66801_1_HS_3_0.png",
      "width": 535,
      "class": "ImageResourceLevel",
      "height": 115
     }
    ]
   },
   "pitch": -7.35,
   "hfov": 31.14,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -30.15,
   "distance": 50
  }
 ],
 "id": "overlay_5BBBB3C2_4363_2DD3_41CE_086D8154B0E5",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.63,
   "yaw": 58.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489CB79D_4361_5673_41CD_B9E678C66801_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 26.26
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_5E319A18_4A0A_4FFA_41CA_855C7D2C159D",
   "pitch": 26.26,
   "hfov": 5.63,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 58.43
  }
 ],
 "id": "overlay_5AFA8B77_43A3_5EB0_41C1_CF73D2BEF1EF",
 "class": "HotspotPanoramaOverlay"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "width": 58,
 "pressedRollOverIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed_rollover.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "class": "IconButton",
 "data": {
  "name": "IconButton GYRO"
 },
 "shadow": false,
 "borderRadius": 0,
 "propagateClick": true,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "width": 58,
 "pressedRollOverIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed_rollover.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "class": "IconButton",
 "data": {
  "name": "IconButton HS "
 },
 "shadow": false,
 "borderRadius": 0,
 "propagateClick": true,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "width": 58,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "class": "IconButton",
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "borderRadius": 0,
 "propagateClick": true,
 "visible": false,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "maxHeight": 23,
 "maxWidth": 35,
 "id": "IconButton_446BC7D5_4A0E_C44B_41C1_C69C7229E7AD",
 "width": 35,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "height": 23,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_446BC7D5_4A0E_C44B_41C1_C69C7229E7AD.png",
 "class": "IconButton",
 "data": {
  "name": "IconButton4710"
 },
 "shadow": false,
 "borderRadius": 0,
 "propagateClick": false,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "borderRadius": 0,
 "maxHeight": 37,
 "maxWidth": 49,
 "id": "IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "width": 100,
 "pressedRollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed_rollover.png",
 "right": 137,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "bottom": 7,
 "height": 75,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed.png",
 "iconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270.png",
 "class": "IconButton",
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "propagateClick": true,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.18,
   "yaw": 75.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489B342A_4361_EA51_418B_B588D37897E0_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.7
  }
 ],
 "data": {
  "label": "Circle 360 1"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_5E4B0A1B_4A0A_4FFE_41AF_03F649E0F3B9",
   "pitch": -29.7,
   "hfov": 10.18,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 75.64
  }
 ],
 "id": "overlay_5659A183_4361_2A50_41B2_C556B17016EC",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.98,
   "yaw": -52.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489B342A_4361_EA51_418B_B588D37897E0_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.66
  }
 ],
 "data": {
  "label": "Circle Point 02"
 },
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
   "distance": 100,
   "image": "this.AnimatedImageResource_5E4B4A1B_4A0A_4FFE_41AF_58921BFABBA4",
   "pitch": -1.66,
   "hfov": 10.98,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -52.92
  }
 ],
 "id": "overlay_57880FB3_4361_55B0_41CD_A48C0A54959D",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.99,
   "yaw": -107.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489B7B81_4361_FE53_41C2_C4DD383A3F5D_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.1
  }
 ],
 "data": {
  "label": "Circle Point 02"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4D6E6F7D_4361_36B0_41CD_C332C4967DA6, this.camera_5BF0CE81_4A0A_C4CB_41D1_A3BC63D61B91); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_5E4B1A1A_4A0A_4FFE_41C9_585B0AD7DBA3",
   "pitch": 0.1,
   "hfov": 10.99,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -107.68
  }
 ],
 "id": "overlay_50D51EE6_4361_D7D0_41C2_0578196840D2",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.98,
   "yaw": 60.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489B7B81_4361_FE53_41C2_C4DD383A3F5D_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.16
  }
 ],
 "data": {
  "label": "Circle Point 02"
 },
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
   "distance": 100,
   "image": "this.AnimatedImageResource_5E4B5A1A_4A0A_4FFE_41BF_310B6BCF5161",
   "pitch": -2.16,
   "hfov": 10.98,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 60.38
  }
 ],
 "id": "overlay_509B04B5_4361_EBB0_4197_3772720BCFA2",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.82,
   "yaw": -38.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489B7B81_4361_FE53_41C2_C4DD383A3F5D_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 4.43
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_489CCF56_4361_56F1_41C8_24FFC3E25BCF, this.camera_5BC52E88_4A0A_C4D9_41CB_3B66BFA1E792); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.82,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489B7B81_4361_FE53_41C2_C4DD383A3F5D_1_HS_2_0.png",
      "width": 150,
      "class": "ImageResourceLevel",
      "height": 150
     }
    ]
   },
   "pitch": 4.43,
   "yaw": -38.16,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_573E9E5D_4367_36F1_41C1_8584A6DBD05A",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.53,
   "yaw": -9.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489B7B81_4361_FE53_41C2_C4DD383A3F5D_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.32
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_5E4A5A1A_4A0A_4FFE_41C7_CE7BA79B1552",
   "pitch": 2.32,
   "hfov": 7.53,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -9.92
  }
 ],
 "id": "overlay_57E79A31_4367_3EB0_41CA_8EC4F020F7B7",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.98,
   "yaw": -107.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489B7B81_4361_FE53_41C2_C4DD383A3F5D_1_HS_4_0_map.gif",
      "width": 70,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "pitch": -10.11
  }
 ],
 "data": {
  "label": "Value Space"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489B7B81_4361_FE53_41C2_C4DD383A3F5D_1_HS_4_0.png",
      "width": 433,
      "class": "ImageResourceLevel",
      "height": 98
     }
    ]
   },
   "pitch": -10.11,
   "hfov": 24.98,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -107.52,
   "distance": 50
  }
 ],
 "id": "overlay_5B43A63B_43A1_56B1_41C3_7542E0C6B62D",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 32.54,
   "yaw": 61.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489B7B81_4361_FE53_41C2_C4DD383A3F5D_1_HS_5_0_map.gif",
      "width": 92,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "pitch": -11.12
  }
 ],
 "data": {
  "label": "Reflection Area"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489B7B81_4361_FE53_41C2_C4DD383A3F5D_1_HS_5_0.png",
      "width": 565,
      "class": "ImageResourceLevel",
      "height": 98
     }
    ]
   },
   "pitch": -11.12,
   "hfov": 32.54,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 61.42,
   "distance": 50
  }
 ],
 "id": "overlay_5A678CF3_43A1_3BB1_41BC_11AFCFA8A9DE",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.79,
   "yaw": -108.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489EC19E_4361_2A71_41D0_70B3186B5DD4_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.08
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Left-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_489BD04A_4361_2AD1_41B7_B4D4072B24BA, this.camera_5BE58E73_4A0A_C44F_41C7_EDACFB33C3D6); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_5E4DBA19_4A0A_4FFA_41B3_CBA2C5B0DC12",
   "pitch": -20.08,
   "hfov": 16.79,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -108.51
  }
 ],
 "id": "overlay_51AF26E3_4363_D7D0_41C1_DCFE64504E86",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.62,
   "yaw": 77.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489EC19E_4361_2A71_41D0_70B3186B5DD4_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.23
  }
 ],
 "data": {
  "label": "Circle Point 02"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4D6E6F7D_4361_36B0_41CD_C332C4967DA6, this.camera_5BFB0E7A_4A0A_C439_41D2_7AF343C2E81C); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_5E4D3A19_4A0A_4FFA_41A9_7F6FC16952BB",
   "pitch": -1.23,
   "hfov": 8.62,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 77.04
  }
 ],
 "id": "overlay_51D23EB7_4361_37B0_41B3_37F2DD658E52",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.46,
   "yaw": -3.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489EC19E_4361_2A71_41D0_70B3186B5DD4_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.98
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_5820D0FB_43A1_2BB1_41C2_795760F4DC83, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'iconWidth':20,'borderSize':0,'backgroundOpacity':0.3,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverIconWidth':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'rollOverIconColor':'#666666','backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_5E67CA2A_4A0A_4FDE_41D1_6AEF079D70D6, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_5E4D6A1A_4A0A_4FFE_41BA_37EAB1F2E4E1",
   "pitch": -7.98,
   "hfov": 7.46,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -3.39
  }
 ],
 "id": "overlay_50D8F8B1_4361_5BB0_41B8_44E531D18FD0",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.15,
   "yaw": 69.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489EC19E_4361_2A71_41D0_70B3186B5DD4_1_HS_3_0_map.gif",
      "width": 62,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "pitch": -7.85
  }
 ],
 "data": {
  "label": "Value Space"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489EC19E_4361_2A71_41D0_70B3186B5DD4_1_HS_3_0.png",
      "width": 381,
      "class": "ImageResourceLevel",
      "height": 98
     }
    ]
   },
   "pitch": -7.85,
   "hfov": 22.15,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 69.09,
   "distance": 50
  }
 ],
 "id": "overlay_5A14F317_435E_EE71_41C2_AD598EDA4308",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.72,
   "yaw": 0.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489CCF56_4361_56F1_41C8_24FFC3E25BCF_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 18
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.72,
   "distance": 0.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489CCF56_4361_56F1_41C8_24FFC3E25BCF_1_HS_0_0.png",
      "width": 156,
      "class": "ImageResourceLevel",
      "height": 154
     }
    ]
   },
   "pitch": 18,
   "yaw": 0.39,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4C0B9C4E_4363_3AD1_41CA_175B62D1552B",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.09,
   "yaw": -39.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489CCF56_4361_56F1_41C8_24FFC3E25BCF_1_HS_1_1_0_map.gif",
      "width": 60,
      "class": "ImageResourceLevel",
      "height": 164
     }
    ]
   },
   "pitch": -4.35
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.09,
   "roll": 0,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489CCF56_4361_56F1_41C8_24FFC3E25BCF_1_HS_1_0.png",
      "width": 121,
      "class": "ImageResourceLevel",
      "height": 328
     }
    ]
   },
   "pitch": -4.35,
   "yaw": -39.73,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4CDEB5F3_4361_75B0_41C5_F599DA3CD646",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.49,
   "yaw": 36.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489CCF56_4361_56F1_41C8_24FFC3E25BCF_1_HS_2_1_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 178
     }
    ]
   },
   "pitch": -4.61
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.49,
   "roll": 0,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489CCF56_4361_56F1_41C8_24FFC3E25BCF_1_HS_2_0.png",
      "width": 145,
      "class": "ImageResourceLevel",
      "height": 356
     }
    ]
   },
   "pitch": -4.61,
   "yaw": 36.92,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_527D8EFB_4361_D7B0_41CF_D4BB53308FE3",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.63,
   "yaw": 0.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489CCF56_4361_56F1_41C8_24FFC3E25BCF_1_HS_3_0_map.gif",
      "width": 103,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 11.73
  }
 ],
 "data": {
  "label": "Saksham Values Lab"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489CCF56_4361_56F1_41C8_24FFC3E25BCF_1_HS_3_0.png",
      "width": 394,
      "class": "ImageResourceLevel",
      "height": 61
     }
    ]
   },
   "pitch": 11.73,
   "hfov": 22.63,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 0.43,
   "distance": 0.25
  }
 ],
 "id": "overlay_537ADA7E_4367_DEB1_41D0_B7FD39362495",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.33,
   "yaw": -6.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489CCF56_4361_56F1_41C8_24FFC3E25BCF_1_HS_4_0_map.gif",
      "width": 15,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "pitch": -14.44
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 24.33,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489CCF56_4361_56F1_41C8_24FFC3E25BCF_1_HS_4_0.png",
      "width": 428,
      "class": "ImageResourceLevel",
      "height": 428
     }
    ]
   },
   "pitch": -14.44,
   "yaw": -6.51,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5280CCE0_4361_3BD0_419E_0D42A716C6E7",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.99,
   "yaw": -39.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489CCF56_4361_56F1_41C8_24FFC3E25BCF_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.96
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_489CB79D_4361_5673_41CD_B9E678C66801, this.camera_5B8D8E58_4A0A_C479_41C6_38D1140F6D08); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 4.99,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489CCF56_4361_56F1_41C8_24FFC3E25BCF_1_HS_5_0.png",
      "width": 85,
      "class": "ImageResourceLevel",
      "height": 87
     }
    ]
   },
   "pitch": -5.96,
   "yaw": -39.94,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5335663F_4361_D6AF_41C3_F187D2EC4647",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.98,
   "yaw": 37.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489CCF56_4361_56F1_41C8_24FFC3E25BCF_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.07
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_489B7B81_4361_FE53_41C2_C4DD383A3F5D, this.camera_5B84BE5F_4A0A_C477_4191_F1F558FB4A33); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 4.98,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489CCF56_4361_56F1_41C8_24FFC3E25BCF_1_HS_6_0.png",
      "width": 85,
      "class": "ImageResourceLevel",
      "height": 87
     }
    ]
   },
   "pitch": -7.07,
   "yaw": 37.23,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_563C1432_436F_EAB0_41A3_DD580464FDE5",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.57,
   "yaw": -86.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489BD04A_4361_2AD1_41B7_B4D4072B24BA_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.01
  }
 ],
 "data": {
  "label": "Circle Point 02"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_489D192A_4361_3A51_41CE_383C6D3D0E87, this.camera_5B99EE66_4A0A_C449_41D2_16B904FEE30C); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_5E31DA18_4A0A_4FFA_4167_9DA68FA63B24",
   "pitch": -6.01,
   "hfov": 8.57,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -86.26
  }
 ],
 "id": "overlay_527E8D47_4362_DAD0_41D0_51FC1D2C6954",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.59,
   "yaw": 50.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489BD04A_4361_2AD1_41B7_B4D4072B24BA_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.5
  }
 ],
 "data": {
  "label": "Circle Point 02"
 },
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
   "distance": 100,
   "image": "this.AnimatedImageResource_5E316A18_4A0A_4FFA_41D1_5E78223E63F9",
   "pitch": -4.5,
   "hfov": 8.59,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 50.16
  }
 ],
 "id": "overlay_53B22056_4361_6AF0_41AB_6E947E41B8C8",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.55,
   "yaw": -43.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489BD04A_4361_2AD1_41B7_B4D4072B24BA_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.51
  }
 ],
 "data": {
  "label": "Circle Point 02"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_489EC19E_4361_2A71_41D0_70B3186B5DD4, this.camera_5BEF7E6C_4A0A_C459_41CD_907F97975F70); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_5E4E8A19_4A0A_4FFA_4190_65F4A397193A",
   "pitch": -7.51,
   "hfov": 8.55,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -43.3
  }
 ],
 "id": "overlay_5252E793_4361_7677_41CE_DF1F692120CB",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.61,
   "yaw": 99.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489BD04A_4361_2AD1_41B7_B4D4072B24BA_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.24
  }
 ],
 "data": {
  "label": "Circle Point 02"
 },
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
   "distance": 100,
   "image": "this.AnimatedImageResource_5E4EDA19_4A0A_4FFA_41CA_64D166E7D1C4",
   "pitch": -2.24,
   "hfov": 8.61,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 99.9
  }
 ],
 "id": "overlay_53B00CA4_4361_3A50_41D0_86C7C4A8D252",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.03,
   "yaw": -158,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489BD04A_4361_2AD1_41B7_B4D4072B24BA_1_HS_4_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -32.74
  }
 ],
 "data": {
  "label": "Circle Arrow 01a Left-UP"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_5E4E1A19_4A0A_4FFA_41CD_6463A7DBCC56",
   "pitch": -32.74,
   "hfov": 15.03,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -158
  }
 ],
 "id": "overlay_52998059_4363_EAF3_41C1_6855774BFBF5",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.43,
   "yaw": -3.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489BD04A_4361_2AD1_41B7_B4D4072B24BA_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.48
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_5A9AAE70_435F_D6CF_41CD_F3EF59EF4C73, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'iconWidth':20,'borderSize':0,'backgroundOpacity':0.3,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverIconWidth':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'rollOverIconColor':'#666666','backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_5E6D8A26_4A0A_4FD6_41CE_767DF37EE94A, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_5E4F8A19_4A0A_4FFA_41C3_392DB0D0B999",
   "pitch": -9.48,
   "hfov": 7.43,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -3.89
  }
 ],
 "id": "overlay_51A5FF46_4361_36D0_41C3_A25611C9C0E1",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 32.24,
   "yaw": -85.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489BD04A_4361_2AD1_41B7_B4D4072B24BA_1_HS_6_0_map.gif",
      "width": 75,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.5
  }
 ],
 "data": {
  "label": "Conflict Resolution"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489BD04A_4361_2AD1_41B7_B4D4072B24BA_1_HS_6_0.png",
      "width": 565,
      "class": "ImageResourceLevel",
      "height": 120
     }
    ]
   },
   "pitch": -13.5,
   "hfov": 32.24,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -85.79,
   "distance": 50
  }
 ],
 "id": "overlay_5505552C_4367_2A57_41CF_7D7A0CE4A7C3",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 28.65,
   "yaw": -3.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489BD04A_4361_2AD1_41B7_B4D4072B24BA_1_HS_7_0_map.gif",
      "width": 65,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.13
  }
 ],
 "data": {
  "label": "Storytelling Area"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489BD04A_4361_2AD1_41B7_B4D4072B24BA_1_HS_7_0.png",
      "width": 489,
      "class": "ImageResourceLevel",
      "height": 120
     }
    ]
   },
   "pitch": -2.13,
   "hfov": 28.65,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -3.11,
   "distance": 50
  }
 ],
 "id": "overlay_56B63E8E_4361_3650_41B6_D33FD5ACCDAB",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.45,
   "yaw": 49.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489BD04A_4361_2AD1_41B7_B4D4072B24BA_1_HS_8_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.49
  }
 ],
 "data": {
  "label": "Echo Wheel"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489BD04A_4361_2AD1_41B7_B4D4072B24BA_1_HS_8_0.png",
      "width": 338,
      "class": "ImageResourceLevel",
      "height": 120
     }
    ]
   },
   "pitch": -11.49,
   "hfov": 19.45,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 49.49,
   "distance": 50
  }
 ],
 "id": "overlay_545FB13B_4361_2AB1_41A7_DF1A10EA8CBB",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.8,
   "yaw": 102.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489BD04A_4361_2AD1_41B7_B4D4072B24BA_1_HS_9_0_map.gif",
      "width": 52,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.48
  }
 ],
 "data": {
  "label": "Seating Area"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489BD04A_4361_2AD1_41B7_B4D4072B24BA_1_HS_9_0.png",
      "width": 394,
      "class": "ImageResourceLevel",
      "height": 120
     }
    ]
   },
   "pitch": -9.48,
   "hfov": 22.8,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 102.62,
   "distance": 50
  }
 ],
 "id": "overlay_5687C0B6_4361_2BB0_41A9_6ED82199EAFF",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.16,
   "yaw": -41.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489BD04A_4361_2AD1_41B7_B4D4072B24BA_1_HS_10_0_map.gif",
      "width": 52,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.26
  }
 ],
 "data": {
  "label": "Echo Pillars"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_489BD04A_4361_2AD1_41B7_B4D4072B24BA_1_HS_10_0.png",
      "width": 390,
      "class": "ImageResourceLevel",
      "height": 120
     }
    ]
   },
   "pitch": -14.26,
   "hfov": 22.16,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -41.95,
   "distance": 50
  }
 ],
 "id": "overlay_4B77988D_45C9_64DC_41B8_605F871FC4DB",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.87,
   "yaw": -122.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4D6E6F7D_4361_36B0_41CD_C332C4967DA6_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.45
  }
 ],
 "data": {
  "label": "Circle Point 02"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_489EC19E_4361_2A71_41D0_70B3186B5DD4, this.camera_5BBCCE4A_4A0A_C45E_41D1_7053B894F152); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_5E4ACA1A_4A0A_4FFE_41AC_682B7FCD40BA",
   "pitch": -8.45,
   "hfov": 10.87,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -122.25
  }
 ],
 "id": "overlay_505DB0F8_437F_EBB0_41A2_8781299E2C5F",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.97,
   "yaw": 92.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4D6E6F7D_4361_36B0_41CD_C332C4967DA6_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.11
  }
 ],
 "data": {
  "label": "Circle Point 02"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_489B7B81_4361_FE53_41C2_C4DD383A3F5D, this.camera_5BB46E50_4A0A_C44A_41CA_9160C0D57B3D); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_5E4A3A1A_4A0A_4FFE_419B_4737E2B66EB5",
   "pitch": 3.11,
   "hfov": 10.97,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 92.04
  }
 ],
 "id": "overlay_50110903_437F_DA50_41CD_6E4CDEB68068",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.53,
   "yaw": -2.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4D6E6F7D_4361_36B0_41CD_C332C4967DA6_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.7
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_5E4A5A1A_4A0A_4FFE_41C9_77590FC610FC",
   "pitch": -2.7,
   "hfov": 7.53,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -2.89
  }
 ],
 "id": "overlay_505660EC_4361_2BD0_41A4_0EBA2F2EE990",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.56,
   "yaw": -122.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4D6E6F7D_4361_36B0_41CD_C332C4967DA6_1_HS_3_0_map.gif",
      "width": 62,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.39
  }
 ],
 "data": {
  "label": "Echo Pillars"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4D6E6F7D_4361_36B0_41CD_C332C4967DA6_1_HS_3_0.png",
      "width": 508,
      "class": "ImageResourceLevel",
      "height": 131
     }
    ]
   },
   "pitch": -15.39,
   "hfov": 21.56,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -122.6,
   "distance": 50
  }
 ],
 "id": "overlay_5B460413_43A3_2A71_41C7_DA015FA04D28",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.95,
   "yaw": 94.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4D6E6F7D_4361_36B0_41CD_C332C4967DA6_1_HS_4_0_map.gif",
      "width": 62,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 10.99
  }
 ],
 "data": {
  "label": "Echo Wheel"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4D6E6F7D_4361_36B0_41CD_C332C4967DA6_1_HS_4_0.png",
      "width": 508,
      "class": "ImageResourceLevel",
      "height": 131
     }
    ]
   },
   "pitch": 10.99,
   "hfov": 21.95,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 94.96,
   "distance": 50
  }
 ],
 "id": "overlay_5AD36CCC_43A3_7BD7_41C7_5AB39BBB099C",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "map": {
  "width": 86.56,
  "x": 699.28,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_18C25D0C_395A_DB2C_41B6_D5FF13191C1D_HS_0_map.gif",
     "width": 18,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 707.73,
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "height": 76.38,
  "offsetX": 0
 },
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 699.28,
  "class": "HotspotMapOverlayImage",
  "y": 707.73,
  "width": 86.56,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_18C25D0C_395A_DB2C_41B6_D5FF13191C1D_HS_0.png",
     "width": 86,
     "class": "ImageResourceLevel",
     "height": 76
    }
   ]
  },
  "height": 76.38
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_1948E7BC_3959_D76C_41A1_32EFB2D159B9",
 "class": "AreaHotspotMapOverlay"
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "width": 110,
 "right": "0%",
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "middle",
 "top": "0%",
 "height": 110,
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "button menu sup"
 },
 "shadow": false,
 "borderRadius": 0,
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center"
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "91.304%",
 "paddingLeft": 0,
 "layout": "vertical",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "bottom": "0%",
 "minWidth": 1,
 "height": "85.959%",
 "gap": 3,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set"
 },
 "shadow": false,
 "borderRadius": 0,
 "propagateClick": true,
 "visible": false,
 "horizontalAlign": "center"
},
{
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "width": 574.16,
 "right": "30.06%",
 "children": [
  "this.Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
  "this.Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
  "this.Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
  "this.IconButton_446BC7D5_4A0E_C44B_41C1_C69C7229E7AD"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "middle",
 "bottom": "0%",
 "height": 51,
 "minWidth": 1,
 "gap": 3,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "-button set container"
 },
 "shadow": false,
 "borderRadius": 0,
 "propagateClick": true,
 "horizontalAlign": "center"
},
{
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "shadowBlurRadius": 25,
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "10%",
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "right": "10%",
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "shadowSpread": 1,
 "shadowOpacity": 0.3,
 "paddingLeft": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "verticalAlign": "top",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "top": "5%",
 "bottom": "5%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "paddingTop": 0,
 "shadowHorizontalLength": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "10%",
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "right": "10%",
 "scrollBarMargin": 2,
 "paddingRight": 20,
 "overflow": "visible",
 "paddingLeft": 0,
 "layout": "vertical",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "top": "5%",
 "bottom": "80%",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "paddingTop": 20,
 "class": "Container",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false,
 "borderRadius": 0,
 "propagateClick": false,
 "horizontalAlign": "right"
},
{
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "shadowBlurRadius": 25,
 "id": "Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
 "left": "10%",
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "right": "10%",
 "children": [
  "this.Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
  "this.Container_23F027B7_0C0A_6293_418E_075FCFAA8A19"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "shadowSpread": 1,
 "shadowOpacity": 0.3,
 "paddingLeft": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "verticalAlign": "top",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "top": "5%",
 "bottom": "5%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "paddingTop": 0,
 "shadowHorizontalLength": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "Container_23F097B8_0C0A_629D_4176_D87C90BA32B6",
 "left": "10%",
 "children": [
  "this.IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA"
 ],
 "right": "10%",
 "scrollBarMargin": 2,
 "paddingRight": 20,
 "overflow": "visible",
 "paddingLeft": 0,
 "layout": "vertical",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "top": "5%",
 "bottom": "80%",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "paddingTop": 20,
 "class": "Container",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false,
 "borderRadius": 0,
 "propagateClick": false,
 "horizontalAlign": "right"
},
{
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "shadowBlurRadius": 25,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "right": "15%",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "visible",
 "shadowSpread": 1,
 "shadowOpacity": 0.3,
 "paddingLeft": 0,
 "layout": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "top": "7%",
 "bottom": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "paddingTop": 0,
 "shadowHorizontalLength": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "horizontalAlign": "center"
},
{
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "shadowBlurRadius": 25,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "10%",
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "right": "10%",
 "children": [
  "this.Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
  "this.Container_221C9648_0C06_E5FD_41A1_A79DE53B3031"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "shadowSpread": 1,
 "shadowOpacity": 0.3,
 "paddingLeft": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "verticalAlign": "top",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "top": "5%",
 "bottom": "5%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "paddingTop": 0,
 "shadowHorizontalLength": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "10%",
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "right": "10%",
 "scrollBarMargin": 2,
 "paddingRight": 20,
 "overflow": "visible",
 "paddingLeft": 0,
 "layout": "vertical",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "top": "5%",
 "bottom": "80%",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "paddingTop": 20,
 "class": "Container",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false,
 "borderRadius": 0,
 "propagateClick": false,
 "horizontalAlign": "right"
},
{
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "shadowBlurRadius": 25,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "right": "15%",
 "children": [
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
  "this.MapViewer"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "visible",
 "shadowSpread": 1,
 "shadowOpacity": 0.3,
 "paddingLeft": 0,
 "layout": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "top": "7%",
 "bottom": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "paddingTop": 0,
 "shadowHorizontalLength": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "horizontalAlign": "center"
},
{
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "shadowBlurRadius": 25,
 "id": "Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A",
 "left": "15%",
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "right": "15%",
 "children": [
  "this.Container_28214A13_0D5D_5B97_4193_B631E1496339",
  "this.Container_2B0BF61C_0D5B_2B90_4179_632488B1209E"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "visible",
 "shadowSpread": 1,
 "shadowOpacity": 0.3,
 "paddingLeft": 0,
 "layout": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "top": "7%",
 "bottom": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "paddingTop": 0,
 "shadowHorizontalLength": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "horizontalAlign": "center"
},
{
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "shadowBlurRadius": 25,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "right": "15%",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "visible",
 "shadowSpread": 1,
 "shadowOpacity": 0.3,
 "paddingLeft": 0,
 "layout": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "top": "7%",
 "bottom": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "paddingTop": 0,
 "shadowHorizontalLength": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "horizontalAlign": "center"
},
{
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "shadowBlurRadius": 25,
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "10%",
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "right": "10%",
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "shadowSpread": 1,
 "shadowOpacity": 0.3,
 "paddingLeft": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "verticalAlign": "top",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "top": "5%",
 "bottom": "5%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "paddingTop": 0,
 "shadowHorizontalLength": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "10%",
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "right": "10%",
 "scrollBarMargin": 2,
 "paddingRight": 20,
 "overflow": "visible",
 "paddingLeft": 0,
 "layout": "vertical",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "top": "5%",
 "bottom": "80%",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "paddingTop": 20,
 "class": "Container",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false,
 "borderRadius": 0,
 "propagateClick": false,
 "horizontalAlign": "right"
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_489D192A_4361_3A51_41CE_383C6D3D0E87_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_5E4CDA19_4A0A_4FFA_41BF_CAEC31226606",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_489D192A_4361_3A51_41CE_383C6D3D0E87_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_5E4C6A19_4A0A_4FFA_41BA_F6AFE8F71C68",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_489CB79D_4361_5673_41CD_B9E678C66801_1_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_5E308A18_4A0A_4FFA_41A4_89D62D995F82",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_489CB79D_4361_5673_41CD_B9E678C66801_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_5E307A18_4A0A_4FFA_41CE_BABBD67D0B3E",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_489CB79D_4361_5673_41CD_B9E678C66801_1_HS_4_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_5E319A18_4A0A_4FFA_41CA_855C7D2C159D",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_489B342A_4361_EA51_418B_B588D37897E0_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_5E4B0A1B_4A0A_4FFE_41AF_03F649E0F3B9",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_489B342A_4361_EA51_418B_B588D37897E0_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_5E4B4A1B_4A0A_4FFE_41AF_58921BFABBA4",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_489B7B81_4361_FE53_41C2_C4DD383A3F5D_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_5E4B1A1A_4A0A_4FFE_41C9_585B0AD7DBA3",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_489B7B81_4361_FE53_41C2_C4DD383A3F5D_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_5E4B5A1A_4A0A_4FFE_41BF_310B6BCF5161",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_489B7B81_4361_FE53_41C2_C4DD383A3F5D_1_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_5E4A5A1A_4A0A_4FFE_41C7_CE7BA79B1552",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_489EC19E_4361_2A71_41D0_70B3186B5DD4_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "id": "AnimatedImageResource_5E4DBA19_4A0A_4FFA_41B3_CBA2C5B0DC12",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_489EC19E_4361_2A71_41D0_70B3186B5DD4_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_5E4D3A19_4A0A_4FFA_41A9_7F6FC16952BB",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_489EC19E_4361_2A71_41D0_70B3186B5DD4_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_5E4D6A1A_4A0A_4FFE_41BA_37EAB1F2E4E1",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_489BD04A_4361_2AD1_41B7_B4D4072B24BA_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_5E31DA18_4A0A_4FFA_4167_9DA68FA63B24",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_489BD04A_4361_2AD1_41B7_B4D4072B24BA_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_5E316A18_4A0A_4FFA_41D1_5E78223E63F9",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_489BD04A_4361_2AD1_41B7_B4D4072B24BA_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_5E4E8A19_4A0A_4FFA_4190_65F4A397193A",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_489BD04A_4361_2AD1_41B7_B4D4072B24BA_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_5E4EDA19_4A0A_4FFA_41CA_64D166E7D1C4",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_489BD04A_4361_2AD1_41B7_B4D4072B24BA_1_HS_4_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "id": "AnimatedImageResource_5E4E1A19_4A0A_4FFA_41CD_6463A7DBCC56",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_489BD04A_4361_2AD1_41B7_B4D4072B24BA_1_HS_5_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_5E4F8A19_4A0A_4FFA_41C3_392DB0D0B999",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4D6E6F7D_4361_36B0_41CD_C332C4967DA6_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_5E4ACA1A_4A0A_4FFE_41AC_682B7FCD40BA",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4D6E6F7D_4361_36B0_41CD_C332C4967DA6_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_5E4A3A1A_4A0A_4FFE_419B_4737E2B66EB5",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4D6E6F7D_4361_36B0_41CD_C332C4967DA6_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_5E4A5A1A_4A0A_4FFE_41C9_77590FC610FC",
 "rowCount": 6,
 "frameCount": 22
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "width": 60,
 "pressedRollOverIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed_rollover.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "height": 60,
 "minWidth": 1,
 "mode": "toggle",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "class": "IconButton",
 "data": {
  "name": "image button menu"
 },
 "shadow": false,
 "borderRadius": 0,
 "propagateClick": true,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "width": 58,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "click": "this.shareTwitter(window.location.href)",
 "class": "IconButton",
 "data": {
  "name": "IconButton TWITTER"
 },
 "shadow": false,
 "borderRadius": 0,
 "propagateClick": true,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "width": 58,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "click": "this.shareFacebook(window.location.href)",
 "class": "IconButton",
 "data": {
  "name": "IconButton FB"
 },
 "shadow": false,
 "borderRadius": 0,
 "propagateClick": true,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button panorama list"
 },
 "shadowBlurRadius": 15,
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
 "width": 140,
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "verticalAlign": "middle",
 "paddingRight": 0,
 "shadowSpread": 1,
 "paddingLeft": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconHeight": 32,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "height": 40,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 4,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "label": "PANORAMA LIST",
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "class": "Button",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontSize": "15px",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "fontStyle": "normal",
 "shadow": false,
 "iconWidth": 32,
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "propagateClick": true,
 "cursor": "hand",
 "horizontalAlign": "center",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button floorplan"
 },
 "shadowBlurRadius": 15,
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
 "width": 196,
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "verticalAlign": "middle",
 "paddingRight": 0,
 "shadowSpread": 1,
 "paddingLeft": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconHeight": 32,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "height": 40,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "label": "FLOORPLAN",
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "class": "Button",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontSize": "15px",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "fontStyle": "normal",
 "shadow": false,
 "iconWidth": 32,
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "propagateClick": true,
 "cursor": "hand",
 "horizontalAlign": "center",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button photoalbum"
 },
 "shadowBlurRadius": 15,
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
 "width": 136,
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "verticalAlign": "middle",
 "paddingRight": 0,
 "shadowSpread": 1,
 "paddingLeft": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconHeight": 32,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "height": 40,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "label": "PHOTOALBUM",
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "class": "Button",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontSize": "15px",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "fontStyle": "normal",
 "shadow": false,
 "iconWidth": 32,
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "propagateClick": true,
 "cursor": "hand",
 "horizontalAlign": "left",
 "fontWeight": "bold"
},
{
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "overflow": "scroll",
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "width": "85%",
 "paddingLeft": 0,
 "layout": "absolute",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "paddingTop": 0,
 "height": "100%",
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "-left"
 },
 "shadow": false,
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "horizontalAlign": "center"
},
{
 "scrollBarColor": "#0069A3",
 "scrollBarOpacity": 0.51,
 "scrollBarVisible": "rollOver",
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "overflow": "visible",
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 50,
 "width": "50%",
 "paddingLeft": 50,
 "layout": "vertical",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 460,
 "gap": 0,
 "borderSize": 0,
 "backgroundOpacity": 1,
 "paddingBottom": 20,
 "paddingTop": 20,
 "height": "100%",
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "-right"
 },
 "shadow": false,
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "horizontalAlign": "left"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "pressedRollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed_rollover.jpg",
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "paddingRight": 0,
 "width": "25%",
 "paddingLeft": 0,
 "minHeight": 50,
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "class": "IconButton",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "borderRadius": 0,
 "propagateClick": false,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
 "overflow": "scroll",
 "children": [
  "this.ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
  "this.Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "width": "85%",
 "paddingLeft": 0,
 "layout": "absolute",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "paddingTop": 0,
 "height": "100%",
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "-left"
 },
 "shadow": false,
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "horizontalAlign": "center"
},
{
 "scrollBarColor": "#0069A3",
 "scrollBarOpacity": 0.51,
 "scrollBarVisible": "rollOver",
 "id": "Container_23F027B7_0C0A_6293_418E_075FCFAA8A19",
 "overflow": "visible",
 "children": [
  "this.Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
  "this.Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
  "this.Container_23F047B8_0C0A_629D_415D_F05EF8619564"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 50,
 "width": "50%",
 "paddingLeft": 50,
 "layout": "vertical",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 460,
 "gap": 0,
 "borderSize": 0,
 "backgroundOpacity": 1,
 "paddingBottom": 20,
 "paddingTop": 20,
 "height": "100%",
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "-right"
 },
 "shadow": false,
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "horizontalAlign": "left"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA",
 "pressedRollOverIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_pressed_rollover.jpg",
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_rollover.jpg",
 "paddingRight": 0,
 "width": "25%",
 "paddingLeft": 0,
 "minHeight": 50,
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_pressed.jpg",
 "iconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA.jpg",
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "class": "IconButton",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "borderRadius": 0,
 "propagateClick": false,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "overflow": "scroll",
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "width": "100%",
 "paddingLeft": 0,
 "layout": "absolute",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "height": 140,
 "gap": 10,
 "borderSize": 0,
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "header"
 },
 "shadow": false,
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "horizontalAlign": "left"
},
{
 "horizontalAlign": "center",
 "rollOverItemLabelFontColor": "#04A3E1",
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "width": "100%",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemVerticalAlign": "top",
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemMinHeight": 50,
 "scrollBarMargin": 2,
 "itemBorderRadius": 0,
 "itemPaddingLeft": 3,
 "verticalAlign": "middle",
 "paddingLeft": 70,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "itemOpacity": 1,
 "backgroundColor": [
  "#000000"
 ],
 "itemPaddingTop": 3,
 "itemMinWidth": 50,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "selectedItemThumbnailShadowVerticalLength": 0,
 "borderSize": 0,
 "height": "100%",
 "itemBackgroundColor": [],
 "minWidth": 1,
 "itemPaddingRight": 3,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemBackgroundColorRatios": [],
 "class": "ThumbnailGrid",
 "itemThumbnailOpacity": 1,
 "scrollBarColor": "#04A3E1",
 "shadow": false,
 "itemHeight": 156,
 "backgroundColorDirection": "vertical",
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "scrollBarOpacity": 0.5,
 "selectedItemLabelFontColor": "#04A3E1",
 "itemLabelFontWeight": "normal",
 "scrollBarVisible": "rollOver",
 "itemThumbnailHeight": 125,
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 14,
 "rollOverItemThumbnailShadow": true,
 "itemLabelGap": 7,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "paddingRight": 70,
 "itemThumbnailShadow": false,
 "itemLabelFontColor": "#666666",
 "backgroundColorRatios": [
  0
 ],
 "itemBackgroundColorDirection": "vertical",
 "selectedItemThumbnailShadow": true,
 "itemThumbnailWidth": 220,
 "itemMaxWidth": 1000,
 "gap": 26,
 "itemHorizontalAlign": "center",
 "backgroundOpacity": 0.05,
 "paddingBottom": 70,
 "itemPaddingBottom": 3,
 "itemMaxHeight": 1000,
 "selectedItemLabelFontWeight": "bold",
 "itemLabelFontStyle": "normal",
 "itemWidth": 220,
 "paddingTop": 10,
 "itemLabelHorizontalAlign": "center",
 "itemMode": "normal",
 "data": {
  "name": "ThumbnailList"
 },
 "itemThumbnailBorderRadius": 0,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "borderRadius": 5,
 "itemLabelFontFamily": "Montserrat",
 "itemLabelPosition": "bottom",
 "propagateClick": false
},
{
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
 "overflow": "scroll",
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "width": "85%",
 "paddingLeft": 0,
 "layout": "absolute",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "paddingTop": 0,
 "height": "100%",
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "-left"
 },
 "shadow": false,
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "horizontalAlign": "center"
},
{
 "scrollBarColor": "#0069A3",
 "scrollBarOpacity": 0.51,
 "scrollBarVisible": "rollOver",
 "id": "Container_221C9648_0C06_E5FD_41A1_A79DE53B3031",
 "overflow": "visible",
 "children": [
  "this.Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
  "this.Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
  "this.Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 50,
 "width": "15%",
 "paddingLeft": 50,
 "layout": "vertical",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 400,
 "gap": 0,
 "borderSize": 0,
 "backgroundOpacity": 1,
 "paddingBottom": 20,
 "paddingTop": 20,
 "height": "100%",
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "-right"
 },
 "shadow": false,
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "horizontalAlign": "left"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "pressedRollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed_rollover.jpg",
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "paddingRight": 0,
 "width": "25%",
 "paddingLeft": 0,
 "minHeight": 50,
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "class": "IconButton",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "borderRadius": 0,
 "propagateClick": false,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "overflow": "scroll",
 "children": [
  "this.HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "width": "100%",
 "paddingLeft": 0,
 "layout": "absolute",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "height": 140,
 "gap": 10,
 "borderSize": 0,
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "header"
 },
 "shadow": false,
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "horizontalAlign": "left"
},
{
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "Container_28214A13_0D5D_5B97_4193_B631E1496339",
 "overflow": "scroll",
 "children": [
  "this.HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
  "this.IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "width": "100%",
 "paddingLeft": 0,
 "layout": "absolute",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "height": 140,
 "gap": 10,
 "borderSize": 0,
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "header"
 },
 "shadow": false,
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "horizontalAlign": "left"
},
{
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "Container_2B0BF61C_0D5B_2B90_4179_632488B1209E",
 "overflow": "visible",
 "children": [
  "this.ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "width": "100%",
 "paddingLeft": 0,
 "layout": "absolute",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "paddingTop": 0,
 "height": "100%",
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "Container photo"
 },
 "shadow": false,
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "horizontalAlign": "left"
},
{
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "overflow": "visible",
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "width": "100%",
 "paddingLeft": 0,
 "layout": "absolute",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "paddingTop": 0,
 "height": "100%",
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "Container photo"
 },
 "shadow": false,
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "horizontalAlign": "left"
},
{
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "overflow": "scroll",
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "width": "55%",
 "paddingLeft": 0,
 "layout": "absolute",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "paddingTop": 0,
 "height": "100%",
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "-left"
 },
 "shadow": false,
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "horizontalAlign": "center"
},
{
 "scrollBarColor": "#0069A3",
 "scrollBarOpacity": 0.51,
 "scrollBarVisible": "rollOver",
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "overflow": "visible",
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 60,
 "width": "45%",
 "paddingLeft": 60,
 "layout": "vertical",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 460,
 "gap": 0,
 "borderSize": 0,
 "backgroundOpacity": 1,
 "paddingBottom": 20,
 "paddingTop": 20,
 "height": "100%",
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "-right"
 },
 "shadow": false,
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "horizontalAlign": "left"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "pressedRollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed_rollover.jpg",
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "paddingRight": 0,
 "width": "25%",
 "paddingLeft": 0,
 "minHeight": 50,
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "class": "IconButton",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "borderRadius": 0,
 "propagateClick": false,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "width": "100%",
 "paddingLeft": 0,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "minHeight": 1,
 "top": "0%",
 "minWidth": 1,
 "height": "100%",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "data": {
  "name": "Image"
 },
 "shadow": false,
 "borderRadius": 0,
 "scaleMode": "fit_outside",
 "propagateClick": false,
 "horizontalAlign": "center"
},
{
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "width": "100%",
 "paddingLeft": 0,
 "layout": "horizontal",
 "minHeight": 0,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "height": 60,
 "gap": 0,
 "borderSize": 0,
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "paddingTop": 20,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "horizontalAlign": "right"
},
{
 "scrollBarColor": "#E73B2C",
 "scrollBarOpacity": 0.79,
 "scrollBarVisible": "rollOver",
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "overflow": "scroll",
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "width": "100%",
 "paddingLeft": 0,
 "layout": "vertical",
 "minHeight": 520,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 100,
 "gap": 10,
 "borderSize": 0,
 "backgroundOpacity": 0.3,
 "paddingBottom": 30,
 "paddingTop": 0,
 "height": "100%",
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "Container text"
 },
 "shadow": false,
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "horizontalAlign": "left"
},
{
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "width": 370,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "height": 40,
 "gap": 10,
 "borderSize": 0,
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "horizontalAlign": "left"
},
{
 "toolTipTextShadowOpacity": 0,
 "toolTipPaddingRight": 10,
 "toolTipFontSize": "13px",
 "playbackBarBackgroundColorDirection": "vertical",
 "id": "ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
 "left": 0,
 "playbackBarRight": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowSpread": 0,
 "playbackBarProgressBorderRadius": 0,
 "right": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBorderRadius": 0,
 "toolTipBorderColor": "#767676",
 "paddingLeft": 0,
 "minHeight": 1,
 "playbackBarBorderRadius": 0,
 "transitionDuration": 500,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipBackgroundColor": "#FF9933",
 "toolTipPaddingBottom": 7,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "minWidth": 1,
 "borderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontWeight": "normal",
 "toolTipFontStyle": "normal",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipOpacity": 0.5,
 "class": "ViewerArea",
 "progressRight": 0,
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBottom": 2,
 "progressBarBackgroundColorDirection": "vertical",
 "toolTipBorderRadius": 3,
 "shadow": false,
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "toolTipFontColor": "#FFFFFF",
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 10,
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingTop": 7,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingRight": 0,
 "transitionMode": "blending",
 "toolTipTextShadowColor": "#000000",
 "progressBorderSize": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderRadius": 0,
 "toolTipBorderSize": 1,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "top": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "bottom": 0,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "toolTipShadowOpacity": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "paddingBottom": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipShadowColor": "#333333",
 "data": {
  "name": "Viewer info 1"
 },
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "borderRadius": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontFamily": "Georgia",
 "playbackBarHeadWidth": 6,
 "propagateClick": false
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0",
 "left": "0%",
 "children": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4"
 ],
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "width": "100%",
 "paddingLeft": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "middle",
 "top": "0%",
 "minWidth": 1,
 "height": "100%",
 "gap": 10,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container arrows"
 },
 "shadow": false,
 "borderRadius": 0,
 "propagateClick": false,
 "horizontalAlign": "left"
},
{
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "width": "100%",
 "paddingLeft": 0,
 "layout": "horizontal",
 "minHeight": 0,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "height": 60,
 "gap": 0,
 "borderSize": 0,
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "paddingTop": 20,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "horizontalAlign": "right"
},
{
 "scrollBarColor": "#E73B2C",
 "scrollBarOpacity": 0.79,
 "scrollBarVisible": "rollOver",
 "id": "Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
 "overflow": "scroll",
 "children": [
  "this.HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
  "this.Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "width": "100%",
 "paddingLeft": 0,
 "layout": "vertical",
 "minHeight": 520,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 100,
 "gap": 10,
 "borderSize": 0,
 "backgroundOpacity": 0.3,
 "paddingBottom": 30,
 "paddingTop": 0,
 "height": "100%",
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "Container text"
 },
 "shadow": false,
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "horizontalAlign": "left"
},
{
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "Container_23F047B8_0C0A_629D_415D_F05EF8619564",
 "width": 370,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "height": 40,
 "gap": 10,
 "borderSize": 0,
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "left": "0%",
 "width": "77.115%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 80,
 "minHeight": 100,
 "scrollBarWidth": 10,
 "top": "0%",
 "minWidth": 1,
 "height": "100%",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:4.3vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.3vh;font-family:'Bebas Neue Bold';\">Panorama list:</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText54192"
 },
 "shadow": false,
 "borderRadius": 0,
 "propagateClick": false
},
{
 "borderRadius": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "pressedRollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed_rollover.jpg",
 "right": 20,
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "paddingRight": 0,
 "width": "100%",
 "paddingLeft": 0,
 "minHeight": 50,
 "top": 20,
 "minWidth": 50,
 "mode": "push",
 "height": "36.14%",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "class": "IconButton",
 "data": {
  "name": "IconButton X"
 },
 "shadow": false,
 "propagateClick": false,
 "cursor": "hand",
 "horizontalAlign": "right"
},
{
 "borderRadius": 0,
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "left": "0%",
 "right": "0%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "insetBorder": false,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "WebFrame",
 "scrollEnabled": true,
 "data": {
  "name": "WebFrame48191"
 },
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "propagateClick": false
},
{
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "width": "100%",
 "paddingLeft": 0,
 "layout": "horizontal",
 "minHeight": 0,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "height": 60,
 "gap": 0,
 "borderSize": 0,
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "paddingTop": 20,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "horizontalAlign": "right"
},
{
 "scrollBarColor": "#E73B2C",
 "scrollBarOpacity": 0.79,
 "scrollBarVisible": "rollOver",
 "id": "Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
 "overflow": "scroll",
 "children": [
  "this.HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
  "this.Button_221B5648_0C06_E5FD_4198_40C786948FF0"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "width": "100%",
 "paddingLeft": 0,
 "layout": "vertical",
 "minHeight": 520,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 100,
 "gap": 10,
 "borderSize": 0,
 "backgroundOpacity": 0.3,
 "paddingBottom": 30,
 "paddingTop": 0,
 "height": "100%",
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "Container text"
 },
 "shadow": false,
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "horizontalAlign": "left"
},
{
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6",
 "width": 370,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "height": 40,
 "gap": 10,
 "borderSize": 0,
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
 "left": "0%",
 "width": "77.115%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 80,
 "minHeight": 100,
 "scrollBarWidth": 10,
 "top": "0%",
 "minWidth": 1,
 "height": "100%",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:4.3vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.3vh;font-family:'Bebas Neue Bold';\">FLOORPLAN:</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText54192"
 },
 "shadow": false,
 "borderRadius": 0,
 "propagateClick": false
},
{
 "borderRadius": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "pressedRollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed_rollover.jpg",
 "right": 20,
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "paddingRight": 0,
 "width": "100%",
 "paddingLeft": 0,
 "minHeight": 50,
 "top": 20,
 "minWidth": 50,
 "mode": "push",
 "height": "36.14%",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "class": "IconButton",
 "data": {
  "name": "IconButton X"
 },
 "shadow": false,
 "propagateClick": false,
 "cursor": "hand",
 "horizontalAlign": "right"
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
 "left": "0%",
 "width": "77.115%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 80,
 "minHeight": 100,
 "scrollBarWidth": 10,
 "top": "0%",
 "minWidth": 1,
 "height": "100%",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:4.3vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.3vh;font-family:'Bebas Neue Bold';\">PHOTOALBUM:</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText54192"
 },
 "shadow": false,
 "borderRadius": 0,
 "propagateClick": false
},
{
 "borderRadius": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3",
 "pressedRollOverIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_pressed_rollover.jpg",
 "right": 20,
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_rollover.jpg",
 "paddingRight": 0,
 "width": "100%",
 "paddingLeft": 0,
 "minHeight": 50,
 "top": 20,
 "minWidth": 50,
 "mode": "push",
 "height": "36.14%",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_pressed.jpg",
 "iconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3.jpg",
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, false, 0, null, null, false)",
 "class": "IconButton",
 "data": {
  "name": "IconButton X"
 },
 "shadow": false,
 "propagateClick": false,
 "cursor": "hand",
 "horizontalAlign": "right"
},
{
 "toolTipTextShadowOpacity": 0,
 "toolTipPaddingRight": 10,
 "toolTipFontSize": "13px",
 "playbackBarBackgroundColorDirection": "vertical",
 "id": "ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
 "left": "0%",
 "playbackBarRight": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowSpread": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "width": "100%",
 "toolTipBorderColor": "#767676",
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "transitionDuration": 500,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipBackgroundColor": "#FF9933",
 "toolTipPaddingBottom": 7,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "minWidth": 1,
 "borderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontWeight": "normal",
 "toolTipFontStyle": "normal",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipOpacity": 0.5,
 "class": "ViewerArea",
 "progressRight": 0,
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBottom": 2,
 "progressBarBackgroundColorDirection": "vertical",
 "toolTipBorderRadius": 3,
 "shadow": false,
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "toolTipFontColor": "#FFFFFF",
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 10,
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingTop": 7,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingRight": 0,
 "transitionMode": "blending",
 "toolTipTextShadowColor": "#000000",
 "progressBorderSize": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderRadius": 0,
 "toolTipBorderSize": 1,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "top": "0%",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipShadowOpacity": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "paddingBottom": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipShadowColor": "#333333",
 "data": {
  "name": "Viewer photoalbum + text 1"
 },
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "borderRadius": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontFamily": "Georgia",
 "playbackBarHeadWidth": 6,
 "propagateClick": false
},
{
 "borderRadius": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
 "left": 10,
 "pressedRollOverIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_pressed_rollover.png",
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_rollover.png",
 "paddingRight": 0,
 "width": "14.22%",
 "paddingLeft": 0,
 "minHeight": 50,
 "top": "20%",
 "bottom": "20%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_pressed.png",
 "iconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D.png",
 "class": "IconButton",
 "data": {
  "name": "IconButton <"
 },
 "shadow": false,
 "propagateClick": false,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "borderRadius": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
 "pressedRollOverIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_pressed_rollover.png",
 "right": 10,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_rollover.png",
 "paddingRight": 0,
 "width": "14.22%",
 "paddingLeft": 0,
 "minHeight": 50,
 "top": "20%",
 "bottom": "20%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_pressed.png",
 "iconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14.png",
 "class": "IconButton",
 "data": {
  "name": "IconButton >"
 },
 "shadow": false,
 "propagateClick": false,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "toolTipTextShadowOpacity": 0,
 "toolTipPaddingRight": 10,
 "toolTipFontSize": "13px",
 "playbackBarBackgroundColorDirection": "vertical",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "playbackBarRight": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowSpread": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "width": "100%",
 "toolTipBorderColor": "#767676",
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "transitionDuration": 500,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipBackgroundColor": "#FF9933",
 "toolTipPaddingBottom": 7,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "minWidth": 1,
 "borderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontWeight": "normal",
 "toolTipFontStyle": "normal",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipOpacity": 0.5,
 "class": "ViewerArea",
 "progressRight": 0,
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBottom": 2,
 "progressBarBackgroundColorDirection": "vertical",
 "toolTipBorderRadius": 3,
 "shadow": false,
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "toolTipFontColor": "#FFFFFF",
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 10,
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingTop": 7,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingRight": 0,
 "transitionMode": "blending",
 "toolTipTextShadowColor": "#000000",
 "progressBorderSize": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderRadius": 0,
 "toolTipBorderSize": 1,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "top": "0%",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipShadowOpacity": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "paddingBottom": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipShadowColor": "#333333",
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "borderRadius": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontFamily": "Georgia",
 "playbackBarHeadWidth": 6,
 "propagateClick": false
},
{
 "borderRadius": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "pressedRollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed_rollover.png",
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "paddingRight": 0,
 "width": "14.22%",
 "paddingLeft": 0,
 "minHeight": 50,
 "top": "20%",
 "bottom": "20%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "class": "IconButton",
 "data": {
  "name": "IconButton <"
 },
 "shadow": false,
 "propagateClick": false,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "borderRadius": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "pressedRollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed_rollover.png",
 "right": 10,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "paddingRight": 0,
 "width": "14.22%",
 "paddingLeft": 0,
 "minHeight": 50,
 "top": "20%",
 "bottom": "20%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "class": "IconButton",
 "data": {
  "name": "IconButton >"
 },
 "shadow": false,
 "propagateClick": false,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "borderRadius": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "pressedRollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed_rollover.jpg",
 "right": 20,
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "paddingRight": 0,
 "width": "10%",
 "paddingLeft": 0,
 "minHeight": 50,
 "top": 20,
 "minWidth": 50,
 "mode": "push",
 "height": "10%",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "class": "IconButton",
 "data": {
  "name": "IconButton X"
 },
 "shadow": false,
 "propagateClick": false,
 "cursor": "hand",
 "horizontalAlign": "right"
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "verticalAlign": "bottom",
 "paddingRight": 0,
 "width": "100%",
 "paddingLeft": 0,
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "minHeight": 1,
 "top": "0%",
 "minWidth": 1,
 "height": "100%",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "data": {
  "name": "Image"
 },
 "shadow": false,
 "borderRadius": 0,
 "scaleMode": "fit_outside",
 "propagateClick": false,
 "horizontalAlign": "center"
},
{
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "width": "100%",
 "paddingLeft": 0,
 "layout": "horizontal",
 "minHeight": 0,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "height": 60,
 "gap": 0,
 "borderSize": 0,
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "paddingTop": 20,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "horizontalAlign": "right"
},
{
 "scrollBarColor": "#E73B2C",
 "scrollBarOpacity": 0.79,
 "scrollBarVisible": "rollOver",
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "overflow": "scroll",
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "width": "100%",
 "paddingLeft": 0,
 "layout": "vertical",
 "minHeight": 520,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 100,
 "gap": 10,
 "borderSize": 0,
 "backgroundOpacity": 0.3,
 "paddingBottom": 30,
 "paddingTop": 0,
 "height": "100%",
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "Container text"
 },
 "shadow": false,
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "horizontalAlign": "left"
},
{
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "width": 370,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "height": 40,
 "gap": 10,
 "borderSize": 0,
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "width": "100%",
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "minWidth": 1,
 "height": "100%",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 20,
 "paddingTop": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.73vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.73vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.42vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.42vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.65vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.65vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.65vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.65vh;font-family:'Bebas Neue Bold';\"><B>lorem ipsum:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.64vh;font-family:'Bebas Neue Bold';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText"
 },
 "shadow": false,
 "borderRadius": 0,
 "propagateClick": false
},
{
 "textDecoration": "none",
 "borderRadius": 0,
 "fontFamily": "Bebas Neue Bold",
 "rollOverBackgroundOpacity": 1,
 "data": {
  "name": "Button"
 },
 "shadowBlurRadius": 6,
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "fontColor": "#FFFFFF",
 "height": "9%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "shadowSpread": 1,
 "width": "46%",
 "paddingLeft": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#04A3E1"
 ],
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "label": "lorem ipsum",
 "borderSize": 0,
 "backgroundOpacity": 0.7,
 "paddingBottom": 0,
 "gap": 5,
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "fontSize": "3vh",
 "class": "Button",
 "fontStyle": "normal",
 "shadow": false,
 "iconWidth": 32,
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "cursor": "hand",
 "horizontalAlign": "center",
 "fontWeight": "normal"
},
{
 "maxHeight": 150,
 "maxWidth": 150,
 "id": "IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
 "pressedRollOverIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_pressed_rollover.png",
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_rollover.png",
 "paddingRight": 0,
 "width": "12%",
 "paddingLeft": 0,
 "minHeight": 70,
 "minWidth": 70,
 "mode": "push",
 "height": "8%",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_pressed.png",
 "iconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD.png",
 "class": "IconButton",
 "data": {
  "name": "IconButton <"
 },
 "shadow": false,
 "borderRadius": 0,
 "propagateClick": false,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
 "width": "80%",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "layout": "absolute",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "minWidth": 1,
 "height": "30%",
 "gap": 10,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container separator"
 },
 "shadow": false,
 "borderRadius": 0,
 "propagateClick": false,
 "horizontalAlign": "left"
},
{
 "maxHeight": 150,
 "maxWidth": 150,
 "id": "IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
 "pressedRollOverIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_pressed_rollover.png",
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_rollover.png",
 "paddingRight": 0,
 "width": "12%",
 "paddingLeft": 0,
 "minHeight": 70,
 "minWidth": 70,
 "mode": "push",
 "height": "8%",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_pressed.png",
 "iconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4.png",
 "class": "IconButton",
 "data": {
  "name": "IconButton >"
 },
 "shadow": false,
 "borderRadius": 0,
 "propagateClick": false,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
 "width": "100%",
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "minWidth": 1,
 "height": "100%",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 20,
 "paddingTop": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.73vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.73vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.42vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.42vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.65vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.65vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText"
 },
 "shadow": false,
 "borderRadius": 0,
 "propagateClick": false
},
{
 "textDecoration": "none",
 "borderRadius": 0,
 "fontFamily": "Bebas Neue Bold",
 "rollOverBackgroundOpacity": 1,
 "data": {
  "name": "Button"
 },
 "shadowBlurRadius": 6,
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145",
 "fontColor": "#FFFFFF",
 "height": "9%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "shadowSpread": 1,
 "width": "46%",
 "paddingLeft": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#04A3E1"
 ],
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "label": "lorem ipsum",
 "borderSize": 0,
 "backgroundOpacity": 0.7,
 "paddingBottom": 0,
 "gap": 5,
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "fontSize": "3vh",
 "class": "Button",
 "fontStyle": "normal",
 "shadow": false,
 "iconWidth": 32,
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "cursor": "hand",
 "horizontalAlign": "center",
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
 "width": "100%",
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "minWidth": 1,
 "height": "100%",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 20,
 "paddingTop": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.73vh;font-family:'Bebas Neue Bold';\">location</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.66vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.42vh;font-family:'Bebas Neue Bold';\">address line 1</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.42vh;font-family:'Bebas Neue Bold';\">address line 2</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.3vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac.</SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText"
 },
 "shadow": false,
 "borderRadius": 0,
 "propagateClick": false
},
{
 "textDecoration": "none",
 "borderRadius": 0,
 "fontFamily": "Bebas Neue Bold",
 "rollOverBackgroundOpacity": 1,
 "data": {
  "name": "Button"
 },
 "shadowBlurRadius": 6,
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_221B5648_0C06_E5FD_4198_40C786948FF0",
 "width": 207,
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "shadowSpread": 1,
 "paddingLeft": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "height": 59,
 "label": "lorem ipsum",
 "borderSize": 0,
 "backgroundOpacity": 0.7,
 "paddingBottom": 0,
 "gap": 5,
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundColor": [
  "#04A3E1"
 ],
 "class": "Button",
 "fontSize": 34,
 "fontStyle": "normal",
 "shadow": false,
 "iconWidth": 32,
 "visible": false,
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "cursor": "hand",
 "horizontalAlign": "center",
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "width": "100%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "minWidth": 1,
 "height": "45%",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 10,
 "paddingTop": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.85vh;font-family:'Bebas Neue Bold';\">real estate agent</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText18899"
 },
 "shadow": false,
 "borderRadius": 0,
 "propagateClick": false
},
{
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "overflow": "scroll",
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "width": "100%",
 "paddingLeft": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "paddingTop": 0,
 "height": "80%",
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "- content"
 },
 "shadow": false,
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "horizontalAlign": "left"
},
{
 "maxHeight": 200,
 "maxWidth": 200,
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "verticalAlign": "top",
 "paddingRight": 0,
 "width": "25%",
 "paddingLeft": 0,
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "minHeight": 1,
 "minWidth": 1,
 "height": "100%",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "data": {
  "name": "agent photo"
 },
 "shadow": false,
 "borderRadius": 0,
 "scaleMode": "fit_inside",
 "propagateClick": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "width": "75%",
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "minWidth": 1,
 "height": "100%",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 10,
 "paddingTop": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.42vh;font-family:'Bebas Neue Bold';\">john doe</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.77vh;font-family:'Bebas Neue Bold';\">licensed real estate salesperson</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.66vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:0.66vh;font-family:'Bebas Neue Bold';\">Tlf.: +11 111 111 111</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:0.66vh;font-family:'Bebas Neue Bold';\">jhondoe@realestate.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:0.66vh;font-family:'Bebas Neue Bold';\">www.loremipsum.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText19460"
 },
 "shadow": false,
 "borderRadius": 0,
 "propagateClick": false
}],
 "mobileMipmappingEnabled": false,
 "minWidth": 20,
 "vrPolyfillScale": 0.5,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "class": "Player",
 "contentOpaque": false,
 "scripts": {
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "existsKey": function(key){  return key in window; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getKey": function(key){  return window[key]; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "registerKey": function(key, value){  window[key] = value; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "unregisterKey": function(key){  delete window[key]; }
 },
 "data": {
  "name": "Player468"
 },
 "mouseWheelEnabled": true,
 "shadow": false,
 "backgroundPreloadEnabled": true,
 "borderRadius": 0,
 "propagateClick": true,
 "defaultVRPointer": "laser",
 "horizontalAlign": "left"
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
