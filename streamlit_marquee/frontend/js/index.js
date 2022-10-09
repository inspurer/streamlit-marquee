function sendMessageToStreamlitClient(type, data) {
    var outData = Object.assign({
        isStreamlitMessage: true,
        type: type,
    }, data);
    window.parent.postMessage(outData, "*");
}

function init() {
    sendMessageToStreamlitClient("streamlit:componentReady", { apiVersion: 1 });
}

function setFrameHeight(height) {
    sendMessageToStreamlitClient("streamlit:setFrameHeight", { height: height });
}

// The `data` argument can be any JSON-serializable value.
function sendDataToPython(data) {
    sendMessageToStreamlitClient("streamlit:setComponentValue", data);
}


function onDataFromPython(event) {
    if (event.data.type !== "streamlit:render") return;
    console.log('recericed data', event.data)
    var args = event.data.args;
    var marqueeDoc = document.getElementById('marquee');
    if (args.background) {
        marqueeDoc.style.background = args.background;
    }
    if (args.width) {
        marqueeDoc.style.width = args.width;
    }

    var contentDoc = document.getElementById('content');

    if (args.color) {
        contentDoc.style.color = args.color;
    }

    if (args.content) {
        contentDoc.innerHTML = args.content;
    }

    if (args.lineHeight) {
        contentDoc.style.lineHeight = args.lineHeight;
    }

    if(args.animationDuration){
        contentDoc.style.animationDuration = args.animationDuration;
    }

    if(args.fontSize){
        contentDoc.style.fontSize = args.fontSize;
    }


}


window.addEventListener("message", onDataFromPython);
init();

window.addEventListener("load", function () {
    window.setTimeout(function () {
        setFrameHeight(document.documentElement.clientHeight)
    }, 0);
});

def

