
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

    class MaxRectsBinPack {
        binWidth: number;
        binHeight: number;
        allowRotate: boolean;
        usedRectangles: Rect[];
        freeRectangles: Rect[];
        constructor(width:number, height:number, allowRotate:boolean);
        init(width:number, height:number, allowRotate:boolean);
        insert(width:number, height:number, method:number):Rect;
        insert2(rectangles:Rect[], method:number):Rect[];
        private _placeRectangle(node);
        private _scoreRectangle(width, height, method, score1, score2):Rect;
        private _occupancy():number;
        private _findPositionForNewNodeBottomLeft(width, height, bestY, bestX):Rect;
        private _findPositionForNewNodeBestShortSideFit (width, height, bestShortSideFit, bestLongSideFit):Rect;
        private _findPositionForNewNodeBestLongSideFit (width, height, bestShortSideFit, bestLongSideFit):Rect;
        private _findPositionForNewNodeBestAreaFit (width, height, bestAreaFit, bestShortSideFit):Rect;
        private _commonIntervalLength (i1start, i1end, i2start, i2end):number;
        private _contactPointScoreNode (x, y, width, height):number;
        private _findPositionForNewNodeContactPoint (width, height, bestContactScore):Rect;
        private _splitFreeNode (freeNode, usedNode):boolean;
        private _pruneFreeList();
    }
}

// declare enum InsertMethod {
//     BestShortSideFit = 0,
//     BestLongSideFit = 1,
//     BestAreaFit = 2,
//     BottomLeftRule = 3,
//     ContactPointRule = 4,
// }