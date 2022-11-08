export default function useUtil(){
    //methods

    //下載圖片
    function downloadImg(url:string,fileName?:string) {
        console.log(url)
        let a = document.createElement('a')
        let blob = new Blob([url], {type: "text/plain;charset=utf-8"})
        if(fileName) a.download = fileName
        a.href = URL.createObjectURL(blob)
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
    }

    //canvas轉圖片
     function converCanvasToImage(canvas:HTMLCanvasElement) {
        return canvas.toDataURL()
    }
    return {
        //methods
        downloadImg,
        converCanvasToImage,
    }
}