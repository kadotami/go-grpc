## Local(vagrant)環境構築について

------------

### 1. 環境の準備

```
wget https://dl.google.com/go/go1.11.4.linux-amd64.tar.gz
tar vzfx go1.11.4.linux-amd64.tar.gz
sudo mv go /usr/local/
```

GOPATHとPATHの変更
```
# .bash_profile

# Get the aliases and functions
if [ -f ~/.bashrc ]; then
        . ~/.bashrc
fi

# User specific environment and startup programs

GOPATH=$HOME/go
PATH=$PATH:$HOME/.local/bin:$HOME/bin
PATH=$PATH:/usr/local/go/bin:$GOPATH/bin

export PATH
export GOPATH
```

```
go get -u google.golang.org/grpc
wget https://github.com/protocolbuffers/protobuf/releases/download/v3.6.1/protoc-3.6.1-linux-x86_64.zip
unzip protoc-3.6.1-linux-x86_64.zip
sudo mv bin/protoc /usr/local/bin/
go get -u github.com/grpc-ecosystem/grpc-gateway/protoc-gen-grpc-gateway
go get -u github.com/grpc-ecosystem/grpc-gateway/protoc-gen-swagger
go get -u github.com/golang/protobuf/protoc-gen-go
```

## nodejs 

```
sudo yum install -y gcc gcc-c++
sudo yum install -y nodejs npm –enablerepo=epel
```