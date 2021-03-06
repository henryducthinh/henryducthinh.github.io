/**
 * INFO FBS
 * Auther : Ghost Trader-Index
 */

var spData = null;

function doData(json) {
    spData = json.feed.entry;
}

function readData() {
    var data = spData;
    var strData = '';

    for (var r = 0; r < data.length; r++) {
        var cell = data[r]["gs$cell"];
        if (r >= 0 && r < 6) {
            if (cell["col"] == "1") {
                strData += '<tr class="row">';
                strData += '<th class="info-md-1"><b>' + cell["$t"] + '</b></th>';
            } else if (cell["col"] == "2") {
                strData += '<th class="info-md-1"><b>' + cell["$t"] + '</b></th>';
            } else if (cell["col"] == "3") {
                strData += '<th class="info-md-1"><b>' + cell["$t"] + '</b></th>';
            } else if (cell["col"] == "4") {
                strData += '<th class="info-md-1"><b>' + cell["$t"] + '</b></th>';
            } else if (cell["col"] == "5") {
                strData += '<th class="info-md-1"><b>' + cell["$t"] + '</b></th>';
            } else if (cell["col"] == "6") {
                strData += '<th class="info-md-1"><b>' + cell["$t"] + '</b></th>';
                strData += '</tr>';
            }
        } else {
            if (cell["col"] == "1") {
                strData += '<tr class="row">';
                strData += '<td class="info-md-1">' + cell["$t"] + '</td>';
            } else if (cell["col"] == "2") {
                strData += '<td class="info-md-1">' + cell["$t"] + '</td>';
            } else if (cell["col"] == "3") {
                strData += '<td class="info-md-1">' + cell["$t"] + '</td>';
            } else if (cell["col"] == "4") {
                strData += '<td class="info-md-1">' + cell["$t"] + '</td>';
            } else if (cell["col"] == "5") {
                strData += '<td class="info-md-1">' + cell["$t"] + '</td>';
            } else if (cell["col"] == "6") {
                strData += '<td class="info-md-1">' + cell["$t"] + '</td>';
            } else if (cell["col"] == "7") {
                strData += '<td class="info-md-1">' + cell["$t"] + '</td>';
            } else if (cell["col"] == "8") {
                strData += '<td class="info-md-1">' + cell["$t"] + '</td>';
            } else if (cell["col"] == "9") {
                strData += '<td class="info-md-1">' + cell["$t"] + '</td>';
                strData += '</tr>';
            }
        }
    }
    $("#fbs-accounts").after(strData);
}
$(document).ready(function() {
    readData();
});