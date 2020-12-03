import express from 'express';
import http from 'http';
import usb from 'usb';
const cors = require('cors');

const PORT_SOCKET = 5001;

const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server, {
  cors: true,
  origins: ['*'],
});

require('events').EventEmitter.defaultMaxListeners = 25;

io.on('connection', (socket: any) => {
  console.log('Client is connected');

  usb.on('attach', (data) => {
    console.log('usb has been attached');
    socket.emit('usb_adding', data);
  });

  usb.on('detach', (data) => {
    console.log('usb has been removed');
    socket.emit('usb_removing', data);
  });

  socket.on('disconnect', () => {
    console.log('Client is disconnected');
  });
});

server.listen(PORT_SOCKET, () => {
  console.log(`Listening on port ${PORT_SOCKET}`);
});
