import { NextApiRequest } from 'next';
import { NextApiResponseServerIO } from '@/types/socket';
import { Server } from 'socket.io';

const handler = async (req: NextApiRequest, res: NextApiResponseServerIO) => {
    if (res.socket.server.io) {
        console.log('Socket is already attached');
        return res.end();
    }

    const io = new Server(res.socket.server as any, {
        path: '/api/socket_io',
        addTrailingSlash: false,
    });
    res.socket.server.io = io;
    console.log('Socket server initialized');

    io.on('connection', (socket) => {
        console.log('socket', socket.id);
        let count = 1;

        socket.on('click', () => {
            io.emit('message', `you clicked ${count++}`);
        });
    });

    return res.end();
};

export default handler;
