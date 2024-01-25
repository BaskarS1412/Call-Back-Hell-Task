let container = ele("div", "class", "container");
let div_tag = ele("div", "style", "text-align: center");
let h3_tag = ele("h3", "id", "display");

function ele(tagname, attname, attvalue) {
  let element = document.createElement(tagname);
  element.setAttribute(attname, attvalue);
  return element;
}

document.body.append(container);
container.append(div_tag);
div_tag.append(h3_tag);

let timer = 10;
let time = document.getElementById("display");
setTimeout(() => {
  time.innerHTML = timer--;
  setTimeout(() => {
    time.innerHTML = timer--;
    setTimeout(() => {
      time.innerHTML = timer--;
      setTimeout(() => {
        time.innerHTML = timer--;
        setTimeout(() => {
          time.innerHTML = timer--;
          setTimeout(() => {
            time.innerHTML = timer--;
            setTimeout(() => {
              time.innerHTML = timer--;
              setTimeout(() => {
                time.innerHTML = timer--;
                setTimeout(() => {
                  time.innerHTML = timer--;
                  setTimeout(() => {
                    time.innerHTML = timer--;
                    setTimeout(() => {
                      time.className = "colorAndStyle";
                      time.innerHTML = "Happy Independence Day!";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
