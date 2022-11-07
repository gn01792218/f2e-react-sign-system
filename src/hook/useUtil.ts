export default function useUtil(){
    //methods
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
    return {
        //methods
        downloadImg,
    }
}