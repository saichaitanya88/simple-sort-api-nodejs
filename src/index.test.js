import { bubbleSortHandler, mergeSortHandler } from "./apiHandlers";

describe("app", () => {
    let res;
    beforeEach(() => {
        res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn().mockReturnThis()
        }
    })
    function prepareReq(body) {
        return {
            body
        };
    }
    describe("bubbleSort api call", () => {
        it("should respond with 400 when unsortedNumbers property is not present in request", () => {
            let req = prepareReq({ notUnsortedNumbers: "abcd" });
            bubbleSortHandler(req, res);
            expect(res.status.mock.calls[0][0]).toBe(400);
        });
        it("should respond with 400 when request body is empty", () => {
            let req = prepareReq();
            bubbleSortHandler(req, res);
            expect(res.status.mock.calls[0][0]).toBe(400);
        });
        it("should respond with 400 when unsortedNumber property is invalid", () => {
            let req = prepareReq({
                unsortedNumbers: "haha i'm not an array!"
            });
            bubbleSortHandler(req, res);
            expect(res.status.mock.calls[0][0]).toBe(400);
        });
        it("should respond with 200 when unsortedNumber property is valid", () => {
            let req = prepareReq({
                unsortedNumbers: [1, 2, 34, 6, 1]
            });
            bubbleSortHandler(req, res);
            expect(res.status.mock.calls[0][0]).toEqual(200);
            expect(res.send.mock.calls[0][0]).toEqual([1, 1, 2, 6, 34]);
        });
    });
    describe("mergeSort api call", () => {
        it("should respond with 400 when unsortedNumbers property is not present in request", () => {
            let req = prepareReq({ notUnsortedNumbers: "abcd" });
            mergeSortHandler(req, res);
            expect(res.status.mock.calls[0][0]).toBe(400);
        });
        it("should respond with 400 when request body is empty", () => {
            let req = prepareReq();
            mergeSortHandler(req, res);
            expect(res.status.mock.calls[0][0]).toBe(400);
        });
        it("should respond with 400 when unsortedNumber property is invalid", () => {
            let req = prepareReq({
                unsortedNumbers: "haha i'm not an array!"
            });
            mergeSortHandler(req, res);
            expect(res.status.mock.calls[0][0]).toBe(400);
        });
        it("should respond with 200 when unsortedNumber property is valid", () => {
            let req = prepareReq({
                unsortedNumbers: [1, 2, 34, 6, 1]
            });
            mergeSortHandler(req, res);
            expect(res.status.mock.calls[0][0]).toEqual(200);
            expect(res.send.mock.calls[0][0]).toEqual([1, 1, 2, 6, 34]);
        });
    });
});