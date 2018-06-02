import { bubbleSort } from "./bubbleSort";


describe("BubbleSort", () => {
    it("should sort 0 items and return 0 items", () => {
        expect(bubbleSort([])).toBe([]);
    });
    it("should throw error with null input");
    it("should sort 1 item and return 1 item");
    it("should sort 10 items in order");
    it("should sort n items in order");
});