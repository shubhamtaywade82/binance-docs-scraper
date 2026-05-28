---
title: "Docker - Ollama"
url: https://docs.ollama.com/docker
kind: examples
category: docs
source: ollama
scraped_at: 2026-05-28T19:05:01.307Z
---
# Docker - Ollama

> Source: <https://docs.ollama.com/docker>

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

](#cpu-only)

CPU only

```
docker run -d -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama
```

##

[​

](#nvidia-gpu)

Nvidia GPU

Install the [NVIDIA Container Toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html#installation).

###

[​

](#install-with-apt)

Install with Apt

1. Configure the repository

    ```
    curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey \
        | sudo gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg
    curl -fsSL https://nvidia.github.io/libnvidia-container/stable/deb/nvidia-container-toolkit.list \
        | sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g' \
        | sudo tee /etc/apt/sources.list.d/nvidia-container-toolkit.list
    sudo apt-get update
    ```

2. Install the NVIDIA Container Toolkit packages

    ```
    sudo apt-get install -y nvidia-container-toolkit
    ```

###

[​

](#install-with-yum-or-dnf)

Install with Yum or Dnf

1. Configure the repository

    ```
    curl -fsSL https://nvidia.github.io/libnvidia-container/stable/rpm/nvidia-container-toolkit.repo \
        | sudo tee /etc/yum.repos.d/nvidia-container-toolkit.repo
    ```

2. Install the NVIDIA Container Toolkit packages

    ```
    sudo yum install -y nvidia-container-toolkit
    ```

###

[​

](#configure-docker-to-use-nvidia-driver)

Configure Docker to use Nvidia driver

```
sudo nvidia-ctk runtime configure --runtime=docker
sudo systemctl restart docker
```

###

[​

](#start-the-container)

Start the container

```
docker run -d --gpus=all -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama
```

If you’re running on an NVIDIA JetPack system, Ollama can’t automatically discover the correct JetPack version. Pass the environment variable `JETSON_JETPACK=5` or `JETSON_JETPACK=6` to the container to select version 5 or 6.

##

[​

](#amd-gpu)

AMD GPU

To run Ollama using Docker with AMD GPUs, use the `rocm` tag and the following command:

```
docker run -d --device /dev/kfd --device /dev/dri -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama:rocm
```

##

[​

](#vulkan-support)

Vulkan Support

Vulkan is bundled into the `ollama/ollama` image.

```
docker run -d --device /dev/kfd --device /dev/dri -v ollama:/root/.ollama -p 11434:11434 -e OLLAMA_VULKAN=1 --name ollama ollama/ollama
```

##

[​

](#run-model-locally)

Run model locally

Now you can run a model:

```
docker exec -it ollama ollama run llama3.2
```

##

[​

](#try-different-models)

Try different models

More models can be found on the [Ollama library](https://ollama.com/library).

[Previous](/windows)[

Importing a Model

Next

](/import)

⌘I
