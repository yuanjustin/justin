//??!!!!!!!!!!!!!!!!!!!!!!!!!ajaxһ��Ҫ��ʱ
//
//var changeTab = function(){
//    var timeId = 0;
//    return function(tabId){
//        if(timeId){
//            clearTimeout(timeId);
//            timeId=0;
//        }
//        setTimeout(function(){
//            //ajax do something
//        },500);
//    };
//}();


//***************
//****�������¼���***
//***************

//document.onmousemove = mouseMove;
//document.onselectionchange= (selectChange());
function onload() {
    var md = new Material();
    document.getElementById("leftMenu").addEventListener("transitionend", function () {
        autoBreakLine();
    });
    document.getElementById("leftMenu").addEventListener("webkitTransitionEnd", function () {
        autoBreakLine();
    });
    window.mySpan = {};
    $('#my-menu').click(
        function (e) {
            //alert($(e.target).parents('li').index());
            if ($('#menuDialog').children().eq($(e.target).parents('li').index()).hasClass('dialog')) {
                Dialog.show($('#menuDialog').children().eq($(e.target).parents('li').index())[0]);

            } else if ($(e.target).parents('li').index() == 20) {
                window.close();
            }
        }
    );
    //Dialog.show(document.querySelector('#importPatient'));
    //document.getElementById("tt").addEventListener("webkitTransitionEnd", function () {
    //    $('#tt').append('<iframe src="demo-files/warning.png" > </iframe>');
    //});
    //Dialog.show(document.querySelector('#login'));
    $('.dialog-overlay').click(function () {
        if (document.querySelector('#login').hidden == true) {
            hideMenu();
        }
    });
    window.unit = new Array();
    window.termAjax = new Array();
    window.baiduAjax = new Array();
    window.disease = new Array();
    window.danger = new Array();
    window.searchResult = new Array();
    SideMenu.hide(document.querySelector('#leftMenu'));
    $('#dk').html($('#dk0').html());
    $('#tb').html($('#tb0').html());
    $('#switchModel').text('�л���סԺ����');
    $('#switchModel').click(function () {
        if($('#switchModel').text()=='�л���סԺ����'){
            $('#dk').html($('#dk1').html());
            $('#tb').html($('#tb1').html());
            $('#switchModel').text('�л������ﲡ��');
        }else{
            $('#dk').html($('#dk0').html());
            $('#tb').html($('#tb0').html());
            $('#switchModel').text('�л���סԺ����');
        }
        $('#dk').find('.card').click(clickSpan);

    });

    $('#inputmenu').click(function (e) {
        if (e.target.tagName == "SPAN") {
            $('.bg-Grey-100').removeClass('bg-Grey-100');
            $(e.target).parent().addClass('bg-Grey-100');
            addspan();

        }        //alert(e.target.innerHTML)
        //$(this).addClass('lll');
    });
    $('#charSelectMenu').click(function (e) {
        if (e.target.tagName == "SPAN") {
            $('.bg-Grey-100').removeClass('bg-Grey-100');
            $(e.target).parent().addClass('bg-Grey-100');
            addspan();

        }

        //alert(e.target.innerHTML)
        //$(this).addClass('lll');
    });
    $('#tipsMenu').click(function (e) {
        if (e.target.tagName == "SPAN") {
            $('.bg-Grey-100').removeClass('bg-Grey-100');
            $(e.target).parent().addClass('bg-Grey-100');
            addspan();
        }
        //alert(e.target.innerHTML)
        //$(this).addClass('lll');
    });
    $('#unitSelectMenu').click(function (e) {

        if ($(e.target).children()[0].tagName == "SPAN") {
            $('.bg-Grey-100').removeClass('bg-Grey-100');
            $(e.target).addClass('bg-Grey-100');
            addspan();
        }
//todo �е�ʱ�����span��ʱ�����li
        //alert(e.target.innerHTML)
        //$(this).addClass('lll');
    });


    //������˵�����¼�
    $('#leftMenu').hover(function () {
        SideMenu.show(document.querySelector('#leftMenu'));
        //console.log('inter');
        //clearTimeout(0);
        //setTimeout(function () {
        //    autoBreakLine();
        //}, 200);
    }, function () {
        menuhide();
    });
    //$('.my-menu-section').mouseenter(function () {
    //    munuchange(this.id);
    //});
    //$('#inputmenu').attr('pinyin',$('#numberInputMenu'));
    //alert($('#inputmenu').attr('pinyin'));

    //����ɾ���¼�
    /* $(document).unbind('keydown').bind('keydown', function (event) {
     event.preventDefault();
     });*/
    $('#dk').find('.card').click(clickSpan);
    $('#searcher').click(clickSpan);
    $('#selectPageUp').click(function () {
        var page = $('#selectBaidu').attr('page');
        if (page > 0) {
            page--;
            $('#selectBaidu').attr('page', page);
            $('#selectBaidu').html('');
            $('#selectTerm').html('');
            for (var i = 0; i <= 4; i++) {
                if (i <= baiduAjax.length - 1) {
                    $('#selectBaidu').append('<li ripple style=" float:left;"><span class=' + baiduAjax[page * 5 + i].class + '>' + baiduAjax[page * 5 + i].value + '</span></li>');
                }
                if (i <= termAjax.length - 1) {
                    $('#selectTerm').append('<li ripple style=" float:left;"><span class=' + termAjax[page * 5 + i].class + '>' + termAjax[page * 5 + i].value + '</span></li>');
                }
            }
        }
    });
    $('#selectPageDown').click(function () {
        var page = $('#selectBaidu').attr('page');
        page++;
        if (page * 5 < baiduAjax.length || page * 5 < termAjax.length) {
            $('#selectBaidu').attr('page', page);
            $('#selectBaidu').html('');
            $('#selectTerm').html('');
            for (var i = 0; i <= 4; i++) {
                if (i <= baiduAjax.length - 1) {
                    $('#selectBaidu').append('<li ripple style=" float:left;" ><span class=' + baiduAjax[page * 5 + i].class + '>' + baiduAjax[page * 5 + i].value + '</span></li>');
                }
                if (i <= termAjax.length - 1) {
                    $('#selectTerm').append('<li ripple style=" float:left;"><span class=' + termAjax[page * 5 + i].class + '>' + termAjax[page * 5 + i].value + '</span></li>');
                }
            }
        }
    });

    $(document).keypress(function (event) {
        if (!event.which && ((event.charCode || event.charCode === 0) ? event.charCode : event.keyCode)) {
            event.which = event.charCode || event.keyCode;
        }
        if (getState() == 'type' || getState() == 'numberInput' || getState() == 'tips') {
            if (TypeKeyPress(event.which)) {//�жϰ������ҷ����Ƿ�����
                event.preventDefault();//���ΰ���
            }
        } else {
            if (noTypeKeyPress(event.which)) {//�жϰ������ҷ����Ƿ�����
                event.preventDefault();//���ΰ���
            }
        }

    });

    $(document).keydown(function (event) {
        if (event.which == 37 || event.which == 38 || event.which == 39
            || event.which == 40 || event.which == 8
            || event.which == 33 || event.which == 34) {
            if (getState() == 'type' || getState() == 'numberInput' || getState() == 'tips') {
                if (TypeKeyPress(event.which)) {
                    return false;
                }
                ;
            } else {
                if (noTypeKeyPress(event.which)) {
                    return false;
                }
                ;
            }
            //event.keyCode = 0 ;
            // event.returnValue=false;

        }
    });
    $('#dk').css('height', $(window).height() - $('#tb1').height());

    $(window).resize(function () {
        //$('#dk').css('height', $(window).height() - $('#tb1').height());
        autoBreakLine;
        //alert($(window).height()-$("#tb1").height());
    });

}
//********************************************************************************

//***************
//****�����¼�***
//***************
function getTerm() {

    //���浽ȫ�ֱ���

}
//*****************************************����ʱ��********************************
function noTypeKeyPress(event) {
    //alert(event);
    if ((event >= 65 && event <= 90) || (event >= 97 && event <= 122)) {
        if (getState() != 'type') {
            $('#inputmenu')[0].hidden = false;
            $('#unitSelectMenu')[0].hidden = true;
            $('#charSelectMenu')[0].hidden = true;
            $('#numberInputMenu')[0].hidden = true;
            $('#tipsMenu')[0].hidden = true;
            $('#positonMenu')[0].hidden = true;
            $('#numSelectMenu')[0].hidden = true;
            if ($('#searcher').is(":focus")) {//todo
                //alert('');
                $('#inputmenu').offset({top: 20, left: 0});
                $('#inputer').val(String.fromCharCode(event));
                $('#searcher').val('');
                $('#inputer').focus(); //setCaretPos0($('#inputer'));
                inputerChange();
                return true;
            } else {
                setDivPosi($('#inputmenu'), getCaretPos());
            }
            $('#inputer').focus(); //setCaretPos0($('#inputer'));
            //inputerChange();
        }
        return false;//��Ҫ���ΰ���
    } else if (event >= 48 && event <= 57) {
        if ($('#searcher').is(":focus")) {//todo
            return true;
        }
        if (getState() != 'numberInput') {
            $('#inputmenu')[0].hidden = true;
            $('#unitSelectMenu')[0].hidden = true;
            $('#charSelectMenu')[0].hidden = true;
            $('#numberInputMenu')[0].hidden = false;
            $('#tipsMenu')[0].hidden = true;
            $('#positonMenu')[0].hidden = true;
            $('#numSelectMenu')[0].hidden = true;
            setDivPosi($('#numberInputMenu'), getCaretPos());
            $('#numberInputer').focus(); //setCaretPos0($('#inputer'));
            //inputerChange();
        }
        return false;//��Ҫ���ΰ���
    } else {
        $('#inputmenu')[0].hidden = true;
        $('#unitSelectMenu')[0].hidden = true;
        $('#charSelectMenu')[0].hidden = true;
        $('#numberInputMenu')[0].hidden = true;
        $('#tipsMenu')[0].hidden = true;
        $('#positonMenu')[0].hidden = true;
        $('#numSelectMenu')[0].hidden = true;
        switch (event) {
            case 8:
                //alert($('#a1').children(":last").attr('id'));
                //$('.firstline').append($('.secondline').children());
                removeSpan(getCaretPos());
                break;
            case 190:
                //alert($('#a1').children(":last").attr('id'));
                //$('.firstline').append($('.secondline').children());
                newline(getCaretPos());
                break;
            case 188:
                //alert($('#a1').children(":last").attr('id'));
                //$('.firstline').append($('.secondline').children());
                newline(getCaretPos());
                break;
            case 40://����
                movespan('down');
                break;
            case 38://����
                movespan('up');
                break;
            case 37://����
                movespan('backward');
                break;
            case 39://����
                movespan('forward');
                break;
            case 49://test
                //alert('1');
                //event.keyCode = 0;
                //event.returnValue =  false;
                addspan(getCaretPos(), 'symptom', 'symptom', 'pinyin');
                break;
            case 44://��
                addspan(getCaretPos(), '��', 'endspan', '!');
                break;
            case 46://��
                addspan(getCaretPos(), '��', 'endspan', '!');
                break;
            case 50://test
                //alert($('#a1').children(":last").attr('id'));
                //$('.firstline').append($('.secondline').children());
                addspan(getCaretPos(), 'position', 'position', 'ooo');
                break;
            case 51://test
                //alert($('#a1').children(":last").attr('id'));
                //$('.firstline').append($('.secondline').children());

                $("#a1_2")[0].focus();
                break;
        }
        return true;//���ΰ���
    }
}
function TypeKeyPress(event) {
    //alert(event);
    if ((event >= 65 && event <= 90) || (event >= 97 && event <= 122)) {
        if (getState() != 'type') {
            mySpan = getCaretPos();
            $('#inputmenu')[0].hidden = false;
            $('#unitSelectMenu')[0].hidden = true;
            $('#charSelectMenu')[0].hidden = true;
            $('#numberInputMenu')[0].hidden = true;
            $('#tipsMenu')[0].hidden = true;
            $('#positonMenu')[0].hidden = true;
            $('#numSelectMenu')[0].hidden = true;
            if ($('#searcher').is(":focus")) {//todo
                //alert('');
                //$('#inputmenu').offset({top: 20 , right:160 });
                $('#inputer').val(String.fromCharCode(event));
                $('#searcher').val('');
                $('#inputer').focus(); //setCaretPos0($('#inputer'));
                inputerChange();
                return true;
            } else {
                $('#inputmenu').offset({
                    top: mySpan.offset().top,
                    left: mySpan.offset().left + mySpan.outerWidth(true)
                });
            }
            $('#inputer').focus(); //setCaretPos0($('#inputer'));
            //inputerChange();
        }
        return false;//��Ҫ���ΰ���

    } else if (event >= 48 && event <= 57) {
        switch (getState()) {
            case 'type':
                if (event == 48 || event >= 54) {
                    return true;
                }
                ;
                var selectmenu = $('#inputmenu').find('.bg-Grey-100');
                if (selectmenu[0].tagName == 'INPUT') {
                    selectmenu = $('#baidu').children(':first')
                }
                if (event - 48 <= selectmenu.parent().children().length - 1) {
                    selectmenu.removeClass('bg-Grey-100');
                    selectmenu.parent().children().eq(event - 48 - 1).addClass('bg-Grey-100');
                    addspan();
                }
                return true;//��Ҫ���ΰ���
                break;
            case 'numberInput':
                return false;//��Ҫ���ΰ���
                break;
            case 'tips':

                return true;//��Ҫ���ΰ���
                break;
            default:
                mySpan = getCaretPos();
                $('#inputmenu')[0].hidden = true;
                $('#unitSelectMenu')[0].hidden = true;
                $('#charSelectMenu')[0].hidden = true;
                $('#numberInputMenu')[0].hidden = false;
                $('#tipsMenu')[0].hidden = true;
                $('#positonMenu')[0].hidden = true;
                $('#numSelectMenu')[0].hidden = true;
                $('#numberInputMenu').offset({
                    top: mySpan.offset().top,
                    left: mySpan.offset().left + mySpan.outerWidth(true)
                });
                $('#numberInputer').focus(); //setCaretPos0($('#inputer'));
                //inputerChange();

                return false;//��Ҫ���ΰ���
            //ajaxTerm();
        }
    } else {
        switch (event) {
            case 8:
                return false;//��Ҫ�����˸��
            case 13:
                addspan();
                return true;//��Ҫ�����˸��
            case 32:
                addspan();
                return true;//��Ҫ�����˸��
            case 40://����
                //�ж��ǲ������һ��
                switch (getState()) {
                    case 'type':
                        var selectmenu = $('#inputmenu').find('.bg-Grey-100');
                        if (selectmenu[0].tagName != 'INPUT') {
                            if (selectmenu.parent()[0].id == 'term') {
                                //selectmenu.removeClass('bg-Grey-100');
                                //$('#baidu').children(':first').addClass('bg-Grey-100');
                            } else if (selectmenu.parent()[0].id == 'baidu') {
                                selectmenu.removeClass('bg-Grey-100');
                                if (selectmenu.index() <= $('#term').children().length - 1) {
                                    $('#term').children().eq(selectmenu.index()).addClass('bg-Grey-100');
                                } else {
                                    $('#term').children(':last').addClass('bg-Grey-100');
                                }
                            }
                            return true;
                        } else {
                            selectmenu.removeClass('bg-Grey-100');
                            if (selectmenu.index() <= $('#baidu').children().length - 1) {
                                $('#baidu').children().eq(selectmenu.index()).addClass('bg-Grey-100');
                            } else {
                                $('#baidu').children(':last').addClass('bg-Grey-100');
                            }
                            return true;
                        }
                    case 'numberInput':
                        var selectmenu = $('#mainNum').find('.bg-Grey-100');
                        //if(selectmenu[0].tagName=='INPUT'){
                        //    selectmenu.removeClass('bg-Grey-100');
                        //    $('#term').children(':first').addClass('bg-Grey-100');
                        //    return false;
                        //}else{
                        if (isLastChild(selectmenu) == false) {
                            selectmenu.removeClass('bg-Grey-100');
                            selectmenu.next().addClass('bg-Grey-100');
                            var page = $('#mainNum').attr('page');
                            var j = unit[page * 5 + (selectmenu.index() + 1)];
                            $('#otherNum').html('');
                            for (var i = 0; i <= 4; i++) {
                                if (i <= j.length - 1) {
                                    $('#otherNum').append('<li ripple><span class=number>' + j[i].value + '</span><span class="unit">' + j[i].unit + '</span></li>');
                                }
                            }
                            $('#otherNum').children(':first').addClass('bg-Grey-100');

                        }
                        else {//��ҳ��һҳ
                            var page = $('#mainNum').attr('page');
                            page++;
                            if (page * 5 < unit.length) {
                                $('#mainNum').attr('page', page);
                                $('#mainNum').html('');
                                $('#otherNum').attr('page', 0);
                                $('#otherNum').html('');
                                for (var i = page * 5; i <= page * 5 + 4; i++) {
                                    if (i <= unit.length - 1) {
                                        $('#mainNum').append('<li ripple><span class=number>' + unit[i][0].value + '</span><span class="unit">' + unit[i][0].unit + '</span></li>');
                                    }
                                    if (i - page * 5 <= unit[page * 5].length - 1) {
                                        $('#otherNum').append('<li ripple><span class=number>' + unit[page * 5][i - page * 5].value + '</span><span class="unit">' + unit[page * 5][i - page * 5].unit + '</span></li>');
                                    }
                                }
                                $('#mainNum').children('.bg-Grey-100').removeClass('bg-Grey-100');
                                $('#otherNum').children('.bg-Grey-100').removeClass('bg-Grey-100');
                                $('#otherNum').children(':first').addClass('bg-Grey-100');
                                $('#mainNum').children(':first').addClass('bg-Grey-100');
                            }
                        }
                        return true;
                    case 'charSelect':
                    case 'unitSelect':
                    case 'tips':
                        var selectmenu = $('#tips').find('.bg-Grey-100');
                        if (isLastChild(selectmenu) == false) {
                            selectmenu.removeClass('bg-Grey-100');
                            selectmenu.next().addClass('bg-Grey-100');
                        }
                        return true;
                    case 'positon':
                    case 'numSelect':

                }


            case 38://����
                switch (getState()) {
                    case 'type':
                        var selectmenu = $('#inputmenu').find('.bg-Grey-100');
                        if (selectmenu[0].tagName != 'INPUT') {
                            if (selectmenu.parent()[0].id == 'baidu') {
                                selectmenu.removeClass('bg-Grey-100');
                                $('#inputer').addClass('bg-Grey-100');
                            }
                            else {
                                selectmenu.removeClass('bg-Grey-100');
                                if (selectmenu.index() <= $('#baidu').children().length - 1) {
                                    $('#baidu').children().eq(selectmenu.index()).addClass('bg-Grey-100');
                                } else {
                                    $('#baidu').children(':last').addClass('bg-Grey-100');
                                }
                            }
                            return true;
                        } else {
                            return false;
                        }

                    case 'numberInput':
                        var selectmenu = $('#mainNum').find('.bg-Grey-100');
                        if (isFirstChild(selectmenu) == false) {
                            selectmenu.removeClass('bg-Grey-100');
                            selectmenu.prev().addClass('bg-Grey-100');
                            var page = $('#mainNum').attr('page');
                            var j = unit[page * 5 + (selectmenu.index() - 1)];
                            $('#otherNum').html('');
                            for (var i = 0; i <= 4; i++) {
                                if (i <= j.length - 1) {
                                    $('#otherNum').append('<li ripple><span class=number>' + j[i].value + '</span><span class="unit">' + j[i].unit + '</span></li>');
                                }
                            }
                            $('#otherNum').children(':first').addClass('bg-Grey-100');
                        } else {//��һҳ
                            var page = $('#mainNum').attr('page');
                            if (page > 0) {
                                page--;
                                $('#mainNum').attr('page', page);
                                $('#mainNum').html('');
                                $('#otherNum').attr('page', 0);
                                $('#otherNum').html('');
                                for (var i = page * 5; i <= page * 5 + 4; i++) {
                                    if (i <= unit.length - 1) {
                                        $('#mainNum').append('<li ripple><span class=number>' + unit[i][0].value + '</span><span class="unit">' + unit[i][0].unit + '</span></li>');
                                    }
                                    if (i - page * 5 <= unit[page * 5].length - 1) {
                                        $('#otherNum').append('<li ripple><span class=number>' + unit[page * 5][i - page * 5].value + '</span><span class="unit">' + unit[page * 5][i - page * 5].unit + '</span></li>');
                                    }
                                }
                                $('#mainNum').children('.bg-Grey-100').removeClass('bg-Grey-100');
                                $('#otherNum').children('.bg-Grey-100').removeClass('bg-Grey-100');
                                $('#otherNum').children(':first').addClass('bg-Grey-100');
                                $('#mainNum').children(':last').addClass('bg-Grey-100');
                            }
                        }
                        return true;
                    case 'charSelect':
                    case 'unitSelect':
                    case 'tips':
                        var selectmenu = $('#tips').find('.bg-Grey-100');
                        if (isFirstChild(selectmenu) == false) {
                            selectmenu.removeClass('bg-Grey-100');
                            selectmenu.prev().addClass('bg-Grey-100');
                        }
                        return true;
                    case 'positon':
                    case 'numSelect':

                }

            case 37://����
                switch (getState()) {
                    case 'type':
                        var selectmenu = $('#inputmenu').find('.bg-Grey-100');
                        if (selectmenu[0].tagName != 'INPUT') {
                            if (isFirstChild(selectmenu) == false) {
                                selectmenu.removeClass('bg-Grey-100');
                                selectmenu.prev().addClass('bg-Grey-100');
                            } else {
                                var selectmenu = $('#inputmenu').find('.bg-Grey-100').parent();
                                var page = selectmenu.attr('page');
                                if (page > 0) {
                                    page--;
                                    selectmenu.attr('page', page);
                                    var term = selectmenu[0].id == 'baidu' ? baiduAjax : termAjax;
                                    selectmenu.html('');
                                    for (var i = 0; i <= 4; i++) {
                                        //selectmenu .children().eq(i).text(term[page*5+i].value);
                                        selectmenu.append('<li ripple style=" float:left;">' + '<span>' + (i + 1) + '.</span>' + '<span class=' + term[page * 5 + i].class + '>' + term[page * 5 + i].value + '</span></li>');
                                    }
                                    selectmenu.children('.bg-Grey-100').removeClass('bg-Grey-100');
                                    selectmenu.children(':first').addClass('bg-Grey-100');
                                }
                            }
                            return true;
                        } else {
                            return false;
                        }
                    case 'numberInput':
                        var selectmenu = $('#otherNum').find('.bg-Grey-100');
                        if (isFirstChild(selectmenu) == false) {
                            selectmenu.removeClass('bg-Grey-100');
                            selectmenu.prev().addClass('bg-Grey-100');
                        } else {
                            var page = $('#otherNum').attr('page');
                            var mainIndex = $('#mainNum').find('.bg-Grey-100').index() + $('#mainNum').attr('page') * 5;
                            if (page > 0) {
                                page--;
                                $('#otherNum').attr('page', page);
                                $('#otherNum').html('');
                                for (var i = page * 5; i <= page * 5 + 4; i++) {
                                    if (i - page * 5 <= unit[page * 5].length - 1) {
                                        $('#otherNum').append('<li ripple><span class=number>' + unit[mainIndex][i].value + '</span><span class="unit">' + unit[mainIndex][i].unit + '</span></li>');
                                    }
                                }
                                $('#otherNum').children('.bg-Grey-100').removeClass('bg-Grey-100');
                                $('#otherNum').children(':last').addClass('bg-Grey-100');
                            }
                        }
                        return true;
                    case 'charSelect':
                    case 'unitSelect':
                    case 'tips':
                    case 'positon':
                    case 'numSelect':

                }

            case 39://����
                switch (getState()) {
                    case 'type':
                        var selectmenu = $('#inputmenu').find('.bg-Grey-100');
                        if (selectmenu[0].tagName == 'INPUT') {
                            //selectmenu.removeClass('bg-Grey-100');
                            //$('#term').children(':first').addClass('bg-Grey-100');
                            return false;
                        } else {
                            if (isLastChild(selectmenu) == false) {
                                selectmenu.removeClass('bg-Grey-100');
                                selectmenu.next().addClass('bg-Grey-100');
                            } else {
                                var selectmenu = $('#inputmenu').find('.bg-Grey-100').parent();
                                var page = selectmenu.attr('page');
                                var term = selectmenu[0].id == 'baidu' ? baiduAjax : termAjax;
                                page++;
                                if (page * 5 < term.length) {
                                    selectmenu.attr('page', page);
                                    selectmenu.html('');
                                    if ((page + 1) * 5 <= term.length) {
                                        for (var i = 0; i <= 4; i++) {
                                            //selectmenu .children().eq(i).text(term[page*5+i].value);
                                            selectmenu.append('<li ripple style=" float:left;">' + '<span>' + (i + 1) + '.</span>' + '<span class=' + term[page * 5 + i].class + '>' + term[page * 5 + i].value + '</span></li>');
                                        }
                                    } else {
                                        for (var i = 0; i <= term.length - page * 5 - 1; i++) {
                                            //selectmenu .children().eq(i).text(term[page*5+i].value);
                                            selectmenu.append('<li ripple style=" float:left;">' + '<span>' + (i + 1) + '.</span>' + '<span class=' + term[page * 5 + i].class + '>' + term[page * 5 + i].value + '</span></li>');
                                        }
                                    }
                                    selectmenu.children('.bg-Grey-100').removeClass('bg-Grey-100');
                                    selectmenu.children(':first').addClass('bg-Grey-100');
                                }
                            }
                            return true;
                        }

                    case 'numberInput':
                        var selectmenu = $('#otherNum').find('.bg-Grey-100');
                        if (isLastChild(selectmenu) == false) {
                            selectmenu.removeClass('bg-Grey-100');
                            selectmenu.next().addClass('bg-Grey-100');
                        }
                        else {//othernum ��һҳ
                            var page = $('#otherNum').attr('page');
                            var mainIndex = $('#mainNum').find('.bg-Grey-100').index() + $('#mainNum').attr('page') * 5;
                            page++;
                            if (page * 5 < unit[mainIndex].length) {
                                $('#otherNum').attr('page', page);
                                $('#otherNum').html('');
                                for (var i = page * 5; i <= page * 5 + 4; i++) {
                                    if (i - page * 5 <= unit[page * 5].length - 1) {
                                        $('#otherNum').append('<li ripple><span class=number>' + unit[mainIndex][i].value + '</span><span class="unit">' + unit[mainIndex][i].unit + '</span></li>');
                                    }
                                }
                                $('#otherNum').children('.bg-Grey-100').removeClass('bg-Grey-100');
                                $('#otherNum').children(':first').addClass('bg-Grey-100');
                            }
                        }
                        return true;
                    case 'charSelect':
                    case 'unitSelect':
                    case 'tips':
                    case 'positon':
                    case 'numSelect':

                }


            case 33://��ҳ
                switch (getState()) {
                    case 'type':
                        var selectmenu = $('#inputmenu').find('.bg-Grey-100').parent();
                        //if(selectmenu[0].tagName='INPUT'){
                        //    selectmenu=$('#baidu');
                        //}
                        var page = selectmenu.attr('page');
                        if (page > 0) {
                            page--;
                            selectmenu.attr('page', page);
                            var term = selectmenu[0].id == 'baidu' ? baiduAjax : termAjax;
                            selectmenu.html('');
                            for (var i = 0; i <= 4; i++) {
                                //selectmenu .children().eq(i).text(term[page*5+i].value);
                                selectmenu.append('<li ripple style=" float:left;">' + '<span>' + (i + 1) + '.</span>' + '<span class=' + term[page * 5 + i].class + '>' + term[page * 5 + i].value + '</span></li>');
                            }
                            selectmenu.children('.bg-Grey-100').removeClass('bg-Grey-100');
                            selectmenu.children(':first').addClass('bg-Grey-100');
                        }
                    case 'numberInput':
                        var page = $('#mainNum').attr('page');
                        if (page > 0) {
                            page--;
                            $('#mainNum').attr('page', page);
                            $('#mainNum').html('');
                            $('#otherNum').attr('page', 0);
                            $('#otherNum').html('');
                            for (var i = page * 5; i <= page * 5 + 4; i++) {
                                if (i <= unit.length - 1) {
                                    $('#mainNum').append('<li ripple><span class=number>' + unit[i][0].value + '</span><span class="unit">' + unit[i][0].unit + '</span></li>');
                                }
                                if (i - page * 5 <= unit[page * 5].length - 1) {
                                    $('#otherNum').append('<li ripple><span class=number>' + unit[page * 5][i - page * 5].value + '</span><span class="unit">' + unit[page * 5][i - page * 5].unit + '</span></li>');
                                }
                            }
                            $('#mainNum').children('.bg-Grey-100').removeClass('bg-Grey-100');
                            $('#otherNum').children('.bg-Grey-100').removeClass('bg-Grey-100');
                            $('#otherNum').children(':first').addClass('bg-Grey-100');
                            $('#mainNum').children(':last').addClass('bg-Grey-100');
                        }
                        return true;
                    case 'charSelect':
                    case 'unitSelect':
                    case 'tips':
                    case 'positon':
                    case 'numSelect':

                }


            case 34:
                switch (getState()) {
                    case 'type':
                        var selectmenu = $('#inputmenu').find('.bg-Grey-100').parent();
                        //if(selectmenu[0].tagName='INPUT'){
                        //    selectmenu=$('#baidu');
                        //}
                        var page = selectmenu.attr('page');
                        var term = selectmenu[0].id == 'baidu' ? baiduAjax : termAjax;
                        page++;
                        if (page * 5 < term.length) {
                            selectmenu.attr('page', page);
                            selectmenu.html('');
                            if ((page + 1) * 5 <= term.length) {
                                for (var i = 0; i <= 4; i++) {
                                    //selectmenu .children().eq(i).text(term[page*5+i].value);
                                    selectmenu.append('<li ripple style=" float:left;">' + '<span>' + (i + 1) + '.</span>' + '<span class=' + term[page * 5 + i].class + '>' + term[page * 5 + i].value + '</span></li>');
                                }
                            } else {
                                for (var i = 0; i <= term.length - page * 5 - 1; i++) {
                                    //selectmenu .children().eq(i).text(term[page*5+i].value);
                                    selectmenu.append('<li ripple style=" float:left;">' + '<span>' + (i + 1) + '.</span>' + '<span class=' + term[page * 5 + i].class + '>' + term[page * 5 + i].value + '</span></li>');
                                    //selectmenu.append('<li ripple style=" float:left;"' + 'class=' + term[page * 5 + i].class + '>' + term[page * 5 + i].value + '</li>');
                                }
                            }
                            selectmenu.children('.bg-Grey-100').removeClass('bg-Grey-100');
                            selectmenu.children(':first').addClass('bg-Grey-100');
                        }
                    case 'numberInput':
                        var page = $('#mainNum').attr('page');
                        page++;
                        if (page * 5 < unit.length) {
                            $('#mainNum').attr('page', page);
                            $('#mainNum').html('');
                            $('#otherNum').attr('page', 0);
                            $('#otherNum').html('');
                            for (var i = page * 5; i <= page * 5 + 4; i++) {
                                if (i <= unit.length - 1) {
                                    $('#mainNum').append('<li ripple><span class=number>' + unit[i][0].value + '</span><span class="unit">' + unit[i][0].unit + '</span></li>');
                                }
                                if (i - page * 5 <= unit[page * 5].length - 1) {
                                    $('#otherNum').append('<li ripple><span class=number>' + unit[page * 5][i - page * 5].value + '</span><span class="unit">' + unit[page * 5][i - page * 5].unit + '</span></li>');
                                }
                            }
                            $('#mainNum').children('.bg-Grey-100').removeClass('bg-Grey-100');
                            $('#otherNum').children('.bg-Grey-100').removeClass('bg-Grey-100');
                            $('#otherNum').children(':first').addClass('bg-Grey-100');
                            $('#mainNum').children(':first').addClass('bg-Grey-100');
                            return true;
                            //nextpage
                            //�жϻ���û����һҳ
                            //�еĻ���ʾ����ѡ���һ��Ŀ
                        }
                    case 'charSelect':
                    case 'unitSelect':
                    case 'tips':
                    case 'positon':
                    case 'numSelect':

                            //nextpage
                            //�жϻ���û����һҳ
                            //�еĻ���ʾ����ѡ���һ��Ŀ

                }

        }


    }
    return true;//���ΰ���

    /*switch(getState()) {
     case 'type':
     case 'numberInput':
     case 'charSelect':
     case 'unitSelect':
     case 'tips':
     case 'positon':
     case 'numSelect':
     }*/
}


//**********************************************************************


//*************************����¼�***********************************
//function mouseMove(ev) {
//    Ev = ev || window.event;
//    var mousePos = mouseCoords(ev);
//    if (mousePos.x < 5) {
//        SideMenu.show(document.querySelector('#leftMenu'));
//    }
//    ;
//}
//
//
//function mouseCoords(ev) {
//    if (ev.pageX || ev.pageY) {
//        return {x: ev.pageX, y: ev.pageY};
//    }
//    return {
//        x: ev.clientX + document.body.scrollLeft - document.body.clientLeft,
//        y: ev.clientY + document.body.scrollTop - document.body.clientTop
//    };
//}
function clickSpan() {
    if (document.getElementById("editable").checked == false) {
        return;
    }
    $('#inputer').val('');
    $('#numberInputer').val('');
    $('#inputmenu').find('.bg-Grey-100').removeClass('bg-Grey-100');
    $('#inputer').addClass('bg-Grey-100');
    $('#inputmenu')[0].hidden = true;
    $('#unitSelectMenu')[0].hidden = true;
    $('#charSelectMenu')[0].hidden = true;
    $('#numberInputMenu')[0].hidden = true;
    $('#tipsMenu')[0].hidden = true;
    $('#positonMenu')[0].hidden = true;
    $('#numSelectMenu')[0].hidden = true;
    obj = getCaretPos();
    if (obj[0].tagName == "SPAN") {
        if (obj.hasClass('number')) {
            $('#numSelectMenu')[0].hidden = false;
            var objto = getCaretPos();
            $('#numSelecter').attr('max', Number(objto.text()) * 2);
            $('#numSelecter').attr('min', Number(objto.text()) / 2);
            $('#numSelecter').attr('defaultValue', Number(objto.text()));
            $('#numSelecter').attr('card', objto.parent().parent().index());
            $('#numSelecter').attr('code', objto.parent().index());
            $('#numSelecter').attr('span', objto.index());
            $('#numSelectMenu').offset({
                top: objto.offset().top - $('#numSelectMenu').outerWidth(true) / 2,
                left: objto.offset().left + objto.outerWidth(true)
            });
            $('#numSelectMenu').offset({
                top: objto.offset().top - $('#numSelectMenu').outerWidth(true) / 2,
                left: objto.offset().left + objto.outerWidth(true)
            });
        } else if (obj.hasClass('unit')) {
            $('#unitSelectMenu')[0].hidden = false;
            setDivPosi($('#unitSelectMenu'), getCaretPos());
            $.getJSON(
                "http://localhost:63342/%E7%94%B5%E5%AD%90%E7%97%85%E5%8E%86/json/num.json",//·����������
                {
                    "order": "number", "number": 7
                },
                function (result) {
                    unit = result;
                    $('#mainSelectUnit').attr('page', 0);
                    $('#otherSelectUnit').attr('page', 0);
                    $('#mainSelectUnit').html('');
                    $('#otherSelectUnit').html('');
                    $.each(unit, function (i, item) {
                        $.each(item, function (i, item) {
                            $('#mainSelectUnit').append('<li ripple> <span class="unit">' + item.unit + '</span></li>');
                        });
                    });
                    //for (var i = 0; i <= 4; i++) {
                    //    if (i <= unit.length - 1) {
                    //        $('#mainSelectUnit').append('<li ripple> <span class="unit">' + unit[i][0].unit + '</span></li>');
                    //    }
                    //    if (i <= unit[0].length - 1) {
                    //        $('#otherSelectUnit').append('<li ripple><span class="unit">' + unit[0][i].unit + '</span></li>');
                    //    }
                    //}
                    $('#mainSelectUnit').children(':first').addClass('bg-Grey-100');
                    $('#otherSelectUnit').children(':first').addClass('bg-Grey-100');
                }
            );
        } else if (obj.hasClass('position')) {
            $('#positonMenu')[0].hidden = false;
            var objto = getCaretPos();
            $('#positonMenuX').attr('max', 10);
            $('#positonMenuX').attr('min', 1);
            $('#positonMenuY').attr('max', 10);
            $('#positonMenuY').attr('min', 1);
            $('#positonMenu').attr('card', objto.parent().parent().index());
            $('#positonMenu').attr('code', objto.parent().index());
            $('#positonMenu').attr('span', objto.index());
            $('#positonMenuY').offset({top: 0, left: 0});
            $('#positonMenuX').offset({top: 0, left: 0});
            $('#positonMenuY').offset({
                top: objto.offset().top - $('#positonMenuY').outerWidth(false) / 2,
                left: objto.offset().left + objto.outerWidth(true)
            });
            $('#positonMenuX').offset({
                top: objto.offset().top + objto.innerHeight(),
                left: objto.offset().left - $('#positonMenuX').outerWidth(true) / 2 + objto.innerWidth() / 2
            });
        } else if (obj.hasClass('endspan') || obj.hasClass('newspan')) {
        } else {
            $('#charSelectMenu')[0].hidden = false;
            setDivPosi($('#charSelectMenu'), getCaretPos());
            $.getJSON(
                "http://localhost:63342/%E7%94%B5%E5%AD%90%E7%97%85%E5%8E%86/json/pinyin.json",//·����������
                {
                    "order": "searchtermbyletter", "string": getCaretPos().attr('pinyin')
                },
                function (result) {
                    termAjax = result[0];
                    baiduAjax = result[1];
                    $('#selectBaidu').attr('page', 0);
                    $('#selectTerm').attr('page', 0);
                    $('#selectBaidu').html('');
                    $('#selectTerm').html('');
                    for (var i = 0; i <= 4; i++) {
                        $('#selectBaidu').append('<li ripple style="float:left;"><span class=' + baiduAjax[i].class + '>' + baiduAjax[i].value + '</span></li>');
                        $('#selectTerm').append('<li ripple style="float:left;" ><span class=' + termAjax[i].class + '>' + termAjax[i].value + '</span></li>');
                    }
                }
            );
        }
        selectChange();
    }
}
//**��Ǹı�
function selectChange() {
    //�ı�ѡ�����
    obj = getCaretPos();
    if (obj[0].tagName == "SPAN") {
        if (obj.hasClass('endspan')) {
            $('.selectSpan').removeClass('selectSpan')
            var code = obj.parent();
            while (code.hasClass('secondline')) {
                code.addClass('selectSpan');
                code = code.prev();
            }
            ;
            code.addClass('selectSpan');
            code = code.prev();
            //}else if(obj.hasClass('newspan')){
        } else {
            $('.selectSpan').removeClass('selectSpan')
            obj.addClass('selectSpan');
        }
    }
}


//**�˵�
function menuhide() {
    if (document.getElementById("switch").checked == false) {
        SideMenu.hide(document.querySelector('#leftMenu'));
        //console.log('leave');
        //clearTimeout(0);
        //setTimeout(function () {
        //    autoBreakLine();
        //}, 200);
        // clearTimeout(0);
        //setTimeout(function(){
        //    autoBreakLine(); },50);
    }
}

//function munuchange(id) {
//    for (var i = 1; i <= 5; i++) {
//        var id1 = "m" + i;
//        //alert("#"+id1);
//        $("#" + id1).removeClass("bg-Grey-100");
//        $("#" + id1).addClass("bg-Grey-100");
//    }
//    $("#" + id).removeClass("bg-Grey-100");
//    switch (id) {
//        case "m1":
//            $('#my-menu-right').html('<ul class="menu"> <li ripple ripple><a href="#">Open file</a></li> <li ripple class="divider"></li> <li ripple ripple><a href="#">Reload file</a></li></ul>');
//            break;
//        case "m2":
//            $('#my-menu-right').html("1112");
//            break;
//        case "m3":
//            $('#my-menu-right').html("1113");
//            break;
//        case "m4":
//            $('#my-menu-right').html("1114");
//            break;
//        case "m5":
//            $('#my-menu-right').html("1115");
//            break;
//
//    }
//}
//function myselect(id){
//    $('.myselect').removeClass('myselect');
//    $('#'+id).addClass("myselect");
//}
//*******************************************************************************


//**********************************���²����Ű�*****************************
//function needNewLine(current,code) {
//    var old=code.outerWidth();
//    code.children(':last').remove();
//    var neww=code.outerWidth();
//    if(neww==old){
//        return true;
//    }else{
//        code.append(current);
//        return false;
//    }
//}
function autoBreakLine() {
    //alert(getCaretPos().parent().parent().find("span").length);
    var nowspan = getCaretPos();
    var cards = $('#dk').find('.card');
    for (var j = 0; j <= cards.length - 1; j++) {
        var card = cards.eq(j);
        //alert(card[0].id);
        //var card=$('#gr');
        var allSpan = card.find('span');
        //alert(allSpan.length);
        card.html('');
        card.append("<code class='firstline'> </code>");
        var code = card.children(':first');
        //alert(code[0].className);
        for (var i = 0; i <= allSpan.length - 1; i++) {
            var current = allSpan.eq(i);
            //if(current.hasClass('newspan')){
            //    code.append(current);
            //}else{
            /*if(current.hasClass('endspan')){
             code.append(current);
             card.append("<code class='firstline'></code>");
             code=card.children(':last');
             }
             else{*/
            var old = code.outerWidth(true);
            var oldpos = code.offset().left
            code.append(current);
            var neww = code.outerWidth(true) - current.outerWidth(true);
            var newpos = code.offset().left
            if ((old != neww) || (oldpos != newpos) && (code.children().length != 1)) {
                card.append("<code class='secondline'></code>");
                code = card.children(':last');
                code.append(current);
            }
            if (current.hasClass('endspan')) {
                card.append("<code class='firstline'></code>");
                code = card.children(':last');
            }
            //}
            //}


        }
    }
    try{
        if (nowspan[0].tagName == "SPAN") {
            setCaretPos(nowspan);
        }
    }catch (error) {
        return;
    }
}

function isLeft(obj) {
    /* var bordT = that.outerWidth() - that.innerWidth();
     var paddT = that.innerWidth() - that.width();
     var margT = that.outerWidth(true) - that.outerWidth();*/
    // alert(obj.offset().left-obj.parent().parent().offset().left);
    //alert(obj.offsetLeft);
    //alert(obj[0].id)
    if (obj.offset().left - obj.parent().parent().offset().left == 5) {//5��code��padding+border
        return true;
    } else {
        return false;
    }
}

//**********************
//*******ѡ��Ԫ��********
//*********************

function isFirstChild(obj2) {
    var obj1 = obj2.parent();
    //console.log(obj1.children(":last")[0].id);
    var result = obj1.children(":first")[0] == obj2[0]
    return result;
}

//**���û�ȡָ��
function setCaretPos0(obj) {
    var s = window.getSelection();
    var r = s.getRangeAt(0);
//if( dir=='forward'){
//    r.setStartAfter(obj[0], 0);
//    r.setEndBefore(obj[0], 0);
//}else{
    r.setStart(obj[0], 0);
    r.setEnd(obj[0], 1);
//}
    s.removeAllRanges();
    s.addRange(r);
    selectChange();
}
function setCaretPos(obj) {
    try{
        var s = window.getSelection();
        var r = s.getRangeAt(0);
//if( dir=='forward'){
//    r.setStartAfter(obj[0], 0);
//    r.setEndBefore(obj[0], 0);
//}else{
        r.setStart(obj[0].childNodes[0], 1);
        r.setEnd(obj[0].childNodes[0], 1);
//}
        s.removeAllRanges();
        s.addRange(r);
        selectChange();
        //clickSpan();
    }catch (error) {
        //alert('');
    return;
}

}
function getCaretPos() {
    try {
        range = window.getSelection().getRangeAt(0);
        /*start = range.startOffset;
         end = range.endOffset;*/
        var result = range.startContainer.parentNode;
        return $(result);
    }
    catch (error) {
        return false;
    }
}
//alert(result.parents('.card').children("code:odd").first().attr('id'));
//autoBreakLine(result);
//window.getSelection().modify('move','forward','character');
//var a=window.getSelection().getRangeAt(0);
//alert(a.getRangeAt(0).startContainer.parentNode.atter('id'));
//aaa(result) ;
/*startNode = range.startContainer;
 endNode = range.endContainer;
 selectedText = range.toString();
 alert('start: '+start+'\
 \
 end: '+ end+'\
 \
 text: '+selectedText +'\
 \
 startnode: '+$(startNode.parentNode).index()+'\
 \
 endnode: '+$(endNode.parentNode).index() );*/
//alert(result.parents('.card').children("code:odd").first().attr('id'));
//autoBreakLine(result);
//window.getSelection().modify('move','forward','character');
//var a=window.getSelection().getRangeAt(0);
//alert(a.getRangeAt(0).startContainer.parentNode.atter('id'));
//aaa(result) ;
/*startNode = range.startContainer;
 endNode = range.endContainer;
 selectedText = range.toString();
 alert('start: '+start+'\
 \
 end: '+ end+'\
 \
 text: '+selectedText +'\
 \
 startnode: '+$(startNode.parentNode).index()+'\
 \
 endnode: '+$(endNode.parentNode).index() );*/

//**
function movespan(dir) {
    //��ȡ�Լ�ͬ��λ�� �����ת��ȥ����dir �ж��ǲ���code��� �ǵĻ����Ǿ���ת����һ��code��һ��span �ж��ǲ���c
    // ��Ƭ��� �ǵĻ����Ǿ���ת����һ����Ƭ��һ��span
    var obj = getCaretPos();
    var index;
    //var s=window.getSelection();
    //var r=s.getRangeAt(0);
    //console.log('now'+getCaretPos()[0].id);
    var allSpan = $('#dk').find('span');
    for (var i = 0; i <= allSpan.length - 1; i++) {
        if (obj[0] == allSpan.eq(i)[0]) {
            index = i;
            break;
        }
        ;

    }
    switch (dir) {
        case 'forward':
            if (index == allSpan.length - 1) {
                setCaretPos(allSpan.eq(0));
            } else {
                setCaretPos(allSpan.eq(index + 1));
            }
            break;
        case 'backward':
            if (index == 0) {
                setCaretPos(allSpan.eq(allSpan.length));
            } else {
                setCaretPos(allSpan.eq(index - 1));
            }
            break;
        case 'up':
            var old = allSpan.eq(index).offset().left + allSpan.eq(index).outerWidth(true);
            while (isLeft(allSpan.eq(index)) == false) {
                index--;
            }
            index--;
            while (isLeft(allSpan.eq(index)) == false) {
                if (allSpan.eq(index).offset().left < old) {
                    break;
                }
                index--;
            }
            setCaretPos(allSpan.eq(index));
            break;
        case 'down':
            if (isLeft(allSpan.eq(index)) == false) {
                var old = allSpan.eq(index).offset().left;
                while (isLeft(allSpan.eq(index)) == false) {
                    index++;
                }
                while (isLeft(allSpan.eq(index + 1)) == false) {
                    if (allSpan.eq(index).offset().left + allSpan.eq(index).outerWidth(true) > old) {
                        break;
                    }
                    index++;
                }
            } else {
                index++;
                while (isLeft(allSpan.eq(index)) == false) {
                    index++;
                }
            }


            setCaretPos(allSpan.eq(index));
            break;
    }
}


//function aaa(s){
//   //alert($("#"+s.id).parents('.card').children("code:odd"));
//    //alert($("#a2_1").position().left);
//    //alert(isLeft($('#a2_1')));
//    //autoBreakLine();
//}
//function isLastCode(obj){
//    if(isLastChild(obj)){
//        return true;
//    }else{
//        if(obj[0].className=='firstline'){
//            if(obj.next().children().length==0){
//                return isLastChild(obj.next());
//            }else{
//                return false;
//            }
//        }else if (obj[0].className=='secondline'){
//            return false;
//        }else{
//            alert('islastchild');
//        }
//    }
//}
//function getCaretNum() {
////    range= window.getSelection().getRangeAt(0);
////    start = range.startOffset;
////    console.log(start);
////    return start;
////}

//function isFirstCode(obj){
//    return isFirstChild(obj);
//}
function isLastChild(obj2) {
    var obj1 = obj2.parent();
    //console.log(obj1.children(":last")[0].id);
    var result = obj1.children(":last")[0] == obj2[0]
    return result;
}

//function getparanode(dir){
//    var obj=getCaretPos();
//    if(obj[0].tagName=="DIV"){
//        var num =parseInt(getCaretNum()/2);
//        if(dir='forward'){
//            var result=obj.children().eq(num+1);
//        }else if(dir='backward'){
//            var result=obj.children().eq(num);
//        }else{
//            alert('getparanode');
//        }
//        alert(result.attr('id'));
//        return result;
//    }
//}
/*function movecode(dir){
 //��ȡ�Լ�ͬ��λ�� �����ת��ȥ����dir �ж��ǲ������ �ǵĻ����Ǿ���ת����һ����Ƭ��һ��span
 var obj;
 var s=window.getSelection()
 var r=s.getRangeAt(0)
 switch(dir){
 case 'forward':
 if(isLastCode(getCaretPos().parent())){//span�ĸ�����code
 //��һ����Ƭ;
 //alert('nextcard');
 if(getCaretPos().parent().parent()[0].id=='jt'){
 obj=$('#gr').children().children(":first")[0];
 }else{
 obj=getCaretPos().parent().parent().next().next().children().children(":first")[0];
 }
 }else{
 //alert(getCaretPos().parent().next().children().length==0);
 obj=getCaretPos().parent().next().children().length==0?getCaretPos().parent().next().next().children(":first")[0]:getCaretPos().parent().next().children(":first")[0];//�жϱ���code�Ƿ���span
 //alert(obj.id);
 }
 r.setStartBefore(obj, 0);
 r.setEndBefore(obj,0);
 break;
 case 'backward':
 //alert(getCaretPos().parent()[0].id);
 if(isFirstCode(getCaretPos().parent())){
 if(getCaretPos().parent().parent()[0].id=='gr'){
 obj=$('#jt').children().children(":last")[0];//��һ���Ļ����Ǿͻص����һ��
 }else{
 obj=getCaretPos().parent().parent().prev().prev().children().children(":last")[0];
 }
 }else{
 obj=getCaretPos().parent().prev().children().length==0?getCaretPos().parent().prev().prev().children(":last")[0]:getCaretPos().parent().prev().children(":last")[0];//�жϱ���code�Ƿ���span
 }
 r.setStartAfter(obj, 0);
 r.setEndAfter(obj, 0);
 break;
 }
 console.log(obj.id);
 s.removeAllRanges();
 s.addRange(r);
 }*/
/*switch(dir){
 case 'forward':
 if(isLastChild(getCaretPos())){
 movecode('forward');
 return;
 }else{
 obj=getCaretPos().next()[0];
 }
 r.setStartBefore(obj, 0);
 r.setEndBefore(obj,0);
 break;
 case 'backward':
 if(isFirstChild(getCaretPos())){
 movecode('backward');
 return;
 }else{
 obj=getCaretPos().prev()[0];
 }
 r.setStartAfter(obj, 0);
 r.setEndAfter(obj, 0);
 break;
 }*/
//alert(obj.innerText);
//s.removeAllRanges();
//s.addRange(r);
//console.log(obj.id);
/*function selectcode() {
 if(obj[0].tagName=="SPAN"){
 //����ѡ���ѡ����ȥ��  ѡ������ĸ����code  +css����
 }else if(obj[0].tagName=="DIV"){
 //ȫ������ѡ��
 }
 else
 {
 alert("autoBreakLine")
 }
 }*/

//*********************
//******ɾ��������******
//*********************
function removeSpan(obj) {
    var nowspan;
    if (obj[0].tagName == "SPAN") {
        //�ж��ǲ��Ƕ��ţ��ǵĻ�ɾ������code
        //�ж��ǲ������һ�� �ǵĻ�ɾ������code
        //���ǵĻ���ɾ�����span
        //obj.parent().children('.selectSpan').remove();
        if (obj.hasClass('newspan')) {
            return;
        } else if (obj.hasClass('endspan')) {
            var allSpan = $('#dk').find('span');
            var i0;
            for (var i = 0; i <= allSpan.length - 2; i++) {
                i0 = i;
                if (allSpan.eq(i)[0] == obj[0]) {
                    break;
                }
            }
            nowspan = allSpan.eq(i0 + 1);
            $('.selectSpan').remove();
            setCaretPos(nowspan);
        } else {
            nowspan = getCaretPos().next()
            $('.selectSpan').remove();
            setCaretPos(nowspan);
        }

        //if(nowspan[0].tagName=="SPAN"){

        //}
    }
    /*else if(obj.tagName=="DIV"){
     //��ȡ�ϸ�code ɾ��code
     }*/
    else {
        console.log("remove");
    }
    autoBreakLine();
}

function addspan() {
    //ƴ����������ѡ�� �������ǲ��ǵ�ַ����֢״
    switch (getState()) {
        case 'type':
            $('#inputmenu').find('.bg-Grey-100').children().attr('pinyin', $('#inputer').val());
            var addStr;
            if ($('#inputmenu').find('.bg-Grey-100')[0].tagName != 'INPUT') {
                addStr = $('#inputmenu').find('.bg-Grey-100').children().eq(1).prop("outerHTML");
            } else {
                addStr = $('#baidu').children(':first').children().eq(1).prop("outerHTML");
            }
            //����ר��
            if ($('#inputmenu').offset().left == document.body.offsetWidth - $('#inputmenu').outerWidth(true) || $('#inputmenu').offset().left == 0) {
                $('#searcher').val($(addStr).text());
                $('#inputer').val('');
                //alert( $(addStr).text());
                inputerChange();
                $.getJSON(
                    "http://localhost:63342/%E7%94%B5%E5%AD%90%E7%97%85%E5%8E%86/json/search.json",//·����������
                    {
                        "order": "search", "keyword": $('#searcher').val()
                    },
                    function (result) {
                        var word_list = [];
                        $.each(result, function (i, item) {
                            word_list[i] = {};
                            word_list[i].text = item.disease;
                            word_list[i].weight = item.factor;
                            //$(word_list[i]).attr('text',item.disease);
                            //$(word_list[i]).attr('weight',item.factor);
                        });
                        $("#searchWord").html('');
                        $("#searchWord").jQCloud(word_list);
                        $('#search')[0].hidden = false;
                        $('#search').insertBefore($('#search').siblings('.card').eq(0));
                    }
                );
                return;
            }


            var obj = $('#dk').find('.selectSpan');
            if (obj.hasClass('newspan')) {
                $(addStr).insertBefore(obj);
                setCaretPos(obj);
            } else {
                $(addStr).insertAfter(obj);
                if (obj.next().hasClass('endspan')) {
                    setCaretPos(obj.next().next());
                } else {
                    setCaretPos(obj.next());
                }
            }
            $('#inputer').val('');
            //alert( $(addStr).text());
            inputerChange();
            autoBreakLine();
            $.getJSON(
                "http://localhost:63342/%E7%94%B5%E5%AD%90%E7%97%85%E5%8E%86/json/tips.json",
                {
                    "order": "tips", "term": $(addStr).text()
                },
                function (result) {
                    //$(result.tips).insertAfter(getCaretPos());
                    mySpan = getCaretPos();
                    $('#inputmenu')[0].hidden = true;
                    $('#unitSelectMenu')[0].hidden = true;
                    $('#charSelectMenu')[0].hidden = true;
                    $('#numberInputMenu')[0].hidden = true;
                    $('#tipsMenu')[0].hidden = false;
                    $('#positonMenu')[0].hidden = true;
                    $('#numSelectMenu')[0].hidden = true;
                    $('#tipsMenu').offset({
                        top: mySpan.offset().top,
                        left: mySpan.offset().left + mySpan.outerWidth(true)
                    });
                    $('#tips').html('');
                    $.each(result.tips, function (i, item) {
                        $('#tips').append('<li ripple position=' + result.position[i] + '> ' + item + '</li>');
                    });
                    $('#tips').children(':first').addClass('bg-Grey-100');
                    //for(var j=1;j<=result.position;j++){
                    //    setCaretPos(getCaretPos().next());
                    //}
                }
            );
            //Ѱ�������
            var data = {};
            data.order = 'searchdiseasebysymptom'
            $('#dk .symptom').each(function (i, item) {
                //alert(item.innerHTML);
                $(data).attr("s" + i, item.innerHTML)
            });
            $.getJSON(
                "http://localhost:63342/%E7%94%B5%E5%AD%90%E7%97%85%E5%8E%86/json/disease.json",
                data,
                function (result) {
                    disease = result[1];
                    danger = result[0];
                    var word_list = [];
                    $.each(disease, function (i, item) {
                        word_list[i] = {};
                        word_list[i].text = item.disease;
                        word_list[i].weight = item.factor.replace(/([0-9.]+)%/, function (a, b) {
                                return +b / 100;
                            }) * 10;
                        //$(word_list[i]).attr('text',item.disease);
                        //$(word_list[i]).attr('weight',item.factor);
                    });
                    $("#my_words").html('');
                    $("#my_words").jQCloud(word_list);
                    $('#diseaseCard')[0].hidden = false;
                    $('#diseaseCard').insertBefore($('#diseaseCard').siblings('.card').eq(0));

                    word_list = [];
                    $.each(danger, function (i, item) {
                        word_list[i] = {};
                        word_list[i].text = item.disease;
                        word_list[i].weight = item.factor;
                        //$(word_list[i]).attr('text',item.disease);
                        //$(word_list[i]).attr('weight',item.factor);
                    });
                    $("#dangerWord").html('');
                    $("#dangerWord").jQCloud(word_list);
                    $('#dangerCard')[0].hidden = false;
                    $('#dangerCard').insertBefore($('#dangerCard').siblings('.card').eq(1));

                }
            );



            break;
        case 'numberInput':
            var addStr = $('#otherNum').find('.bg-Grey-100').children().eq(0).prop("outerHTML") + $('#otherNum').find('.bg-Grey-100').children().eq(1).prop("outerHTML");

            var obj = $('#dk').find('.selectSpan');

            if (obj.hasClass('newspan')) {
                $(addStr).insertBefore(obj);
                setCaretPos(obj);
            } else {
                $(addStr).insertAfter(obj);
                if (obj.next().hasClass('endspan')) {
                    setCaretPos(obj.next().next());
                } else {
                    setCaretPos(obj.next());
                }
            }
            $('#numberInputer').val('');
            numInputerChange();
            autoBreakLine();
            break;
        case 'charSelect':
            var addStr = $('#charSelectMenu').find('.bg-Grey-100').html();
            var obj = $('#dk').find('.selectSpan');

                $(addStr).insertAfter(obj);
                    setCaretPos(obj.next());
            obj.next().attr('pinyin', obj.attr('pinyin'));
            obj.remove();
            $('#charSelectMenu')[0].hidden = true;
            autoBreakLine();
            break;
        case 'unitSelect':
            var addStr = $('#unitSelectMenu').find('.bg-Grey-100').html();
            var obj = $('#dk').find('.selectSpan');
            $(addStr).insertAfter(obj);
            setCaretPos(obj.next());
            obj.next().attr('pinyin', obj.attr('pinyin'));
            obj.remove();
            $('#unitSelectMenu')[0].hidden = true;
            autoBreakLine();
            break;
        case 'tips':
            var addStr = $('#tips').find('.bg-Grey-100').html();
            var obj = $('#dk').find('.selectSpan');
            if (obj.hasClass('newspan')) {
                $(addStr).insertBefore(obj);
                setCaretPos(obj);
                //alert($(addStr).length);
                for (var j = 1; j <= $(addStr).length-$('#tips').find('.bg-Grey-100').attr('position')+1; j++) {
                    setCaretPos(getCaretPos().prev());
                }
            } else {
                $(addStr).insertAfter(obj);
                //if (obj.next().hasClass('endspan')) {
                //    setCaretPos(obj.next().next());
                //} else {
                    setCaretPos(obj.next());
                //}
                for (var j = 1; j <= $('#tips').find('.bg-Grey-100').attr('position'); j++) {
                    setCaretPos(getCaretPos().next());
                }
            }
            obj=getCaretPos();
            if (obj.hasClass('number')) {
                    clickSpan();
            } else if (obj.hasClass('unit')) {
                clickSpan();
            } else if (obj.hasClass('position')) {
                clickSpan();
            }
            $('#tipsMenu')[0].hidden = true;
            autoBreakLine();
            break;
        case 'positon':
        case 'numSelect':

    }
    //if (obj[0].tagName == "SPAN") {
    //    //�ж�span�ǲ��Ƕ��� �ǵĻ�������һ��preappend
    //    // ���ǵĻ������ͬ��λ�� �Ӻ���inseraftera
    //    //alert(("<span  class='"+classname+"'>"+s+("</span>")));
    //    if (obj.hasClass('newspan')) {
    //        $("<span  class='" + classname + "'>" + s + ("</span>")).insertBefore(obj);
    //        setCaretPos(getCaretPos().prev());
    //    } else {
    //        $("<span  class='" + classname + "'>" + s + ("</span>")).insertAfter(obj);
    //        if (obj.next().hasClass('endspan')) {
    //            setCaretPos(obj.next().next());
    //        } else {
    //            setCaretPos(obj.next());
    //        }
    //    }
    //    autoBreakLine();
    //}
    /*else if(obj[0].tagName=="DIV"){
     //getCaretNum ������û��code �еĻ������һ��code preappend
     //û�еĻ���һ��code append
     }*/
    //else {
    //    console.log("addspan")
    //}

}

function newline(obj) {
    if (obj.tagName == "SPAN") {
        //��ȡ�����span ��ȡ���ڵ�ͬ��λ��  �Ӷ���span�����һ��span֮�󣨲�Ҫid�����class�����µ�����code append��span ��ȡ����
    }
    /*else if(obj.tagName=="DIV"){
     //��ȡ���ڵ�ͬ��λ��  �Ӷ��������һ��span����Ҫid�����class�����µ�����code ��ȡ����
     }*/
    else {
        console.log("newline")
    }
}

//**************************
//*********��Ƭ***********
//**********************

function addElementDiv() {//���ӿ�Ƭ
    var e = "'demo-files/card-hero.jpg'";
    $("#rightMenu").append('<div class="card rich-card inforcards" z=2><div class="card-hero" style="background-image: url(' + e + ')">		<h1>Kangaroo Valley Safari</h1>	</div>	<div class="divider"></div>	<div class="card-footer">		<button class="button flat">Share</button>		<button class="button flat color-orange-500">Explore</button>	</div></div>');
}


//�ж�״̬����
function getState() {
    if ($('#inputmenu')[0].hidden == false) {
        //if(typeof($('#inputmenu').attr("hidden"))=="undefined"){
        return 'type';
    } else if ($('#numberInputMenu')[0].hidden == false) {
        return 'numberInput';
    } else if ($('#charSelectMenu')[0].hidden == false) {
        return 'charSelect';
    } else if ($('#unitSelectMenu')[0].hidden == false) {
        return 'unitSelect';
    } else if ($('#tipsMenu')[0].hidden == false) {
        return 'tips';
    } else if ($('#positonMenu')[0].hidden == false) {
        return 'positon';
    } else if ($('#numSelectMenu')[0].hidden == false) {
        return 'numSelect';
    } else {
        return 'noType';
    }
}
function numInputerChange() {
    if ($('#numberInputer').val() == '') {
        $('#numberInputMenu').find('.bg-Grey-100').removeClass('bg-Grey-100');
        $('#numberInputer').addClass('bg-Grey-100');
        $('#numberInputMenu')[0].hidden = true;
        setCaretPos($('.selectspan'));
        return;
    }
    ;
    $.getJSON(
        "http://localhost:63342/%E7%94%B5%E5%AD%90%E7%97%85%E5%8E%86/json/num.json",//·����������
        {
            "order": "number", "number": $('#numberInputer').val()
        },
        function (result) {
            unit = result;
            $('#mainNum').attr('page', 0);
            $('#otherNum').attr('page', 0);
            $('#mainNum').html('');
            $('#otherNum').html('');
            for (var i = 0; i <= 4; i++) {
                if (i <= unit.length - 1) {
                    $('#mainNum').append('<li ripple><span class=number>' + unit[i][0].value + '</span><span class="unit">' + unit[i][0].unit + '</span></li>');
                }
                if (i <= unit[0].length - 1) {
                    $('#otherNum').append('<li ripple><span class=number>' + unit[0][i].value + '</span><span class="unit">' + unit[0][i].unit + '</span></li>');
                }
            }
            $('#mainNum').children(':first').addClass('bg-Grey-100');
            $('#otherNum').children(':first').addClass('bg-Grey-100');

        }
    );
}
function inputerChange() {
    if ($('#inputer').val() == '') {
        $('#inputmenu').find('.bg-Grey-100').removeClass('bg-Grey-100');
        $('#inputer').addClass('bg-Grey-100');
        $('#inputmenu')[0].hidden = true;
        setCaretPos($('.selectspan'));
        return;
    }
    ;
    $.getJSON(
        "http://localhost:63342/%E7%94%B5%E5%AD%90%E7%97%85%E5%8E%86/json/pinyin.json",//·����������
        {
            "order": "searchtermbyletter", "string": $('#inputer').val()
        },
        function (result) {
            termAjax = result[0];
            baiduAjax = result[1];
            $('#baidu').attr('page', 0);
            $('#term').attr('page', 0);
            $('#baidu').html('');
            $('#term').html('');
            for (var i = 0; i <= 4; i++) {
                $('#baidu').append('<li ripple style=" float:left;">' + '<span>' + (i + 1) + '.</span>' + '<span class=' + baiduAjax[i].class + '>' + baiduAjax[i].value + '</span></li>');
                $('#term').append('<li ripple style=" float:left;">' + '<span>' + (i + 1) + '.</span>' + '<span class=' + termAjax[i].class + '>' + termAjax[i].value + '</span></li>');
            }
            if ($('#inputmenu').offset().left == 0) {
                $('#inputmenu').offset({top: 20, left: document.body.offsetWidth - $('#inputmenu').outerWidth(true)});
            }
        }
    );
    //for(var i=0;i<=20;i++){
    //    var ab={value:'ab',class:'symptem'};ab.value=i;
    //    termAjax[i]=ab;
    //    baiduAjax[i]=ab;
    //}
}

function setDivPosi(obj, objto) {
    obj.offset({top: objto.offset().top, left: objto.offset().left + objto.outerWidth(true)});
}
function numSelecterChange() {
    $('#dk').children().eq($('#numSelecter').attr('card')).children().eq($('#numSelecter').attr('code')).children().eq($('#numSelecter').attr('span')).text($('#numSelecter').val());
}
function positionSelecterChangeX() {
    $('#dk').children().eq($('#positonMenu').attr('card')).children().eq($('#positonMenu').attr('code')).children().eq($('#positonMenu').attr('span')).next().next().text(Math.abs($('#positonMenuX').attr('max')/2 - $('#positonMenuX').val()));
    var dir1;
    var dir2;
    if ($('#positonMenuX').val() > $('#positonMenuX').attr('max') / 2) {
        dir1 = '��';
    } else if ($('#positonMenuX').val() < $('#positonMenuX').attr('max') / 2) {
        dir1 = '��';
    } else {
        dir1 = '';
    }

    if ($('#positonMenuY').val() > $('#positonMenuY').attr('max') / 2) {
        dir2 = '��';
    } else if ($('#positonMenuY').val() < $('#positonMenuY').attr('max') / 2) {
        dir2 = '��';
    } else {
        dir2 = '';
    }
    $('#dk').children().eq($('#positonMenu').attr('card')).children().eq($('#positonMenu').attr('code')).children().eq($('#positonMenu').attr('span')).next().text(dir1 + dir2);

    $('#dk').children().eq($('#positonMenu').attr('card')).children().eq($('#positonMenu').attr('code')).children().eq($('#positonMenu').attr('span')).next().next().next().text('cm');
}
function positionSelecterChangeY() {
    $('#dk').children().eq($('#positonMenu').attr('card')).children().eq($('#positonMenu').attr('code')).children().eq($('#positonMenu').attr('span')).next().next().text(Math.abs($('#positonMenuX').attr('max')/2 - $('#positonMenuY').val()));
    var dir1;
    var dir2;
    if ($('#positonMenuX').val() > $('#positonMenuX').attr('max') / 2) {
        dir1 = '��';
    } else if ($('#positonMenuX').val() < $('#positonMenuX').attr('max') / 2) {
        dir1 = '��';
    } else {
        dir1 = '';
    }
    if ($('#positonMenuY').val() > $('#positonMenuY').attr('max') / 2) {
        dir2 = '��';
    } else if ($('#positonMenuY').val() < $('#positonMenuY').attr('max') / 2) {
        dir2 = '��';
    } else {
        dir2 = '';
    }
    $('#dk').children().eq($('#positonMenu').attr('card')).children().eq($('#positonMenu').attr('code')).children().eq($('#positonMenu').attr('span')).next().text(dir1 + dir2);

    $('#dk').children().eq($('#positonMenu').attr('card')).children().eq($('#positonMenu').attr('code')).children().eq($('#positonMenu').attr('span')).next().next().next().text('cm');
}


function hideMenu() {
    $('iframe').each(function () {
        Dialog.hide(this);
    })
}
