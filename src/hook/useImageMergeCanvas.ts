import { useEffect, useRef, useState } from "react";
import { Status } from "../types/gloable";
import { fabric } from "fabric";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { setStepIndecatorDon } from "../store/signSlice";
import useImageUtil from "./useImageUtil";
import useMsgBox from "./useMsgBox";
import { setIsMobel } from "../store/mainSlice";
export default function useImageMergeCanvas() {
  //Redux
  const dispatch = useAppDispatch();
  const stepIndecatorDataArray = useAppSelector(
    (state) => state.sign.stepIndecatorDataArray
  );
  const isMobel = useAppSelector((state) => state.main.isMobel);
  //hook
  const { downloadImg } = useImageUtil();
  const { showMsg } = useMsgBox();
  //合併的canvas
  const mergeImageCanvasRef = useRef<HTMLCanvasElement>(null);
  const [mergeCanvas, setMergeCanvas] = useState<fabric.Canvas | null>(null);

  // 簽名檔和背景圖
  const signImg = useAppSelector((state) => state.createSign.handMadeSignImg);
  const bgImg = useAppSelector((state) => state.createSign.BGImg);

  //canvas基本設置
  const [canvasZoomValue, setCanvasZoomValue] = useState<number>(1);
  //監聽RWD變化canvas的zoom
  useEffect(() => {
    setIsMobel(detectmob());
  })
  useEffect(() => {
    if (isMobel) {
      setCanvasZoomValue(0.5);
      console.log("是手機");
    } else {
      setCanvasZoomValue(1);
      console.log("不是手機");
    }
  },[isMobel]);

  // 建立主要canvas
  useEffect(() => {
    setMergeCanvas(new fabric.Canvas(mergeImageCanvasRef.current));
  }, [mergeImageCanvasRef]);

  // 合併簽名檔案
  useEffect(() => {
    if (!mergeCanvas || !signImg) return;
    fabric.Image.fromURL(signImg, (img) => {
      //使用add方法會把圖檔變成可以縮放的狀態
      mergeCanvas.add(img).renderAll();
    });
  }, [mergeCanvas, signImg]);

  // 合併背景圖檔案
  useEffect(() => {
    if (!mergeCanvas || !bgImg) return;
    fabric.Image.fromURL(bgImg, (img) => {
      mergeCanvas.setBackgroundImage(bgImg, () => {
        mergeCanvas.renderAll();
        mergeCanvas.setHeight(img.height!);
        mergeCanvas.setWidth(img.width!);
        scaleImg(img, mergeCanvas);
      });
    });
  }, [mergeCanvas, bgImg]);

  //methods
  //偵測是否為手機
  function detectmob() {
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    ) {
      return true;
    } else {
      return false;
    }
  }
  /**
   * 調整canvas大小，可用於RWD時
   * @param canvas 傳入fabric canvas 物件
   * @param zoom 要縮放的倍率
   * @returns
   */
  function canvasZoom(
    canvas: fabric.Canvas,
    bgImg: fabric.Image,
    zoom: number
  ) {
    let canvasWidth = bgImg.width! * zoom;
    let canvasHeight = bgImg.height! * zoom;
    canvas?.setWidth(canvasWidth);
    canvas.setHeight(canvasHeight);
    return { canvasWidth, canvasHeight };
  }

  // //圖片縮放到canvas上
  function scaleImg(bgImg: fabric.Image, canvas: fabric.Canvas) {
    const { canvasWidth, canvasHeight } = canvasZoom(
      canvas,
      bgImg,
      canvasZoomValue
    );
    const canvasAspect = canvasWidth / canvasHeight;
    const imgAspect = bgImg.width! / bgImg.height!;
    let left, top, scaleFactor;

    if (canvasAspect >= imgAspect) {
      scaleFactor = canvasWidth / bgImg.width!;
      left = 0;
      top = -(bgImg.height! * scaleFactor - canvasHeight) / 2;
    } else {
      scaleFactor = canvasHeight / bgImg.height!;
      top = 0;
      left = -(bgImg.width! * scaleFactor - canvasWidth) / 2;
    }

    canvas.setBackgroundImage(bgImg, canvas.renderAll.bind(canvas), {
      top,
      left,
      originX: "left",
      originY: "top",
      scaleX: scaleFactor,
      scaleY: scaleFactor,
    });
  }
  //下載圖片
  function downloadMergeImage() {
    if (!signImg)
      showMsg({
        type: Status.ERROR,
        title: "簽署未完成",
        message: "您還缺少簽名",
      });
    if (!bgImg)
      showMsg({
        type: Status.ERROR,
        title: "簽署未完成",
        message: "您還缺少文件",
      });
    if (!signImg || !bgImg) return;
    const dataURL = mergeCanvasToImage();
    downloadImg(dataURL!);
    if (!stepIndecatorDataArray[2].done) dispatch(setStepIndecatorDon(2));
  }
  function mergeCanvasToImage() {
    return mergeCanvas?.toDataURL({ format: "png" });
  }

  return {
    //data
    mergeImageCanvasRef,

    //methods
    downloadMergeImage,
    mergeCanvasToImage,
  };
}
