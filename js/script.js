let intervalID100;
function Stop() {
  clearInterval(intervalID100);
  document.getElementById("Start").setAttribute("onclick", "Start()");
  document.getElementById("screen").style.animationName = "noscreen";
  if (day == 1 && momo == 1) {
    document.querySelector("body").style =
      "background-color: black; color: gold;";
    document.getElementById("screen").style =
      "background-color: black; border: 2px solid red;";
    document.getElementById("sadom").style =
      "background-color: black; color: gold; border: 2px solid gold";
    document.getElementById("Start").style =
      "background-color: black; color: gold; border: 2px solid gold";
    document.getElementById("Reset").style =
      "background-color: black; color: gold; border: 2px solid gold";
    document.getElementById("Start").innerHTML = "Start";
  } else {
    document.getElementById("Start").style.backgroundColor =
      "rgb(162, 206, 95)";

    document.getElementById("screen").style.borderColor = "red";
    document.getElementById("Start").innerHTML = "Start";
  }
}

function Start() {
  document.getElementById("screen").style.animationName = "screen";
  ///میکرو ثانیه
  intervalID100 = setInterval(() => {
    const num = document.getElementById("sadom").innerHTML;
    let plus = Number(num) + 1;
    document.getElementById("sadom").innerHTML = plus;
    document.getElementById("Start").innerHTML = "Stop";
    document.getElementById("Start").style.backgroundColor = "red";

    if (num >= 99) {
      ///ثانیه
      document.getElementById("sadom").innerHTML = 0;

      const num1 = document.getElementById("sec").innerHTML;
      let plus = Number(num1) + 1;
      document.getElementById("sec").innerHTML = plus;
      document.getElementById("Start").innerHTML = "Stop";
      document.getElementById("Start").style.backgroundColor = "red";

      if (num1 >= 59) {
        /// دقیقه
        document.getElementById("sec").innerHTML = 0;

        const num2 = document.getElementById("min").innerHTML;
        let plus = Number(num2) + 1;
        document.getElementById("min").innerHTML = plus;

        if (num2 >= 59) {
          document.getElementById("min").innerHTML = 0;
        } else {
        }
        if (num2 >= 59) {
          /// ساعت
          document.getElementById("sec").innerHTML = 0;

          const num3 = document.getElementById("hour").innerHTML;
          let plus = Number(num3) + 1;
          document.getElementById("hour").innerHTML = plus;

          if (num1 >= 99) {
            document.getElementById("hour").innerHTML = 0;
          } else {
          }
        } else {
        }
      } else {
      }
    } else {
      document.getElementById("Start").setAttribute("onclick", "Stop()");
    }
  }, 10);
}

function Reset() {
  document.getElementById("sadom").innerHTML = 0;
  document.getElementById("sec").innerHTML = 0;
  document.getElementById("min").innerHTML = 0;
  document.getElementById("hour").innerHTML = 0;
  document.getElementById("screen").style.borderColor = "lightskyblue";
}

function sadom() {
  alert("صدم ثانیه ، میکروثانیه || 0.01");
}

/// حالت شب
day = 0;
momo = 0;
function mode(params) {
  if (day == 0) {
    document.querySelector("body").style =
      "background-color: black; color: gold;";
    document.getElementById("screen").style =
      "background-color: black; border: 2px solid gold;";
    document.getElementById("sadom").style =
      "background-color: black; color: gold; border: 2px solid gold";
    document.getElementById("Start").style =
      "background-color: black; color: gold; border: 2px solid gold";
    document.getElementById("Reset").style =
      "background-color: black; color: gold; border: 2px solid gold";
    day = 1;
    momo = 1;
  } else {
    document.querySelector("body").style = "background-color: ; color: ;";
    document.getElementById("screen").style = "background-color: ; border: ;";
    document.getElementById("sadom").style =
      "background-color: ; color: ; border: ";
    document.getElementById("Start").style =
      "background-color: ; color: ; border: ";
    document.getElementById("Reset").style =
      "background-color: ; color: ; border: ";

    document.getElementById("Start").style.backgroundColor =
      "rgb(162, 206, 95)";
    document.getElementById("screen").style.borderColor = "";
    document.getElementById("Start").innerHTML = "Start";
    day = 0;
    momo = 0;
  }
}
