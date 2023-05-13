import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { io } from 'socket.io-client';


let socket;
function getSocket() {
  if (!socket) {
    socket = io(process.env.REACT_APP_WS_URL, {
      transports: ['websocket']
    });
  }
  return socket;
}

// Define a service using a base URL and expected endpoints
export const socketApi = createApi({
  reducerPath: 'socketApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_WS_URL}` }),
  endpoints: (builder) => ({
    sendMessage: builder.mutation({
      queryFn: (lists) => {
        const socket = getSocket();
        return new Promise(resolve => {
          socket.emit('getcompany', JSON.stringify(lists), (message) => {
            resolve({ data: message });
          });
        })
      },
    }),
    getMessages: builder.query({
      queryFn: () => ({ data: [] }),
      async onCacheEntryAdded(
        list,
        { cacheDataLoaded, cacheEntryRemoved, updateCachedData },
      ) {
        try {
          await cacheDataLoaded;
     
          const socket = getSocket();
     
          socket.on('connect', () => {
            console.log("Connection established");
          });
     
          socket.on('response message', (message) => {
            updateCachedData((draft) => {
              draft.push(message);
            });
          });
     
          await cacheEntryRemoved;
     
          socket.off('connect');
        } catch {
          // if cacheEntryRemoved resolved before cacheDataLoaded,
          // cacheDataLoaded throws
        }
      },
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSendMessageMutation, useGetMessagesQuery } = socketApi;