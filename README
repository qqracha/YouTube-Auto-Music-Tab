# YouTube Auto Music Tab

A Tampermonkey userscript that automatically switches the YouTube homepage to the "Music" tab when opening from a bookmark or direct navigation.



## Installation

1. Install [Tampermonkey](https://www.tampermonkey.net/) extension for your browser
2. Open [`main.js`](main.js) file or create a new script in Tampermonkey
3. Copy and paste the script code
4. Save and enable the script
5. Open YouTube — the "Music" filter will activate automatically

## How It Works

The script monitors YouTube homepage loading and automatically:
- Finds the chip (tab) with "Music" text
- Checks if it's already active
- If not — performs a click to switch the feed to music content

After manually selecting any other filter, the script stops automatically switching tabs until the next full page reload.

## Compatibility

- ✅ Chrome / Firefox / Edge / Opera / Brave / Any other (with Tampermonkey)
- ❌ Amigo browser
## Configuration

To change the target tab from "Music" to another (e.g., "Gaming" or "Live"), modify the constant value at the beginning of the script:

> const TARGET_LABEL = 'Music' // Replace with your desired tab name


Note: Use the exact tab name as it appears in your YouTube interface language.

## Known Limitations

- YouTube dynamically manages the active chip state, so visually "All" may remain highlighted even though the feed is already filtered by music
- The script doesn't change the page URL (chips use the same homepage without unique addresses)

## Issues

**Q:** It seems to be broken!

**A:** Please check `TARGET_LABEL`, for other languages, you need to enter your own keyword in the script.


## License

MIT (🍖meat)
