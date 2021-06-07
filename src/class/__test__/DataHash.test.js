import { dataHash } from "../DataHash";

describe("dataHash component", function () {
    const bigInt = BigInt(9007199254740991);
    const baseData = [
        {
            describe: "number",
            datas: [0, 1, -1, 0.1, -0.1],
        },
        {
            describe: "string",
            datas: ["This is a string", "123", "[a, b, c]"],
        },
        {
            describe: "date",
            datas: [new Date(), new Date(0)],
        },
        {
            describe: "boolean",
            datas: [true, false],
        },
        {
            describe: "object",
            datas: [
                "{a:123,b:'vvvv',c: true, d: undefined, e: [1, 2, 'c']}",
                "{name:'kyle', age: 22}",
                "{ a: String.fromCharCode(0x2028),b: String.fromCharCode(0x2029)}",
            ],
        },
    ];

    beforeEach(() => {
        // 初始化
    });
    beforeEach(() => {
        // 初始化
    });

    afterEach(() => {
        // 销毁

        dataHash.destroy();
    });
    afterAll(() => {
        // 销毁
    });

    const caseTest = function (desc, data, comparedData) {
        test(desc, function () {
            // 初始值比较相等，没得比，即不相等
            expect(dataHash.compare(data)).not.toBeTruthy();
            // 第一次比较相等，与同一个数据，即相等
            expect(dataHash.compare(data)).toBeTruthy();
            // 第二次比较相等，与不同数据比，即不等
            expect(dataHash.compare(comparedData)).not.toBeTruthy();
            // 第三次比较相等，与同数据比，即相等
            expect(dataHash.compare(comparedData)).toBeTruthy();
            // 第四次比较相等，与不同数据比，即不等
            expect(dataHash.compare(data)).toBeFalsy();
        });
    };

    for (let i = 0; i < baseData.length; i++) {
        const { describe: desc, datas } = baseData[i];
        for (let j = 0; j < datas.length; j++) {
            caseTest(
                desc,
                datas[j],
                j + 1 < datas.length
                    ? datas[j + 1]
                    : j - 1 < 0
                    ? "any"
                    : datas[j - 1]
            );
        }
    }

    test("Data: BigInt error for JSON.stringify", () => {
        console.log("Normal Case: for catch error!");
        expect(dataHash.compare(bigInt)).not.toBeTruthy();
    });
});
