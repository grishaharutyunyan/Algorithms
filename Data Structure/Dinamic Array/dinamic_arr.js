class DynamicArray {
    #array;
    #size;
    #capacity;

    constructor() {
        this.#capacity = 1;
        this.#size = 0;
        this.#array = new Array(this.#capacity);
    }

    push_back(value) {
        if (this.#size == this.#capacity) {
            this.growArray()
        }
        this.#array[this.#size] = value;
        this.#size++;
    }

    pop_back() {
        if (this.#size === 0) {
            throw new RangeError('Array is empty');
        }
        this.#array[this.#size - 1] = undefined;
        this.#size--;
        if (this.#size > 0 && this.#size === Math.floor(this.#capacity / 2)) {
            this.shrinkArray();
        }
    }

    growArray(){
        let tmp = new Array(this.#capacity * 2)
        this.#capacity = this.#capacity * 2 ;
         for(let i = 0 ; i < this.#size; i++){
         tmp[i] = this.#array[i]
         }

         this.#array = null ;
         this.#array = tmp;
    }

    shrinkArray(){
        this.#capacity = this.#size;
        let temp = new Array(this.#capacity);
        for (let i = 0; i < this.#size; i++) {
            temp[i] = this.#array[i];
    }
        this.#array = null;
        this.#array = temp;
}
    search(key){
        for(let i = 0 ; i <this.#size;i++){
            if(this.#array[i] == key){
                return i ;
            }
        }
        return -1;
    }

    insertAt(index, value) {
        if (this.#size == this.#capacity) {
            this.growArray();
        }
        for (let i = this.#size - 1; i >= index; i--) {
            this.#array[i + 1] = this.#array[i];
        }
        this.#array[index] = value;
        this.#size++;
    }

    deleteAt(index) {
        for (let i = index; i < this.#size; i++) {
            this.#array[i] = this.#array[i + 1];
        }
        this.#array[this.#size - 1] = 0;
         this.#size--;
        if (this.#size == (this.#capacity / 2)) {
            shrinkArray();
        }
    }

    getSize() {
        return this.#size;

    }
    getCapacity() {
        return this.#capacity;
    }

    printArrayInfo() {
        console.log("Elements of array : ");
        console.log(this.#array);
        console.log("No of elements in array : ", this.#size
            , ", Capacity of array :", this.#capacity);
    }
 
    isEmpty() {
        if (size == 0) {
            return true;
        }
        else {
            return false;
        }
    }
};




let da = new DynamicArray();
da.push_back(1);
da.push_back(2);
da.push_back(3);
da.push_back(4);
da.push_back(5);
da.push_back(6);
da.push_back(7);
da.push_back(8);
da.push_back(9);
da.push_back(10);
da.printArrayInfo();

da.shrinkArray();
console.log("\nCapacity of array  after shrinking : "
    , da.getCapacity());
 
console.log("\nAfter inserting at index 3 ");
da.insertAt(3, 50);
da.printArrayInfo();
 
console.log("\nAfter delete last element ");
da.pop_back();
da.printArrayInfo();
 da.deleteAt(2)
console.log("\nAfter deleting at index 3 ");
da.deleteAt(3);
da.printArrayInfo();
 
console.log("\nSearching 5 in array ");
let index = da.search(5);
if (index >= 0) {
    console.log("Element found at index : ", index);
}
else {
    console.log("Element not found ");
}




