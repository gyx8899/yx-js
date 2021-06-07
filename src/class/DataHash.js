function getStringHashCode(s) {
    return s.split("").reduce((a, b) => {
        a = (a << 5) - a + b.charCodeAt(0);
        return a & a;
    }, 0);
}

class DataHash {
    constructor(data = undefined, options = {}) {
        this.hashCode = {};

        this.compare(data, options);
    }

    getHashCode(data) {
        let hashCode = "";
        if (data !== undefined) {
            try {
                hashCode = getStringHashCode(JSON.stringify(data));
            } catch (err) {
                console.error("error: ", err);
            }
        }

        return hashCode;
    }

    compare(data, options) {
        let isEqual = false;
        const id = (options && options.id) || "_";
        const prevHashCode = this.hashCode[id];
        const nextHashCode = this.getHashCode(data);
        isEqual = prevHashCode === nextHashCode;
        this.hashCode[id] = nextHashCode;

        return isEqual;
    }

    destroy() {
        this.hashCode = {};
    }
}

export const dataHash = new DataHash();

export default DataHash;
