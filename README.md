# Deprecated! Implemented in Leaflet-Geoman Core
Implemented in Leaflet-Geoman with [Release 2.11.0](https://github.com/geoman-io/leaflet-geoman/releases/tag/2.11.0). This Library will not longer supported

# Leaflet PMLock: Lock / Unlock Layers
This is a [Leaflet Geoman](https://github.com/geoman-io/leaflet-geoman) Subplugin 

Demo: [PMLock](https://falke-design.github.io/PMLock/)

### Installation
Download [index.js](https://raw.githubusercontent.com/Falke-Design/PMLock/master/dist/index.js) and include them in your project.

`<script src="./dist/index.js"></script>`

or use the script over cdn:

`<script src="https://cdn.jsdelivr.net/gh/Falke-Design/PMLock@latest/dist/index.js"></script>`
### Init PMLock
Create the L.PMLock button after Leaflet Geoman

`pmLock = new L.PMLock(map)`

You can add the library without the button:

`pmLock = new L.PMLock(map,{showControl: false})`

### Set lock option by default
```
map.pm.enableDraw("Circle",{pathOptions:{pmLock: true}});
map.pm.disableDraw("Circle");
```

##### Options
`pmLock.setOptions(options)`
```
showControl: true | false
text: {unlock: 'Unlock', lock: 'Lock', title: 'Lock / Unlock Layers',  finish: 'Finish'}
```

##### setText
`pmLock.setText(text)`
```
showControl: true | false
text: {unlock: 'Unlock', lock: 'Lock', title: 'Lock / Unlock Layers',  finish: 'Finish'}
```

##### enableLock
`pmLock.enableLock(name, changeToolbar = true)`
```
name: 'unlock' | 'lock' | '' 
```

##### disableLock
`pmLock.disableLock(changeToolbar = true)`

##### toggle
enable 'lock' | 'unlock' or disable all ' '

`pmLock.toggle(name = 'lock', changeToolbar=true)`

##### render
`pmLock.render()`

##### getLockedLayers
`pmLock.getLockedLayers()`

##### getUnlockedLayers
`pmLock.getUnlockedLayers()`


