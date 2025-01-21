# Simple Discord Auto VC Bot

This is a Discord bot designed to manage temporary voice channels on a server. It automatically creates a "Temp" voice channel when a user joins a "Create" channel and moves them to the newly created channel. It also deletes empty "Temp" channels after users leave. This bot is useful for managing temporary voice chats on Discord.

## Features

- Automatically creates a temporary voice channel when a user joins a "Create" channel.
- Moves users to the newly created "Temp" voice channel.
- Monitors and deletes empty "Temp" channels.
- Provides logging for actions such as user movements and channel creations/deletions.
- Works with multible create voice channels.

## Requirements

- Node.js version 16 or higher.
- A Discord bot token (set in `token.env` file).

## Installation

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/TheGgito/SimpleDiscordAutoVCBot.git
   cd SimpleDiscordAutoVCBot
2. npm install
3. DISCORD_BOT_TOKEN=your-bot-token-here
4. node bot-start.js OR just start the "start-bot.exe" if u are on windows OR on linux "start-bot.sh"

## License
This project is licensed under the Creative Commons Attribution-NonCommercial 4.0 International License (CC BY-NC 4.0).

You are free to:

Share — copy and redistribute the material in any medium or format
Adapt — remix, transform, and build upon the material for non-commercial purposes
Under the following terms:

You must give appropriate credit, provide a link to the license and project page on github, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
You may not use the material for commercial purposes.
For more information, visit Creative Commons - CC BY-NC 4.0.
