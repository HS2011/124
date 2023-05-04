
    function setup(){
    drawingBoard = createCanvas(500,399)
    drawingBoard.position(550, 125)
    Picture = createCapture(VIDEO)
    Picture.size(500, 400)

    hi = ml5.poseNet(Picture, ModelLoaded)
    hi.on("pose", posee)
}

function ModelLoaded(){
    console.log("Model Loaded")
}
function posee(results){
    if (results.length>0){
        console.log(results)
    }
}