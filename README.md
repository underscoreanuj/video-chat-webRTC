# video-chat-webRTC

A webRTC based implementation of a video chat application.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them

```
Node.js
```
go to : https://nodejs.org/en/download/


### Installing

A step by step series of examples that tell you have to get the app running

Download the project

```
Download the project from github and put it inside a folder
```

Open the project

```
Install the required npm packages as per the package.json by using -> $ npm-install-all
```


Run the project

```
First run -> $ npm start
This runs the application server on localhost:9966 
(you must allow the application access to the webcam when asked)
Now,
    To span multiple peers do the following :-
    1.  First peer (open in chrome)
        http://localhost:9966/#init
        **Make sure that the first has the /#init suffix**
        'Your ID field will be populated by your addresss which would look something like this :-'
            {"type":"offer","sdp":"v=0\r ................ :actpass\r\na=mid:data\r\na=sctpmap:5000 webrtc-datachannel 1024\r\n"}
            
    2.  Second peer (open in chrome)
        http://localhost:9966
        **Now, paste in the Other ID field the string from the 'Your ID' field of the first peer, and click on connect**
        'this time Your ID field will be populated by your addresss which would look similar to that of the first peer but will be that of the newly created/connected peer'
        
    3.  Now, Copy the 'Your ID' string of the new peer and paste it inside the 'Other ID' field of the first peer.
        Then click on connect. This will establish the webRTC channel and the video feed will become active.
```

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
* email me if any querries : anujsingh9710@gmail.com
