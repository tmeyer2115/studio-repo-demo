#!/bin/bash
/usr/local/share/nvm/nvm.sh install 17
/usr/local/share/nvm/nvm.sh use 17
npm install
wget https://yext-cli-pub.s3.amazonaws.com/cli/linux/yext
sudo mv yext /usr/local/bin
chmod +x /usr/local/bin/yext
