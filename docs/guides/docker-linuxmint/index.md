# Docker Setup on LinuxMint 21.1
According to Docker's official doc site, LinuxMint isn't listed as direct
supported distribution. In fact, setting up LinuxMint requires a few steps
beyond the official guide. This tutorial aims to document the extra steps needed
![Supported Linux Distros](./docker-distro.png "Supported Linux Distros (Docker)")


## Use Ubuntu install guide as start point
Link: https://docs.docker.com/engine/install/ubuntu/  

### Uninstall old versions
`sudo apt-get remove docker docker-engine docker.io containerd runc`

### Set up the repository
If you use an Ubuntu derivative distro, such as Linux Mint, you may need to use
`UBUNTU_CODENAME` instead of `VERSION_CODENAME`.
```sh
# Update the apt package index and install packages to allow apt to use a repository over HTTPS
sudo apt-get update
sudo apt-get install ca-certificates curl gnupg
# Add Docker’s official GPG key:
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
# Use the following command to set up the repository
# If you use an Ubuntu derivative distro, such as Linux Mint, you may need to use UBUNTU_CODENAME instead of VERSION_CODENAME.
echo \
  "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  "$(. /etc/os-release && echo "$UBUNTU_CODENAME")" stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

### Install Docker Engine
```sh
# Update the apt package index
sudo apt-get update
# Install Docker Engine, containerd, and Docker Compose
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
# Verify that the Docker Engine installation is successful by running the hello-world image
sudo docker run hello-world
```