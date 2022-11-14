export default function useImageUtil(){
    //methods
    /**
     * 驗證圖片大小
     * @Auth Jacky Houng
     * @param size 傳入file.size 
     * @returns 返回是否通過大小驗證的boolean
     */
    function checkImageSize(size:number){
        let unit = 1024
        let maxSize = 10
        let sizeOK = size/unit < maxSize*unit
        if (!sizeOK) alert(`請勿上傳超過${maxSize}MB的圖檔`)
        return sizeOK
    }
    //動態獲取靜態圖檔
    function getAssetsFileURL(url:string){
        return new URL(`../../assets/${url}`,import.meta.url).href
    }
    //下載圖片，需要傳入Blob物件唷!
    function downloadImg(url:string,fileName?:string) {
        const link = document.createElement("a");
        link.download = fileName? fileName : 'my-sign'
        link.href = url!;
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        link.parentNode?.removeChild(link);
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

    return {
        //methods
        checkImageSize,
        getAssetsFileURL,
        converCanvasToImage,
        downloadImg,
        converBase64ToBlob,
    }
}