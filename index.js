(function () {
  console.log("this function works");
  const a = 1;
  console.log(a);
})()(
  //This is my function

  function () {
    console.log("this is Tomer's function");
    const b = 2;
    console.log(b);
  }
)();