```
docker build -t sanitizer .
```

```
docker run -it \
  -v $(pwd)/src:/src \
  -w /src/src \
  sanitizer /bin/bash -c "npm run build"
```

```
docker run -it \
  -v $(pwd)/src:/src \
  -w /src/src \
  sanitizer /bin/bash

# https://github.com/second-state/wasmedge-quickjs
wasmedge --dir .:. wasmedge_quickjs.wasm dist/_1.bundle.js text
```
