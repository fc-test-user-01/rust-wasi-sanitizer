FROM rust:latest

RUN apt update
RUN apt install wget curl vim nmap npm -y
RUN rustup target add wasm32-wasi

RUN curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install.sh | bash
