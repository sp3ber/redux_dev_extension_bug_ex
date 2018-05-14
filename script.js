(function() {
  const connectViaExtension = options =>
    window.__REDUX_DEVTOOLS_EXTENSION__.connect(options);
  const devTools = connectViaExtension({
    name: `Some test`
  });
  devTools.init({});

  devTools.send(
    { type: "MY_TEST_ACTION", hello: "world" },
    { myTestState: "super" }
  );
  document
    .querySelector(".js-dispatch-action")
    .addEventListener("click", () => {
      devTools.send(
        { type: "MY_SECOND_TEST_ACTION", hello2: "world2" },
        { myTestState: "super2" }
      );
    });
})();
