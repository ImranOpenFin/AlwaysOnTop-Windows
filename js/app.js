
async function createWindow(uuid) {
    const app = await fin.Application.start({
        name: 'myApps',
        uuid,
        url: 'https://cdn.openfin.co/docs/javascript/stable/tutorial-Window.setAsForeground.html',
        autoShow: true,
        alwaysOnTop:true
    });
    const win = await app.getWindow();
    await win.setAsForeground();
    console.log(`In the foreground: ${uuid}`)
}

var timeElement = document.getElementById("time");

function setTime() {
    timeElement.innerHTML = new Date().toLocaleString();
}
setTime();
var clockIntervalId = setInterval(function() {
    setTime()
}, 1000);