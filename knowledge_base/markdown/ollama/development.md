---
title: "​Development"
url: https://docs.ollama.com/development
kind: examples
category: docs
source: ollama
scraped_at: 2026-05-28T19:05:37.016Z
---
# ​Development

> Source: <https://docs.ollama.com/development>

[Documentation

](/)[API Reference

](/api/introduction)

> ## Documentation Index
>
> Fetch the complete documentation index at: [https://docs.ollama.com/llms.txt](https://docs.ollama.com/llms.txt)
>
> Use this file to discover all available pages before exploring further.

#

[​

](#development)

Development

Install prerequisites:

- [Go](https://go.dev/doc/install)
- C/C++ Compiler e.g. Clang on macOS, [TDM-GCC](https://github.com/jmeubank/tdm-gcc/releases/latest) (Windows amd64) or [llvm-mingw](https://github.com/mstorsjo/llvm-mingw) (Windows arm64), GCC/Clang on Linux.

Then build and run Ollama from the root directory of the repository:

```
go run . serve
```

> \[!NOTE\] Ollama includes native code compiled with CGO. From time to time these data structures can change and CGO can get out of sync resulting in unexpected crashes. You can force a full build of the native code by running `go clean -cache` first.

##

[​

](#macos-apple-silicon)

macOS (Apple Silicon)

macOS Apple Silicon supports Metal which is built-in to the Ollama binary. No additional steps are required.

##

[​

](#macos-intel)

macOS (Intel)

Install prerequisites:

- [CMake](https://cmake.org/download/) or `brew install cmake`

Then, configure and build the project:

```
cmake -B build
cmake --build build
```

Lastly, run Ollama:

```
go run . serve
```

##

[​

](#windows)

Windows

Install prerequisites:

- [CMake](https://cmake.org/download/)
- [Visual Studio 2022](https://visualstudio.microsoft.com/downloads/) including the Native Desktop Workload
- (Optional) AMD GPU support
  - [ROCm](https://rocm.docs.amd.com/en/latest/)
  - [Ninja](https://github.com/ninja-build/ninja/releases)
- (Optional) NVIDIA GPU support
  - [CUDA SDK](https://developer.nvidia.com/cuda-downloads?target_os=Windows&target_arch=x86_64&target_version=11&target_type=exe_network)
- (Optional) VULKAN GPU support
  - [VULKAN SDK](https://vulkan.lunarg.com/sdk/home) - useful for AMD/Intel GPUs
- (Optional) MLX engine support
  - [CUDA 13+ SDK](https://developer.nvidia.com/cuda-downloads)
  - [cuDNN 9+](https://developer.nvidia.com/cudnn)

Then, configure and build the project:

```
cmake -B build
cmake --build build --config Release
```

> Building for Vulkan requires VULKAN\_SDK environment variable: PowerShell
>
> ```
> $env:VULKAN_SDK="C:\VulkanSDK\<version>"
> ```
>
> CMD
>
> ```
> set VULKAN_SDK=C:\VulkanSDK\<version>
> ```

> \[!IMPORTANT\] Building for ROCm requires additional flags:
>
> ```
> cmake -B build -G Ninja -DCMAKE_C_COMPILER=clang -DCMAKE_CXX_COMPILER=clang++
> cmake --build build --config Release
> ```

Lastly, run Ollama:

```
go run . serve
```

##

[​

](#windows-arm)

Windows (ARM)

Windows ARM does not support additional acceleration libraries at this time. Do not use cmake, simply `go run` or `go build`.

##

[​

](#linux)

Linux

Install prerequisites:

- [CMake](https://cmake.org/download/) or `sudo apt install cmake` or `sudo dnf install cmake`
- (Optional) AMD GPU support
  - [ROCm](https://rocm.docs.amd.com/projects/install-on-linux/en/latest/install/quick-start.html)
- (Optional) NVIDIA GPU support
  - [CUDA SDK](https://developer.nvidia.com/cuda-downloads)
- (Optional) VULKAN GPU support
  - [VULKAN SDK](https://vulkan.lunarg.com/sdk/home) - useful for AMD/Intel GPUs
  - Or install via package manager: `sudo apt install vulkan-sdk` (Ubuntu/Debian) or `sudo dnf install vulkan-sdk` (Fedora/CentOS)
- (Optional) MLX engine support
  - [CUDA 13+ SDK](https://developer.nvidia.com/cuda-downloads)
  - [cuDNN 9+](https://developer.nvidia.com/cudnn)
  - OpenBLAS/LAPACK: `sudo apt install libopenblas-dev liblapack-dev liblapacke-dev` (Ubuntu/Debian)

> \[!IMPORTANT\] Ensure prerequisites are in `PATH` before running CMake.

Then, configure and build the project:

```
cmake -B build
cmake --build build
```

Lastly, run Ollama:

```
go run . serve
```

##

[​

](#mlx-engine-optional)

MLX Engine (Optional)

The MLX engine enables running safetensor based models. It requires building the [MLX](https://github.com/ml-explore/mlx) and [MLX-C](https://github.com/ml-explore/mlx-c) shared libraries separately via CMake. On MacOS, MLX leverages the Metal library to run on the GPU, and on Windows and Linux, runs on NVIDIA GPUs via CUDA v13.

###

[​

](#macos-apple-silicon-2)

macOS (Apple Silicon)

Requires the Metal toolchain. Install [Xcode](https://developer.apple.com/xcode/) first, then:

```
xcodebuild -downloadComponent MetalToolchain
```

Verify it’s installed correctly (should print “no input files”):

```
xcrun metal
```

Then build:

```
cmake -B build --preset MLX
cmake --build build --preset MLX --parallel
cmake --install build --component MLX
```

> \[!NOTE\] Without the Metal toolchain, cmake will silently complete with Metal disabled. Check the cmake output for `Setting MLX_BUILD_METAL=OFF` which indicates the toolchain is missing.

###

[​

](#windows-/-linux-cuda)

Windows / Linux (CUDA)

Requires CUDA 13+ and [cuDNN](https://developer.nvidia.com/cudnn) 9+.

```
cmake -B build --preset "MLX CUDA 13"
cmake --build build --target mlx --target mlxc --config Release --parallel
cmake --install build --component MLX --strip
```

###

[​

](#local-mlx-source-overrides)

Local MLX source overrides

To build against a local checkout of MLX and/or MLX-C (useful for development), set environment variables before running CMake:

```
export OLLAMA_MLX_SOURCE=/path/to/mlx
export OLLAMA_MLX_C_SOURCE=/path/to/mlx-c
```

For example, using the helper scripts with local mlx and mlx-c repos:

```
OLLAMA_MLX_SOURCE=../mlx OLLAMA_MLX_C_SOURCE=../mlx-c ./scripts/build_linux.sh

OLLAMA_MLX_SOURCE=../mlx OLLAMA_MLX_C_SOURCE=../mlx-c ./scripts/build_darwin.sh
```

```
$env:OLLAMA_MLX_SOURCE="../mlx"
$env:OLLAMA_MLX_C_SOURCE="../mlx-c"
./scripts/build_darwin.ps1
```

##

[​

](#docker)

Docker

```
docker build .
```

###

[​

](#rocm)

ROCm

```
docker build --build-arg FLAVOR=rocm .
```

##

[​

](#running-tests)

Running tests

To run tests, use `go test`:

```
go test ./...
```

##

[​

](#library-detection)

Library detection

Ollama looks for acceleration libraries in the following paths relative to the `ollama` executable:

- `./lib/ollama` (Windows)
- `../lib/ollama` (Linux)
- `.` (macOS)
- `build/lib/ollama` (for development)

If the libraries are not found, Ollama will not run with any acceleration libraries.

⌘I
