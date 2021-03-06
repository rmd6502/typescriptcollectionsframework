"use strict";
/**
* @license
* Copyright Larry Diamond 2018 All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/larrydiamond/typescriptcollectionsframework/LICENSE
*/
Object.defineProperty(exports, "__esModule", { value: true });
var AllFieldHashable_1 = require("../src/AllFieldHashable");
var Collections_1 = require("../src/Collections");
var HashSet_1 = require("../src/HashSet");
var SkipList_1 = require("../src/SkipList");
var TreeSet_1 = require("../src/TreeSet");
// PetStoreProduct will be used in testing
var PetStoreProduct = /** @class */ (function () {
    function PetStoreProduct(iName, iPrice) {
        this.productName = iName;
        this.price = iPrice;
    }
    PetStoreProduct.prototype.getProductName = function () {
        return this.productName;
    };
    PetStoreProduct.prototype.getPrice = function () {
        return this.price;
    };
    return PetStoreProduct;
}());
var alphabeticalSortPetStoreProduct = {
    compare: function (o1, o2) {
        if (o1 === o2)
            return 0;
        if (o1 === undefined)
            return -1;
        if (o1 === null)
            return -1;
        if (o2 === undefined)
            return 1;
        if (o2 === null)
            return 1;
        if (o1.getProductName() === o2.getProductName())
            return 0;
        if (o1.getProductName() === undefined)
            return -1;
        if (o1.getProductName() === null)
            return -1;
        if (o2.getProductName() === undefined)
            return 1;
        if (o2.getProductName() === null)
            return 1;
        if (o1.getProductName() < o2.getProductName())
            return -1;
        return 1;
    }
};
var product2 = new PetStoreProduct("ChewToy", 14.99);
var product1 = new PetStoreProduct("Catnip", 4.99);
var product3 = new PetStoreProduct("Goldfish", 9.99);
var productNotAvailable = new PetStoreProduct("Bananas", 1.99);
describe("Test generic Set functionality", function () {
    it("Test empty Sets", function () {
        testEmptyStringStringSet(Collections_1.Collections.emptySet());
        testEmptyPetStoreProductAndValueClassSet(Collections_1.Collections.emptySet());
        testEmptyStringStringSet(new HashSet_1.HashSet());
        testEmptyStringStringSet(new HashSet_1.HashSet(new AllFieldHashable_1.AllFieldHashable()));
        testEmptyPetStoreProductAndValueClassSet(new HashSet_1.HashSet());
        testEmptyPetStoreProductAndValueClassSet(new HashSet_1.HashSet(new AllFieldHashable_1.AllFieldHashable()));
        testEmptyStringStringSet(new TreeSet_1.TreeSet(Collections_1.Collections.getStringComparator()));
        testEmptyPetStoreProductAndValueClassSet(new TreeSet_1.TreeSet(alphabeticalSortPetStoreProduct));
        testEmptyStringStringSet(new SkipList_1.SkipListSet(Collections_1.Collections.getStringComparator()));
        testEmptyPetStoreProductAndValueClassSet(new SkipList_1.SkipListSet(alphabeticalSortPetStoreProduct));
    });
    it("Test adding to empty Sets", function () {
        testAddingOneEntryStringStringSet(new HashSet_1.HashSet());
        testAddingOneEntryStringStringSet(new HashSet_1.HashSet(new AllFieldHashable_1.AllFieldHashable()));
        testAddingOneEntryPetStoreProductAndValueClassSet(new HashSet_1.HashSet());
        testAddingOneEntryPetStoreProductAndValueClassSet(new HashSet_1.HashSet(new AllFieldHashable_1.AllFieldHashable()));
        testAddingOneEntryStringStringSet(new TreeSet_1.TreeSet(Collections_1.Collections.getStringComparator()));
        testAddingOneEntryPetStoreProductAndValueClassSet(new TreeSet_1.TreeSet(alphabeticalSortPetStoreProduct));
        testAddingOneEntryStringStringSet(new SkipList_1.SkipListSet(Collections_1.Collections.getStringComparator()));
        testAddingOneEntryPetStoreProductAndValueClassSet(new SkipList_1.SkipListSet(alphabeticalSortPetStoreProduct));
    });
    it("Test adding two items to empty Sets", function () {
        testAddingTwoEntriesStringStringSet(new HashSet_1.HashSet());
        testAddingTwoEntriesStringStringSet(new HashSet_1.HashSet(new AllFieldHashable_1.AllFieldHashable()));
        testAddingTwoEntriesPetStoreProductAndValueClassSet(new HashSet_1.HashSet());
        testAddingTwoEntriesPetStoreProductAndValueClassSet(new HashSet_1.HashSet(new AllFieldHashable_1.AllFieldHashable()));
        testAddingTwoEntriesStringStringSet(new TreeSet_1.TreeSet(Collections_1.Collections.getStringComparator()));
        testAddingTwoEntriesPetStoreProductAndValueClassSet(new TreeSet_1.TreeSet(alphabeticalSortPetStoreProduct));
        testAddingTwoEntriesStringStringSet(new SkipList_1.SkipListSet(Collections_1.Collections.getStringComparator()));
        testAddingTwoEntriesPetStoreProductAndValueClassSet(new SkipList_1.SkipListSet(alphabeticalSortPetStoreProduct));
    });
    it("Test clearing Sets", function () {
        testClearingStringStringSet(new HashSet_1.HashSet());
        testClearingStringStringSet(new HashSet_1.HashSet(new AllFieldHashable_1.AllFieldHashable()));
        testClearingPetStoreProductAndValueClassSet(new HashSet_1.HashSet());
        testClearingPetStoreProductAndValueClassSet(new HashSet_1.HashSet(new AllFieldHashable_1.AllFieldHashable()));
        testClearingStringStringSet(new TreeSet_1.TreeSet(Collections_1.Collections.getStringComparator()));
        testClearingPetStoreProductAndValueClassSet(new TreeSet_1.TreeSet(alphabeticalSortPetStoreProduct));
        testClearingStringStringSet(new SkipList_1.SkipListSet(Collections_1.Collections.getStringComparator()));
        testClearingPetStoreProductAndValueClassSet(new SkipList_1.SkipListSet(alphabeticalSortPetStoreProduct));
    });
});
function testEmptyStringStringSet(Set) {
    expect(Set.isEmpty()).toEqual(true);
    expect(Set.size()).toEqual(0);
}
function testEmptyPetStoreProductAndValueClassSet(Set) {
    expect(Set.isEmpty()).toEqual(true);
    expect(Set.size()).toEqual(0);
}
function testAddingOneEntryStringStringSet(Set) {
    expect(Set.size()).toEqual(0);
    expect(Set.isEmpty()).toEqual(true);
    expect(true).toEqual(Set.add("testkey"));
    expect(Set.size()).toEqual(1);
    expect(Set.isEmpty()).toEqual(false);
    expect(true).toEqual(Set.contains("testkey"));
    expect(false).toEqual(Set.contains("key not found"));
}
function testAddingOneEntryPetStoreProductAndValueClassSet(Set) {
    expect(Set.size()).toEqual(0);
    expect(Set.isEmpty()).toEqual(true);
    expect(true).toEqual(Set.add(product1));
    expect(Set.size()).toEqual(1);
    expect(Set.isEmpty()).toEqual(false);
}
function testAddingTwoEntriesStringStringSet(Set) {
    expect(Set.size()).toEqual(0);
    expect(Set.isEmpty()).toEqual(true);
    expect(true).toEqual(Set.add("testkey"));
    expect(Set.size()).toEqual(1);
    expect(Set.isEmpty()).toEqual(false);
    expect(true).toEqual(Set.add("secondkey"));
    expect(Set.size()).toEqual(2);
    expect(Set.isEmpty()).toEqual(false);
    expect(true).toEqual(Set.contains("testkey"));
    expect(false).toEqual(Set.contains("key not found"));
}
function testAddingTwoEntriesPetStoreProductAndValueClassSet(Set) {
    expect(Set.size()).toEqual(0);
    expect(Set.isEmpty()).toEqual(true);
    expect(true).toEqual(Set.add(product1));
    expect(Set.size()).toEqual(1);
    expect(Set.isEmpty()).toEqual(false);
    expect(true).toEqual(Set.add(product2));
    expect(Set.size()).toEqual(2);
    expect(Set.isEmpty()).toEqual(false);
}
function testClearingStringStringSet(Set) {
    expect(Set.size()).toEqual(0);
    expect(Set.isEmpty()).toEqual(true);
    expect(true).toEqual(Set.add("testkey"));
    expect(Set.size()).toEqual(1);
    expect(Set.isEmpty()).toEqual(false);
    expect(true).toEqual(Set.add("secondkey"));
    expect(Set.size()).toEqual(2);
    expect(Set.isEmpty()).toEqual(false);
    expect(true).toEqual(Set.contains("testkey"));
    expect(false).toEqual(Set.contains("key not found"));
    expect(undefined).toEqual(Set.clear());
    expect(Set.size()).toEqual(0);
    expect(Set.isEmpty()).toEqual(true);
    expect(false).toEqual(Set.contains("testkey"));
    expect(false).toEqual(Set.contains("key not found"));
}
function testClearingPetStoreProductAndValueClassSet(Set) {
    expect(Set.size()).toEqual(0);
    expect(Set.isEmpty()).toEqual(true);
    expect(true).toEqual(Set.add(product1));
    expect(Set.size()).toEqual(1);
    expect(Set.isEmpty()).toEqual(false);
    expect(true).toEqual(Set.add(product2));
    expect(Set.size()).toEqual(2);
    expect(Set.isEmpty()).toEqual(false);
    expect(undefined).toEqual(Set.clear());
    expect(Set.size()).toEqual(0);
    expect(Set.isEmpty()).toEqual(true);
}
