---
title: "Linux - Ollama"
url: https://docs.ollama.com/linux
kind: examples
category: docs
source: ollama
scraped_at: 2026-05-28T19:04:53.350Z
---
# Linux - Ollama

> Source: <https://docs.ollama.com/linux>

[Documentation

](/)[API Reference

](/api/introduction)

> ## Documentation Index
>
> Fetch the complete documentation index at: [https://docs.ollama.com/llms.txt](https://docs.ollama.com/llms.txt)
>
> Use this file to discover all available pages before exploring further.

##

[​

](#install)

Install

To install Ollama, run the following command:

```
curl -fsSL https://ollama.com/install.sh | sh
```

##

[​

](#manual-install)

Manual install

If you are upgrading from a prior version, you should remove the old libraries with `sudo rm -rf /usr/lib/ollama` first.

Download and extract the package:

```
curl -fsSL https://ollama.com/download/ollama-linux-amd64.tar.zst \
    | sudo tar x -C /usr
```

Start Ollama:

```
ollama serve
```

In another terminal, verify that Ollama is running:

```
ollama -v
```

###

[​

](#amd-gpu-install)

AMD GPU install

If you have an AMD GPU, also download and extract the additional ROCm package:

```
curl -fsSL https://ollama.com/download/ollama-linux-amd64-rocm.tar.zst \
    | sudo tar x -C /usr
```

###

[​

](#arm64-install)

ARM64 install

Download and extract the ARM64-specific package:

```
curl -fsSL https://ollama.com/download/ollama-linux-arm64.tar.zst \
    | sudo tar x -C /usr
```

###

[​

](#adding-ollama-as-a-startup-service-recommended)

Adding Ollama as a startup service (recommended)

Create a user and group for Ollama:

```
sudo useradd -r -s /bin/false -U -m -d /usr/share/ollama ollama
sudo usermod -a -G ollama $(whoami)
```

Create a service file in `/etc/systemd/system/ollama.service`:

```
[Unit]
Description=Ollama Service
After=network-online.target

[Service]
ExecStart=/usr/bin/ollama serve
User=ollama
Group=ollama
Restart=always
RestartSec=3
Environment="PATH=$PATH"

[Install]
WantedBy=multi-user.target
```

Then start the service:

```
sudo systemctl daemon-reload
sudo systemctl enable ollama
```

###

[​

](#install-cuda-drivers-optional)

Install CUDA drivers (optional)

[Download and install](https://developer.nvidia.com/cuda-downloads) CUDA. Verify that the drivers are installed by running the following command, which should print details about your GPU:

```
nvidia-smi
```

###

[​

](#install-amd-rocm-drivers-optional)

Install AMD ROCm drivers (optional)

[Download and Install](https://rocm.docs.amd.com/projects/install-on-linux/en/latest/tutorial/quick-start.html) ROCm v7.

###

[​

](#start-ollama)

Start Ollama

Start Ollama and verify it is running:

```
sudo systemctl start ollama
sudo systemctl status ollama
```

While AMD has contributed the `amdgpu` driver upstream to the official linux kernel source, the version is older and may not support all ROCm features. We recommend you install the latest driver from [https://www.amd.com/en/support/linux-drivers](https://www.amd.com/en/support/linux-drivers) for best support of your Radeon GPU.

##

[​

](#customizing)

Customizing

To customize the installation of Ollama, you can edit the systemd service file or the environment variables by running:

```
sudo systemctl edit ollama
```

Alternatively, create an override file manually in `/etc/systemd/system/ollama.service.d/override.conf`:

```
[Service]
Environment="OLLAMA_DEBUG=1"
```

##

[​

](#updating)

Updating

Update Ollama by running the install script again:

```
curl -fsSL https://ollama.com/install.sh | sh
```

Or by re-downloading Ollama:

```
curl -fsSL https://ollama.com/download/ollama-linux-amd64.tar.zst \
    | sudo tar x -C /usr
```

##

[​

](#installing-specific-versions)

Installing specific versions

Use `OLLAMA_VERSION` environment variable with the install script to install a specific version of Ollama, including pre-releases. You can find the version numbers in the [releases page](https://github.com/ollama/ollama/releases). For example:

```
curl -fsSL https://ollama.com/install.sh | OLLAMA_VERSION=0.5.7 sh
```

##

[​

](#viewing-logs)

Viewing logs

To view logs of Ollama running as a startup service, run:

```
journalctl -e -u ollama
```

##

[​

](#uninstall)

Uninstall

Remove the ollama service:

```
sudo systemctl stop ollama
sudo systemctl disable ollama
sudo rm /etc/systemd/system/ollama.service
```

Remove ollama libraries from your lib directory (either `/usr/local/lib`, `/usr/lib`, or `/lib`):

```
sudo rm -r $(which ollama | tr 'bin' 'lib')
```

Remove the ollama binary from your bin directory (either `/usr/local/bin`, `/usr/bin`, or `/bin`):

```
sudo rm $(which ollama)
```

Remove the downloaded models and Ollama service user and group:

```
sudo userdel ollama
sudo groupdel ollama
sudo rm -r /usr/share/ollama
```

[Previous](/context-length)[

macOS

Next

](/macos)

⌘I
