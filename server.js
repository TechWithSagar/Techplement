const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

const quotes = [
    { author: 'Albert Einstein', text: 'Life is like riding a bicycle. To keep your balance you must keep moving.' },
    { author: 'Albert Einstein', text: 'Imagination is more important than knowledge.' },
    { author: 'Isaac Newton', text: 'If I have seen further it is by standing on the shoulders of Giants.' },
    { author: 'Isaac Newton', text: 'What we know is a drop, what we don’t know is an ocean.' },
    { author: 'Yoda', text: 'Do, or do not. There is no try.' },
    { author: 'Yoda', text: 'The greatest teacher is failure.' },
    { author: 'Mahatma Gandhi', text: 'Be the change that you wish to see in the world.' },
    { author: 'Mahatma Gandhi', text: 'The best way to find yourself is to lose yourself in the service of others.' },
    { author: 'Nelson Mandela', text: 'It always seems impossible until it is done.' },
    { author: 'Nelson Mandela', text: 'Education is the most powerful weapon which you can use to change the world.' },
    { author: 'Walt Disney', text: 'The way to get started is to quit talking and begin doing.' },
    { author: 'Walt Disney', text: 'All our dreams can come true, if we have the courage to pursue them.' },
    { author: 'Steve Jobs', text: 'Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.' },
    { author: 'Steve Jobs', text: 'Innovation distinguishes between a leader and a follower.' },
    { author: 'Oprah Winfrey', text: 'The biggest adventure you can take is to live the life of your dreams.' },
    { author: 'Oprah Winfrey', text: 'Turn your wounds into wisdom.' },
];

app.get('/quote', (req, res) => {
    const author = req.query.author;
    if (author) {
        const filteredQuotes = quotes.filter(quote => quote.author.toLowerCase().includes(author.toLowerCase()));
        if (filteredQuotes.length > 0) {
            res.json(filteredQuotes);
        } else {
            res.json([]);
        }
    } else {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        res.json([randomQuote]);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
