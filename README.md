```
docker build -t sanitizer .
```

```
docker run -it \
  -v $(pwd)/src:/src \
  -w /src \
  sanitizer /bin/bash -c "npm install"
```

```
docker run -it \
  -v $(pwd)/src:/src \
  -w /src/src \
  sanitizer /bin/bash -c "npm run build"
```

```
wget https://github.com/second-state/wasmedge-quickjs/releases/download/v0.5.0-alpha/wasmedge_quickjs.wasm -O ./src/wasmedge_quickjs.wasm

docker run -it \
  -v $(pwd)/src:/src \
  -w /src \
  sanitizer /bin/bash

# https://github.com/second-state/wasmedge-quickjs
wasmedge --dir .:. wasmedge_quickjs.wasm dist/_1.bundle.js text
```
