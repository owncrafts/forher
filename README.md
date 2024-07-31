# forher-ruddy

A Next.js application for encrypting and decrypting text messages with a custom key.
![img text](https://myoctocat.com/assets/images/base-octocat.svg)
## Live Demo

You can try out the live application here: [forher-ruddy](https://forher-ruddy.vercel.app/)

## Overview

forher-ruddy is a simple web application that allows users to:

1. Encrypt text messages using a custom key
2. Decrypt encrypted messages using the correct key
3. Copy encrypted messages to share securely
4. Paste encrypted messages to decrypt and view the hidden content

This application uses the `crypto` dependency for encryption and decryption processes.

## Features

- **Text Encryption**: Users can input a plain text message and a custom key to generate an encrypted version of the message.
- **Text Decryption**: Users can paste an encrypted message and provide the correct key to reveal the original plain text.
- **Copy Functionality**: Encrypted messages can be easily copied to the clipboard for sharing.
- **User-Friendly Interface**: Simple and intuitive design for easy navigation and usage.

## How to Use

1. **Encrypt a Message**:
   - Enter your plain text message in the input field.
   - Provide a custom encryption key.
   - Click the "Lock" button to encrypt the message.
   - Copy the encrypted text to share or store securely.

2. **Decrypt a Message**:
   - Paste the encrypted message into the input field.
   - Enter the correct decryption key.
   - Click the "Unlock" button to reveal the original message.

## Installation and Setup

To run this project locally:

1. Clone the repository: ``` git clone https://github.com/owncrafts/forher.git ```
2. Navigate to the project directory:
```cd forher```
3. Install dependencies:
```npm install```
4. Run the development server:
```npm run dev```
5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Technologies Used

- Next.js
- React
- Crypto (for encryption/decryption)

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/owncrafts/forher/issues).

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Project Link: [https://github.com/owncrafts/forher](https://github.com/owncrafts/forher)
