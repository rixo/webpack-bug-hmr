# Reproduction case for Webpack HMR bug

```
npm install
npm start # starts dev server
```

## Steps

1.  Comment out require('./example') in app.js
2.  Save
3.  Uncomment back require('./example')
4.  Save

## Current behaviour

Full page reload with warnings:

    [HMR] Cannot apply update. Need to do a full reload!
    ...
    [HMR] Error: Aborted because ./example.js is not accepted
    Update propagation: ./example.js
        at hotApply (http://localhost:8081/main.js:476:30)
        at http://localhost:8081/main.js:314:22
    ...

## Expected

`example.js` updated by HMR and run again.
