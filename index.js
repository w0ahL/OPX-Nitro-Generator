const fs = require('fs/promises');
const config = require("./config.json");

const url = 'https://api.discord.gx.games/v1/direct-fulfillment';
const outputFile = 'tokens.txt';

setInterval(() => {
  (async () => {
    const data = {
      partnerUserId: "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
        (function(t) {
             const e = 16 * Math.random() | 0;
            return ("x" === t ? e : 3 & e | 8).toString(16)
        })),
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      if (response.ok) {
        const responseData = await response.json();

       const tokenLink = `https://discord.com/billing/partner-promotions/1180231712274387115/${responseData.token}`;

        console.log(`(+) ${tokenLink}`);

        await fs.appendFile(outputFile, tokenLink + '\n', 'utf-8');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  })();
}, config.cooldown)