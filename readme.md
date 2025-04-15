# LinkVault User Guide

**LinkVault** Sends random links from a private list created by its user(Like alternative website domains) to members in your Discord server with role-based access and optional cooldowns.

This guide shows **how to use the bot** in your server.

---

##  Uses

- Sends **a random link** to users via **DM**
- Limits access using a **access role**
- Allows **boosters to bypass cooldowns**
- Prevents abuse with a **24-hour cooldown**
- Supports **multiple servers** with independent configs
- Fully customizable embed (title, description, etc.)

---

## Step 1: Invite the Bot

https://discord.com/oauth2/authorize?client_id=1361802244009492590&permissions=2147863616&scope=bot%20applications.commands

##  Step 2: Run `/setup`

Use the `/setup` command to configure the bot for your server.

> You **must have Administrator permissions** to use this command.

### Example:

/Setup

You'll be asked to select:

- `channel`: The channel where the embed will be posted
- `access_role`: The role users need to use the button
- `booster_role`: Optional – users with this role skip cooldowns
- `pastebin_link`: Pastebin link with your private links (1 link per line)
- `embed_title` _(optional)_: Title of the embed
- `embed_description` _(optional)_: Description under the title

> **Tip:** If you leave the title empty, it will use your server’s name by default.

---

## ✏️ Step 3: Update Settings Anytime

Use `/updateconfig` to make changes later.

> Only provide the fields you want to update — leave the rest blank.

### Example:

`/updateconfig access_role: Verified pastebin_link: https://pastebin.com/raw/abc123`


---

##  Step 4: Members Use the Button

When members click the **"Get a Link"** button in the embed:

- ✅ If they have the access role, they get a random link via DM
- ⏳ If they're not a booster, they must wait 24h before clicking again
- 💎 Boosters skip cooldown entirely
- ❌ If they don’t have the required role, they’re denied

> **Make sure users enable DMs** from the server so they can receive links!

---

## 📌 Example Pastebin Format

Your Pastebin should look like this:

```
https://example.com/link1
https://example.com/link2
https://example.com/link3 
```


Only one link per line. The bot will pick a random one every time.

---

## Need Help?

Contact through the discord if:

- You need help with setup
- You want a feature added
- You encounter a bug

Enjoy!

