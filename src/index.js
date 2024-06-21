const NodeMediaServer = require('node-media-server')

// import NodeMediaServer from NodeMediaServer

const config = {

   rtmp:{
        port:1935,
        chunk_size:60000,
        gp_cache:true,
        ping:30,
        ping_timeout:60
    },

    http:{
        port:8080,
        allow_origin:'*'
    }

}

let nms = new NodeMediaServer(config)

nms.run()