const https = require('https');

// Replace with your webhook URL
const webhookUrl = 'https://discord.com/api/webhooks/1270109138554454099/jYSYzv4TnnPge-ocWWNXldvFd4cANJIi_1DL-6QozUqGOzVqzGkvew8zkhDh-aAxOnhw';

// The message you want to send
const message = {
    text: 'Hello, this is a message from my JavaScript script!'
};

// Function to send the message
function sendWebhookMessage(webhookUrl, message) {
    const data = JSON.stringify(message);

    const url = new URL(webhookUrl);
    const options = {
        hostname: url.hostname,
        path: url.pathname + url.search,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length
        }
    };

    const req = https.request(options, (res) => {
        let responseData = '';

        res.on('data', (chunk) => {
            responseData += chunk;
        });

        res.on('end', () => {
            if (res.statusCode === 200) {
                console.log('Message sent successfully!');
            } else {
                console.log(`Failed to send message. Status code: ${res.statusCode}`);
            }
        });
    });

    req.on('error', (error) => {
        console.error(`Error sending message: ${error.message}`);
    });

    // Write data to request body
    req.write(data);
    req.end();
}

// Call the function to send the message
sendWebhookMessage(webhookUrl, message);
