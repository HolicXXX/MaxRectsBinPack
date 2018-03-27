declare module mr {
    class Rect {
        x: number;
        y: number;
        width: number;
        height: number;
        constructor(x: number, y: number, width: number, height: number);
        clone(): Rect;
        isContainedIn(a:Rect, b:Rect): boolean;
    }

    enum InsertMethod {
        BestShortSideFit = 0,
        BestLongSideFit = 1,
        BestAreaFit = 2,
        BottomLeftRule = 3,
        ContactPointRule = 4,
    }

    class MaxRectsBinPack {
        binWidth: number;
        binHeight: number;
        allowRotate: boolean;
        usedRectangles: Rect[];
        freeRectangles: Rect[];
        constructor(width:number, height:number, allowRotate:boolean);
        init(width:number, height:number, allowRotate:boolean);
        insert(width:number, height:number, method:MaxRectsBinPack.InsertMethod);
        insert2(rectangles:Rect[], method:MaxRectsBinPack.InsertMethod);
    }

}