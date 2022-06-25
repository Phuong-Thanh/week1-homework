import sum3 from "./sum3";
describe("the Add function", () => {
  test("Adding 0 and 0 and 0 should equal 0", () => {
    expect(sum3(0, 0, 0)).toEqual(0);
  });

  test("Adding 0 and 0 and 1 should equal 1", () => {
    expect(sum3(0, 0, 1)).toEqual(1);
  });

  test("Adding 1 and 1 and 1 should equal 3", () => {
    expect(sum3(1, 1, 1)).toEqual(3);
  });

  test("Adding 1000 and 1000 and 1000 should equal 3000", () => {
    expect(sum3(1000, 1000, 1000)).toEqual(3000);
  });

  // Now check the sad path - both extreme and strange inputs and what output they should give

  test("Adding 100000000000000000 and 100000000000000000 and 100000000000000000 should equal 300000000000000000", () => {
    expect(
      add(100000000000000000, 100000000000000000, 100000000000000000)
    ).toEqual(300000000000000000);
  });

  test("Adding false and false should equal false", () => {
    expect(sum3(false, false, false)).toEqual(false);
  });

  test("Adding null and null should equal false", () => {
    expect(add(null, null)).toEqual(false);
  });

  test("Adding undefined and undefined should equal false", () => {
    expect(add(undefined, undefined)).toEqual(false);
  });

  test("Adding NaN and NaN should equal false", () => {
    expect(add(NaN, NaN)).toEqual(false);
  });
});
