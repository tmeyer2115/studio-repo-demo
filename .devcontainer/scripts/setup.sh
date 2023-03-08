#!/bin/bash
source $NVM_DIR/nvm.sh
nvm install 17
nvm alias default 17
cd /workspaces/studio-repo-demo
npm install
wget https://yext-cli-pub.s3.amazonaws.com/cli/linux/yext
sudo mv yext /usr/local/bin
chmod +x /usr/local/bin/yext
