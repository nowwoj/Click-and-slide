  window.onload = function () {
            var other = document.createElement("DIV");
            other.setAttribute("id", "other");
            document.body.appendChild(other);

            var pic = document.createElement("DIV");
            pic.setAttribute("id", "pic");
            document.getElementById("other").appendChild(pic);

            var ez = document.createElement("DIV");
            ez.setAttribute("id", "ez");
            ez.onclick = easyWin;
            document.body.appendChild(ez);

            var arrowLeft = document.createElement("IMG");
            arrowLeft.setAttribute("id", "arrowLeft");
            arrowLeft.setAttribute("src", "gfx/arrowleft.png");
            arrowLeft.setAttribute("alt", "arrowLeft");
            arrowLeft.onclick = slideLeft;
            document.getElementById("other").appendChild(arrowLeft);

            var arrowRight = document.createElement("IMG");
            arrowRight.setAttribute("id", "arrowRight");
            arrowRight.setAttribute("src", "gfx/arrowright.png");
            arrowRight.setAttribute("alt", "arrowRight");
            arrowRight.onclick = slideRight;
            document.getElementById("other").appendChild(arrowRight);

            var img1 = document.createElement("IMG");
            img1.setAttribute("src", "gfx/pic2.jpg");
            img1.setAttribute("alt", "pic1");
            img1.setAttribute("class", "img");
            img1.style.width = "100px";
            img1.style.height = "100px";
            img1.style.left = "0px";
            pic.appendChild(img1)

            var img2 = document.createElement("IMG");
            img2.setAttribute("src", "gfx/pic1.jpg");
            img2.setAttribute("alt", "pic2");
            img2.setAttribute("class", "img");
            img2.style.width = "100px";
            img2.style.height = "100px";
            img2.style.left = "100px";
            pic.appendChild(img2)

            var img3 = document.createElement("IMG");
            img3.setAttribute("src", "gfx/pic3.jpg");
            img3.setAttribute("alt", "pic3");
            img3.setAttribute("class", "img");
            img3.style.width = "100px";
            img3.style.height = "100px";
            img3.style.left = "200px";
            pic.appendChild(img3)

            var img4 = document.createElement("IMG");
            img4.setAttribute("src", "gfx/pic2.jpg");
            img4.setAttribute("alt", "pic4");
            img4.setAttribute("class", "img");
            img4.style.width = "100px";
            img4.style.height = "100px";
            img4.style.left = "300px";
            pic.appendChild(img4)

            var removeAllowed = false;
            for (i = 3; i < 7; i++) {
                var btn = document.createElement("BUTTON");
                btn.setAttribute("id", "btn" + i);
                btn.setAttribute("class", "btn");
                btn.onclick = generuj;
                btn.innerHTML = i + "x" + i;
                document.getElementById("other").appendChild(btn);
            }
            var btn1 = document.createElement("BUTTON");
            btn1.setAttribute("id", "btnList");
            btn1.setAttribute("class", "btn");
            btn1.onmouseover = list;
            btn1.onmouseout = function () { if (listaIstnieje == true) { document.getElementById("topList").remove(document.getElementById("topList")); listaIstnieje = false; }; };
            btn1.innerHTML = "TOP 10";
            document.getElementById("other").appendChild(btn1);

            var sc = 100;
            var lastSc;
            document.getElementById("pic").scrollLeft = sc;
            function slideRight() {
                //console.log(document.getElementById("pic").scrollLeft);
                if (document.getElementById("pic").scrollLeft == 300) {
                    sc = 0;
                }
                lastSc = sc;
                sc += 100;
                var Anim = setInterval(frame, 1);
                function frame() {
                    if (lastSc == sc) {
                        clearInterval(Anim);
                        //console.log(document.getElementById("pic").scrollLeft);
                        chooseImage();
                    }
                    else {
                        lastSc++;
                        document.getElementById("pic").scrollLeft = lastSc;
                    }
                }
            }
            function slideLeft() {
                //console.log(document.getElementById("pic").scrollLeft);
                if (document.getElementById("pic").scrollLeft == 0) {
                    sc = 300;
                }
                lastSc = sc;
                sc -= 100;
                var Anim = setInterval(frame, 1);
                function frame() {
                    if (lastSc == sc) {
                        clearInterval(Anim);
                        //console.log(document.getElementById("pic").scrollLeft);
                        chooseImage();
                    }
                    else {
                        lastSc--;
                        document.getElementById("pic").scrollLeft = lastSc;
                    }
                }
            }
            var choosePic = "1";
            function chooseImage() {
                var scroll = document.getElementById("pic").scrollLeft;
                if (scroll == 100)
                    choosePic = "1";
                if (scroll == 200)
                    choosePic = "3";
                if (scroll == 300)
                    choosePic = "2";
                if (scroll == 0)
                    choosePic = "2";
            }
            var listaIstnieje = false;
            function list() {
                var cok = document.cookie;
                //console.log("Odczyt ", cok)
                if (cok != "") {
                    cok = cok.split("; ")
                    //console.log("po splicie ", cok)
                    for (i = 0; i < cok.length; i++) {
                        if (cok[i].charAt(0) == size) {
                            var cok2 = cok[i];
                        }
                    }
                    if (cok2 != null) {
                        cok2 = cok2.split("=")
                        cok2 = cok2[1].split(",")
                        var przycisk = document.getElementById("btnList");
                        var topList = document.createElement("DIV");
                        topList.setAttribute("id", "topList");
                        topList.innerHTML = size + "x" + size;
                        document.getElementById("other").appendChild(topList);

                        for (i = 0; i < cok2.length; i++) {
                            var time = cok2[i];
                            Number(time);
                            var h = Math.floor(time / (60 * 60 * 1000));
                            time -= (h * 60 * 60 * 1000)
                            if (h.toString().length == 1)
                                h = "0" + h;
                            var m = Math.floor(time / (60 * 1000));
                            time -= (m * 60 * 1000)
                            if (m.toString().length == 1)
                                m = "0" + m;
                            var s = Math.floor(time / 1000);
                            time -= (s * 1000)
                            if (s.toString().length == 1)
                                s = "0" + s;
                            var ms = time;
                            if (ms.toString().length == 2)
                                ms = "0" + ms
                            if (ms.toString().length == 1)
                                ms = "00" + ms;

                            var czasik = h + ":" + m + ":" + s + "." + ms;

                            var elem = document.createElement("DIV");
                            elem.setAttribute("id", "elem" + i);
                            elem.setAttribute("class", "elem");
                            elem.innerHTML = (i + 1) + ". " + czasik;
                            document.getElementById("topList").appendChild(elem);
                        }
                        listaIstnieje = true;
                    }
                }
            }
            function saveCookie() {
                //console.log(Number(size));
                var cok = document.cookie;
                //console.log("Surowe ", cok)
                if (cok != "") {
                    cok = cok.split("; ")
                    //console.log("po splicie ", cok)
                    for (i = 0; i < cok.length; i++) {
                        if (cok[i].charAt(0) == size) {
                            var cok2 = cok[i];
                        }
                    }
                    //console.log(cok2)
                    if (cok2 != null) {
                        cok2 = cok2.split("=")
                        cok2 = cok2[1].split(",")
                    }
                    else {
                        var cok2 = [];
                    }
                }
                else {
                    var cok2 = [];
                }
                cok2.push(time2);
                cok2.sort(function (a, b) { return a - b });
                if (cok2.length > 10) {
                    cok2.splice(10, (cok2.length - 9));
                }
                var k = new Date();
                k.setTime(k.getTime() + 1000 * 60 * 60 * 8760)
                document.cookie = size + "=" + cok2.toString() + "; expires=" + k;
                // console.log(cok2)
                var x = document.cookie
                //console.log("Zapisano ciastko: ", time2, x);
            }
            var size = 3;
            function generuj() {
                if (removeAllowed == true)
                    document.getElementById("plansza").remove(document.getElementById("plansza"));

                var plansza = document.createElement("DIV");
                plansza.setAttribute("id", "plansza");
                removeAllowed = true;
                document.body.appendChild(plansza);

                size = this.id;
                size = size.substr(3, 1);
                var k = 0;
                var p = 0;
                var l = 0;
                for (i = 0; i < (size * size) ; i++) {
                    var d = document.createElement("DIV");
                    d.setAttribute("id", "d" + i);
                    d.setAttribute("class", "d");
                    if ((i % size) == 0 && i != 0) {
                        k = 0;
                        p += (600 / size);
                        l++;
                    }
                    d.style.backgroundImage = "url('gfx/pic" + choosePic + ".jpg')";
                    d.style.backgroundPosition = (k * ((100 + (100 / (size - 1))) / (size))) + "% " + (l * ((100 + (100 / (size - 1))) / (size))) + "%";
                    d.style.height = (600 / size) + "px";
                    d.style.width = (600 / size) + "px";
                    d.onclick = move;
                    d.style.left = k * (600 / size) + "px"; //ulozenie poprawne
                    d.style.top = p + "px"; //ulozenie poprawne
                    if (i == size * size - 1) {
                        d.style.backgroundImage = "none";
                        d.style.background = "white";
                        d.style.cursor = "auto";
                        d.setAttribute("id", "pusty");
                    }
                    document.getElementById("plansza").appendChild(d);
                    k++;
                }
                k = 0;
                p = 0;
                /*for(i=0;i<(size*size);i++)
                    tab[i]=i;
                // losowanie polozenia
                for(i=0; i<(size*size) ; i++)
                {
                    var random = Math.floor(Math.random()*(tab.length));
                    if((i%size)==0 && i!=0)
                    {
                        k=0;
                        p+=(600/size);
                    }
                    document.getElementById("d"+tab[random]).style.left=k*(600/size)+"px";
                    document.getElementById("d"+tab[random]).style.top=p+"px";
                    tab.splice(random, 1);
                    k++;
                }
                */
                licznikTasuj = 0;
                czas = "00:00:00.000";
                zegarek(czas);
                petlaTasuj();
                var f = 1;
                function petlaTasuj() {
                    setTimeout(function () {
                        tasuj();
                        f++;
                        if (f < 100 * size)
                            petlaTasuj();
                    }, 1)
                    stoper();
                }
            }
            function easyWin() {
                if (removeAllowed == true)
                    document.getElementById("plansza").remove(document.getElementById("plansza"));

                var plansza = document.createElement("DIV");
                plansza.setAttribute("id", "plansza");
                removeAllowed = true;
                document.body.appendChild(plansza);

                var k = 0;
                var p = 0;
                var l = 0;
                for (i = 0; i < (size * size) ; i++) {
                    var d = document.createElement("DIV");
                    d.setAttribute("id", "d" + i);
                    d.setAttribute("class", "d");
                    if ((i % size) == 0 && i != 0) {
                        k = 0;
                        p += (600 / size);
                        l++;
                    }
                    d.style.backgroundImage = "url('gfx/pic" + choosePic + ".jpg')";
                    d.style.backgroundPosition = (k * ((100 + (100 / (size - 1))) / (size))) + "% " + (l * ((100 + (100 / (size - 1))) / (size))) + "%";
                    d.style.height = (600 / size) + "px";
                    d.style.width = (600 / size) + "px";
                    d.onclick = move;
                    d.style.left = k * (600 / size) + "px"; //ulozenie poprawne
                    d.style.top = p + "px"; //ulozenie poprawne
                    if (i == size * size - 1) {
                        d.style.backgroundImage = "none";
                        d.style.background = "white";
                        d.style.cursor = "auto";
                        d.setAttribute("id", "pusty");
                    }
                    document.getElementById("plansza").appendChild(d);
                    k++;
                }
                k = 0;
                p = 0;
                //console.log("d"+((size*size)-2));
                var xx = document.getElementById("d" + ((size * size) - 2)).style.left;
                var yy = document.getElementById("d" + ((size * size) - 2)).style.top;
                document.getElementById("d" + ((size * size) - 2)).style.left = document.getElementById("pusty").style.left;
                document.getElementById("d" + ((size * size) - 2)).style.top = document.getElementById("pusty").style.top;
                document.getElementById("pusty").style.left = xx;
                document.getElementById("pusty").style.top = yy;
                czas = "00:00:00.000";
                zegarek(czas);
                stoper();
            }
            var licznikTasuj = 0;
            function wygrana() {
                //var tabBlock = document.getElementsByClassName("d");
                //console.log(tabBlock[0]);
                var p = 0;
                var k = 0;
                //console.log("sprawdzanie wygranej");
                var wygrano = 0;
                for (i = 0; i < (size * size) - 1 ; i++) {
                    if ((i % size) == 0 && i != 0) {
                        k = 0;
                        p += (600 / size);
                    }
                    if (
                        (document.getElementById("d" + i).style.left == (k * (600 / size) + "px")) &&  //ulozenie poprawne
                        (document.getElementById("d" + i).style.top == (p + "px"))
                    ) {
                        wygrano++;
                    }
                    else {
                        wygrano = 0;
                    }
                    //ulozenie poprawne
                    //console.log(document.getElementById("d"+i).style.left,(k*(600/size)+"px"))
                    //console.log(document.getElementById("d"+i).style.top, (p+"px"))
                    k++;
                }
                k = 0;
                p = 0;
                if (wygrano == ((size * size) - 1)) {
                    var tab = document.getElementsByClassName("d");
                    for (i = 0; i < tab.length; i++) {
                        tab[i].onclick = function () { return false; };
                        tab[i].style.cursor = "auto";
                    }
                    clearInterval(aa);
                    setTimeout(alertWin, 500);
                    saveCookie();
                }
            }
            function alertWin() {
                var plansza = document.createElement("DIV");
                plansza.setAttribute("id", "alertWin");
                plansza.style.opacity = "0";
                document.body.appendChild(plansza);

                var napis = document.createElement("DIV");
                napis.setAttribute("id", "alertWinText");
                napis.innerHTML = "ZWYCIĘSTWO <br>" + "<span>" + czas + "</span>";
                document.getElementById("alertWin").appendChild(napis);

                var ok = document.createElement("DIV");
                ok.setAttribute("id", "alertWinOk");
                ok.innerHTML = "OK";
                ok.onclick = function () {
                    var op2 = 0.95;
                    var opEnd2 = 0;
                    var Anim3 = setInterval(frame, 20);
                    function frame() {
                        if (op2 < opEnd2) {
                            clearInterval(Anim3);
                            document.getElementById("alertWin").remove(document.getElementById("alertWin"));
                        }
                        else {
                            op2 -= 0.05;
                            document.getElementById("alertWin").style.opacity = op2;
                        }
                    }
                };
                document.getElementById("alertWin").appendChild(ok);

                var op = 0;
                var opEnd = 0.95;
                var Anim2 = setInterval(frame, 20);
                function frame() {
                    if (op > opEnd) {
                        clearInterval(Anim2);
                    }
                    else {
                        op += (0.05);
                        document.getElementById("alertWin").style.opacity = op;
                    }
                }
            }
            function tasuj() {
                licznikTasuj++;
                //console.log(licznikTasuj);
                var pusty1 = document.getElementById("pusty");
                var pTop1 = pusty1.offsetTop;
                var pLeft1 = pusty1.offsetLeft;
                var rozmiar1 = pusty1.style.width;
                rozmiar1 = Number(rozmiar1.substr(0, rozmiar1.length - 2));
                //console.log(rozmiar1)
                //var random1 = Math.floor(Math.random()*(size*size-1));
                //console.log(random1);
                //var randomBlok1 = document.getElementById("d"+random1);
                //console.log(randomBlok);
                var tab = document.getElementsByClassName("d");
                var tab2 = [];
                var z = 0;
                for (i = 0; i < tab.length - 1; i++) {
                    var toTop1 = tab[i].offsetTop;//randomBlok1.offsetTop;
                    var toLeft1 = tab[i].offsetLeft;//randomBlok1.offsetLeft;
                    //console.log(toTop1,toLeft1)
                    if ((toTop1 == (pTop1 + rozmiar1) && pLeft1 == toLeft1) || (toTop1 == (pTop1 - rozmiar1) && pLeft1 == toLeft1) || (toLeft1 == (pLeft1 - rozmiar1) && pTop1 == toTop1) || (toLeft1 == (pLeft1 + rozmiar1) && pTop1 == toTop1)) {
                        //console.log("wszedłem")
                        tab2[z] = tab[i];
                        z++;
                    }
                }
                var random1 = Math.floor(Math.random() * (tab2.length));
                //console.log(random1,tab2[random1],tab2);
                var randomBlok1 = tab2[random1];
                //console.log(randomBlok1);
                var aa = randomBlok1.style.left;
                var bb = randomBlok1.style.top;
                randomBlok1.style.left = pusty1.style.left;
                randomBlok1.style.top = pusty1.style.top;
                pusty1.style.left = aa;
                pusty1.style.top = bb;
            }
            function move() {
                var toTop = this.offsetTop;
                var toLeft = this.offsetLeft;
                var pusty = document.getElementById("pusty");
                var pTop = pusty.offsetTop;
                var pLeft1 = pusty.offsetLeft;
                var rozmiar = pusty.style.width;
                rozmiar = Number(rozmiar.substr(0, rozmiar.length - 2));
                //console.log(rozmiar);
                if (
                    (pTop == (toTop - rozmiar) && pLeft1 == toLeft) ||
                    (pTop == (toTop + rozmiar) && pLeft1 == toLeft) ||
                    (pLeft1 == (toLeft - rozmiar) && pTop == toTop) ||
                    (pLeft1 == (toLeft + rozmiar) && pTop == toTop)
                  ) {
                    //zamiana polozeniem
                    //console.log("Move");
                    this.style.left = pLeft1 + "px";
                    this.style.top = pTop + "px";
                    pusty.style.left = toLeft + "px";
                    pusty.style.top = toTop + "px";

                }
                wygrana();
            }
            var aa;
            var time2;
            function stoper() {
                clearInterval(aa);
                //console.log(new Date().getTime());
                var d = new Date().getTime();
                aa = setInterval(function () { //clearInterval(aa)
                    time = new Date().getTime();
                    var time = time - d;
                    time2 = time;

                    var h = Math.floor(time / (60 * 60 * 1000));
                    time -= (h * 60 * 60 * 1000)
                    if (h.toString().length == 1)
                        h = "0" + h;
                    var m = Math.floor(time / (60 * 1000));
                    time -= (m * 60 * 1000)
                    if (m.toString().length == 1)
                        m = "0" + m;
                    var s = Math.floor(time / 1000);
                    time -= (s * 1000)
                    if (s.toString().length == 1)
                        s = "0" + s;
                    var ms = time;
                    if (ms.toString().length == 2)
                        ms = "0" + ms
                    if (ms.toString().length == 1)
                        ms = "00" + ms;

                    czas = h + ":" + m + ":" + s + "." + ms;
                    //console.log(czas);
                    zegarek(czas);
                }, 1);
            };
            var czas = "00:00:00.000";
            var p = "";
            var removeAllowedZegar = false;
            function zegarek(czas) {
                var czas2 = czas;
                if (removeAllowedZegar == true) {
                    document.getElementById("zegar").parentNode.removeChild(document.getElementById("zegar"));
                    p = "";
                }
                var zegareczek = document.createElement("DIV");
                zegareczek.setAttribute("id", "zegar");
                document.getElementById("other").appendChild(zegareczek);
                for (c = 0; c < (czas2.length) ; c++) {
                    var z = czas2.substr(c, 1);
                    switch (z) {
                        default:
                            break;
                        case ":":
                            z = 10;
                            break;
                        case ".":
                            z = 11;
                            break;
                    }
                    document.getElementById("zegar").innerHTML = p + "<img alt='znak' src='gfx/c" + z + ".gif'/>";
                    p += "<img alt='znak' src='gfx/c" + z + ".gif'/>";
                }
                removeAllowedZegar = true;
            };
        }