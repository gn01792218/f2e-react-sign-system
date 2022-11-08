export default function useUtil(){
    //methods

    //下載圖片
    function downloadImg(url:string,fileName?:string) {
        let a = document.createElement('a')
        a.href = url
        if(fileName) a.download = fileName
        let blob = new Blob([url])
        a.href = URL.createObjectURL(blob)
        document.body.appendChild(a)
        a.dispatchEvent(new MouseEvent('click'))
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