
document.addEventListener("DOMContentLoaded", function () {
    class Column {
        create() {
            let table = document.createElement("table");
            let tr = document.createElement("tr"),
                output = document.createElement("td");
            output.setAttribute("class", "output");
            output.innerHTML = '0';
            let col = 0;
            let tr0 = document.createElement("tr"),
                tr1 = document.createElement("tr"),
                tr2 = document.createElement("tr"),
                tr3 = document.createElement("tr"),
                tr4 = document.createElement("tr"),
                tr5 = document.createElement("tr"),
                tr6 = document.createElement("tr"),
                tr7 = document.createElement("tr")
            let div0 = document.createElement("div");
            div0.setAttribute("class", "bar");
            let div1 = document.createElement("div");
            div1.setAttribute("class", "bar");
            let div3 = document.createElement("div");
            div3.setAttribute("class", "bar");
            let div4 = document.createElement("div");
            div4.setAttribute("class", "bar");
            let div5 = document.createElement("div");
            div5.setAttribute("class", "bar");
            let div6 = document.createElement("div");
            div6.setAttribute("class", "bar");
            let div7 = document.createElement("div");
            div7.setAttribute("class", "bar");
            let td0 = document.createElement("td");
            div0.classList.add("hidden");
            td0.appendChild(div0);
            td0.setAttribute("class", "ball");
            tr0.appendChild(td0);
            td0.addEventListener("click", function () {
                if (td0.classList.contains("ball")) {
                    td0.classList.remove("ball");
                    div0.classList.remove("hidden");
                    td1.classList.add("ball");
                    div1.classList.add("hidden");
                    col += 5;
                    output.innerHTML = col;
                }
            });
            let td1 = document.createElement("td");
            td1.appendChild(div1);
            tr1.appendChild(td1);
            td1.addEventListener("click", function () {
                if (td1.classList.contains("ball")) {
                    td0.classList.add("ball");
                    div0.classList.add("hidden");
                    td1.classList.remove("ball");
                    div1.classList.remove("hidden");
                    col -= 5;
                    output.innerHTML = col;
                }
            });
            let td2 = document.createElement("td");
            td2.setAttribute("class", "horizontal-bar");
            tr2.appendChild(td2);
            let td3 = document.createElement("td");
            td3.appendChild(div3);
            tr3.appendChild(td3);
            td3.addEventListener("click", function () {
                if (!td4.classList.contains("ball")) {
                    td4.classList.add("ball");
                    div4.classList.add("hidden");
                    td3.classList.remove("ball");
                    div3.classList.remove("hidden");
                    col -= 1;
                    output.innerHTML = col;
                }
                if (!td5.classList.contains("ball")) {
                    td5.classList.add("ball");
                    div5.classList.add("hidden");
                    td3.classList.remove("ball");
                    div3.classList.remove("hidden");
                    col -= 2;
                    output.innerHTML = col;
                }
                if (!td6.classList.contains("ball")) {
                    td6.classList.add("ball");
                    div6.classList.add("hidden");
                    td3.classList.remove("ball");
                    div3.classList.remove("hidden");
                    col -= 3;
                    output.innerHTML = col;
                }

                if (!td7.classList.contains("ball")) {
                    td7.classList.add("ball");
                    div7.classList.add("hidden");
                    td3.classList.remove("ball");
                    div3.classList.remove("hidden");
                    col -= 4;
                    output.innerHTML = col;
                }
            });
            let td4 = document.createElement("td");
            td4.setAttribute("class", "ball");
            div4.classList.add("hidden");
            td4.appendChild(div4);
            tr4.appendChild(td4);
            td4.addEventListener("click", function () {
                if (!td3.classList.contains("ball")) {
                    td3.classList.add("ball");
                    div3.classList.add("hidden");
                    td4.classList.remove("ball");
                    div4.classList.remove("hidden");
                    col += 1;
                    output.innerHTML = col;
                }
                if (!td5.classList.contains("ball")) {
                    td5.classList.add("ball");
                    div5.classList.add("hidden");
                    td4.classList.remove("ball");
                    div4.classList.remove("hidden");
                    col -= 1;
                    output.innerHTML = col;
                }
                if (!td6.classList.contains("ball")) {
                    td6.classList.add("ball");
                    div6.classList.add("hidden");
                    td4.classList.remove("ball");
                    div4.classList.remove("hidden");
                    col -= 2;
                    output.innerHTML = col;
                }
                if (!td7.classList.contains("ball")) {
                    td7.classList.add("ball");
                    div7.classList.add("hidden");
                    td4.classList.remove("ball");
                    div4.classList.remove("hidden");
                    col -= 3;
                    output.innerHTML = col;
                }
            });
            let td5 = document.createElement("td");
            td5.setAttribute("class", "ball");
            div5.classList.add("hidden");
            td5.appendChild(div5);
            tr5.appendChild(td5);
            td5.addEventListener("click", function () {
                if (!td3.classList.contains("ball")) {
                    td3.classList.add("ball");
                    div3.classList.add("hidden");
                    td5.classList.remove("ball");
                    div5.classList.remove("hidden");
                    col += 2;
                    output.innerHTML = col;
                }
                if (!td4.classList.contains("ball")) {
                    td4.classList.add("ball");
                    div4.classList.add("hidden");
                    td5.classList.remove("ball");
                    div5.classList.remove("hidden");
                    col += 1;
                    output.innerHTML = col;
                }
                if (!td6.classList.contains("ball")) {
                    td6.classList.add("ball");
                    div6.classList.add("hidden");
                    td5.classList.remove("ball");
                    div5.classList.remove("hidden");
                    col -= 1;
                    output.innerHTML = col;

                }
                if (!td7.classList.contains("ball")) {
                    td7.classList.add("ball");
                    div7.classList.add("hidden");
                    td5.classList.remove("ball");
                    div5.classList.remove("hidden");
                    col -= 2;
                    output.innerHTML = col;
                }
            });
            let td6 = document.createElement("td");
            td6.setAttribute("class", "ball");
            div6.classList.add("hidden");
            td6.appendChild(div6);
            tr6.appendChild(td6);
            td6.addEventListener("click", function () {
                if (!td3.classList.contains("ball")) {
                    td3.classList.add("ball");
                    div3.classList.add("hidden");
                    td6.classList.remove("ball");
                    div6.classList.remove("hidden");
                    col += 3;
                    output.innerHTML = col;
                }
                if (!td4.classList.contains("ball")) {
                    td4.classList.add("ball");
                    div4.classList.add("hidden");
                    td6.classList.remove("ball");
                    div6.classList.remove("hidden");
                    col += 2;
                    output.innerHTML = col;
                }
                if (!td5.classList.contains("ball")) {
                    td5.classList.add("ball");
                    div5.classList.add("hidden");
                    td6.classList.remove("ball");
                    div6.classList.remove("hidden");
                    col += 1;
                    output.innerHTML = col;
                }
                if (!td7.classList.contains("ball")) {
                    td7.classList.add("ball");
                    div7.classList.add("hidden");
                    td6.classList.remove("ball");
                    div6.classList.remove("hidden");
                    col -= 1;
                    output.innerHTML = col;
                }
            });
            let td7 = document.createElement("td");
            td7.setAttribute("class", "ball");
            div7.classList.add("hidden");
            td7.appendChild(div7);
            tr7.appendChild(td7);
            td7.addEventListener("click", function () {
                if (!td3.classList.contains("ball")) {
                    td3.classList.add("ball");
                    div3.classList.add("hidden");
                    td7.classList.remove("ball");
                    div7.classList.remove("hidden");
                    col += 4;
                    output.innerHTML = col;
                }
                if (!td4.classList.contains("ball")) {
                    td4.classList.add("ball");
                    div4.classList.add("hidden");
                    td7.classList.remove("ball");
                    div7.classList.remove("hidden");
                    col += 3;
                    output.innerHTML = col;
                }
                if (!td5.classList.contains("ball")) {
                    td5.classList.add("ball");
                    div5.classList.add("hidden");
                    td7.classList.remove("ball");
                    div7.classList.remove("hidden");
                    col += 2;
                    output.innerHTML = col;
                }
                if (!td6.classList.contains("ball")) {
                    td6.classList.add("ball");
                    div6.classList.add("hidden");
                    td7.classList.remove("ball");
                    div7.classList.remove("hidden");
                    col += 1;
                    output.innerHTML = col;
                }
            });
            table.appendChild(tr0);
            table.appendChild(tr1);
            table.appendChild(tr2);
            table.appendChild(tr3);
            table.appendChild(tr4);
            table.appendChild(tr5);
            table.appendChild(tr6);
            table.appendChild(tr7);
            table.appendChild(output);
            document.getElementById("root").appendChild(table);
        }
    }

    let getNumber = (nr_columns) => {
        return Math.floor(Math.random() * parseInt('9'.repeat(nr_columns))) + 1;
    }
    let width = screen.width;
    let nr_cols = 0;

    if (width >= 650) {
        nr_cols = 10;
    } else if (width < 340) {
        nr_cols = 4
     } else {
        nr_cols = 5;
    }

    for (let col = 0; col < nr_cols; col++) {
        let obj = new Column();
        obj.create();
    }

    let x = getNumber(nr_cols);

    let correct = document.getElementById("correct");
    let wrong = document.getElementById("wrong");
    let num = document.getElementById("number");
    num.value = x;

    document.getElementById("new-number").addEventListener("click", function () {
        x = getNumber(nr_cols);
        num.value = x;
    })
    document.getElementById("verify").addEventListener("click", function () {
        correct.style.opacity = ".2";
        wrong.style.opacity = ".2";
        let result = document.getElementsByClassName("output");
        let st = [];
        for (let i = 0; i < result.length; i++) {
            st.push(result[i].innerHTML);
        }
        let nr = parseInt(st.splice(',').join(""));
        if (nr === x) {
            correct.style.opacity = "1";

        } else {
            wrong.style.opacity = "1";
        }
    })
});