var container;
var timeOut;
var buttonStyle;
timeOut = setInterval(function () {
  var freetrial = document.evaluate(
    "//a[contains(., '7-Day Free Trial')]",
    document,
    null,
    XPathResult.ANY_TYPE,
    null
  );
  container = freetrial.iterateNext();
  if (container) {
    buttonStyle = container.classList.value;
    container = container.parentElement;
    var element = document.createElement("button");
    element.innerText = "⚡ recharge";
    element.id = "recharger";
    element.classList = buttonStyle;
    container.append(element);
    clearTimeout(timeOut);
    element.addEventListener("click", function () {
      container.querySelector("b").innerText = "3";
      localStorage.removeItem("global_search");
    });
  }
}, 3000);
