import { Newsinterface } from "../interfaces/newsInterface";

export const mergeObjects = (array: Newsinterface[], newObj: Newsinterface): Newsinterface[] => {
    if (!array) return [newObj]
    const index = array.findIndex((obj) => obj._id === newObj._id);
    if (index !== -1) {
        // Object with the same _id already exists, replace it
        return [
            ...array.slice(0, index),
            newObj,
            ...array.slice(index + 1)
        ];
    } else {
        // Object with the given _id doesn't exist, append the new object
        return [...array, newObj];
    }
};
