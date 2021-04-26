const containsDuplicate = (nums: number[]): boolean => {
    const array = new Set(nums);
    return array.size < nums.length;
}

export default containsDuplicate;