'use client';

import { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';

export const SocketConnect: React.FC = () => {
    const [msg, setMsg] = useState('');
    const socket = useRef<any>();

    useEffect(() => {
        const connect = async () => {
            await fetch('/api/socket');
            socket.current = io('http://localhost:3000', {
                path: '/api/socket_io',
                transports: ['websocket'],
            });
            console.log(socket.current);

            socket.current.on('message', (...args: any[]) => {
                setMsg(JSON.stringify(args));
            });
        };
        connect();

        // return () => socket.current?.disconnect();
    }, []);

    const handleClick = async () => {
        console.log(socket.current);
        socket.current.emit('click');
    };

    return (
        <div>
            <div>{msg}</div>
            <button onClick={handleClick}>test socket</button>
        </div>
    );
};

export default SocketConnect;
