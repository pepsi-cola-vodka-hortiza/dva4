headers:  {
    req: <ref *1> IncomingMessage {
        _readableState: ReadableState {
            objectMode: false,
                highWaterMark: 16384,
                buffer: BufferList { head: null, tail: null, length: 0 },
            length: 0,
                pipes: [],
                flowing: true,
                ended: true,
                endEmitted: true,
                reading: false,
                constructed: true,
                sync: false,
                needReadable: false,
                emittedReadable: false,
                readableListening: false,
                resumeScheduled: false,
                errorEmitted: false,
                emitClose: true,
                autoDestroy: true,
                destroyed: true,
                errored: null,
                closed: true,
                closeEmitted: true,
                defaultEncoding: 'utf8',
                awaitDrainWriters: null,
                multiAwaitDrain: false,
                readingMore: false,
                dataEmitted: true,
                decoder: null,
                encoding: null,
                [Symbol(kPaused)]: false
        },
        _events: [Object: null prototype] { end: [Function: clearRequestTimeout] },
        _eventsCount: 1,
            _maxListeners: undefined,
            socket: Socket {
            connecting: false,
                _hadError: false,
                _parent: null,
                _host: null,
                _readableState: [ReadableState],
                _events: [Object: null prototype],
            _eventsCount: 8,
                _maxListeners: undefined,
                _writableState: [WritableState],
                allowHalfOpen: true,
                _sockname: null,
                _pendingData: null,
                _pendingEncoding: '',
                server: [Server],
                _server: [Server],
                parser: [HTTPParser],
                on: [Function: socketListenerWrap],
            addListener: [Function: socketListenerWrap],
            prependListener: [Function: socketListenerWrap],
            setEncoding: [Function: socketSetEncoding],
            _paused: false,
                _httpMessage: [ServerResponse],
                timeout: 0,
                [Symbol(async_id_symbol)]: 49,
                [Symbol(kHandle)]: [TCP],
                [Symbol(kSetNoDelay)]: false,
                [Symbol(lastWriteQueueSize)]: 0,
                [Symbol(timeout)]: Timeout {
                _idleTimeout: -1,
                    _idlePrev: null,
                    _idleNext: null,
                    _idleStart: 10944,
                    _onTimeout: null,
                    _timerArgs: undefined,
                    _repeat: null,
                    _destroyed: true,
                    [Symbol(refed)]: false,
                    [Symbol(kHasPrimitive)]: false,
                    [Symbol(asyncId)]: 232,
                    [Symbol(triggerId)]: 230
            },
            [Symbol(kBuffer)]: null,
                [Symbol(kBufferCb)]: null,
                [Symbol(kBufferGen)]: null,
                [Symbol(kCapture)]: false,
                [Symbol(kBytesRead)]: 0,
                [Symbol(kBytesWritten)]: 0,
                [Symbol(RequestTimeout)]: undefined
        },
        httpVersionMajor: 1,
            httpVersionMinor: 1,
            httpVersion: '1.1',
            complete: true,
            rawHeaders: [
            'Host',
            'localhost:4000',
            'Connection',
            'keep-alive',
            'Content-Length',
            '1915',
            'sec-ch-ua',
            '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'Authorization',
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZmY5Mjk5MjliNTFiNDFjNzU2YWQ5ZSIsImlhdCI6MTY2MTMyNjc2MX0.Vi0N6AwBfWDdl9nwRtEAs3Oek_0Ybhm_nGtOs
            9hLfg4"',
            'content-type',
            'application/json',
            'sec-ch-ua-mobile',
            '?0',
            'User-Agent',
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
            'sec-ch-ua-platform',
            '"Windows"',
            'Accept',
            '*/*',
            'Origin',
            'https://studio.apollographql.com',
            'Sec-Fetch-Site',
            'cross-site',
            'Sec-Fetch-Mode',
            'cors',
            'Sec-Fetch-Dest',
            'empty',
            'Accept-Encoding',
            'gzip, deflate, br',
            'Accept-Language',
            'en-GB,en;q=0.9,ar-AE;q=0.8,ar;q=0.7,ru-RU;q=0.6,ru;q=0.5,en-US;q=0.4'
        ],
            rawTrailers: [],
            aborted: false,
            upgrade: false,
            url: '/',
            method: 'POST',
            statusCode: null,
            statusMessage: null,
            client: Socket {
            connecting: false,
                _hadError: false,
                _parent: null,
                _host: null,
                _readableState: [ReadableState],
                _events: [Object: null prototype],
            _eventsCount: 8,
                _maxListeners: undefined,
                _writableState: [WritableState],
                allowHalfOpen: true,
                _sockname: null,
                _pendingData: null,
                _pendingEncoding: '',
                server: [Server],
                _server: [Server],
                parser: [HTTPParser],
                on: [Function: socketListenerWrap],
            addListener: [Function: socketListenerWrap],
            prependListener: [Function: socketListenerWrap],
            setEncoding: [Function: socketSetEncoding],
            _paused: false,
                _httpMessage: [ServerResponse],
                timeout: 0,
                [Symbol(async_id_symbol)]: 49,
                [Symbol(kHandle)]: [TCP],
                [Symbol(kSetNoDelay)]: false,
                [Symbol(lastWriteQueueSize)]: 0,
                [Symbol(timeout)]: Timeout {
                _idleTimeout: -1,
                    _idlePrev: null,
                    _idleNext: null,
                    _idleStart: 10944,
                    _onTimeout: null,
                    _timerArgs: undefined,
                    _repeat: null,
                    _destroyed: true,
                    [Symbol(refed)]: false,
                    [Symbol(kHasPrimitive)]: false,
                    [Symbol(asyncId)]: 232,
                    [Symbol(triggerId)]: 230
            },
            [Symbol(kBuffer)]: null,
                [Symbol(kBufferCb)]: null,
                [Symbol(kBufferGen)]: null,
                [Symbol(kCapture)]: false,
                [Symbol(kBytesRead)]: 0,
                [Symbol(kBytesWritten)]: 0,
                [Symbol(RequestTimeout)]: undefined
        },
        _consuming: true,
            _dumped: false,
            next: [Function: next],
        baseUrl: '/api',
            originalUrl: '/api',
            _parsedUrl: Url {
            protocol: null,
                slashes: null,
                auth: null,
                host: null,
                port: null,
                hostname: null,
                hash: null,
                search: null,
                query: null,
                pathname: '/api',
                path: '/api',
                href: '/api',
                _raw: '/api'
        },
        params: {},
        query: {},
        res: ServerResponse {
            _events: [Object: null prototype],
            _eventsCount: 1,
                _maxListeners: undefined,
                outputData: [],
                outputSize: 0,
                writable: true,
                destroyed: false,
                _last: false,
                chunkedEncoding: false,
                shouldKeepAlive: true,
                maxRequestsOnConnectionReached: false,
                _defaultKeepAlive: true,
                useChunkedEncodingByDefault: true,
                sendDate: true,
                _removedConnection: false,
                _removedContLen: false,
                _removedTE: false,
                _contentLength: null,
                _hasBody: true,
                _trailer: '',
                finished: false,
                _headerSent: false,
                _closed: false,
                socket: [Socket],
                _header: null,
                _keepAliveTimeout: 5000,
                _onPendingData: [Function: bound updateOutgoingData],
            req: [Circular *1],
                _sent100: false,
                _expect_continue: false,
                locals: [Object: null prototype] {},
            [Symbol(kCapture)]: false,
                [Symbol(kNeedDrain)]: false,
                [Symbol(corked)]: 0,
                [Symbol(kOutHeaders)]: [Object: null prototype]
        },
        body: {
            query: '\n' +
            '    query IntrospectionQuery {\n' +
            '      __schema {\n' +
            '        \n' +
            '        queryType { name }\n' +
            '        mutationType { name }\n' +
            '        subscriptionType { name }\n' +
            '        types {\n' +
            '          ...FullType\n' +
            '        }\n' +
            '        directives {\n' +
            '          name\n' +
            '          description\n' +
            '          \n' +
            '          locations\n' +
            '          args(includeDeprecated: true) {\n' +
            '            ...InputValue\n' +
            '          }\n' +
            '        }\n' +
            '      }\n' +
            '    }\n' +
            '\n' +
            '    fragment FullType on __Type {\n' +
            '      kind\n' +
            '      name\n' +
            '      description\n' +
            '      \n' +
            '      fields(includeDeprecated: true) {\n' +
            '        name\n' +
            '        description\n' +
            '        args(includeDeprecated: true) {\n' +
            '          ...InputValue\n' +
            '        }\n' +
            '        type {\n' +
            '          ...TypeRef\n' +
            '        }\n' +
            '        isDeprecated\n' +
            '        deprecationReason\n' +
            '      }\n' +
            '      inputFields(includeDeprecated: true) {\n' +
            '        ...InputValue\n' +
            '      }\n' +
            '      interfaces {\n' +
            '        ...TypeRef\n' +
            '      }\n' +
            '      enumValues(includeDeprecated: true) {\n' +
            '        name\n' +
            '        description\n' +
            '        isDeprecated\n' +
            '        deprecationReason\n' +
            '      }\n' +
            '      possibleTypes {\n' +
            '        ...TypeRef\n' +
            '      }\n' +
            '    }\n' +
            '\n' +
            '    fragment InputValue on __InputValue {\n' +
            '      name\n' +
            '      description\n' +
            '      type { ...TypeRef }\n' +
            '      defaultValue\n' +
            '      isDeprecated\n' +
            '      deprecationReason\n' +
            '    }\n' +
            '\n' +
            '    fragment TypeRef on __Type {\n' +
            '      kind\n' +
            '      name\n' +
            '      ofType {\n' +
            '        kind\n' +
            '        name\n' +
            '        ofType {\n' +
            '          kind\n' +
            '          name\n' +
            '          ofType {\n' +
            '            kind\n' +
            '            name\n' +
            '            ofType {\n' +
            '              kind\n' +
            '              name\n' +
            '              ofType {\n' +
            '                kind\n' +
            '                name\n' +
            '                ofType {\n' +
            '                  kind\n' +
            '                  name\n' +
            '                  ofType {\n' +
            '                    kind\n' +
            '                    name\n' +
            '                  }\n' +
            '                }\n' +
            '              }\n' +
            '            }\n' +
            '          }\n' +
            '        }\n' +
            '      }\n' +
            '    }\n' +
            '  ',
                operationName: 'IntrospectionQuery'
        },
        _body: true,
            length: undefined,
            [Symbol(kCapture)]: false,
            [Symbol(kHeaders)]: {
            host: 'localhost:4000',
                connection: 'keep-alive',
                'content-length': '1915',
                'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
                authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZmY5Mjk5MjliNTFiNDFjNzU2YWQ5ZSIsImlhdCI6MTY2MTMyNjc2MX0.Vi0N6AwBfWDdl9nwRtEAs3
            Oek_0Ybhm_nGtOs9hLfg4"',
            'content-type': 'application/json',
                'sec-ch-ua-mobile': '?0',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
                'sec-ch-ua-platform': '"Windows"',
                accept: '*/*',
                origin: 'https://studio.apollographql.com',
                'sec-fetch-site': 'cross-site',
                'sec-fetch-mode': 'cors',
                'sec-fetch-dest': 'empty',
                'accept-encoding': 'gzip, deflate, br',
                'accept-language': 'en-GB,en;q=0.9,ar-AE;q=0.8,ar;q=0.7,ru-RU;q=0.6,ru;q=0.5,en-US;q=0.4'
        },
        [Symbol(kHeadersCount)]: 32,
            [Symbol(kTrailers)]: null,
            [Symbol(kTrailersCount)]: 0,
            [Symbol(RequestTimeout)]: undefined
    },
    res: <ref *2> ServerResponse {
        _events: [Object: null prototype] { finish: [Function: bound resOnFinish] },
        _eventsCount: 1,
            _maxListeners: undefined,
            outputData: [],
            outputSize: 0,
            writable: true,
            destroyed: false,
            _last: false,
            chunkedEncoding: false,
            shouldKeepAlive: true,
            maxRequestsOnConnectionReached: false,
            _defaultKeepAlive: true,
            useChunkedEncodingByDefault: true,
            sendDate: true,
            _removedConnection: false,
            _removedContLen: false,
            _removedTE: false,
            _contentLength: null,
            _hasBody: true,
            _trailer: '',
            finished: false,
            _headerSent: false,
            _closed: false,
            socket: Socket {
            connecting: false,
                _hadError: false,
                _parent: null,
                _host: null,
                _readableState: [ReadableState],
                _events: [Object: null prototype],
            _eventsCount: 8,
                _maxListeners: undefined,
                _writableState: [WritableState],
                allowHalfOpen: true,
                _sockname: null,
                _pendingData: null,
                _pendingEncoding: '',
                server: [Server],
                _server: [Server],
                parser: [HTTPParser],
                on: [Function: socketListenerWrap],
            addListener: [Function: socketListenerWrap],
            prependListener: [Function: socketListenerWrap],
            setEncoding: [Function: socketSetEncoding],
            _paused: false,
                _httpMessage: [Circular *2],
                timeout: 0,
                [Symbol(async_id_symbol)]: 49,
                [Symbol(kHandle)]: [TCP],
                [Symbol(kSetNoDelay)]: false,
                [Symbol(lastWriteQueueSize)]: 0,
                [Symbol(timeout)]: Timeout {
                _idleTimeout: -1,
                    _idlePrev: null,
                    _idleNext: null,
                    _idleStart: 10944,
                    _onTimeout: null,
                    _timerArgs: undefined,
                    _repeat: null,
                    _destroyed: true,
                    [Symbol(refed)]: false,
                    [Symbol(kHasPrimitive)]: false,
                    [Symbol(asyncId)]: 232,
                    [Symbol(triggerId)]: 230
            },
            [Symbol(kBuffer)]: null,
                [Symbol(kBufferCb)]: null,
                [Symbol(kBufferGen)]: null,
                [Symbol(kCapture)]: false,
                [Symbol(kBytesRead)]: 0,
                [Symbol(kBytesWritten)]: 0,
                [Symbol(RequestTimeout)]: undefined
        },
        _header: null,
            _keepAliveTimeout: 5000,
            _onPendingData: [Function: bound updateOutgoingData],
        req: <ref *1> IncomingMessage {
            _readableState: [ReadableState],
                _events: [Object: null prototype],
            _eventsCount: 1,
                _maxListeners: undefined,
                socket: [Socket],
                httpVersionMajor: 1,
                httpVersionMinor: 1,
                httpVersion: '1.1',
                complete: true,
                rawHeaders: [Array],
                rawTrailers: [],
                aborted: false,
                upgrade: false,
                url: '/',
                method: 'POST',
                statusCode: null,
                statusMessage: null,
                client: [Socket],
                _consuming: true,
                _dumped: false,
                next: [Function: next],
            baseUrl: '/api',
                originalUrl: '/api',
                _parsedUrl: [Url],
                params: {},
            query: {},
            res: [Circular *2],
                body: [Object],
                _body: true,
                length: undefined,
                [Symbol(kCapture)]: false,
                [Symbol(kHeaders)]: [Object],
                [Symbol(kHeadersCount)]: 32,
                [Symbol(kTrailers)]: null,
                [Symbol(kTrailersCount)]: 0,
                [Symbol(RequestTimeout)]: undefined
        },
        _sent100: false,
            _expect_continue: false,
            locals: [Object: null prototype] {},
        [Symbol(kCapture)]: false,
            [Symbol(kNeedDrain)]: false,
            [Symbol(corked)]: 0,
            [Symbol(kOutHeaders)]: [Object: null prototype] {
            'x-powered-by': [Array],
                'access-control-allow-origin': [Array]
        }
    }
}
