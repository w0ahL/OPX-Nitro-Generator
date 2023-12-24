# OPX-Nitro-Generator

This script is a simple Discord token generator that utilizes the Discord Direct Fulfillment API. It periodically sends a request to the API, retrieves the generated token, and appends it to a file (`tokens.txt`).

## Prerequisites

Before running the script, make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/w0ahL/OPX-Nitro-Generator.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd OPX-Nitro-Generator
   ```

## Configuration

Modify the `config.json` file to customize the script behavior if you need:

- `cooldown`: The interval between token generation requests (in milliseconds).

## Usage

Run the script using the following command:

```bash
node index.js
```

The generated tokens will be appended to the `tokens.txt` file in the project root.

## Disclaimer

This script is for educational purposes only. Use it responsibly and in compliance with Discord's [Terms of Service](https://discord.com/terms).

## License

This project is licensed under the Mozilla Public Version 2.0 License - see the [LICENSE](LICENSE) file for details.