# Common issues

### Reactotron

> If Reactotron display: "waiting for connection", try:

```
adb reverse tcp:9090 tcp:9090
```

and restart your debug application.

### Know issues

1.  On android build release...

`remove all drawable-* directories in ./android/app/src/main/res/`
