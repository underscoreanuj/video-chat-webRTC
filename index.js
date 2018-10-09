// WebRTC => it stands for real time communications on the web,
//           basically a set of APIs in the browser that let us
//           stream video/audio and even data.

navigator.webkitGetUserMedia({
    video: true,
    audio: false
}, function (stream) {


    var Peer = require('simple-peer')
    var peer = new Peer({
        initiator: location.hash === '#init',
        trickle: false,
        stream: stream
    })

    peer.on('signal', function (data) {
        document.getElementById('yourId').value = JSON.stringify(data)
    })

    document.getElementById('connect').addEventListener('click', function () {
        var otherId = JSON.parse(document.getElementById('otherId').value)
        peer.signal(otherId)
    })

    document.getElementById('send').addEventListener('click', function () {
        var message = document.getElementById('message').value
        peer.send(message)
    })

    peer.on('data', function (data) {
        document.getElementById('messages').textContent += data + '\n'
    })

    peer.on('stream', function (stream) {
        var video = document.createElement('video')
        document.body.appendChild(video)

        video.src = window.URL.createObjectURL(stream)
        video.play()
    })

}, function (err) {
    alert('error')
    console.log(err);
    
})