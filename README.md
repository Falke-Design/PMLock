# Leaflet PMLock: Lock / Unlock Layers
This is a [Leaflet Geoman](https://github.com/geoman-io/leaflet-geoman) Subplugin 

Demo: [PMLock](https://falke-design.github.io/PMLock/)

### Installation
Download [pmLock.js](https://raw.githubusercontent.com/Falke-Design/PMLock/master/src/js/pmLock.js) and include them in your project.

`<script src="./src/js/pmLock.js"></script>`

### Init PMLock
Create the PMLock button after Leaflet Geoman

`pmLock = new PMLock(map)`

You can add the library without the button:

`pmLock = new PMLock(map,{showControl: false})`

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


