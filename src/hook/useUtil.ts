export default function useUtil(){
    //methods

    //下載圖片，需要傳入Blob物件唷!
    function downloadImg(blob:Blob,fileName?:string) {
        console.log(blob)
        let a = document.createElement('a')
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

    //base64轉化成圖片
    function converBase64ToBlob (base64:string) {
        //將base64切成[data:image/png;base64,ivBORW0KgoAAAANSU....]
        let [head,body] =  base64.split(',')
        let fileTypeArr = head.match(/:(.*?);/)
        if(!fileTypeArr) return
        let fileType = fileTypeArr[1]
        let biteStr = atob(body)
        let strLength = biteStr.length
        let u8Arr = new Uint8Array(strLength)
        while(strLength --) {
            u8Arr[strLength] = biteStr.charCodeAt(strLength)
        }
        return new Blob([u8Arr],{type:fileType})
    }
    function handleDownloadImg (dataUrl:string,fileName?:string) {
        let bolb = converBase64ToBlob(dataUrl)
        if(bolb)downloadImg(bolb,fileName)
    }
    return {
        //methods
        converCanvasToImage,
        handleDownloadImg
    }
}