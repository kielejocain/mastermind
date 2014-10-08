function startup() {
    var i = 0;
    while (4 > i) {
    solution[i]=Math.ceil(Math.random()*6);
    $("#solu"+i).css("background-color",color[solution[i]]);
    i++;
    }
    i = 1;
    var j = 0;
    while (7 > i) {
        while (4 > j) {
            if (solution[j] == i) {
                count[i-1]++;
            }
            j++;
        }
        j = 0;
        i++;
    }
    $("#sub0").html("<b>Guess #1:</b>");
    $(function() {
        $(".drag").draggable({
            revert: true,
            containment: '#main',
            helper: myClone
        });
        var i = 0;
        while (4 > i) {
            $("#0"+i).droppable({
                over: function(){
                var hold = $(this).attr("id");
                var y = hold.substring(1);
                $(this).css("background-color",color[rgb]);
                what[y] = rgb;
                }
            });
            i++;
        }
    });
}

function myClone ( event ) {
    var hold = $(this).attr("id");
    rgb = parseInt(hold.substring(4));
    return '<div class="drag" style="background-color:'+color[rgb]+'"></div>';
}

function select(x,y) {
    if (x == when) {
        what[y]++;
        if (what[y] == 7) {
            what[y] = 1;
        }
        set_color(x,y);
    }
}

function set_color(x,y) {
    $("#"+x+y).css("background-color",color[what[y]]);
}

function guess(check) {
    if (check == when) {
        if (what[0] == 0 || what[1] == 0 || what[2] == 0 || what[3] == 0) {
            alert("Please make a complete guess.");
        }
        else {
            var i = 1;
            var j = 0;
            var yes = 0;
            var maybe = 0;
            var gcount = [0,0,0,0,0,0];
            while (7 > i) {
                while (4 > j) {
                    if (what[j] == i) {
                        gcount[i-1]++;
                    }
                    j++;
                }
                j = 0;
                i++;
            }
            i = 1;
            j = 0;
            while (7 > i) {
                if (count[i-1] > 0 && gcount[i-1] > 0) {
                    maybe = maybe + Math.min(count[i-1],gcount[i-1]);
                    while (4 > j) {
                        if (solution[j] == i && what[j] == i) {
                            yes++;
                            maybe--;
                        }
                        j++;
                    }
                    j = 0;
                }
                i++;
            }
            var stop = yes + maybe;
            if (yes > 0) {
                $("#res" + when +"0").css("background-color","#000000");
            }
            else if (stop > 0) {
                $("#res" + when +"0").css("background-color","#808080");
            }
            if (yes > 1) {
                $("#res" + when +"1").css("background-color","#000000");
            }
            else if (stop > 1) {
                $("#res" + when +"1").css("background-color","#808080");
            }
            if (yes > 2) {
                $("#res" + when +"2").css("background-color","#000000");
            }
            else if (stop > 2) {
                $("#res" + when +"2").css("background-color","#808080");
            }
            if (yes > 3) {
                $("#res" + when +"3").css("background-color","#000000");
            }
            else if (stop > 3) {
                $("#res" + when +"3").css("background-color","#808080");
            }
            if (yes == 4) {
                $("#logoww").slideToggle(3000);
                $("#end").html("You win!");
            }
            else {
                $("#sub"+when).html("Guess #"+(when+1));
                when++;
                $("#sub"+when).html("<b>Guess #"+(when+1)+":</b>");
                what = [0,0,0,0];
                drop_shift();
            }
        }
    }
}

function drop_shift() {
    var i = 1;
    while (5 > i) {
        $(".slot"+i).droppable("destroy");
        i++;
    }
    i = 0;
    while (4 > i) {
        $("#"+when+i).droppable({
            over: function(){
            var hold = $(this).attr("id");
            var y = hold.substring(1);
            $(this).css("background-color",color[rgb]);
            what[y] = rgb;
            }
        });
    i++;
    }
}
