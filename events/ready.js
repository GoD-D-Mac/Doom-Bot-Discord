const readyLog = '774516121096683521'

module.exports = client => {
    console.log('Ready :D');
    client.user.setActivity('you sleep | /help', { type: 'WATCHING'})
    client.user.setStatus('idle')
    client.channels.cache.get(readyLog).send('Back online!').then(m => m.delete({timeout: 3000}))
};